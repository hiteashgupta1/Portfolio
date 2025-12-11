import React from 'react';

const Certifications = () => {
  const certs = [
    'Introduction to Internet of Things - NPTEL IIT Kharagpur',
    'Python for Data Science - NPTEL IIT Madras',
    'Enterprise Design Thinking Practitioner - IBM',
    'Build Reports And Dashboards in Power BI - Vodafone Idea Foundation',
    'Postman API Fundamentals Student Expert - Postman',
    'Software Engineering Job Simulation - J.P. Morgan',
    'Java and C++ Course - Udemy', 
    'Getting Started With Enterprise Data Science - IBM', 
    'Html, Css and JavaScript for Web Developers - Coursera', 
    'Geoprocessing using Python - IIRS, ISRO, Dehradun', 
    'Cloud Computing And Cybersecurity - Finnlogic IT Services', 
    'Python Libraries For Data Science - Simplilearn', 
    'Essentials of Microsoft Excel - Microsoft', 
    'Certified in Business English - LearnVern', 
    'Python For Machine Learning - Great Learning',
    // Add more
  ];

  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <div style={{ display: 'flex', overflowX: 'scroll', gap: '20px' }}>
        {certs.map((cert, index) => (
          <div key={index} style={{ minWidth: '300px', padding: '20px', border: '1px solid #ccc' }}>
            <p>{cert}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;