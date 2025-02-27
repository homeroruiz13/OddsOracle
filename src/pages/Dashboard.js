import React, { useState } from "react";
import Header from "../components/Header";

const NBAPrizePicksDashboard = () => {
  // States for various UI elements
  const [activeTab, setActiveTab] = useState("home");
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
    <div className="min-h-screen bg-gray-100">
      {/* Header/Navigation - Would be part of the main app layout */}

      {/* Main Dashboard Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg p-6 text-white mb-8">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-2">
              Make Smarter NBA PrizePicks
            </h2>
            <p className="text-xl mb-4">
              Data-driven predictions to give you the edge
            </p>
            <p className="mb-6">
              Our platform analyzes thousands of NBA data points and trends to
              identify the highest-value player prop opportunities.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-md font-medium">
                Today's Top NBA Picks
              </button>
              <button className="bg-white text-blue-800 px-6 py-2 rounded-md font-medium">
                How It Works
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stat Filters */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <h3 className="text-lg font-semibold mb-4">Quick Filters</h3>
          <div className="flex flex-wrap gap-2">
            {statFilters.map((filter) => (
              <button
                key={filter.id}
                className={`px-4 py-2 rounded-md ${
                  statFilter === filter.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
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
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="text-lg font-semibold">
                  Featured NBA Player Prop Predictions
                </h3>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View All
                </button>
              </div>

              <div className="p-4 space-y-4">
                {featuredPredictions.map((prediction) => (
                  <div
                    key={prediction.id}
                    className="border rounded-lg p-4 hover:border-blue-400 transition cursor-pointer"
                  >
                    <div className="flex flex-wrap justify-between items-start">
                      <div>
                        <div className="flex items-center">
                          <div className="h-6 w-6 bg-gray-200 rounded-full mr-2"></div>
                          <div className="font-semibold text-lg">
                            {prediction.player}
                          </div>
                        </div>
                        <div className="text-gray-600 mt-1">
                          {prediction.team} vs {prediction.opponent} •{" "}
                          {prediction.position}
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-lg font-semibold">
                          {prediction.stat}: {prediction.line}
                        </div>
                        <div
                          className={`text-lg font-bold ${
                            prediction.prediction === "OVER"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {prediction.prediction}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="text-sm text-gray-600">Confidence</div>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                          <div
                            className={`h-2.5 rounded-full ${
                              prediction.confidence > 75
                                ? "bg-green-600"
                                : "bg-blue-600"
                            }`}
                            style={{ width: `${prediction.confidence}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">
                          {prediction.confidence}%
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="bg-gray-50 p-2 rounded">
                        <span className="text-gray-600">Last 5 AVG:</span>{" "}
                        <span className="font-medium">
                          {prediction.avgLastFive}
                        </span>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <span className="font-medium">
                          {prediction.matchupNote}
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 flex justify-end">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm">
                        Add to Picks
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming NBA Matchups */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-4 border-b">
                <h3 className="text-lg font-semibold">Upcoming NBA Matchups</h3>
              </div>

              <div className="p-4 space-y-3">
                {upcomingGames.map((game) => (
                  <div
                    key={game.id}
                    className="border rounded-lg p-3 hover:bg-gray-50 transition"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                        <div>
                          <div className="font-medium">
                            {game.awayTeam.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {game.awayTeam.record}
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="text-sm font-medium">{game.time}</div>
                        <div className="text-xs text-gray-500">{game.date}</div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div>
                          <div className="font-medium text-right">
                            {game.homeTeam.name}
                          </div>
                          <div className="text-xs text-gray-500 text-right">
                            {game.homeTeam.record}
                          </div>
                        </div>
                        <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>

                    <div className="mt-2 text-sm">
                      <span className="font-medium">Key Insight:</span>{" "}
                      {game.keyInsight}
                    </div>

                    <div className="mt-2 text-center">
                      <button className="text-blue-600 hover:text-blue-800 text-sm">
                        View Player Props
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t text-center">
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  View Full Schedule
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Trending Picks */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-4 border-b">
                <h3 className="text-lg font-semibold">Trending Picks Today</h3>
              </div>

              <div className="p-4">
                {trendingPicks.map((pick, index) => (
                  <div
                    key={pick.id}
                    className={`flex justify-between items-center py-3 ${
                      index < trendingPicks.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <div>
                      <div className="font-medium">{pick.player}</div>
                      <div className="text-sm text-gray-600">
                        {pick.team} • {pick.stat} {pick.line}
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`font-bold ${
                          pick.prediction === "OVER"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {pick.prediction}
                      </div>
                      <div className="text-xs text-gray-600">
                        {pick.pickPercentage}% of users
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t text-center">
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  See More Trending Picks
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-4 border-b">
                <h3 className="text-lg font-semibold">NBA Quick Stats</h3>
              </div>

              <div className="p-4 space-y-3">
                <div className="border rounded-lg p-3">
                  <div className="text-sm text-gray-600">
                    Team with most OVERs (Points)
                  </div>
                  <div className="font-medium">Sacramento Kings (68%)</div>
                </div>

                <div className="border rounded-lg p-3">
                  <div className="text-sm text-gray-600">
                    Team with most UNDERs (Rebounds)
                  </div>
                  <div className="font-medium">Charlotte Hornets (72%)</div>
                </div>

                <div className="border rounded-lg p-3">
                  <div className="text-sm text-gray-600">
                    Highest scoring team (Last 10 games)
                  </div>
                  <div className="font-medium">Boston Celtics (123.8 PPG)</div>
                </div>

                <div className="border rounded-lg p-3">
                  <div className="text-sm text-gray-600">
                    Player with most consistent props
                  </div>
                  <div className="font-medium">Nikola Jokić (76% hit rate)</div>
                </div>
              </div>
            </div>

            {/* Recent Blog Articles */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="text-lg font-semibold">Latest NBA Insights</h3>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  All Articles
                </button>
              </div>

              <div className="p-4 space-y-4">
                <div className="border rounded-lg overflow-hidden">
                  <div className="h-32 bg-gray-200"></div>
                  <div className="p-3">
                    <div className="text-xs text-gray-500 mb-1">
                      Strategy • Feb 22, 2025
                    </div>
                    <h4 className="font-medium">
                      Finding Value in NBA Player Assist Props
                    </h4>
                    <button className="text-blue-600 hover:text-blue-800 text-sm mt-2">
                      Read More
                    </button>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="h-32 bg-gray-200"></div>
                  <div className="p-3">
                    <div className="text-xs text-gray-500 mb-1">
                      Analysis • Feb 20, 2025
                    </div>
                    <h4 className="font-medium">
                      How Pace Factors Affect NBA Over/Unders
                    </h4>
                    <button className="text-blue-600 hover:text-blue-800 text-sm mt-2">
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
      <footer className="bg-gray-800 text-white py-6 mt-8">
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

// Placeholder components for other tabs
const Tools = () => <div>Tools & Resources Page</div>;
const Community = () => <div>Community Picks Page</div>;
const Blog = ({ articles }) => <div>Blog & Insights Page</div>;
const Leaderboard = ({ topPredictors }) => <div>Leaderboard Page</div>;
const MyPicks = () => <div>My Picks Dashboard</div>;
const FAQ = () => <div>FAQ & Support Page</div>;
const Predictions = () => <div>NBA Predictions Page</div>;
const PlayerStats = () => <div>Player Stats & Analysis Page</div>;

export default NBAPrizePicksDashboard;
