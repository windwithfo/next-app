import '../static/style/common.scss';

import React from 'react';
import Link  from 'next/link';
import Nav   from '../components/nav';
import Head  from '../components/head';

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />
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
);

export default Home;
