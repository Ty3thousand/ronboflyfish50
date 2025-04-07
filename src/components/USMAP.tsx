import React, { useState, useRef } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { useRouter } from 'next/router';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const USMap = ({ visitedStates }) => {
  const router = useRouter();
  const mapRef = useRef(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; name: string } | null>(null);

  const handleStateClick = (stateName) => {
    if (visitedStates.has(stateName)) {
      router.push(`/state/${stateName.toLowerCase().replace(/\s+/g, '-')}`);
    }
  };

  return (
    <div ref={mapRef} style={{ position: 'relative' }}>
      {tooltip && (
        <div
          style={{
            position: 'absolute',
            top: tooltip.y,
            left: tooltip.x,
            background: 'white',
            padding: '5px',
            borderRadius: '5px',
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
            pointerEvents: 'none',
            fontSize: '12px',
            transform: 'translate(-50%, -100%)', // Center above the cursor
          }}
        >
          {tooltip.name}
        </div>
      )}
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
                  onMouseEnter={(event) => {
                    if (mapRef.current) {
                      const rect = mapRef.current.getBoundingClientRect();
                      setTooltip({
                        name: stateName,
                        x: event.clientX - rect.left,
                        y: event.clientY - rect.top,
                      });
                    }
                  }}
                  onMouseMove={(event) => {
                    if (mapRef.current) {
                      const rect = mapRef.current.getBoundingClientRect();
                      setTooltip({
                        name: stateName,
                        x: event.clientX - rect.left,
                        y: event.clientY - rect.top,
                      });
                    }
                  }}
                  onMouseLeave={() => setTooltip(null)}
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
    </div>
  );
};

export default USMap;
