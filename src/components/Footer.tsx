import React from 'react';
import Link from 'next/link';

const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Follow Us Section */}
          <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
            <div>
              <h5 className="text-lg mb-3">Follow Us</h5>
              <Link
                href="https://www.youtube.com/@FlyFishing50States"
                target="_blank"
                passHref
              >
                <button className="btn btn-danger text-light">
                  Visit our YouTube
                </button>
              </Link>
            </div>
          </div>

          {/* Our Sponsors Section */}
          <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
            <div className="text-center">
              <h5 className="text-lg mb-3">Our Sponsors</h5>
              <div className="d-flex justify-content-center">
                <img
                  src="/img/sponsorphoto1.png"  // Ensure image is in public/img/
                  alt="Sponsor 1"
                  className="mx-2"
                  width="160"
                  height="auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-4">
          <p className="text-sm mb-0">© 2025 Fly Fishing in All 50 States</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
