import * as React from 'react';
import Head       from 'next/head';

interface Error {
  props: any
}

class Error extends React.Component {
  static getInitialProps({ res, err }: any) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <p>
        <Head>
          <title>error</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    )
  }
}

export default Error;
