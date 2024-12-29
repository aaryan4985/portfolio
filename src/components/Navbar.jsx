import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">Aaryan</Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <Link to="/about" className="hover:text-gray-600">About</Link>
          <Link to="/works" className="hover:text-gray-600">Works</Link>
          <Link to="/contact" className="hover:text-gray-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}