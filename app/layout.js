import React from "react";
import "../styles/globals.css";
export default function Layout({ children }) {
  return (
    <div className="bg-slate-100 min-h-screen flex justify-center items-center">
      {children}
    </div>
  );
}
