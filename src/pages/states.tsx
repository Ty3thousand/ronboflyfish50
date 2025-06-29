// pages/states.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import USMap from '../components/USMAP'; // Adjust the import path as necessary

const visitedStates = new Set(['New Jersey', 'Colorado']); // Example visited states

const allStates = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 
  'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 
  'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

export default function StatesPage() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const progress = (visitedStates.size / allStates.length) * 100;

  return (
    <div className="container my-5 text-center">
      <h1 className="fw-bold">Explore Fly Fishing in Visited States</h1>
      <p className="lead">Click on a state to view its fly fishing spots and videos.</p>

      {/* Bootstrap Progress Bar */}
      <div className="my-4">
        <h5>Progress: {Math.round(progress)}%</h5>
        <div className="progress" style={{ height: '25px' }}>
          <div 
            className="progress-bar bg-success progress-bar-striped progress-bar-animated"
            role="progressbar"
            style={{ width: `${progress}%` }}
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            {Math.round(progress)}%
          </div>
        </div>
      </div>

      <USMap visitedStates={visitedStates} />
      
      {/* Searchable Visited State List */}
      <h2 className="mt-4">Find a Visited State</h2>
      <input
        type="text"
        className="form-control w-50 mx-auto my-3"
        placeholder="Search for a state..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Visited States List */}
      <div className="row">
        {allStates
          .filter((state) => visitedStates.has(state) && state.toLowerCase().includes(search.toLowerCase()))
          .map((state) => (
            <div key={state} className="col-6 col-md-3 my-2">
              <Link href={`/state/${state.toLowerCase().replace(/\s+/g, '-')}`} passHref>
                <button className="btn btn-success w-100">{state}</button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}