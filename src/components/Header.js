import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              NBA PrizePicks Predictor
            </Link>
          </div>

          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-blue-300">
              Dashboard
            </Link>
            <Link to="/predictions" className="text-white hover:text-blue-300">
              NBA Predictions
            </Link>
            <Link to="/player-stats" className="text-white hover:text-blue-300">
              Player Stats
            </Link>
            <Link to="/tools" className="text-white hover:text-blue-300">
              Tools
            </Link>
            <Link to="/community" className="text-white hover:text-blue-300">
              Community
            </Link>
            <Link to="/blog" className="text-white hover:text-blue-300">
              Blog
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/my-picks" className="text-white hover:text-blue-300">
              My Picks
            </Link>
            <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">
              Sign In
            </button>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 pb-2">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-white px-2 py-1 rounded hover:bg-blue-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/predictions"
                className="text-white px-2 py-1 rounded hover:bg-blue-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                NBA Predictions
              </Link>
              <Link
                to="/player-stats"
                className="text-white px-2 py-1 rounded hover:bg-blue-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Player Stats
              </Link>
              <Link
                to="/tools"
                className="text-white px-2 py-1 rounded hover:bg-blue-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tools
              </Link>
              <Link
                to="/community"
                className="text-white px-2 py-1 rounded hover:bg-blue-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Community
              </Link>
              <Link
                to="/blog"
                className="text-white px-2 py-1 rounded hover:bg-blue-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/my-picks"
                className="text-white px-2 py-1 rounded hover:bg-blue-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Picks
              </Link>
              <Link
                to="/faq"
                className="text-white px-2 py-1 rounded hover:bg-blue-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
