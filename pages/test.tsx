import React from 'react'
import { inject, observer } from 'mobx-react';
import { Store } from '../store'
import { Button, List } from 'antd'
import Nav from '@/components/Nav'

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

  getData = () => {
    this.store.list.getData()
  }

  render() {
    return (
      <div className="test">
        <Nav></Nav>
        <p>count: {this.store.count}</p>
        <Button onClick={this.add}>count++</Button>
        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={this.store.list.list.slice()}
          renderItem={item => (
            <List.Item>
              name: {item.name},age: {item.age}
            </List.Item>
          )}
        />
        <Button onClick={this.getData}>getData</Button>
        <style jsx>{`
          .test {
            font-size: 16px;

            p {
              color: #2bc;
            }
          }
        `}</style>
      </div>
    )
  }
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hello`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  console.log(data)
  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default Test
