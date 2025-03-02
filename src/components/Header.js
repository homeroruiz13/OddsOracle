import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import SignInForm from "./SignInForm"; // Import the SignInForm component

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const { isLoggedIn, login, logout, user } = useContext(AuthContext);

  const openSignInModal = () => {
    setIsSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
  };

  const handleSignInSuccess = (formData) => {
    // Call the login function from AuthContext
    login(formData.email, formData.password);
    
    // Close the modal
    closeSignInModal();
  };

  return (
    <header className="bg-black text-white border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-purple-500">
              NBA PrizePicks Predictor
            </Link>
          </div>

          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-300 hover:text-purple-400 font-medium">
              Dashboard
            </Link>
            <Link to="/predictions" className="text-gray-300 hover:text-purple-400 font-medium">
              NBA Predictions
            </Link>
            <Link to="/player-stats" className="text-gray-300 hover:text-purple-400 font-medium">
              Player Stats
            </Link>
            <Link to="/tools" className="text-gray-300 hover:text-purple-400 font-medium">
              Tools
            </Link>
            <Link to="/community" className="text-gray-300 hover:text-purple-400 font-medium">
              Community
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-purple-400 font-medium">
              Blog
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Link to="/my-picks" className="text-gray-300 hover:text-purple-400 font-medium">
                  My Picks
                </Link>
                <span className="text-gray-400 text-sm hidden md:inline">
                  Hi, {user?.user_metadata?.full_name || user?.email || 'User'}
                </span>
                <button 
                  onClick={logout}
                  className="bg-purple-600 hover:bg-purple-700 transition-colors text-white px-4 py-2 rounded-md font-medium"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link to="/my-picks" className="text-gray-300 hover:text-purple-400 font-medium">
                  My Picks
                </Link>
                <button 
                  onClick={openSignInModal} // Changed to open modal instead of direct login
                  className="bg-purple-600 hover:bg-purple-700 transition-colors text-white px-4 py-2 rounded-md font-medium"
                >
                  Sign In
                </button>
              </>
            )}

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
            <div className="flex flex-col space-y-2 bg-gray-900 rounded-md p-2 border border-gray-800">
              <Link
                to="/"
                className="text-gray-300 px-3 py-2 rounded hover:bg-gray-800 hover:text-purple-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/predictions"
                className="text-gray-300 px-3 py-2 rounded hover:bg-gray-800 hover:text-purple-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                NBA Predictions
              </Link>
              <Link
                to="/player-stats"
                className="text-gray-300 px-3 py-2 rounded hover:bg-gray-800 hover:text-purple-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Player Stats
              </Link>
              <Link
                to="/tools"
                className="text-gray-300 px-3 py-2 rounded hover:bg-gray-800 hover:text-purple-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tools
              </Link>
              <Link
                to="/community"
                className="text-gray-300 px-3 py-2 rounded hover:bg-gray-800 hover:text-purple-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Community
              </Link>
              <Link
                to="/blog"
                className="text-gray-300 px-3 py-2 rounded hover:bg-gray-800 hover:text-purple-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/my-picks"
                className="text-gray-300 px-3 py-2 rounded hover:bg-gray-800 hover:text-purple-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Picks
              </Link>
              <Link
                to="/faq"
                className="text-gray-300 px-3 py-2 rounded hover:bg-gray-800 hover:text-purple-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-gray-300 px-3 py-2 rounded hover:bg-gray-800 hover:text-red-400 text-left"
                >
                  Sign Out
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openSignInModal();
                  }}
                  className="text-gray-300 px-3 py-2 rounded hover:bg-gray-800 hover:text-purple-400 text-left"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Sign In Modal */}
      {isSignInModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" 
              aria-hidden="true"
              onClick={closeSignInModal}
            ></div>

            {/* Modal panel */}
            <div className="inline-block align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-transparent rounded-md text-gray-400 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  onClick={closeSignInModal}
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <SignInForm customSubmitHandler={handleSignInSuccess} />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
