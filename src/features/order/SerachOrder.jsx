import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SerachOrder() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full px-4 py-2 text-sm
         bg-yellow-100 w-28 placeholder:text-stone-400 sm:w-64 sm:focus:w-72
          focus:outline-none
         focus:ring focus:ring-yellow-400 focus:ring-opacity-75
         transition-all duration-300"
      />
    </form>
  );
}
