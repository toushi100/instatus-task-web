"use client";
import React, { useState } from "react";
export function SearchBar({ onData }: any) {
  const handleInputChange = (event: any) => {
    onData(event.target.value);
  };

  return (
    <div className="px-6 pt-8 pb-2 table-head-color border-radius">
      <input
        className="search-bar-input w-full pl-1"
        type="text"
        placeholder="Search name, email or action..."
        onChange={handleInputChange}
      />
    </div>
  );
}
