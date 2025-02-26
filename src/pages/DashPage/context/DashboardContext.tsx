/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState, useContext, useEffect } from "react";
import { Layout } from "react-grid-layout";

// Widget type definition
export type WidgetType = {
  id: string;
  type: "chart" | "table" | "card";
  data?: any;
};

// Context state type
type DashboardContextType = {
  widgets: WidgetType[];
  layout: Layout[];
  darkMode: boolean;
  toggleDarkMode: () => void;
  addWidget: (type: WidgetType["type"]) => void;
  removeWidget: (id: string) => void;
  updateLayout: (newLayout: Layout[]) => void;
};

// Create Context
const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

export const DashboardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // State initialization with localStorage persistence
  const [widgets, setWidgets] = useState<WidgetType[]>(() => {
    const savedWidgets = localStorage.getItem("dashboard-widgets");
    return savedWidgets ? JSON.parse(savedWidgets) : [];
  });

  const [layout, setLayout] = useState<Layout[]>(() => {
    const savedLayout = localStorage.getItem("dashboard-layout");
    return savedLayout ? JSON.parse(savedLayout) : [];
  });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("dashboard-dark-mode") === "true";
  });

  // Persist state changes to localStorage
  useEffect(() => {
    localStorage.setItem("dashboard-widgets", JSON.stringify(widgets));
  }, [widgets]);

  useEffect(() => {
    localStorage.setItem("dashboard-layout", JSON.stringify(layout));
  }, [layout]);

  useEffect(() => {
    localStorage.setItem("dashboard-dark-mode", JSON.stringify(darkMode));
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Function to toggle dark mode
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Function to add a new widget
  const addWidget = (type: WidgetType["type"]) => {
    setWidgets((prev) => [...prev, { id: Date.now().toString(), type }]);
  };

  // Function to remove a widget
  const removeWidget = (id: string) => {
    setWidgets((prev) => prev.filter((widget) => widget.id !== id));
  };

  return (
    <DashboardContext.Provider
      value={{
        widgets,
        layout,
        darkMode,
        toggleDarkMode,
        addWidget,
        removeWidget,
        updateLayout: setLayout,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

// Custom hook for consuming the context
export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};
