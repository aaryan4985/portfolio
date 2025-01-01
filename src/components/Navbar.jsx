import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="font-bold text-xl bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent"
        >
          Aaryan
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-amber-600 transition-colors">About</Link>
          <Link to="/works" className="hover:text-amber-600 transition-colors">Works</Link>
          <Link to="/contact" className="hover:text-amber-600 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}