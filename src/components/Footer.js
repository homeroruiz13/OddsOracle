import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-purple-500">
              Odds Oracle
            </h3>
            <p className="text-sm text-gray-400">
              The ultimate tool for NBA predictions and analysis.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-purple-200">Quick Links</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>
                <Link to="/" className="hover:text-purple-400">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/predictions" className="hover:text-purple-400">
                  NBA Predictions
                </Link>
              </li>
              <li>
                <Link to="/player-stats" className="hover:text-purple-400">
                  Player Stats
                </Link>
              </li>
              <li>
                <Link to="/tools" className="hover:text-purple-400">
                  Tools & Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-purple-200">Community</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>
                <Link to="/community" className="hover:text-purple-400">
                  Community Picks
                </Link>
              </li>
              <li>
                <Link to="/my-picks" className="hover:text-purple-400">
                  My Picks
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-purple-400">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-purple-200">Support</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>
                <Link to="/faq" className="hover:text-purple-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-purple-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>
            © 2025 Odds Oracle. All rights reserved. This site is
            for informational purposes only.
          </p>
          <p className="mt-1">
            Please gamble responsibly. If you or someone you know has a gambling
            problem, call 1-800-GAMBLER.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
