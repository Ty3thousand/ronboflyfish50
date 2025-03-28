import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';

const visitedStates = new Set([
  'Colorado'
]);

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
  const [progress, setProgress] = useState((visitedStates.size / allStates.length) * 100);

  // Function to navigate when a visited state is clicked
  const handleStateClick = (stateName) => {
    if (visitedStates.has(stateName)) {
      router.push(`/state/${stateName.toLowerCase().replace(/\s+/g, '-')}`);
    }
  };

  const updateSearch = (value: string): void => {
    setSearch(value);
  };

  return (
    <>
      <NavbarComponent />
      <div className="container mx-auto my-12 text-center">
        <h1 className="font-bold text-3xl mb-4">Explore Fly Fishing in Visited States</h1>
        <p className="text-lg mb-4">Click on a state to view its fly fishing spots and videos.</p>

        {/* Progress Bar */}
        <div className="relative pt-1 mb-6">
          <div className="flex mb-2 justify-between">
            <span className="text-sm font-semibold inline-block py-1 uppercase">{`${Math.round(progress)}%`}</span>
          </div>
          <div className="flex mb-2 justify-between">
            <div className="w-full bg-gray-300 rounded-full">
              <div className="bg-green-500 text-xs font-medium leading-none py-1 text-center text-white rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>

        {/* Searchable Visited State List */}
        <h2 className="text-2xl font-semibold mt-6">Find a Visited State</h2>
        <input
          type="text"
          placeholder="Search for a state..."
          className="border p-3 rounded-md w-1/2 mx-auto my-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {Array.from(visitedStates)
            .filter((state) => state.toLowerCase().includes(search.toLowerCase()))
            .map((state) => (
              <div key={state} className="mb-2">
                <Link href={`/state/${state.toLowerCase().replace(/\s+/g, '-')}`} passHref>
                  <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg w-full">
                    {state}
                  </button>
                </Link>
              </div>
            ))}
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
