import React from 'react';
import Image from 'next/image';

export default function Colorado() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-700 to-blue-400 text-white p-8">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-5xl font-bold">Fly Fishing in Colorado</h1>
        <p className="mt-2 text-lg">Experience world-class fly fishing in the Rocky Mountains.</p>
      </div>

      {/* Featured Image */}
      <div className="mt-6 flex justify-center">
        <Image src="/assets/colorado-river.jpg" alt="Colorado River" width={800} height={450} className="rounded-lg shadow-lg" />
      </div>

      {/* Fishing Spots */}
      <div className="mt-8">
        <h2 className="text-3xl font-semibold">Top Fishing Spots</h2>
        <ul className="mt-4 space-y-4">
          <li>
            <strong className="text-xl">South Platte River</strong>
            <p className="text-md">A legendary tailwater with big trout, perfect for all skill levels.</p>
          </li>
          <li>
            <strong className="text-xl">Fryingpan River</strong>
            <p className="text-md">Crystal-clear waters filled with rainbow trout.</p>
          </li>
        </ul>
      </div>

      {/* Video Section */}
      <div className="mt-8">
        <h2 className="text-3xl font-semibold">Watch the Experience</h2>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/DUMMY_VIDEO_ID"
          title="Fly Fishing in Colorado"
          frameBorder="0"
          allowFullScreen
          className="mt-4 rounded-lg shadow-lg"
        ></iframe>
      </div>

      {/* Travel Tips */}
      <div className="mt-8">
        <h2 className="text-3xl font-semibold">Travel & Fishing Tips</h2>
        <p className="mt-2 text-md">
          - The best fishing season in Colorado is from **April to October**.  
          - Get a **Colorado fishing license** online before your trip.  
          - Be prepared for **changing weather** in the mountains.
        </p>
      </div>
    </div>
  );
}
