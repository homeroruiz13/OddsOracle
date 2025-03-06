import React, { useState } from "react";

const Predictions = () => {
  const [statFilter, setStatFilter] = useState("all");
  const [timeFrame, setTimeFrame] = useState("today");

  // Sample data for player predictions
  const playerPredictions = [
    {
      id: 1,
      player: "LeBron James",
      team: "LAL",
      position: "SF",
      opponent: "GSW",
      oppDefRank: 12,
      oppPosRank: 8,
      market: "Points",
      line: 25.5,
      prediction: "OVER",
      confidence: 82,
      dateTime: "Feb 24, 2025 7:30 PM ET",
      hitRateL5: 80,
      hitRateL10: 70,
      hitRateL20: 65,
      hitRateSeason: 68,
      hitRateVsOpp: 75,
      hitRatePrev: 62,
      lastTwentyOutcomes: [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0],
      weightedHitRate: 72,
      projectedMinutes: 36,
      matchupNote: "Warriors allowing 27.4 PPG to SF position",
    },
    {
      id: 2,
      player: "Nikola Jokić",
      team: "DEN",
      position: "C",
      opponent: "MIN",
      oppDefRank: 2,
      oppPosRank: 3,
      market: "Rebounds",
      line: 11.5,
      prediction: "OVER",
      confidence: 78,
      dateTime: "Feb 24, 2025 9:00 PM ET",
      hitRateL5: 100,
      hitRateL10: 90,
      hitRateL20: 85,
      hitRateSeason: 82,
      hitRateVsOpp: 88,
      hitRatePrev: 78,
      lastTwentyOutcomes: [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0],
      weightedHitRate: 88,
      projectedMinutes: 33,
      matchupNote: "Averaging 14.2 rebounds vs MIN this season",
    },
    {
      id: 3,
      player: "Jayson Tatum",
      team: "BOS",
      position: "SF",
      opponent: "PHI",
      oppDefRank: 6,
      oppPosRank: 4,
      market: "Points",
      line: 28.5,
      prediction: "UNDER",
      confidence: 67,
      dateTime: "Feb 24, 2025 8:00 PM ET",
      hitRateL5: 60,
      hitRateL10: 70,
      hitRateL20: 65,
      hitRateSeason: 58,
      hitRateVsOpp: 54,
      hitRatePrev: 60,
      lastTwentyOutcomes: [1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0],
      weightedHitRate: 62,
      projectedMinutes: 38,
      matchupNote: "Embiid's return strengthens 76ers defense",
    },
    {
      id: 4,
      player: "Anthony Edwards",
      team: "MIN",
      position: "SG",
      opponent: "DEN",
      oppDefRank: 5,
      oppPosRank: 7,
      market: "Points",
      line: 27.5,
      prediction: "OVER",
      confidence: 75,
      dateTime: "Feb 24, 2025 9:00 PM ET",
      hitRateL5: 80,
      hitRateL10: 70,
      hitRateL20: 65,
      hitRateSeason: 60,
      hitRateVsOpp: 83,
      hitRatePrev: 58,
      lastTwentyOutcomes: [1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1],
      weightedHitRate: 70,
      projectedMinutes: 35,
      matchupNote: "Scored 30+ in last 3 vs DEN",
    },
    {
      id: 5,
      player: "Joel Embiid",
      team: "PHI",
      position: "C",
      opponent: "BOS",
      oppDefRank: 1,
      oppPosRank: 2,
      market: "Points",
      line: 30.5,
      prediction: "UNDER",
      confidence: 65,
      dateTime: "Feb 24, 2025 8:00 PM ET",
      hitRateL5: 60,
      hitRateL10: 50,
      hitRateL20: 55,
      hitRateSeason: 62,
      hitRateVsOpp: 40,
      hitRatePrev: 58,
      lastTwentyOutcomes: [0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1],
      weightedHitRate: 52,
      projectedMinutes: 32,
      matchupNote: "First game back from injury against tough Boston D",
    },
    {
      id: 6,
      player: "Stephen Curry",
      team: "GSW",
      position: "PG",
      opponent: "LAL",
      oppDefRank: 18,
      oppPosRank: 15,
      market: "3PT Made",
      line: 4.5,
      prediction: "OVER",
      confidence: 72,
      dateTime: "Feb 24, 2025 7:30 PM ET",
      hitRateL5: 80,
      hitRateL10: 70,
      hitRateL20: 65,
      hitRateSeason: 68,
      hitRateVsOpp: 75,
      hitRatePrev: 72,
      lastTwentyOutcomes: [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1],
      weightedHitRate: 70,
      projectedMinutes: 33,
      matchupNote: "Lakers allowing 12.8 3PT per game (25th in NBA)",
    },
  ];

  // Stats filters
  const statFilters = [
    { id: "all", label: "All Stats" },
    { id: "points", label: "Points" },
    { id: "rebounds", label: "Rebounds" },
    { id: "assists", label: "Assists" },
    { id: "threes", label: "3-Pointers" },
    { id: "fantasy", label: "Fantasy" },
  ];

  // Time frame filters
  const timeFrameFilters = [
    { id: "today", label: "Today" },
    { id: "tomorrow", label: "Tomorrow" },
    { id: "this-week", label: "This Week" },
  ];

  // Function to render the last 20 outcomes visualization
  const renderOutcomes = (outcomes) => {
    return (
      <div className="flex space-x-1">
        {outcomes.map((outcome, idx) => (
          <div 
            key={idx} 
            className={`h-4 w-4 rounded-sm ${outcome === 1 ? 'bg-green-500' : 'bg-red-500'}`}
            title={outcome === 1 ? 'Hit' : 'Miss'}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg overflow-hidden mb-8">
          <div className="relative py-8 px-6 md:py-10 md:px-8">            
            <div className="relative z-10 md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                NBA Player Prop Predictions
              </h2>
              <div className="h-1 w-20 bg-purple-500 rounded mb-5"></div>
              <p className="text-xl text-purple-200 font-medium mb-4">
                Detailed stats to maximize your edge
              </p>
              <p className="text-purple-200 mb-6 max-w-xl">
                Advanced analytics with historical performance data and matchup insights for every NBA player prop.
              </p>
            </div>
          </div>
          
          {/* Stats Bar */}
          <div className="bg-purple-800 py-3 px-4 md:px-8 flex flex-wrap justify-between items-center text-purple-200 text-sm">
            <div className="flex items-center">
              <span className="font-medium">Today's Games:</span>
              <span className="ml-2">12</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">Featured Pick Success:</span>
              <span className="ml-2 text-green-400 font-bold">68%</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">Total Props Available:</span>
              <span className="ml-2">142</span>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-300 font-medium">NBA Slate Starts in:</span>
              <span className="ml-2 font-mono">3:42:18</span>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Stat Filters */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-200">Stat Type</h3>
              <div className="flex flex-wrap gap-2">
                {statFilters.map((filter) => (
                  <button
                    key={filter.id}
                    className={`px-4 py-2 rounded-md ${
                      statFilter === filter.id
                        ? "bg-purple-600 text-white"
                        : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                    }`}
                    onClick={() => setStatFilter(filter.id)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Frame Filters */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-200">Time Frame</h3>
              <div className="flex flex-wrap gap-2">
                {timeFrameFilters.map((filter) => (
                  <button
                    key={filter.id}
                    className={`px-4 py-2 rounded-md ${
                      timeFrame === filter.id
                        ? "bg-purple-600 text-white"
                        : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                    }`}
                    onClick={() => setTimeFrame(filter.id)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Search/Sort Options */}
          <div className="mt-4 flex flex-wrap gap-3">
            <input
              type="text"
              placeholder="Search by player name..."
              className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none text-white"
            />
            <select className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none text-white">
              <option value="">All Teams</option>
              <option value="LAL">Lakers</option>
              <option value="BOS">Celtics</option>
              <option value="GSW">Warriors</option>
              {/* More teams would be here */}
            </select>
            <select className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none text-white">
              <option value="">Sort By</option>
              <option value="confidence">Confidence</option>
              <option value="hitrate">Hit Rate</option>
              <option value="line">Line Value</option>
            </select>
          </div>
        </div>

        {/* Detailed Player Prop Predictions Table */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 mb-8">
          <div className="p-4 border-b border-gray-800">
            <h3 className="text-lg font-semibold text-purple-200">Detailed Player Prop Predictions</h3>
            <p className="text-gray-400 text-sm mt-1">
              All statistics and historical data for today's NBA player props
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800 border-b border-gray-700">
                <tr>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Player/Team</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Market/Line</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Opponent</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Pred.</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Confidence</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Time</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Last 20 Outcomes</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Proj. Min</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">L5 %</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">L10 %</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">L20 %</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Season %</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Vs Opp %</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Prev %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {playerPredictions.map((prediction) => (
                  <tr 
                    key={prediction.id} 
                    className="bg-gray-900 hover:bg-gray-800 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <div className="h-8 w-8 bg-purple-600 rounded-full mr-2 flex items-center justify-center font-bold text-white">
                          {prediction.team.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium text-white">{prediction.player}</div>
                          <div className="text-sm text-gray-400">{prediction.team} • {prediction.position}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-medium text-white">{prediction.market}</div>
                      <div className="text-sm text-gray-400">Line: {prediction.line}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-medium text-white">{prediction.opponent}</div>
                      <div className="text-sm text-gray-400">
                        Def: #{prediction.oppDefRank} • {prediction.position}: #{prediction.oppPosRank}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className={`font-bold text-lg ${
                        prediction.prediction === "OVER" ? "text-green-400" : "text-red-400"
                      }`}>
                        {prediction.prediction}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="w-full bg-gray-700 rounded-full h-2.5 mb-1">
                        <div
                          className={`h-2.5 rounded-full ${
                            prediction.confidence > 75
                              ? "bg-green-500"
                              : prediction.confidence > 60
                              ? "bg-purple-500"
                              : "bg-yellow-500"
                          }`}
                          style={{ width: `${prediction.confidence}%` }}
                        ></div>
                      </div>
                      <div className="text-center text-sm font-medium text-gray-300">
                        {prediction.confidence}%
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="text-sm text-gray-300">{prediction.dateTime}</div>
                    </td>
                    <td className="py-4 px-4">
                      {renderOutcomes(prediction.lastTwentyOutcomes)}
                      <div className="text-xs text-gray-400 mt-1 text-center">Most recent → oldest</div>
                    </td>
                    <td className="py-4 px-4 text-center font-medium text-gray-300">
                      {prediction.projectedMinutes}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className={`font-medium ${
                        prediction.hitRateL5 >= 70 ? "text-green-400" : 
                        prediction.hitRateL5 >= 50 ? "text-yellow-400" : "text-red-400"
                      }`}>
                        {prediction.hitRateL5}%
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className={`font-medium ${
                        prediction.hitRateL10 >= 70 ? "text-green-400" : 
                        prediction.hitRateL10 >= 50 ? "text-yellow-400" : "text-red-400"
                      }`}>
                        {prediction.hitRateL10}%
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className={`font-medium ${
                        prediction.hitRateL20 >= 70 ? "text-green-400" : 
                        prediction.hitRateL20 >= 50 ? "text-yellow-400" : "text-red-400"
                      }`}>
                        {prediction.hitRateL20}%
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className={`font-medium ${
                        prediction.hitRateSeason >= 70 ? "text-green-400" : 
                        prediction.hitRateSeason >= 50 ? "text-yellow-400" : "text-red-400"
                      }`}>
                        {prediction.hitRateSeason}%
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className={`font-medium ${
                        prediction.hitRateVsOpp >= 70 ? "text-green-400" : 
                        prediction.hitRateVsOpp >= 50 ? "text-yellow-400" : "text-red-400"
                      }`}>
                        {prediction.hitRateVsOpp}%
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className={`font-medium ${
                        prediction.hitRatePrev >= 70 ? "text-green-400" : 
                        prediction.hitRatePrev >= 50 ? "text-yellow-400" : "text-red-400"
                      }`}>
                        {prediction.hitRatePrev}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Expanded Player View - Example */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 mb-8">
          <div className="p-4 border-b border-gray-800">
            <h3 className="text-lg font-semibold text-purple-200">Expanded Player Analysis</h3>
            <p className="text-gray-400 text-sm mt-1">
              Detailed breakdown for LeBron James - Points (25.5)
            </p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Player Info */}
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-purple-600 rounded-full mr-3 flex items-center justify-center font-bold text-white text-xl">
                    L
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">LeBron James</h4>
                    <div className="text-purple-300">Los Angeles Lakers • SF</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-400">Tonight's Matchup</div>
                    <div className="text-white">vs. Golden State Warriors</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-400">Game Time</div>
                    <div className="text-white">Feb 24, 2025 7:30 PM ET</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-400">Projected Minutes</div>
                    <div className="text-white">36 minutes</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-400">Current Line</div>
                    <div className="text-xl font-bold text-white">Points: 25.5</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-400">Prediction</div>
                    <div className="text-2xl font-bold text-green-400">OVER</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-400">Confidence</div>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-700 rounded-full h-3 mr-2">
                        <div className="h-3 rounded-full bg-green-500" style={{ width: "82%" }}></div>
                      </div>
                      <span className="font-medium text-green-400">82%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hit Rate Data */}
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-200 mb-4">Hit Rate Breakdown</h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="text-gray-300">Last 5 Games</div>
                    <div className="font-medium text-green-400">80%</div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-gray-300">Last 10 Games</div>
                    <div className="font-medium text-green-400">70%</div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-gray-300">Last 20 Games</div>
                    <div className="font-medium text-yellow-400">65%</div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-gray-300">Current Season</div>
                    <div className="font-medium text-yellow-400">68%</div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-gray-300">Vs. Warriors</div>
                    <div className="font-medium text-green-400">75%</div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-gray-300">Previous Season</div>
                    <div className="font-medium text-yellow-400">62%</div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-gray-300">Weighted Hit Rate</div>
                    <div className="font-bold text-green-400">72%</div>
                  </div>
                </div>
                
                <div className="mt-5">
                  <h5 className="text-sm font-semibold text-purple-200 mb-2">Recent Performance</h5>
                  <div className="space-y-2">
                    <div className="flex space-x-1">
                      {[1, 0, 1, 1, 1].map((outcome, idx) => (
                        <div 
                          key={idx} 
                          className={`h-8 w-1/5 rounded-sm ${outcome === 1 ? 'bg-green-500' : 'bg-red-500'} flex items-center justify-center text-xs font-medium text-white`}
                        >
                          {outcome === 1 ? 'Hit' : 'Miss'}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-gray-400 text-center">Last 5 games (most recent left)</div>
                  </div>
                </div>
              </div>
              
              {/* Analysis */}
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-200 mb-4">Analysis</h4>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    LeBron James has been consistently scoring above his points line of 25.5 in recent games. 
                    His average in the last 5 games is 28.4 points, well above tonight's line.
                  </p>
                  
                  <div className="bg-gray-700 p-3 rounded">
                    <div className="text-sm font-medium text-purple-300 mb-1">Key Matchup Insight</div>
                    <p className="text-gray-200">Warriors are allowing 27.4 PPG to small forwards this season (ranked 12th defensively against SF position)</p>
                  </div>
                  
                  <div className="bg-gray-700 p-3 rounded">
                    <div className="text-sm font-medium text-purple-300 mb-1">Situational Factors</div>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Warriors on 2nd night of back-to-back</li>
                      <li>Anthony Davis questionable (knee), potentially increasing James' usage</li>
                      <li>LeBron averaging 30.2 PPG over his last 6 games against GSW</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-900 bg-opacity-30 p-3 rounded border border-green-700">
                    <div className="text-sm font-medium text-green-400 mb-1">OVER Recommendation</div>
                    <p className="text-gray-200">
                      Strong recommendation for OVER 25.5 points based on recent form, matchup advantages, and Warriors' defensive limitations on back-to-back nights.
                    </p>
                  </div>
                </div>
                
                <div className="mt-5">
                  <button className="w-full bg-purple-600 hover:bg-purple-700 transition-colors py-2 rounded font-semibold text-white">
                    Add to My Picks
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Historical Performance Section */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 mb-8">
          <div className="p-4 border-b border-gray-800">
            <h3 className="text-lg font-semibold text-purple-200">Historical Performance Data</h3>
            <p className="text-gray-400 text-sm mt-1">
              Detailed game-by-game breakdown for LeBron James - Points
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800 border-b border-gray-700">
                <tr>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Opponent</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Line</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Actual</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Result</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Minutes</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">FG</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">3PT</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">FT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {/* Game rows - could be dynamically generated */}
                <tr className="bg-gray-900 hover:bg-gray-800 transition-colors">
                  <td className="py-3 px-4 text-gray-300">Feb 20, 2025</td>
                  <td className="py-3 px-4 text-gray-300">@PHX</td>
                  <td className="py-3 px-4 text-center text-gray-300">25.5</td>
                  <td className="py-3 px-4 text-center font-medium text-white">29</td>
                  <td className="py-3 px-4 text-center font-medium text-green-400">OVER</td>
                  <td className="py-3 px-4 text-center text-gray-300">36</td>
                  <td className="py-3 px-4 text-center text-gray-300">11-18</td>
                  <td className="py-3 px-4 text-center text-gray-300">2-5</td>
                  <td className="py-3 px-4 text-center text-gray-300">5-7</td>
                </tr>
                <tr className="bg-gray-900 hover:bg-gray-800 transition-colors">
                  <td className="py-3 px-4 text-gray-300">Feb 18, 2025</td>
                  <td className="py-3 px-4 text-gray-300">UTA</td>
                  <td className="py-3 px-4 text-center text-gray-300">24.5</td>
                  <td className="py-3 px-4 text-center font-medium text-white">22</td>
                  <td className="py-3 px-4 text-center font-medium text-red-400">UNDER</td>
                  <td className="py-3 px-4 text-center text-gray-300">32</td>
                  <td className="py-3 px-4 text-center text-gray-300">9-15</td>
                  <td className="py-3 px-4 text-center text-gray-300">1-4</td>
                  <td className="py-3 px-4 text-center text-gray-300">3-4</td>
                </tr>
                <tr className="bg-gray-900 hover:bg-gray-800 transition-colors">
                  <td className="py-3 px-4 text-gray-300">Feb 15, 2025</td>
                  <td className="py-3 px-4 text-gray-300">@DEN</td>
                  <td className="py-3 px-4 text-center text-gray-300">26.5</td>
                  <td className="py-3 px-4 text-center font-medium text-white">31</td>
                  <td className="py-3 px-4 text-center font-medium text-green-400">OVER</td>
                  <td className="py-3 px-4 text-center text-gray-300">38</td>
                  <td className="py-3 px-4 text-center text-gray-300">12-22</td>
                  <td className="py-3 px-4 text-center text-gray-300">3-8</td>
                  <td className="py-3 px-4 text-center text-gray-300">4-6</td>
                </tr>
                <tr className="bg-gray-900 hover:bg-gray-800 transition-colors">
                  <td className="py-3 px-4 text-gray-300">Feb 13, 2025</td>
                  <td className="py-3 px-4 text-gray-300">@DAL</td>
                  <td className="py-3 px-4 text-center text-gray-300">25.5</td>
                  <td className="py-3 px-4 text-center font-medium text-white">28</td>
                  <td className="py-3 px-4 text-center font-medium text-green-400">OVER</td>
                  <td className="py-3 px-4 text-center text-gray-300">35</td>
                  <td className="py-3 px-4 text-center text-gray-300">10-19</td>
                  <td className="py-3 px-4 text-center text-gray-300">2-6</td>
                  <td className="py-3 px-4 text-center text-gray-300">6-8</td>
                </tr>
                <tr className="bg-gray-900 hover:bg-gray-800 transition-colors">
                  <td className="py-3 px-4 text-gray-300">Feb 11, 2025</td>
                  <td className="py-3 px-4 text-gray-300">MEM</td>
                  <td className="py-3 px-4 text-center text-gray-300">26.5</td>
                  <td className="py-3 px-4 text-center font-medium text-white">32</td>
                  <td className="py-3 px-4 text-center font-medium text-green-400">OVER</td>
                  <td className="py-3 px-4 text-center text-gray-300">37</td>
                  <td className="py-3 px-4 text-center text-gray-300">13-21</td>
                  <td className="py-3 px-4 text-center text-gray-300">3-7</td>
                  <td className="py-3 px-4 text-center text-gray-300">3-4</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t border-gray-800 text-center">
            <button className="text-purple-400 hover:text-purple-300 font-medium">
              View More Games
            </button>
          </div>
        </div>
        
        {/* Similar Props / You May Also Like */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 mb-8">
          <div className="p-4 border-b border-gray-800">
            <h3 className="text-lg font-semibold text-purple-200">Similar Player Props</h3>
            <p className="text-gray-400 text-sm mt-1">
              Other player props you might be interested in
            </p>
          </div>
          
          <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Similar prop cards */}
            <div className="border border-gray-800 rounded-lg p-4 hover:border-purple-500 transition cursor-pointer bg-gray-800">
              <div className="flex items-center mb-2">
                <div className="h-8 w-8 bg-purple-600 rounded-full mr-2 flex items-center justify-center font-bold text-white">G</div>
                <div className="font-semibold text-white">Stephen Curry</div>
              </div>
              <div className="text-gray-400 text-sm mb-2">GSW vs LAL • PG</div>
              <div className="flex justify-between items-center mb-3">
                <div className="text-gray-300">3PT Made 4.5</div>
                <div className="font-bold text-green-400">OVER</div>
              </div>
              <div className="text-sm text-gray-400">Confidence</div>
              <div className="flex items-center">
                <div className="w-full bg-gray-700 rounded-full h-2 mr-2">
                  <div className="h-2 rounded-full bg-purple-500" style={{ width: "72%" }}></div>
                </div>
                <span className="text-xs font-medium text-gray-300">72%</span>
              </div>
            </div>
            
            <div className="border border-gray-800 rounded-lg p-4 hover:border-purple-500 transition cursor-pointer bg-gray-800">
              <div className="flex items-center mb-2">
                <div className="h-8 w-8 bg-purple-600 rounded-full mr-2 flex items-center justify-center font-bold text-white">A</div>
                <div className="font-semibold text-white">Anthony Davis</div>
              </div>
              <div className="text-gray-400 text-sm mb-2">LAL vs GSW • PF</div>
              <div className="flex justify-between items-center mb-3">
                <div className="text-gray-300">Rebounds 11.5</div>
                <div className="font-bold text-green-400">OVER</div>
              </div>
              <div className="text-sm text-gray-400">Confidence</div>
              <div className="flex items-center">
                <div className="w-full bg-gray-700 rounded-full h-2 mr-2">
                  <div className="h-2 rounded-full bg-green-500" style={{ width: "80%" }}></div>
                </div>
                <span className="text-xs font-medium text-gray-300">80%</span>
              </div>
            </div>
            
            <div className="border border-gray-800 rounded-lg p-4 hover:border-purple-500 transition cursor-pointer bg-gray-800">
              <div className="flex items-center mb-2">
                <div className="h-8 w-8 bg-purple-600 rounded-full mr-2 flex items-center justify-center font-bold text-white">K</div>
                <div className="font-semibold text-white">Klay Thompson</div>
              </div>
              <div className="text-gray-400 text-sm mb-2">GSW vs LAL • SG</div>
              <div className="flex justify-between items-center mb-3">
                <div className="text-gray-300">Points 18.5</div>
                <div className="font-bold text-red-400">UNDER</div>
              </div>
              <div className="text-sm text-gray-400">Confidence</div>
              <div className="flex items-center">
                <div className="w-full bg-gray-700 rounded-full h-2 mr-2">
                  <div className="h-2 rounded-full bg-purple-500" style={{ width: "65%" }}></div>
                </div>
                <span className="text-xs font-medium text-gray-300">65%</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Injury Updates & Recent News */}
        <div className="bg-gray-900 rounded-lg border border-gray-800">
          <div className="p-4 border-b border-gray-800">
            <h3 className="text-lg font-semibold text-purple-200">Recent Team & Injury News</h3>
            <p className="text-gray-400 text-sm mt-1">
              Latest updates affecting tonight's games
            </p>
          </div>
          
          <div className="p-4 space-y-4">
            <div className="border border-gray-800 rounded-lg p-4 bg-gray-800">
              <div className="flex items-start mb-2">
                <div className="h-8 w-8 bg-purple-600 rounded-full mr-2 flex items-center justify-center font-bold text-white">L</div>
                <div>
                  <h4 className="font-medium text-white">Lakers Injury Update</h4>
                  <p className="text-gray-400 text-sm">3 hours ago</p>
                </div>
              </div>
              <p className="text-gray-300">
                Anthony Davis (knee) has been upgraded to questionable for tonight's game against Golden State. 
                If he sits, expect increased scoring opportunities for LeBron James and Austin Reaves.
              </p>
            </div>
            
            <div className="border border-gray-800 rounded-lg p-4 bg-gray-800">
              <div className="flex items-start mb-2">
                <div className="h-8 w-8 bg-purple-600 rounded-full mr-2 flex items-center justify-center font-bold text-white">G</div>
                <div>
                  <h4 className="font-medium text-white">Warriors Back-to-Back Impact</h4>
                  <p className="text-gray-400 text-sm">5 hours ago</p>
                </div>
              </div>
              <p className="text-gray-300">
                Golden State is playing the second night of a back-to-back after a physical game in Sacramento last night. 
                Coach Kerr indicated potential minute restrictions for Curry (32-34 mins) and Green (28-30 mins).
              </p>
            </div>
            
            <div className="border border-gray-800 rounded-lg p-4 bg-gray-800">
              <div className="flex items-start mb-2">
                <div className="h-8 w-8 bg-purple-600 rounded-full mr-2 flex items-center justify-center font-bold text-white">C</div>
                <div>
                  <h4 className="font-medium text-white">Celtics vs 76ers Referee Assignment</h4>
                  <p className="text-gray-400 text-sm">6 hours ago</p>
                </div>
              </div>
              <p className="text-gray-300">
                Tonight's BOS-PHI game will be officiated by a crew led by Scott Foster. In games with Foster this season, 
                the OVER on player points has hit at a 62% rate, while foul calls have been 15% higher than league average.
              </p>
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-800 text-center">
            <button className="text-purple-400 hover:text-purple-300 font-medium">
              View All News Updates
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm">
            <p>© 2025 NBA PrizePicks Predictor. All rights reserved.</p>
            <p className="mt-1">
              This site is for informational purposes only. Please bet
              responsibly.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Predictions;
