import React, { useState } from 'react';

const SignInForm = ({ customSubmitHandler }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        // For demo purposes: email "test@example.com" with password "password123" works
        if (formData.email === 'test@example.com' && formData.password === 'password123') {
          setSignInStatus({
            success: true,
            message: 'Sign in successful!'
          });
          
          // If customSubmitHandler is provided, call it with formData
          if (customSubmitHandler) {
            customSubmitHandler(formData);
          }
        } else {
          setSignInStatus({
            success: false,
            message: 'Invalid email or password. Please try again.'
          });
        }
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-800 text-white">
      <h2 className="text-2xl font-bold mb-6 text-purple-400 text-center">Sign In</h2>
      
      {signInStatus && (
        <div 
          className={`mb-4 p-3 rounded ${signInStatus.success ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}
        >
          {signInStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 bg-gray-700 border rounded-md focus:outline-none focus:ring ${errors.email ? 'border-red-500' : 'border-gray-600 focus:border-purple-500 focus:ring-purple-500'}`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-300 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-3 py-2 bg-gray-700 border rounded-md focus:outline-none focus:ring ${errors.password ? 'border-red-500' : 'border-gray-600 focus:border-purple-500 focus:ring-purple-500'}`}
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
              className="h-4 w-4 text-purple-500 border-gray-600 rounded focus:ring-purple-500 bg-gray-700"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
              Remember me
            </label>
          </div>
          
          <div className="text-sm">
            <a href="#" className="text-purple-400 hover:text-purple-300">
              Forgot password?
            </a>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 rounded-md font-medium text-white ${isSubmitting ? 'bg-purple-700 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'}`}
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
      
      <div className="mt-4 text-center">
        <span className="text-sm text-gray-400">Don't have an account? </span>
        <a href="#" className="text-sm text-purple-400 hover:text-purple-300">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default SignInForm;
