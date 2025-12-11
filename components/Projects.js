import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [modal, setModal] = useState(null);

  const projects = [
    { title: 'Advanced Campaign Performance Analysis', tag: 'Data Analytics', desc: 'Analyzed 11 digital marketing campaigns...', img: 'placeholder.jpg' },
    // Add more projects
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.tag.includes(filter));

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Data Analytics')}>Data Analytics</button>
        <button onClick={() => setFilter('Web Development')}>Web Development</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {filteredProjects.map((proj, index) => (
          <div key={index} onClick={() => setModal(proj)}>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>
      {modal && (
        <div className="modal" onClick={() => setModal(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close" onClick={() => setModal(null)}>&times;</span>
            <h3>{modal.title}</h3>
            <img src={modal.img} alt={modal.title} style={{ width: '100%' }} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;