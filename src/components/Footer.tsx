import Link from 'next/link';

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {/* Follow Us Section */}
          <div>
            <h5 className="text-lg mb-3">Follow Us</h5>
            <Link
              href="https://www.youtube.com/@FlyFishing50States"
              target="_blank"
              className="text-light hover:text-gray-400"
            >
              YouTube
            </Link>
          </div>

          {/* Our Sponsors Section */}
          <div>
            <h5 className="text-lg mb-3">Our Sponsors</h5>
            <div className="flex justify-center">
              <img
                src="/assets/sponsor1.png"
                alt="Sponsor 1"
                className="mx-2"
                width="80"
                height="auto"
              />
              <img
                src="/assets/sponsor2.png"
                alt="Sponsor 2"
                className="mx-2"
                width="80"
                height="auto"
              />
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-6">
          <p className="text-sm mb-0">© 2025 Fly Fishing in All 50 States</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
