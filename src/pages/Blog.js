import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog & Insights</h1>
      <p className="mb-6">
        Expert analysis on NBA player prop trends and strategies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-4">
            <span className="text-sm text-gray-500">February 22, 2025</span>
            <h2 className="text-xl font-semibold mt-1">
              Finding Value in NBA Player Props
            </h2>
            <p className="mt-2">
              A comprehensive guide to identifying valuable prop bets.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-4">
            <span className="text-sm text-gray-500">February 20, 2025</span>
            <h2 className="text-xl font-semibold mt-1">
              Impact of Rest Days on Player Performance
            </h2>
            <p className="mt-2">
              How to factor in rest when making your picks.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-4">
            <span className="text-sm text-gray-500">February 18, 2025</span>
            <h2 className="text-xl font-semibold mt-1">
              Analyzing Matchup Data for Better Predictions
            </h2>
            <p className="mt-2">
              Using historical matchups to predict future performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
