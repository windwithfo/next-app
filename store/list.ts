import { observable } from 'mobx'
import { useStaticRendering } from 'mobx-react'

const isServer = typeof window === 'undefined'
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer)

class ListStore {
  constructor(ctx?: any) {
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
}

export default ListStore
