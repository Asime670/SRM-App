"use client";

import { createContext, useContext, useState, useEffect } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  
  const [user, setUser] = useState({
    name: "Asime Domitila",
    email: "asime@srmapp.com",
    role: "Administrator",
    profilePic: null,
  });

  // Load from localStorage on mount - This must happen in useEffect to avoid hydration mismatch
  useEffect(() => {
    const savedTheme = localStorage.getItem("srm-theme");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (savedTheme) setTheme(savedTheme);

    const savedUser = localStorage.getItem("srm-user");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Save to localStorage when theme changes
  useEffect(() => {
    localStorage.setItem("srm-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Save to localStorage when user changes
  useEffect(() => {
    localStorage.setItem("srm-user", JSON.stringify(user));
  }, [user]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const updateUser = (updates) => setUser((prev) => ({ ...prev, ...updates }));

  return (
    <UIContext.Provider value={{ 
      isSidebarOpen, 
      toggleSidebar, 
      closeSidebar, 
      theme, 
      setTheme, 
      toggleTheme,
      user,
      updateUser
    }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
};
