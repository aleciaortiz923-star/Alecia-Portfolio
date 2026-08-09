"use client";

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      setIsSending(true);
      emailjs
        .sendForm('service_xz00ptf', 'template_lbbsr8e', form.current, 'asW80CxBjlWa4UQq9')
        .then(
          () => {
            console.log('SUCCESS!');
            setIsSending(false);
            setIsSent(true);
            if (form.current) {
              form.current.reset();
            }
          },
          (error) => {
            console.error('EmailJS Error:', error);
            alert(`An error occurred while sending the message: ${error.text}`);
            setIsSending(false);
          },
        );
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg mx-auto">
        <h2 className="text-4xl font-bold text-center">Contact Me</h2>
        <p className="mt-4 text-lg text-center">I'm currently open to new opportunities. Feel free to reach out!</p>
        <form ref={form} onSubmit={sendEmail} className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="user_name"
              id="name"
              className="mt-1 block w-full px-3 py-2 bg-white text-black dark:bg-zinc-800 dark:text-white border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="user_email"
              id="email"
              className="mt-1 block w-full px-3 py-2 bg-white text-black dark:bg-zinc-800 dark:text-white border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              id="message"
              rows={4}
              className="mt-1 block w-full px-3 py-2 bg-white text-black dark:bg-zinc-800 dark:text-white border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-bold disabled:bg-gray-400"
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Email Me'}
            </button>
            {isSent && <p className="mt-4 text-green-500">Message sent successfully!</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;