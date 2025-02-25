import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              NBA PrizePicks Predictor
            </h3>
            <p className="text-sm text-gray-400">
              The ultimate tool for NBA Prize Picks predictions and analysis.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/predictions" className="hover:text-white">
                  NBA Predictions
                </Link>
              </li>
              <li>
                <Link to="/player-stats" className="hover:text-white">
                  Player Stats
                </Link>
              </li>
              <li>
                <Link to="/tools" className="hover:text-white">
                  Tools & Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Community</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>
                <Link to="/community" className="hover:text-white">
                  Community Picks
                </Link>
              </li>
              <li>
                <Link to="/my-picks" className="hover:text-white">
                  My Picks
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>
                <Link to="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>
            © 2025 NBA PrizePicks Predictor. All rights reserved. This site is
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
