import React from 'react';

const Skills = () => {
  const skills = {
    Languages: ['C', 'C++', 'Python', 'Java'],
    'Web Development': ['HTML', 'CSS', 'JavaScript', 'React'],
    'Data & Database': ['MySQL', 'Microsoft Power BI', 'Data Analytics'],
    'Tools & Cloud': ['Git/GitHub', 'Google Cloud'],
  };

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        {Object.entries(skills).map(([category, list]) => (
          <div key={category}>
            <h3>{category}</h3>
            <ul>
              {list.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;