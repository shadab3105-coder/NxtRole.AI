import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend — just clear the form and show a toast (alert)
    alert('Thanks! Your message has been noted (design only).');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="container mx-auto px-6 py-16">
      <h2 className="text-white text-2xl font-bold text-center">Contact Us</h2>
      <p className="text-center text-gray-400 mt-2">Have questions or want to try NxtRole.AI? Send a message.</p>

      <form onSubmit={handleSubmit} className="mt-8 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-3 rounded-md" required />
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" className="border p-3 rounded-md" required />
        </div>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="border p-3 rounded-md mt-4 w-full" rows="5" required />

        <div className="mt-4 text-center p-2 rounded text-black font-bold hover:bg-green-600 bg-blue-700">
          <button type="submit" className="btn-gradient">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default Contact 