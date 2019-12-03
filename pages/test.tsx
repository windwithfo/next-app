import React from 'react'
import { inject, observer } from 'mobx-react';
import { Store } from '../store'

interface IProps {
  store: Store
}

@inject('store')
@observer
class Test extends React.Component<IProps> {
  store: Store = this.props.store
  add = () => {
    this.store.add()
  }

  render() {
    return (
      <div>
        count: {this.store.count}
        <button onClick={this.add}>count++</button>
      </div>
    )
  }
}

export default Test
