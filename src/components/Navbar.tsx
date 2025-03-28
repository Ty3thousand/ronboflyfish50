import Link from 'next/link';

const NavbarComponent = ({ initialVisitedStates = ['Colorado'] }) => {
  return (
    <nav className="bg-dark text-light py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-semibold text-white">Fly Fishing 50 States</a>
        </Link>

        <div className="lg:hidden">
          <button className="text-white">☰</button>
        </div>

        <div className="hidden lg:flex space-x-6">
          <Link href="/">
            <a className="text-white hover:text-gray-400">Home</a>
          </Link>
          <Link href="/states">
            <a className="text-white hover:text-gray-400">Explore All States</a>
          </Link>
          <Link href="/about">
            <a className="text-white hover:text-gray-400">About</a>
          </Link>
          <Link href="/blog">
            <a className="text-white hover:text-gray-400">Blog</a>
          </Link>
          <Link href="/contact">
            <a className="text-white hover:text-gray-400">Contact</a>
          </Link>

          <div className="relative">
            <button className="text-white hover:text-gray-400">Visited States</button>
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
              {initialVisitedStates.length > 0 ? (
                initialVisitedStates.map((state) => (
                  <Link
                    key={state}
                    href={`/state/${state.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <a className="block px-4 py-2 text-black hover:bg-gray-200">{state}</a>
                  </Link>
                ))
              ) : (
                <div className="block px-4 py-2 text-gray-500">No states visited yet</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
