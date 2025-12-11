import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!'); // Replace with actual submission logic
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <textarea placeholder="Message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}></textarea>
        <button type="submit">Send</button>
      </form>
      <p>Email: hiteashgupta1@gmail.com</p>
      <p>Location: Kathua, Jammu And Kashmir</p>
    </section>
  );
};

export default Contact;