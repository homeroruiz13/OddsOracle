import React, { createContext, useState, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    });

    netlifyIdentity.on("logout", () => {
      setUser(null);
      setIsLoggedIn(false);
    });

    // Cleanup
    return () => {
      netlifyIdentity.off("login");
      netlifyIdentity.off("logout");
    };
  }, []);

  const login = () => {
    netlifyIdentity.open("login");
  };

  const logout = () => {
    netlifyIdentity.logout();
  };

  const context = { user, isLoggedIn, login, logout };

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;