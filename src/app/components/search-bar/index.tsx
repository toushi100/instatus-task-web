"use client";
import React, { useState } from "react";
import Image from "next/image";

export function SearchBar({
  onData,
  onLive,
  currentLiveValue,
  onExport,
  exportButtonClicked,
}: any) {
  const handleExport = () => {
    onExport(!exportButtonClicked);
  };
  const handleInputChange = (event: any) => {
    onData(event.target.value);
  };
  const handleOnClick = () => {
    onLive(!currentLiveValue);
  };
  const liveButtonText = currentLiveValue ? "PAUSE" : "LIVE";
  const exportButtonClickedText = exportButtonClicked ? "CANCEL" : "EXPORT";
  return (
    <div className="px-6 pt-8 pb-2 table-head-color w-full flex items-center border-radius">
      <input
        className="search-bar-input w-full "
        type="text"
        placeholder=" Search name, email or action..."
        onChange={handleInputChange}
      />
      <div className="flex">
        <button
          className=" ml-auto flex items-center export-button  px-4"
          onClick={handleExport}
        >
          <div className=" mr-1">
            <Image
              className=" mx-auto pb-1"
              src="/export-vector.svg"
              alt="arrow-right"
              width={49}
              height={0}
            />
          </div>
          {exportButtonClickedText}
        </button>
      </div>
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
