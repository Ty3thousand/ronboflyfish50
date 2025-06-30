import React from 'react';

const ShowcaseSection = () => {
  return (
    <section className="showcase-section py-5">
      <div className="container">
        <div className="row align-items-center text-md-start">
          {/* Left: Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="/img/NewJersey1.png"
              alt="Fishing in New Jersey"
              className="img-fluid rounded shadow-sm"
            />
          </div>

          {/* Right: Text */}
          <div className="col-md-6">
          <h2 className="fw-bold text-dark">Jersey Casts and River Laughs</h2>
          <p className="fs-5">
              Our journey starts in New Jersey, where the trout are sneaky and the stories are bigger than the fish.
              With rods in hand and coffee in our mugs, we hit the streams chasing bites and making memories.
            </p>
            <p>
              Whether it’s the one that got away (again) or the perfect cast at sunrise, New Jersey kicked things off with plenty of reel fun.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
