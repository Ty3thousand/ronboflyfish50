import { useState } from 'react';
import { useRouter } from 'next/router';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import Link from 'next/link';
import { Container, Form, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';
import { geoCentroid } from 'd3-geo';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

// List of visited states (modify this as needed)
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
      <Container className="my-5 text-center">
        <h1 className="fw-bold">Explore Fly Fishing in Visited States</h1>
        <p>Click on a state to view its fly fishing spots and videos.</p>

        {/* Progress Bar */}
        <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="my-4" variant="success" />

        {/* Interactive Map */}
        <div className="d-flex justify-content-center">
          <ComposableMap projection="geoAlbersUsa" style={{ width: '100%', maxWidth: '700px' }}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const stateName = geo.properties.name;
                  const isVisited = visitedStates.has(stateName);
                  const centroid = geoCentroid(geo);
                  return (
                    <g key={geo.rsmKey}>
                      <Geography
                        geography={geo}
                        onClick={() => isVisited && handleStateClick(stateName)}
                        style={{
                          default: { fill: isVisited ? '#28a745' : '#d3d3d3', outline: 'none', cursor: isVisited ? 'pointer' : 'default', stroke: '#000', strokeWidth: 0.5 },
                          hover: { fill: isVisited ? '#FFC107' : '#d3d3d3', outline: 'none', stroke: '#000', strokeWidth: 0.5 },
                          pressed: { fill: isVisited ? '#FFD700' : '#d3d3d3', outline: 'none', stroke: '#000', strokeWidth: 0.5 },
                        }}
                      />
                      {isVisited && (
                        <text
                          x={centroid[0]}
                          y={centroid[1]}
                          textAnchor="middle"
                          style={{ fontFamily: 'Arial', fill: '#000', fontSize: 10 }}
                        >
                          {stateName}
                        </text>
                      )}
                    </g>
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </div>

        {/* Searchable Visited State List */}
        <h2 className="mt-4">Find a Visited State</h2>
        <Form.Control
          type="text"
          placeholder="Search for a state..."
          className="w-50 mx-auto my-3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Row className="justify-content-center">
          {Array.from(visitedStates)
            .filter((state) => state.toLowerCase().includes(search.toLowerCase()))
            .map((state) => (
              <Col key={state} xs={6} md={3} className="mb-2">
                <Link href={`/state/${state.toLowerCase().replace(/\s+/g, '-')}`} passHref>
                  <Button variant="outline-success" className="w-100">
                    {state}
                  </Button>
                </Link>
              </Col>
            ))}
        </Row>
      </Container>
      <FooterComponent />
    </>
  );
}