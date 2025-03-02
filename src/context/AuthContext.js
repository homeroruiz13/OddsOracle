// File: src/context/AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(null);

  useEffect(() => {
    // Initialize Netlify Identity
    netlifyIdentity.init();
    
    // Set user if already logged in
    const currentUser = netlifyIdentity.currentUser();
    if (currentUser) {
      setUser(currentUser);
      setIsLoggedIn(true);
    }

    // Event listeners
    netlifyIdentity.on("login", (user) => {
      netlifyIdentity.close();
      setUser(user);
      setIsLoggedIn(true);
      setLoginError(null);
    });

    netlifyIdentity.on("logout", () => {
      setUser(null);
      setIsLoggedIn(false);
    });

    // Error handling
    netlifyIdentity.on("error", (err) => {
      console.error("Netlify Identity error:", err);
      setLoginError("Authentication failed. Please try again.");
    });

    // Cleanup
    return () => {
      netlifyIdentity.off("login");
      netlifyIdentity.off("logout");
      netlifyIdentity.off("error");
    };
  }, []);

  // Original popup login
  const login = () => {
    netlifyIdentity.open("login");
  };

  // New method for form-based login
  const loginWithCredentials = async (email, password) => {
    try {
      setLoginError(null);
      await netlifyIdentity.login(email, password);
      return { success: true };
    } catch (error) {
      console.error("Login error:", error);
      setLoginError(error.message || "Authentication failed. Please try again.");
      return { 
        success: false, 
        error: error.message || "Authentication failed. Please try again." 
      };
    }
  };

  const logout = () => {
    netlifyIdentity.logout();
  };

  const signup = (email, password, userData = {}) => {
    try {
      return netlifyIdentity.signup(email, password, userData);
    } catch (error) {
      console.error("Signup error:", error);
      return { success: false, error: error.message };
    }
  };

  const context = { 
    user, 
    isLoggedIn, 
    login, 
    loginWithCredentials, 
    logout, 
    signup,
    loginError 
  };

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
