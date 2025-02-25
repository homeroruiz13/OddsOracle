import React from "react";

const FAQ = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">FAQ & Support</h1>
      <p className="mb-6">
        Frequently asked questions and help resources for NBA PrizePicks
        Predictor.
      </p>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            How does PrizePicks work?
          </h2>
          <p>
            PrizePicks is a daily fantasy sports platform where you can select
            over/under on player prop predictions. Our tool helps you make
            data-driven decisions on which props to select.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            How are predictions generated?
          </h2>
          <p>
            Our predictions are generated using a combination of statistical
            analysis, historical data, matchup information, and recent player
            trends.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            What does the confidence percentage mean?
          </h2>
          <p>
            The confidence percentage represents our model's certainty in a
            prediction based on available data. Higher percentages indicate
            stronger predictions.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            How can I contact support?
          </h2>
          <p>
            For additional questions or technical support, please email us at
            support@nbaprizepickspredictor.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
