import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="hero">
      <h1>Hi, I'm Hiteash Mahajan.</h1>
      <TypeAnimation
        sequence={[
          'Data Analyst',
          2000,
          'Python Developer',
          2000,
          'Salesforce Developer',
          2000,
        ]}
        wrapper="h2"
        cursor={true}
        repeat={Infinity}
      />
      <p>Computer Science Engineering Student | Specializing in Data Analytics, Machine Learning, and Software Engineering.</p>
      <div>
        <button>View My Projects</button>
        <button>Contact Me</button>
      </div>
      <div>
        <a href="https://github.com/hiteashgupta1">GitHub</a>
        <a href="https://linkedin.com/in/hiteash-mahajan">LinkedIn</a>
      </div>
    </section>
  );
};

export default Hero;