// components/USMap.tsx
import React, { useState } from 'react';
import Link from 'next/link';

const visitedStates = new Set(['Colorado']); // Initially visited states

// The list of all states, to be used for rendering
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

// State-to-link mapping
const stateLinks = {
  Alabama: '/state/alabama',
  Alaska: '/state/alaska',
  Arizona: '/state/arizona',
  Arkansas: '/state/arkansas',
  California: '/state/california',
  Colorado: '/state/colorado',
  Connecticut: '/state/connecticut',
  Delaware: '/state/delaware',
  Florida: '/state/florida',
  Georgia: '/state/georgia',
  Hawaii: '/state/hawaii',
  Idaho: '/state/idaho',
  Illinois: '/state/illinois',
  Indiana: '/state/indiana',
  Iowa: '/state/iowa',
  Kansas: '/state/kansas',
  Kentucky: '/state/kentucky',
  Louisiana: '/state/louisiana',
  Maine: '/state/maine',
  Maryland: '/state/maryland',
  Massachusetts: '/state/massachusetts',
  Michigan: '/state/michigan',
  Minnesota: '/state/minnesota',
  Mississippi: '/state/mississippi',
  Missouri: '/state/missouri',
  Montana: '/state/montana',
  Nebraska: '/state/nebraska',
  Nevada: '/state/nevada',
  'New Hampshire': '/state/new-hampshire',
  'New Jersey': '/state/new-jersey',
  'New Mexico': '/state/new-mexico',
  'New York': '/state/new-york',
  'North Carolina': '/state/north-carolina',
  'North Dakota': '/state/north-dakota',
  Ohio: '/state/ohio',
  Oklahoma: '/state/oklahoma',
  Oregon: '/state/oregon',
  Pennsylvania: '/state/pennsylvania',
  'Rhode Island': '/state/rhode-island',
  'South Carolina': '/state/south-carolina',
  'South Dakota': '/state/south-dakota',
  Tennessee: '/state/tennessee',
  Texas: '/state/texas',
  Utah: '/state/utah',
  Vermont: '/state/vermont',
  Virginia: '/state/virginia',
  Washington: '/state/washington',
  'West Virginia': '/state/west-virginia',
  Wisconsin: '/state/wisconsin',
  Wyoming: '/state/wyoming'
};

// Simplified state coordinates for demonstration purposes
const stateCoordinates = {
  Alabama: 'M100,150 L120,180 L140,170 L150,150',
  Alaska: 'M10,250 L50,270 L70,260 L100,240',
  Arizona: 'M200,100 L220,120 L240,110 L260,130',
  Arkansas: 'M150,200 L170,220 L190,210 L210,230',
  California: 'M300,80 L320,100 L340,90 L360,110',
  Colorado: 'M180,130 L200,150 L220,140 L240,160',
  Connecticut: 'M250,100 L270,120 L290,110 L310,130',
  Delaware: 'M150,100 L170,120 L190,110 L210,130',
  Florida: 'M300,300 L320,320 L340,310 L360,330',
  Georgia: 'M120,180 L140,190 L160,180 L170,160',
  Hawaii: 'M400,500 L420,510 L440,500 L460,490',
  Idaho: 'M180,200 L200,220 L220,210 L240,230',
  Illinois: 'M220,150 L240,170 L260,160 L280,180',
  Indiana: 'M230,160 L250,180 L270,170 L290,190',
  Iowa: 'M240,170 L260,190 L280,180 L300,200',
  Kansas: 'M250,180 L270,200 L290,190 L310,210',
  Kentucky: 'M260,190 L280,210 L300,200 L320,220',
  Louisiana: 'M270,220 L290,240 L310,230 L330,250',
  Maine: 'M50,100 L70,120 L90,110 L110,130',
  Maryland: 'M150,130 L170,150 L190,140 L210,160',
  Massachusetts: 'M160,110 L180,130 L200,120 L220,140',
  Michigan: 'M190,130 L210,150 L230,140 L250,160',
  Minnesota: 'M200,150 L220,170 L240,160 L260,180',
  Mississippi: 'M230,200 L250,220 L270,210 L290,230',
  Missouri: 'M240,210 L260,230 L280,220 L300,240',
  Montana: 'M150,130 L170,150 L190,140 L210,160',
  Nebraska: 'M260,150 L280,170 L300,160 L320,180',
  Nevada: 'M280,120 L300,140 L320,130 L340,150',
  'New Hampshire': 'M60,100 L80,120 L100,110 L120,130',
  'New Jersey': 'M160,140 L180,160 L200,150 L220,170',
  'New Mexico': 'M240,100 L260,120 L280,110 L300,130',
  'New York': 'M170,140 L190,160 L210,150 L230,170',
  'North Carolina': 'M200,190 L220,210 L240,200 L260,220',
  'North Dakota': 'M250,150 L270,170 L290,160 L310,180',
  Ohio: 'M220,170 L240,190 L260,180 L280,200',
  Oklahoma: 'M240,210 L260,230 L280,220 L300,240',
  Oregon: 'M290,130 L310,150 L330,140 L350,160',
  Pennsylvania: 'M200,180 L220,200 L240,190 L260,210',
  'Rhode Island': 'M180,100 L200,120 L220,110 L240,130',
  'South Carolina': 'M200,220 L220,240 L240,230 L260,250',
  'South Dakota': 'M220,180 L240,200 L260,190 L280,210',
  Tennessee: 'M230,190 L250,210 L270,200 L290,220',
  Texas: 'M300,200 L320,220 L340,210 L360,230',
  Utah: 'M270,120 L290,140 L310,130 L330,150',
  Vermont: 'M50,120 L70,140 L90,130 L110,150',
  Virginia: 'M220,200 L240,220 L260,210 L280,230',
  Washington: 'M330,100 L350,120 L370,110 L390,130',
  'West Virginia': 'M210,180 L230,200 L250,190 L270,210',
  Wisconsin: 'M240,180 L260,200 L280,190 L300,210',
  Wyoming: 'M300,120 L320,140 L340,130 L360,150'
};

const USMap = () => {
  const [visited, setVisited] = useState(new Set(visitedStates));

  const handleStateClick = (state) => {
    // Mark state as visited when clicked
    setVisited(new Set(visited.add(state))); 
  };

  return (
    <div className="us-map-container text-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 600" className="img-fluid">
        {allStates.map((state, index) => {
          const isVisited = visited.has(state);
          const fillColor = isVisited ? '#28a745' : '#f4f4f4'; // Green for visited, light gray for others

          return (
            <Link key={state} href={stateLinks[state]} passHref legacyBehavior>
              <a onClick={() => handleStateClick(state)}>
                <path
                  d={`M${stateCoordinates[state]}`}  // Use real coordinates for each state
                  fill={fillColor}
                  stroke="#000"
                  strokeWidth="1"
                  style={{ cursor: 'pointer' }}
                />
              </a>
            </Link>
          );
        })}
      </svg>
    </div>
  );
};

export default USMap;
