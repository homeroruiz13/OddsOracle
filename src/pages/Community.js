import React from "react";

const Community = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Community Picks</h1>
      <p className="mb-6">
        Join the community discussion and share your NBA player prop
        predictions.
      </p>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">
          Today's Top Community Picks
        </h2>
        <p>Community pick submissions will appear here.</p>
      </div>
    </div>
  );
};

export default Community;
