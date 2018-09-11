import React from 'react';
import Nav   from '../components/nav';
import Head  from '../components/head';

const About = () => (
  <div className="about">
    <Head title="about"/>
    <Nav/>
    Welcome to about!

    <style jsx>{`
      .about {
        color: #ccf;
      }
    `}</style>
  </div>
)

export default About;
