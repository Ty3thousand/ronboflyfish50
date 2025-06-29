import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Home = () => {
  const router = useRouter();

  const handleExploreClick = () => {
    router.push('/states'); // Update this path if needed
  };

  return (
    <div>
      {/* Hero Section (Video background) */}
      <section className="hero-section text-white py-5">
        <div className="container text-center">
          <h1 style={{ fontSize: '3rem', color: 'black' }}>Explore the Beauty of Fly Fishing in 50 States</h1>
          <p className="lead" style={{ fontSize: '1.5rem', color: 'black' }}>
            Below we offer you the opportunity to experience the journey and mission of explorring and experiencing the most scenic fly fishing spots across the USA.
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
      <section className="about-section py-5">
        <div className="container text-center">
          <h2>Our Mission</h2>
          <p className="lead">
            Ron Martinez has decided that for his 60th birthday he would dedicate himself to a goal! This goal was to travel to all of the states in the US.
          </p>
          <p>
            This mission in neccesity is to travel to the most sceneic and beutiful fishing spots in each US state and catch a fish in each one. We are excited for you to follow us on this journey.
          </p>
        </div>
      </section>

      {/* Featured States Section */}
      <section className="featured-states py-5">
        <div className="container">
          <h3 className="text-center mb-4">While not biased enjoy the most amazing of our adventures so far!</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="state-card">
                <img src="/img/NewJersey1.png" alt="State 1" className="img-fluid" />
                <Link href="/States/new-jersey" legacyBehavior><a className="navbar-brand indexlinks">New Jersey</a></Link>
                <p>This state hold a place in our journey as the first state that Ron visited. Here he caught a large mouth bass as the first of many.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="state-card">
                <img src="/img/RonboTrialPicture.jpeg" alt="State 2" className="img-fluid" />
                <Link href="/States/California" legacyBehavior><a className="navbar-brand indexlinks">California</a></Link>
                <p>This is a blank one until we have a third but just to give an idea when I show it to you.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="state-card">
                <img src="/img/RonboTrialPicture.jpeg" alt="State 3" className="img-fluid" />
                <Link href="/States/Colorado" legacyBehavior><a className="navbar-brand indexlinks">Colorado</a></Link>
                <p>Colorado Ron's hometown will always have a place in our heart and the trout was one of the most beutifiul he has caught.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section text-center py-5">
        <p className="lead">Join us as we document fly fishing adventures across the entire country.</p>
        <button className="btn btn-lg mt-3 indexButtonColor" onClick={handleExploreClick}>
          Explore the 50 States of Fish
        </button>
      </section>
    </div>
  );
};

export default Home;
