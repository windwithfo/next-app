import { action, observable, computed, runInAction, makeObservable, configure } from 'mobx'
import { enableStaticRendering } from 'mobx-react'
import { useMemo } from 'react'
import List from './list'
// eslint-disable-next-line react-hooks/rules-of-hooks
enableStaticRendering(typeof window === 'undefined')
configure({ enforceActions: 'always' })

let store: any

export class Store {
  constructor() {
    makeObservable(this)
    this.list = new List(this)
  }

  list: List
  timer: any

  @observable lastUpdate = 0
  @observable light = false
  @observable count = 0;

  @action add() {
    this.count++
  }

  @action start = () => {
    this.timer = setInterval(() => {
      runInAction(() => {
        this.lastUpdate = Date.now()
        this.light = true
      })
    }, 1000)
  }

  @computed get timeString() {
    const pad = (n: any) => (n < 10 ? `0${n}` : n)
    const format = (t: any) =>
      `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(
        t.getUTCSeconds()
      )}`
    return format(new Date(this.lastUpdate))
  }

  stop = () => clearInterval(this.timer)

  @action hydrate = (data: any) => {
    if (!data) return

    this.lastUpdate = data.lastUpdate !== null ? data.lastUpdate : Date.now()
    this.light = !!data.light
  }
}

function initializeStore(initialData = null) {
  let _store = store ?? new Store()
  if (typeof window === 'undefined') {
    _store = new Store()
  }

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
  if (initialData) {
    _store.hydrate(initialData)
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState: any) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}