"use client";
import { on } from "events";
import React, { useState } from "react";
export function SearchBar({ onData, onLive, currentLiveValue }: any) {
  const handleInputChange = (event: any) => {
    onData(event.target.value);
  };
  const handleOnClick = () => {
    onLive(!currentLiveValue);
  };
  const liveButtonText = currentLiveValue ? "PAUSE" : "LIVE";
  return (
    <div className="px-6 pt-8 pb-2 table-head-color w-full flex items-center border-radius">
      <input
        className="search-bar-input w-full"
        type="text"
        placeholder="Search name, email or action..."
        onChange={handleInputChange}
      />
      <div className="flex">
        <button
          className=" ml-auto flex items-center live-button  px-4"
          onClick={handleOnClick}
        >
          <div className="red-dot mr-1"></div>
          {liveButtonText}
        </button>
      </div>
    </div>
  );
}
