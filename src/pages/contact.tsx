import React from 'react';

const Contact = () => {
  return (
    <div>

      {/* Contact Section */}
      <section className="contact-section py-5">
        <div className="container text-center">
          <h1 style={{ fontSize: '3rem', color: 'black' }}>Contact Ron Martinez</h1>
          <p className="lead" style={{ fontSize: '1.5rem', color: 'black' }}>
            Feel free to reach out for any inquiries or opportunities.
          </p>
          <div className="mt-4">
            <p style={{ fontSize: '1.25rem', color: 'black' }}><strong>Name:</strong> Ron Martinez</p>
            <p style={{ fontSize: '1.25rem', color: 'black' }}><strong>Email:</strong> <a href="mailto:rmartinez@livsothebysrealty.com" style={{ fontSize: '1rem', color: 'white' }}>rmartinez@livsothebysrealty.com</a></p>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-media-section py-5 text-center">
        <h2>Follow Me on Social Media</h2>
        <div className="mt-4">
          <a 
            href="https://www.youtube.com/@flyfishing50states" 
            className="btn btn-danger btn-lg mx-2" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          <a 
            href="https://www.instagram.com/" 
            className="btn btn-primary btn-lg mx-2" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </section>

    </div>
  );
};

export default Contact;

