import React from 'react';
import Link from 'next/link';

interface NavbarProps {
  initialVisitedStates?: string[];
}

const NavbarComponent: React.FC<NavbarProps> = ({ initialVisitedStates = ['Colorado', 'New Jersey'] }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark grayBackground">
      <div className="container-fluid">
        <Link href="/" legacyBehavior>
          <a className="navbar-brand">Fly Fishing 50 States</a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-4"> {/* Add 'me-4' here to add margin to the right */}
            <li className="nav-item">
              <Link href="/" legacyBehavior>
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/states" legacyBehavior>
                <a className="nav-link">Explore All States</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" legacyBehavior>
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" legacyBehavior>
                <a className="nav-link">Blog</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" legacyBehavior>
                <a className="nav-link">Contact</a>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Visited States
              </button>
              <ul className="dropdown-menu">
                {initialVisitedStates.length > 0 ? (
                  initialVisitedStates.map((state) => (
                    <li key={state}>
                      <Link href={`/state/${state.toLowerCase().replace(/\s+/g, '-')}`} legacyBehavior>
                        <a className="dropdown-item">{state}</a>
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>
                    <span className="dropdown-item text-muted">No states visited yet</span>
                  </li>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
