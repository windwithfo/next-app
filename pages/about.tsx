import * as React from 'react';
import Head       from 'next/head';

export default () =>
  <div className="about">
    <Head>
      <title>about</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    Welcome to about!

    <style jsx>{`
      .about {
        color: #ccf;
      }
    `}</style>
  </div>