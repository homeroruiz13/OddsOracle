import React, { useState } from "react";

const NBAPrizePicksDashboard = () => {
  const [statFilter, setStatFilter] = useState("all");

  // Sample data for featured predictions
  const featuredPredictions = [
    {
      id: 1,
      player: "LeBron James",
      team: "LAL",
      opponent: "GSW",
      position: "SF",
      stat: "Points",
      line: 25.5,
      prediction: "OVER",
      confidence: 82,
      avgLastFive: 28.4,
      matchupNote: "Warriors allowing 27.4 PPG to SF position",
    },
    {
      id: 2,
      player: "Nikola Jokić",
      team: "DEN",
      opponent: "MIN",
      position: "C",
      stat: "Rebounds",
      line: 11.5,
      prediction: "OVER",
      confidence: 78,
      avgLastFive: 12.8,
      matchupNote: "Averaging 14.2 rebounds vs MIN this season",
    },
    {
      id: 3,
      player: "Jayson Tatum",
      team: "BOS",
      opponent: "PHI",
      position: "SF",
      stat: "Points",
      line: 28.5,
      prediction: "UNDER",
      confidence: 67,
      avgLastFive: 26.2,
      matchupNote: "Embiid's return strengthens 76ers defense",
    },
    {
      id: 4,
      player: "Anthony Edwards",
      team: "MIN",
      opponent: "DEN",
      position: "SG",
      stat: "Points",
      line: 27.5,
      prediction: "OVER",
      confidence: 75,
      avgLastFive: 30.6,
      matchupNote: "Scored 30+ in last 3 vs DEN",
    },
  ];

  // Sample trending picks
  const trendingPicks = [
    {
      id: 1,
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      stat: "Points",
      line: 31.5,
      prediction: "OVER",
      pickPercentage: 84,
    },
    {
      id: 2,
      player: "Victor Wembanyama",
      team: "SAS",
      stat: "Rebounds",
      line: 9.5,
      prediction: "OVER",
      pickPercentage: 78,
    },
    {
      id: 3,
      player: "Stephen Curry",
      team: "GSW",
      stat: "3PT Made",
      line: 4.5,
      prediction: "OVER",
      pickPercentage: 72,
    },
    {
      id: 4,
      player: "Joel Embiid",
      team: "PHI",
      stat: "Fantasy Pts",
      line: 52.5,
      prediction: "UNDER",
      pickPercentage: 68,
    },
  ];

  // Upcoming games data
  const upcomingGames = [
    {
      id: 1,
      homeTeam: { name: "Lakers", abbreviation: "LAL", record: "34-18" },
      awayTeam: { name: "Warriors", abbreviation: "GSW", record: "29-23" },
      time: "7:30 PM ET",
      date: "Today",
      keyInsight: "Warriors on 2nd night of back-to-back",
    },
    {
      id: 2,
      homeTeam: { name: "Celtics", abbreviation: "BOS", record: "41-12" },
      awayTeam: { name: "76ers", abbreviation: "PHI", record: "32-21" },
      time: "8:00 PM ET",
      date: "Today",
      keyInsight: "Embiid returning from 3-game absence",
    },
    {
      id: 3,
      homeTeam: { name: "Nuggets", abbreviation: "DEN", record: "36-17" },
      awayTeam: { name: "Timberwolves", abbreviation: "MIN", record: "36-16" },
      time: "9:00 PM ET",
      date: "Today",
      keyInsight: "Key Western Conference matchup, tied 1-1 in season series",
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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navigation */}
      <header className="bg-black border-b border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-purple-500">PrizePicks</div>
            <nav className="hidden md:flex space-x-6">
              <button className="text-gray-400 hover:text-white">NBA</button>
              <button className="text-gray-400 hover:text-white">NFL</button>
              <button className="text-gray-400 hover:text-white">MLB</button>
              <button className="text-gray-400 hover:text-white">NHL</button>
              <button className="text-gray-400 hover:text-white">SOCR</button>
              <button className="text-gray-400 hover:text-white">GOLF</button>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md font-medium hover:bg-purple-700">
                Sign Up
              </button>
              <button className="text-purple-500 hover:text-purple-400">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg overflow-hidden mb-8">
          <div className="relative py-8 px-6 md:py-10 md:px-8">            
            <div className="relative z-10 md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                NBA Player Projections
              </h2>
              <div className="h-1 w-20 bg-purple-500 rounded mb-5"></div>
              <p className="text-xl text-purple-200 font-medium mb-4">
                Data-driven predictions to give you the edge
              </p>
              <p className="text-purple-200 mb-6 max-w-xl">
                Our platform analyzes thousands of NBA data points and trends to
                identify the highest-value player prop opportunities.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="bg-purple-600 hover:bg-purple-700 transition-colors px-6 py-3 rounded-lg font-semibold text-white shadow-md hover:shadow-lg flex items-center">
                  <span className="mr-2">Today's Top NBA Picks</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="bg-transparent border border-purple-500 text-purple-200 hover:bg-purple-800 px-6 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg">
                  How It Works
                </button>
              </div>
            </div>
          </div>
          
          {/* Stats Bar */}
          <div className="bg-purple-800 py-3 px-4 md:px-8 flex flex-wrap justify-between items-center text-purple-200 text-sm">
            <div className="flex items-center">
              <span className="font-medium">Today's Games:</span>
              <span className="ml-2">12</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">Top Pick Success Rate:</span>
              <span className="ml-2 text-green-400 font-bold">68%</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">Community Picks:</span>
              <span className="ml-2">4,328</span>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-300 font-medium">NBA Slate Starts in:</span>
              <span className="ml-2 font-mono">3:42:18</span>
            </div>
          </div>
        </div>

        {/* Quick Stat Filters */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 mb-8">
          <h3 className="text-lg font-semibold mb-4 text-purple-200">Stat Filters</h3>
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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured NBA Predictions - Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Predictions */}
            <div className="bg-gray-900 rounded-lg border border-gray-800">
              <div className="p-4 border-b border-gray-800 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-purple-200">
                  Featured NBA Player Prop Predictions
                </h3>
                <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                  View All
                </button>
              </div>

              <div className="p-4 space-y-4">
                {featuredPredictions.map((prediction) => (
                  <div
                    key={prediction.id}
                    className="border border-gray-800 rounded-lg p-4 hover:border-purple-500 transition cursor-pointer bg-gray-800"
                  >
                    <div className="flex flex-wrap justify-between items-start">
                      <div>
                        <div className="flex items-center">
                          <div className="h-8 w-8 bg-purple-600 rounded-full mr-2 flex items-center justify-center font-bold">
                            {prediction.team.charAt(0)}
                          </div>
                          <div className="font-semibold text-lg">
                            {prediction.player}
                          </div>
                        </div>
                        <div className="text-gray-400 mt-1">
                          {prediction.team} vs {prediction.opponent} •{" "}
                          {prediction.position}
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-lg font-semibold text-gray-300">
                          {prediction.stat} {prediction.line}
                        </div>
                        <div
                          className={`text-lg font-bold ${
                            prediction.prediction === "OVER"
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {prediction.prediction}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="text-sm text-gray-400">Confidence</div>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-700 rounded-full h-2.5 mr-2">
                          <div
                            className={`h-2.5 rounded-full ${
                              prediction.confidence > 75
                                ? "bg-green-500"
                                : "bg-purple-500"
                            }`}
                            style={{ width: `${prediction.confidence}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-300">
                          {prediction.confidence}%
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="bg-gray-700 p-2 rounded">
                        <span className="text-gray-400">Last 5 AVG:</span>{" "}
                        <span className="font-medium text-gray-200">
                          {prediction.avgLastFive}
                        </span>
                      </div>
                      <div className="bg-gray-700 p-2 rounded">
                        <span className="font-medium text-gray-200">
                          {prediction.matchupNote}
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 flex justify-end">
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded text-sm">
                        Add to Picks
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming NBA Matchups */}
            <div className="bg-gray-900 rounded-lg border border-gray-800">
              <div className="p-4 border-b border-gray-800">
                <h3 className="text-lg font-semibold text-purple-200">Upcoming NBA Matchups</h3>
              </div>

              <div className="p-4 space-y-3">
                {upcomingGames.map((game) => (
                  <div
                    key={game.id}
                    className="border border-gray-800 rounded-lg p-3 hover:bg-gray-800 transition"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white">
                          {game.awayTeam.abbreviation.substring(0, 1)}
                        </div>
                        <div>
                          <div className="font-medium text-gray-200">
                            {game.awayTeam.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {game.awayTeam.record}
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="text-sm font-medium text-purple-400">{game.time}</div>
                        <div className="text-xs text-gray-500">{game.date}</div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div>
                          <div className="font-medium text-gray-200 text-right">
                            {game.homeTeam.name}
                          </div>
                          <div className="text-xs text-gray-500 text-right">
                            {game.homeTeam.record}
                          </div>
                        </div>
                        <div className="h-8 w-8 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white">
                          {game.homeTeam.abbreviation.substring(0, 1)}
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 text-sm text-gray-400">
                      <span className="font-medium text-purple-400">Key Insight:</span>{" "}
                      {game.keyInsight}
                    </div>

                    <div className="mt-2 text-center">
                      <button className="text-purple-400 hover:text-purple-300 text-sm">
                        View Player Props
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-800 text-center">
                <button className="text-purple-400 hover:text-purple-300 font-medium">
                  View Full Schedule
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Trending Picks */}
            <div className="bg-gray-900 rounded-lg border border-gray-800">
              <div className="p-4 border-b border-gray-800">
                <h3 className="text-lg font-semibold text-purple-200">Trending Picks Today</h3>
              </div>

              <div className="p-4">
                {trendingPicks.map((pick, index) => (
                  <div
                    key={pick.id}
                    className={`flex justify-between items-center py-3 ${
                      index < trendingPicks.length - 1 ? "border-b border-gray-800" : ""
                    }`}
                  >
                    <div>
                      <div className="font-medium text-gray-200">{pick.player}</div>
                      <div className="text-sm text-gray-500">
                        {pick.team} • {pick.stat} {pick.line}
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`font-bold ${
                          pick.prediction === "OVER"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {pick.prediction}
                      </div>
                      <div className="text-xs text-gray-500">
                        {pick.pickPercentage}% of users
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-800 text-center">
                <button className="text-purple-400 hover:text-purple-300 font-medium">
                  See More Trending Picks
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-900 rounded-lg border border-gray-800">
              <div className="p-4 border-b border-gray-800">
                <h3 className="text-lg font-semibold text-purple-200">NBA Quick Stats</h3>
              </div>

              <div className="p-4 space-y-3">
                <div className="border border-gray-800 rounded-lg p-3 bg-gray-800">
                  <div className="text-sm text-gray-400">
                    Team with most OVERs (Points)
                  </div>
                  <div className="font-medium text-gray-200">Sacramento Kings (68%)</div>
                </div>

                <div className="border border-gray-800 rounded-lg p-3 bg-gray-800">
                  <div className="text-sm text-gray-400">
                    Team with most UNDERs (Rebounds)
                  </div>
                  <div className="font-medium text-gray-200">Charlotte Hornets (72%)</div>
                </div>

                <div className="border border-gray-800 rounded-lg p-3 bg-gray-800">
                  <div className="text-sm text-gray-400">
                    Highest scoring team (Last 10 games)
                  </div>
                  <div className="font-medium text-gray-200">Boston Celtics (123.8 PPG)</div>
                </div>

                <div className="border border-gray-800 rounded-lg p-3 bg-gray-800">
                  <div className="text-sm text-gray-400">
                    Player with most consistent props
                  </div>
                  <div className="font-medium text-gray-200">Nikola Jokić (76% hit rate)</div>
                </div>
              </div>
            </div>

            {/* Recent Blog Articles */}
            <div className="bg-gray-900 rounded-lg border border-gray-800">
              <div className="p-4 border-b border-gray-800 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-purple-200">Latest NBA Insights</h3>
                <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                  All Articles
                </button>
              </div>

              <div className="p-4 space-y-4">
                <div className="border border-gray-800 rounded-lg overflow-hidden">
                  <div className="h-32 bg-gray-800"></div>
                  <div className="p-3">
                    <div className="text-xs text-gray-500 mb-1">
                      Strategy • Feb 22, 2025
                    </div>
                    <h4 className="font-medium text-gray-200">
                      Finding Value in NBA Player Assist Props
                    </h4>
                    <button className="text-purple-400 hover:text-purple-300 text-sm mt-2">
                      Read More
                    </button>
                  </div>
                </div>

                <div className="border border-gray-800 rounded-lg overflow-hidden">
                  <div className="h-32 bg-gray-800"></div>
                  <div className="p-3">
                    <div className="text-xs text-gray-500 mb-1">
                      Analysis • Feb 20, 2025
                    </div>
                    <h4 className="font-medium text-gray-200">
                      How Pace Factors Affect NBA Over/Unders
                    </h4>
                    <button className="text-purple-400 hover:text-purple-300 text-sm mt-2">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
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

export default NBAPrizePicksDashboard;
