import React from 'react';

const About = () => {
  return (
    <div>


      {/* Hero Section (Image of the fisherman) */}
      <section className="hero-section bg-white py-5">
        <div className="container text-center">
          <h1 style={{ fontSize: '3rem', color: 'black' }}>My Journey of Fly Fishing in 50 States</h1>
          <p className="lead" style={{ fontSize: '1.5rem', color: 'black' }}>
            A deep dive into my life, from my time at CSU to my real estate career at Sotheby’s.
          </p>
          <div className="mt-4">
            <img src="/img/RonboTrialPicture.jpeg" alt="Fisherman in Action" className="img-fluid" />
          </div>
        </div>
      </section>

      {/* About Section (Story about life, CSU, and Career) */}
      <section className="about-section py-5 bg-white">
        <div className="container text-center">
          <h2>My Journey</h2>
          <p className="lead">
            My passion for fly fishing has been a part of my life for many years. I started in the beautiful rivers of Colorado,
            and it’s been a journey that has taken me to many corners of the United States. My time at Colorado State University
            (CSU) shaped who I am today, providing a solid foundation in life and the discipline that drives me forward.
          </p>
          <p>
            Outside of fly fishing, I’m also deeply involved in the real estate industry. Working with Sotheby’s International Realty
            has given me the opportunity to meet people from all walks of life and build meaningful connections. Check out my real
            estate site at <a href="https://www.denverderby.com" target="_blank" rel="noopener noreferrer">www.denverderby.com</a>.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section bg-white text-center py-5">
        <h2>Join Me on This Journey</h2>
        <p className="lead">Follow my fly fishing journey across all 50 states as I combine my passions for fishing, real estate, and adventure.</p>
        <button className="btn btn-primary btn-lg mt-3">Follow the Adventure</button>
      </section>

    </div>
  );
};

export default About;
