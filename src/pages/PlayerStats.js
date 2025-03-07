import React, { useState } from "react";

const NBAStatsPage = () => {
  // State for active tab and sorting
  const [activeTab, setActiveTab] = useState("players");
  const [playerStatSort, setPlayerStatSort] = useState("points");
  const [teamStatSort, setTeamStatSort] = useState("ppg");
  
  // Sample team data for offensive stats
  const teamOffenseStats = [
    {
      id: 1,
      name: "Boston Celtics",
      abbreviation: "BOS",
      record: "41-12",
      ppg: 123.8,
      fgPct: 48.2,
      threePtPct: 38.5,
      ftPct: 82.1,
      assists: 26.8,
      pace: 101.2,
      offRtg: 118.3,
    },
    {
      id: 2,
      name: "Indiana Pacers",
      abbreviation: "IND",
      record: "33-25",
      ppg: 123.6,
      fgPct: 50.1,
      threePtPct: 37.2,
      ftPct: 78.3,
      assists: 31.2,
      pace: 104.5,
      offRtg: 117.2,
    },
    {
      id: 3,
      name: "Sacramento Kings",
      abbreviation: "SAC",
      record: "33-23",
      ppg: 118.2,
      fgPct: 47.6,
      threePtPct: 36.8,
      ftPct: 79.5,
      assists: 28.9,
      pace: 102.8,
      offRtg: 116.5,
    },
    {
      id: 4,
      name: "Milwaukee Bucks",
      abbreviation: "MIL",
      record: "35-21",
      ppg: 118.1,
      fgPct: 48.7,
      threePtPct: 37.8,
      ftPct: 81.3,
      assists: 25.7,
      pace: 99.8,
      offRtg: 116.1,
    },
    {
      id: 5,
      name: "Oklahoma City Thunder",
      abbreviation: "OKC",
      record: "37-17",
      ppg: 117.9,
      fgPct: 49.3,
      threePtPct: 38.1,
      ftPct: 80.2,
      assists: 26.1,
      pace: 100.7,
      offRtg: 115.9,
    },
    {
      id: 6,
      name: "Atlanta Hawks",
      abbreviation: "ATL",
      record: "24-31",
      ppg: 117.8,
      fgPct: 46.5,
      threePtPct: 36.7,
      ftPct: 83.1,
      assists: 25.3,
      pace: 103.1,
      offRtg: 115.7,
    }
  ];

  // Sample team data for defensive stats
  const teamDefenseStats = [
    {
      id: 1,
      name: "Minnesota Timberwolves",
      abbreviation: "MIN",
      record: "37-16",
      oppPpg: 105.8,
      oppFgPct: 44.1,
      oppThreePtPct: 34.2,
      steals: 8.1,
      blocks: 6.3,
      defRtg: 107.6,
      oppTov: 13.8,
    },
    {
      id: 2,
      name: "Cleveland Cavaliers",
      abbreviation: "CLE",
      record: "36-16",
      oppPpg: 107.6,
      oppFgPct: 45.2,
      oppThreePtPct: 34.8,
      steals: 7.2,
      blocks: 5.1,
      defRtg: 109.3,
      oppTov: 13.2,
    },
    {
      id: 3,
      name: "Boston Celtics",
      abbreviation: "BOS",
      record: "41-12",
      oppPpg: 108.2,
      oppFgPct: 45.7,
      oppThreePtPct: 35.6,
      steals: 7.8,
      blocks: 5.8,
      defRtg: 110.2,
      oppTov: 13.5,
    },
    {
      id: 4,
      name: "Orlando Magic",
      abbreviation: "ORL",
      record: "30-25",
      oppPpg: 108.5,
      oppFgPct: 46.3,
      oppThreePtPct: 35.4,
      steals: 7.4,
      blocks: 5.4,
      defRtg: 110.7,
      oppTov: 14.1,
    },
    {
      id: 5,
      name: "Oklahoma City Thunder",
      abbreviation: "OKC",
      record: "37-17",
      oppPpg: 109.3,
      oppFgPct: 45.9,
      oppThreePtPct: 36.2,
      steals: 8.6,
      blocks: 5.6,
      defRtg: 111.2,
      oppTov: 14.6,
    },
    {
      id: 6,
      name: "New York Knicks",
      abbreviation: "NYK",
      record: "33-22",
      oppPpg: 109.6,
      oppFgPct: 46.7,
      oppThreePtPct: 36.5,
      steals: 6.8,
      blocks: 4.9,
      defRtg: 111.5,
      oppTov: 12.9,
    }
  ];

  // Tabs for the stats page
  const tabs = [
    { id: "players", label: "Player Stats" },
    { id: "teams", label: "Team Stats" },
  ];

  // Player stat filters
  const playerStatFilters = [
    { id: "points", label: "Points" },
    { id: "rebounds", label: "Rebounds" },
    { id: "assists", label: "Assists" },
    { id: "steals", label: "Steals" },
    { id: "blocks", label: "Blocks" },
    { id: "threePtMade", label: "3PT Made" },
    { id: "fantasy", label: "Fantasy Pts" },
  ];

  // Team stat filters
  const teamStatFilters = [
    { id: "ppg", label: "Points" },
    { id: "assists", label: "Assists" },
    { id: "fgPct", label: "FG%" },
    { id: "threePtPct", label: "3PT%" },
    { id: "pace", label: "Pace" },
    { id: "offRtg", label: "Off Rtg" },
  ];

  // Team defense filters
  const teamDefenseFilters = [
    { id: "oppPpg", label: "Opp Points" },
    { id: "oppFgPct", label: "Opp FG%" },
    { id: "steals", label: "Steals" },
    { id: "blocks", label: "Blocks" },
    { id: "defRtg", label: "Def Rtg" },
    { id: "oppTov", label: "Opp Turnovers" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navigation */}
      {/* Header component will be imported separately */}

      {/* Main Stats Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg overflow-hidden mb-8">
          <div className="relative py-8 px-6 md:py-10 md:px-8">            
            <div className="relative z-10 md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                NBA Stats & Leaderboards
              </h2>
              <div className="h-1 w-20 bg-purple-500 rounded mb-5"></div>
              <p className="text-xl text-purple-200 font-medium mb-4">
                Track the league's top performers and team statistics
              </p>
              <p className="text-purple-200 mb-6 max-w-xl">
                Comprehensive NBA statistics, updated daily to give you the latest player and team performance metrics.
              </p>
            </div>
          </div>
          
          {/* Stats Bar */}
          <div className="bg-purple-800 py-3 px-4 md:px-8 flex flex-wrap justify-between items-center text-purple-200 text-sm">
            <div className="flex items-center">
              <span className="font-medium">NBA Season:</span>
              <span className="ml-2">2024-25</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">Total Players:</span>
              <span className="ml-2">450+</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">Teams:</span>
              <span className="ml-2">30</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">Last Updated:</span>
              <span className="ml-2">March 6, 2025</span>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 mb-8">
          <div className="flex border-b border-gray-800 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-6 py-3 font-medium ${
                  activeTab === tab.id
                    ? "text-purple-400 border-b-2 border-purple-500"
                    : "text-gray-400 hover:text-purple-200"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Player Stats Content */}
          {activeTab === "players" && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-200">Player Stats Leaderboard</h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {playerStatFilters.map((filter) => (
                  <button
                    key={filter.id}
                    className={`px-4 py-2 rounded-md ${
                      playerStatSort === filter.id
                        ? "bg-purple-600 text-white"
                        : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                    }`}
                    onClick={() => setPlayerStatSort(filter.id)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Player Stats Table - Just the framework without data */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="p-3 text-left text-gray-300 font-semibold">Rank</th>
                      <th className="p-3 text-left text-gray-300 font-semibold">Player</th>
                      <th className="p-3 text-left text-gray-300 font-semibold">Team</th>
                      <th className="p-3 text-left text-gray-300 font-semibold">Pos</th>
                      <th className="p-3 text-right text-gray-300 font-semibold">
                        {playerStatFilters.find(f => f.id === playerStatSort)?.label || "Points"}
                      </th>
                      <th className="p-3 text-right text-gray-300 font-semibold">GP</th>
                      <th className="p-3 text-right text-gray-300 font-semibold">Min</th>
                      <th className="p-3 text-right text-gray-300 font-semibold">Trend</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {/* Will be populated with player data later */}
                    <tr className="bg-gray-900 hover:bg-gray-800">
                      <td className="p-3" colSpan="8">
                        <div className="text-center text-gray-400 py-4">
                          Player data will be added later
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Team Stats Content */}
          {activeTab === "teams" && (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Team Offense Stats */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-purple-200">Team Offense Rankings</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {teamStatFilters.map((filter) => (
                      <button
                        key={filter.id}
                        className={`px-3 py-1 text-sm rounded-md ${
                          teamStatSort === filter.id
                            ? "bg-purple-600 text-white"
                            : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                        }`}
                        onClick={() => setTeamStatSort(filter.id)}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>

                  {/* Team Offense Stats Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead className="bg-gray-800">
                        <tr>
                          <th className="p-2 text-left text-gray-300 font-semibold text-sm">Rank</th>
                          <th className="p-2 text-left text-gray-300 font-semibold text-sm">Team</th>
                          <th className="p-2 text-right text-gray-300 font-semibold text-sm">PPG</th>
                          <th className="p-2 text-right text-gray-300 font-semibold text-sm">FG%</th>
                          <th className="p-2 text-right text-gray-300 font-semibold text-sm">3PT%</th>
                          <th className="p-2 text-right text-gray-300 font-semibold text-sm">AST</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {teamOffenseStats
                          .sort((a, b) => b[teamStatSort] - a[teamStatSort])
                          .map((team, index) => (
                            <tr key={team.id} className="bg-gray-900 hover:bg-gray-800">
                              <td className="p-2 text-sm">{index + 1}</td>
                              <td className="p-2">
                                <div className="flex items-center">
                                  <div className="h-6 w-6 bg-purple-600 rounded-full mr-2 flex items-center justify-center font-bold text-xs">
                                    {team.abbreviation.charAt(0)}
                                  </div>
                                  <span className="font-medium text-sm">{team.name}</span>
                                </div>
                              </td>
                              <td className={`p-2 text-right text-sm ${teamStatSort === 'ppg' ? 'text-purple-400 font-bold' : 'text-gray-300'}`}>
                                {team.ppg.toFixed(1)}
                              </td>
                              <td className={`p-2 text-right text-sm ${teamStatSort === 'fgPct' ? 'text-purple-400 font-bold' : 'text-gray-300'}`}>
                                {team.fgPct.toFixed(1)}%
                              </td>
                              <td className={`p-2 text-right text-sm ${teamStatSort === 'threePtPct' ? 'text-purple-400 font-bold' : 'text-gray-300'}`}>
                                {team.threePtPct.toFixed(1)}%
                              </td>
                              <td className={`p-2 text-right text-sm ${teamStatSort === 'assists' ? 'text-purple-400 font-bold' : 'text-gray-300'}`}>
                                {team.assists.toFixed(1)}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Team Defense Stats */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-purple-200">Team Defense Rankings</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {teamDefenseFilters.map((filter) => (
                      <button
                        key={filter.id}
                        className={`px-3 py-1 text-sm rounded-md ${
                          teamStatSort === filter.id
                            ? "bg-purple-600 text-white"
                            : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                        }`}
                        onClick={() => setTeamStatSort(filter.id)}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>

                  {/* Team Defense Stats Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead className="bg-gray-800">
                        <tr>
                          <th className="p-2 text-left text-gray-300 font-semibold text-sm">Rank</th>
                          <th className="p-2 text-left text-gray-300 font-semibold text-sm">Team</th>
                          <th className="p-2 text-right text-gray-300 font-semibold text-sm">OPP PPG</th>
                          <th className="p-2 text-right text-gray-300 font-semibold text-sm">OPP FG%</th>
                          <th className="p-2 text-right text-gray-300 font-semibold text-sm">STL</th>
                          <th className="p-2 text-right text-gray-300 font-semibold text-sm">BLK</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {teamDefenseStats
                          .sort((a, b) => {
                            // Sort in ascending order for defensive metrics (lower is better)
                            if (teamStatSort === 'oppPpg' || teamStatSort === 'oppFgPct' || teamStatSort === 'oppThreePtPct') {
                              return a[teamStatSort] - b[teamStatSort];
                            }
                            // Sort in descending order for steals, blocks, etc. (higher is better)
                            return b[teamStatSort] - a[teamStatSort];
                          })
                          .map((team, index) => (
                            <tr key={team.id} className="bg-gray-900 hover:bg-gray-800">
                              <td className="p-2 text-sm">{index + 1}</td>
                              <td className="p-2">
                                <div className="flex items-center">
                                  <div className="h-6 w-6 bg-purple-600 rounded-full mr-2 flex items-center justify-center font-bold text-xs">
                                    {team.abbreviation.charAt(0)}
                                  </div>
                                  <span className="font-medium text-sm">{team.name}</span>
                                </div>
                              </td>
                              <td className={`p-2 text-right text-sm ${teamStatSort === 'oppPpg' ? 'text-purple-400 font-bold' : 'text-gray-300'}`}>
                                {team.oppPpg.toFixed(1)}
                              </td>
                              <td className={`p-2 text-right text-sm ${teamStatSort === 'oppFgPct' ? 'text-purple-400 font-bold' : 'text-gray-300'}`}>
                                {team.oppFgPct.toFixed(1)}%
                              </td>
                              <td className={`p-2 text-right text-sm ${teamStatSort === 'steals' ? 'text-purple-400 font-bold' : 'text-gray-300'}`}>
                                {team.steals.toFixed(1)}
                              </td>
                              <td className={`p-2 text-right text-sm ${teamStatSort === 'blocks' ? 'text-purple-400 font-bold' : 'text-gray-300'}`}>
                                {team.blocks.toFixed(1)}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Advanced Stats Cards */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-purple-400 text-sm font-semibold mb-2">Highest Scoring</h4>
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-purple-600 rounded-full mr-3 flex items-center justify-center font-bold">
                      B
                    </div>
                    <div>
                      <div className="font-medium">Boston Celtics</div>
                      <div className="text-sm text-gray-400">123.8 PPG</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-purple-400 text-sm font-semibold mb-2">Best Defense</h4>
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-purple-600 rounded-full mr-3 flex items-center justify-center font-bold">
                      M
                    </div>
                    <div>
                      <div className="font-medium">Minnesota Timberwolves</div>
                      <div className="text-sm text-gray-400">105.8 OPP PPG</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-purple-400 text-sm font-semibold mb-2">Most Improved</h4>
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-purple-600 rounded-full mr-3 flex items-center justify-center font-bold">
                      O
                    </div>
                    <div>
                      <div className="font-medium">Oklahoma City Thunder</div>
                      <div className="text-sm text-gray-400">+12.5 Net Rating</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-purple-400 text-sm font-semibold mb-2">Fastest Pace</h4>
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-purple-600 rounded-full mr-3 flex items-center justify-center font-bold">
                      I
                    </div>
                    <div>
                      <div className="font-medium">Indiana Pacers</div>
                      <div className="text-sm text-gray-400">104.5 Possessions/Game</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Trendspotting Section */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-purple-200">NBA Stat Trends</h3>
            <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
              View All Trends
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-800 rounded-lg p-4 bg-gray-800">
              <div className="text-sm text-gray-400 mb-1">League-Wide Scoring</div>
              <div className="text-xl font-semibold text-gray-200">114.7 PPG</div>
              <div className="flex items-center mt-1">
                <span className="text-green-400 text-sm font-medium">▲ +3.2 from last season</span>
              </div>
              <div className="mt-2 text-sm text-gray-400">
                Scoring continues to trend up in the NBA
              </div>
            </div>

            <div className="border border-gray-800 rounded-lg p-4 bg-gray-800">
              <div className="text-sm text-gray-400 mb-1">3PT Attempts Per Game</div>
              <div className="text-xl font-semibold text-gray-200">34.6</div>
              <div className="flex items-center mt-1">
                <span className="text-green-400 text-sm font-medium">▲ +1.8 from last season</span>
              </div>
              <div className="mt-2 text-sm text-gray-400">
                Teams continue to embrace the three-point shot
              </div>
            </div>

            <div className="border border-gray-800 rounded-lg p-4 bg-gray-800">
              <div className="text-sm text-gray-400 mb-1">Pace Factor</div>
              <div className="text-xl font-semibold text-gray-200">99.4</div>
              <div className="flex items-center mt-1">
                <span className="text-red-400 text-sm font-medium">▼ -0.7 from last season</span>
              </div>
              <div className="mt-2 text-sm text-gray-400">
                Slight decrease in pace across the league
              </div>
            </div>
          </div>
        </div>

        {/* Stats Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gray-900 rounded-lg border border-gray-800 p-4">
            <h3 className="text-lg font-semibold text-purple-200 mb-4">Season Statistical Insights</h3>
            
            <div className="space-y-4">
              <div className="border border-gray-800 rounded-lg p-4 hover:bg-gray-800 transition">
                <h4 className="font-medium text-gray-200 mb-2">Three-Point Revolution Continues</h4>
                <p className="text-gray-400 text-sm">
                  The league average for 3-point attempts has reached an all-time high of 34.6 per game, up from 32.8 last season. Teams are shooting 36.2% from beyond the arc, also a slight increase from last season's 35.9%.
                </p>
              </div>

              <div className="border border-gray-800 rounded-lg p-4 hover:bg-gray-800 transition">
                <h4 className="font-medium text-gray-200 mb-2">Rookie Impact Rising</h4>
                <p className="text-gray-400 text-sm">
                  This season's rookie class is averaging 11.2 PPG, 4.8 RPG, and 2.6 APG, marking the highest collective scoring average for rookies in the last decade.
                </p>
              </div>

              <div className="border border-gray-800 rounded-lg p-4 hover:bg-gray-800 transition">
                <h4 className="font-medium text-gray-200 mb-2">Defensive Efficiency Trends</h4>
                <p className="text-gray-400 text-sm">
                  Despite the scoring boom, the top 5 defensive teams are holding opponents to under 110 points per 100 possessions, showing elite defenses can still thrive in a high-scoring era.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
            <h3 className="text-lg font-semibold text-purple-200 mb-4">Stats Breakdown</h3>
            
            <div className="space-y-3">
              <div className="bg-gray-800 rounded-lg p-3">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">League PPG</span>
                  <span className="text-sm font-medium text-gray-200">114.7</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: "68%" }}></div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-3">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">3PT%</span>
                  <span className="text-sm font-medium text-gray-200">36.2%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: "56%" }}></div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-3">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">FT%</span>
                  <span className="text-sm font-medium text-gray-200">78.3%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: "72%" }}></div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-3">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">Assists Per Game</span>
                  <span className="text-sm font-medium text-gray-200">24.8</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: "61%" }}></div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-3">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">Turnovers Per Game</span>
                  <span className="text-sm font-medium text-gray-200">13.2</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: "43%" }}></div>
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

export default NBAStatsPage;
