import { action, observable } from 'mobx'
import { useStaticRendering } from 'mobx-react'

import List from './list'

const isServer = typeof window === 'undefined'
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer)

export class Store {
  constructor() {
    this.list = new List(this)
  }

  list: List
  timer: any

  @observable lastUpdate = 0
  @observable light = false
  @observable count = 0;

  add() {
    this.count++
  }

  hydrate(serializedStore: any) {
    this.lastUpdate =
      serializedStore.lastUpdate != null
        ? serializedStore.lastUpdate
        : Date.now()
    this.light = !!serializedStore.light
  }

  @action start = () => {
    this.timer = setInterval(() => {
      this.lastUpdate = Date.now()
      this.light = true
    }, 1000)
  }

  stop = () => clearInterval(this.timer)
}

export async function fetchInitialStoreState() {
  // You can do anything to fetch initial store state
  return {}
}
