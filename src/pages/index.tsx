import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Section (Video background) */}
      <section className="hero-section bg-white text-white py-5">
        <div className="container text-center">
          <h1 style={{ fontSize: '3rem', color: 'black' }}>Explore the Beauty of Fly Fishing in 50 States</h1>
          <p className="lead" style={{ fontSize: '1.5rem', color: 'black' }}>
            Join our journey as we explore the most scenic fly fishing spots across the USA.
          </p>
          <div className="mt-4">
            <div className="ratio ratio-16x9">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/tIxQRzJSOgc"
                 title="Fly Fishing 50 States"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section py-5 bg-white">
        <div className="container text-center">
          <h2>Our Mission</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in orci magna. Integer maximus nulla vitae tincidunt gravida.
          </p>
          <p>
            Nulla consectetur justo quis dui sodales, ac bibendum nisi venenatis. Integer maximus nulla vitae tincidunt gravida.
          </p>
        </div>
      </section>

      {/* Featured States Section */}
      <section className="featured-states py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-4">Featured States</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="state-card">
                <img src="https://via.placeholder.com/300" alt="State 1" className="img-fluid" />
                <h5 className="mt-2">Colorado</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="state-card">
                <img src="https://via.placeholder.com/300" alt="State 2" className="img-fluid" />
                <h5 className="mt-2">California</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="state-card">
                <img src="https://via.placeholder.com/300" alt="State 3" className="img-fluid" />
                <h5 className="mt-2">Montana</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section bg-white text-center py-5">
        <h2>Ready to Explore All 50 States?</h2>
        <p className="lead">Join us as we document fly fishing adventures across the entire country.</p>
        <button className="btn btn-primary btn-lg mt-3">Explore All 50 States</button>
      </section>

    </div>
  );
};

export default Home;
