import { observable, makeObservable, configure, runInAction } from 'mobx'
import { enableStaticRendering } from 'mobx-react'

// eslint-disable-next-line react-hooks/rules-of-hooks
enableStaticRendering(typeof window === 'undefined')
configure({ enforceActions: 'always' })

class ListStore {
  constructor(ctx?: any) {
    makeObservable(this)
    if (ctx.list && ctx.list.length > 0) {
      this.list = ctx.list
    }
  }

  @observable list = [{
    name: 'name1',
    age: 11
  }, {
    name: 'name2',
    age: 12
  }]

  async getData() {
    const obj = await new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        resolve({
          name: 'dks',
          age: 11
        })
      }, 1000)
    })
    
    runInAction(() => {
      // this.list = [obj, ...this.list]
      this.list.push(obj)
    })
  }
}

export default ListStore
