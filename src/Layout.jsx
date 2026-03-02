import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; overflow-x: hidden; }
        html { scroll-behavior: smooth; overflow-x: hidden; }
      `}</style>
      {children}
    </div>
  );
}