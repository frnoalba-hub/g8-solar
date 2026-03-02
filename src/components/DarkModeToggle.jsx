import React from "react";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle({ dark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 hover:scale-110"
      aria-label="Toggle dark mode"
    >
      {dark ? (
        <Sun className="w-5 h-5 text-[#f5c518]" />
      ) : (
        <Moon className="w-5 h-5 text-[#0a1628]" />
      )}
    </button>
  );
}