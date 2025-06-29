import React from 'react';

const ShowcaseSection = () => {
  return (
    <section className="showcase-section py-5">
      <div className="container text-center">
        {/* Title */}
        <h1 style={{ fontSize: '3rem', color: 'black' }}>The First state of our Journey New Jersey</h1>
        <br></br>

        {/* YouTube Video */}
        <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }} className="mb-5">
          <iframe
            src="https://www.youtube.com/embed/tIxQRzJSOgc"
            title="Fly Fishing 50 States"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          ></iframe>
        </div>




        {/* Image Left, Text Right */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src="/img/NewJersey1.png" alt="River 1" className="img-fluid rounded" />
          </div>
          <div className="col-md-6 text-start">
            <h4>Discover Hidden Gems</h4>
            <p>
              From quiet mountain streams to vast lakes, our journey takes us to some of the most breathtaking and secluded fly fishing spots in every state.
            </p>
          </div>
        </div>

        {/* Image Right, Text Left */}
        <div className="row align-items-center">
          <div className="col-md-6 text-start order-md-2">
            <h4>Experience the Adventure</h4>
            <p>
              More than fishing, it's about the adventure, the people, and the stories. Follow along as we cast lines in unforgettable places across the nation.
            </p>
          </div>
          <div className="col-md-6 order-md-1">
            <img src="/img/NewJersey1.png" alt="River 2" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
