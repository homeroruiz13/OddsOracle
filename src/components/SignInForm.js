import React, { useState } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

const SignInForm = ({ customSubmitHandler, onClose }) => {
  // Removed unused AuthContext
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signInStatus, setSignInStatus] = useState(null);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setSignInStatus(null);
      
      try {
        // Use Netlify Identity's login method with form data
        await netlifyIdentity.login(formData.email, formData.password)
          .then(user => {
            setSignInStatus({
              success: true,
              message: 'Sign in successful!'
            });
            
            // If customSubmitHandler is provided, call it
            if (customSubmitHandler) {
              customSubmitHandler(formData);
            }
            
            // Close modal after successful login
            setTimeout(() => {
              if (onClose) onClose();
            }, 1000);
          })
          .catch(error => {
            console.error("Login error:", error);
            setSignInStatus({
              success: false,
              message: error.message || 'Invalid email or password. Please try again.'
            });
          });
      } catch (error) {
        console.error("Authentication error:", error);
        setSignInStatus({
          success: false,
          message: 'An error occurred during authentication. Please try again.'
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const openSignup = (e) => {
    e.preventDefault();
    netlifyIdentity.open('signup');
    if (onClose) onClose();
  };

  const openResetPassword = (e) => {
    e.preventDefault();
    netlifyIdentity.open('recovery');
    if (onClose) onClose();
  };

  return (
    <div className="w-full max-w-md mx-auto bg-black text-white">
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-t-lg p-6">
        <h2 className="text-2xl font-bold mb-2 text-white text-center">Sign In</h2>
        <div className="h-1 w-20 bg-purple-500 rounded mx-auto mb-2"></div>
        <p className="text-purple-200 text-center text-sm">
          Access your NBA PrizePicks dashboard
        </p>
      </div>
      
      <div className="bg-gray-900 border border-gray-800 rounded-b-lg p-6">
        {signInStatus && (
          <div 
            className={`mb-6 p-3 rounded-lg ${signInStatus.success ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}
          >
            {signInStatus.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-purple-200 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-3 bg-gray-800 border rounded-md focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500' : 'border-gray-700 focus:border-purple-500 focus:ring-purple-500'}`}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email}</p>
            )}
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-purple-200 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-3 py-3 bg-gray-800 border rounded-md focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500' : 'border-gray-700 focus:border-purple-500 focus:ring-purple-500'}`}
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-400">{errors.password}</p>
            )}
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-purple-600 border-gray-700 rounded focus:ring-purple-500 bg-gray-800"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-purple-200">
                Remember me
              </label>
            </div>
            
            <div className="text-sm">
              <button 
                type="button"
                className="text-purple-400 hover:text-purple-300 bg-transparent border-0 p-0"
                onClick={openResetPassword}
              >
                Forgot password?
              </button>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-colors shadow-md hover:shadow-lg ${isSubmitting ? 'bg-purple-700 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'}`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </span>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <span className="text-sm text-gray-400">Don't have an account? </span>
          <button 
            type="button"
            className="text-sm text-purple-400 hover:text-purple-300 bg-transparent border-0 p-0"
            onClick={openSignup}
          >
            Sign up
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          © 2025 NBA PrizePicks Predictor. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
