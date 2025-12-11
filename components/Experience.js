import React from 'react';

const Experience = () => {
  const experiences = [
    { title: 'Data Analyst | Excelerate (07/2025 - 08/2025)', desc: 'Identified audience segments and recommended strategies for campaign optimization.' },
    { title: 'Data Analytics Intern | Connecting Dreams Foundation (06/2024 - 07/2024)', desc: 'Created dynamic dashboards in Power BI and performed data cleaning for real-time monitoring.' },
    // Add more as per your list
  ];

  return (
    <section id="experience">
      <h2>Experience</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {experiences.map((exp, index) => (
          <div key={index}>
            <h3>{exp.title}</h3>
            <p>{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;