import React from "react";

export default function button({ children ,disabled }) {
  return (
    <button
      className="bg-yellow-400 uppercase font-semibold text-stone-800 py-3
           px-4 inline-block tracking-wide rounded-full hover:bg-yellow-300 transion-colors duration-300 
           focus:outline-none focus:ring focus:ring-yellow-300 focus-offset-4 disabled:cursor-not-allowed"
    disabled={disabled}>
      {children}
    </button>
  );
}
