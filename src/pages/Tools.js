import React from "react";

const Tools = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tools & Betting Resources</h1>
      <p>
        This page will contain tools like line movement trackers, EV
        calculators, and other betting resources.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="border rounded-lg p-6 bg-white shadow-md">
          <h2 className="text-xl font-semibold mb-3">Line Movement Tracker</h2>
          <p>
            Track how Prize Picks' lines shift throughout the day to identify
            value opportunities.
          </p>
        </div>

        <div className="border rounded-lg p-6 bg-white shadow-md">
          <h2 className="text-xl font-semibold mb-3">EV Calculator</h2>
          <p>
            Calculate the expected value of picks based on historical data and
            probabilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tools;
