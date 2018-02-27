import * as React from 'react';
import Head       from 'next/head';
import Link       from 'next/link';
import '../static/style/common.scss';

export default () => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="title">
      Welcome to my next.js!
      <p className="tips">p</p>
    </div>
    Click{' '}
    <Link href="/about">
      <a>here</a>
    </Link>{' '}

    <style jsx>{`
      .title {
        color: #fcc;

        .tips {
          color: #000;
        }
      }
    `}</style>
  </div>
)