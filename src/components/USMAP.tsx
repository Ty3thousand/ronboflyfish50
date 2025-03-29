// components/USMap.js
import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { useRouter } from 'next/router';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const USMap = ({ visitedStates }) => {
  const router = useRouter();

  const handleStateClick = (stateName) => {
    if (visitedStates.has(stateName)) {
      router.push(`/state/${stateName.toLowerCase().replace(/\s+/g, '-')}`);
    }
  };

  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const stateName = geo.properties.name;
            const isVisited = visitedStates.has(stateName);
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => handleStateClick(stateName)}
                style={{
                  default: {
                    fill: isVisited ? '#2E8B57' : '#D6D6DA',
                    outline: 'none',
                    stroke: '#FFFFFF', // White border lines
                    strokeWidth: 0.5,
                  },
                  hover: {
                    fill: '#F53',
                    outline: 'none',
                  },
                  pressed: {
                    fill: '#E42',
                    outline: 'none',
                  },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default USMap;