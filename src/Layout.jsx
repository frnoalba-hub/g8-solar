import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
        html { scroll-behavior: smooth; }
      `}</style>
      {children}
    </div>
  );
}