import React, { useState } from "react";

const PlayerStats = () => {
  const [statCategory, setStatCategory] = useState("scoring");
  const [timeFrame, setTimeFrame] = useState("season");
  const [teamFilter, setTeamFilter] = useState("all");
  const [teamStatView, setTeamStatView] = useState("offense");

  // Sample data for player stats
  const playerStatsData = [
    {
      id: 1,
      player: "Joel Embiid",
      team: "PHI",
      position: "C",
      gamesPlayed: 42,
      ppg: 33.8,
      rpg: 11.2,
      apg: 5.6,
      spg: 1.1,
      bpg: 1.7,
      tpg: 3.9,
      mpg: 34.5,
      fgp: 52.9,
      tpp: 37.8,
      ftp: 88.5,
      overRate: 72,
      underRate: 28,
      propSuccessRate: 68,
    },
    {
      id: 2,
      player: "Nikola Jokić",
      team: "DEN",
      position: "C",
      gamesPlayed: 64,
      ppg: 26.4,
      rpg: 12.5,
      apg: 9.2,
      spg: 1.3,
      bpg: 0.9,
      tpg: 3.1,
      mpg: 34.8,
      fgp: 58.4,
      tpp: 35.9,
      ftp: 82.1,
      overRate: 68,
      underRate: 32,
      propSuccessRate: 76,
    },
    {
      id: 3,
      player: "Giannis Antetokounmpo",
      team: "MIL",
      position: "PF",
      gamesPlayed: 61,
      ppg: 30.4,
      rpg: 11.5,
      apg: 6.5,
      spg: 1.2,
      bpg: 1.1,
      tpg: 3.5,
      mpg: 34.2,
      fgp: 61.1,
      tpp: 28.6,
      ftp: 65.7,
      overRate: 64,
      underRate: 36,
      propSuccessRate: 63,
    },
    {
      id: 4,
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      position: "PG",
      gamesPlayed: 68,
      ppg: 31.0,
      rpg: 5.5,
      apg: 6.8,
      spg: 2.1,
      bpg: 0.9,
      tpg: 2.4,
      mpg: 33.8,
      fgp: 53.7,
      tpp: 36.2,
      ftp: 90.4,
      overRate: 71,
      underRate: 29,
      propSuccessRate: 65,
    },
    {
      id: 5,
      player: "Luka Dončić",
      team: "DAL",
      position: "PG",
      gamesPlayed: 62,
      ppg: 32.8,
      rpg: 8.8,
      apg: 9.1,
      spg: 1.5,
      bpg: 0.5,
      tpg: 3.9,
      mpg: 36.6,
      fgp: 48.7,
      tpp: 38.2,
      ftp: 78.5,
      overRate: 69,
      underRate: 31,
      propSuccessRate: 66,
    },
    {
      id: 6,
      player: "Anthony Edwards",
      team: "MIN",
      position: "SG",
      gamesPlayed: 70,
      ppg: 27.4,
      rpg: 5.5,
      apg: 5.1,
      spg: 1.4,
      bpg: 0.5,
      tpg: 2.9,
      mpg: 35.7,
      fgp: 46.5,
      tpp: 37.8,
      ftp: 83.2,
      overRate: 62,
      underRate: 38,
      propSuccessRate: 61,
    },
    {
      id: 7,
      player: "Jayson Tatum",
      team: "BOS",
      position: "SF",
      gamesPlayed: 68,
      ppg: 28.1,
      rpg: 8.2,
      apg: 4.8,
      spg: 1.0,
      bpg: 0.6,
      tpg: 2.6,
      mpg: 35.9,
      fgp: 47.3,
      tpp: 37.2,
      ftp: 82.5,
      overRate: 58,
      underRate: 42,
      propSuccessRate: 59,
    },
    {
      id: 8,
      player: "LeBron James",
      team: "LAL",
      position: "SF",
      gamesPlayed: 63,
      ppg: 25.9,
      rpg: 7.3,
      apg: 8.6,
      spg: 1.2,
      bpg: 0.5,
      tpg: 3.4,
      mpg: 35.3,
      fgp: 54.1,
      tpp: 39.9,
      ftp: 75.4,
      overRate: 65,
      underRate: 35,
      propSuccessRate: 67,
    },
    {
      id: 9,
      player: "Kevin Durant",
      team: "PHX",
      position: "SF",
      gamesPlayed: 60,
      ppg: 27.2,
      rpg: 6.8,
      apg: 5.0,
      spg: 0.9,
      bpg: 1.2,
      tpg: 2.3,
      mpg: 36.2,
      fgp: 52.9,
      tpp: 41.2,
      ftp: 86.4,
      overRate: 67,
      underRate: 33,
      propSuccessRate: 70,
    },
    {
      id: 10,
      player: "Stephen Curry",
      team: "GSW",
      position: "PG",
      gamesPlayed: 58,
      ppg: 26.8,
      rpg: 4.5,
      apg: 5.1,
      spg: 0.7,
      bpg: 0.4,
      tpg: 2.8,
      mpg: 33.1,
      fgp: 45.2,
      tpp: 40.8,
      ftp: 92.3,
      overRate: 63,
      underRate: 37,
      propSuccessRate: 64,
    },
    {
      id: 11,
      player: "Devin Booker",
      team: "PHX",
      position: "SG",
      gamesPlayed: 64,
      ppg: 27.1,
      rpg: 4.6,
      apg: 6.9,
      spg: 1.0,
      bpg: 0.4,
      tpg: 2.7,
      mpg: 36.5,
      fgp: 49.8,
      tpp: 38.3,
      ftp: 87.9,
      overRate: 60,
      underRate: 40,
      propSuccessRate: 62,
    },
    {
      id: 12,
      player: "Jalen Brunson",
      team: "NYK",
      position: "PG",
      gamesPlayed: 69,
      ppg: 28.7,
      rpg: 3.6,
      apg: 6.7,
      spg: 0.9,
      bpg: 0.2,
      tpg: 2.4,
      mpg: 35.2,
      fgp: 47.8,
      tpp: 40.1,
      ftp: 84.2,
      overRate: 66,
      underRate: 34,
      propSuccessRate: 69,
    },
    {
      id: 13,
      player: "Damian Lillard",
      team: "MIL",
      position: "PG",
      gamesPlayed: 60,
      ppg: 24.5,
      rpg: 4.4,
      apg: 7.0,
      spg: 1.0,
      bpg: 0.3,
      tpg: 2.6,
      mpg: 34.8,
      fgp: 42.9,
      tpp: 37.1,
      ftp: 91.5,
      overRate: 61,
      underRate: 39,
      propSuccessRate: 60,
    },
    {
      id: 14,
      player: "Tyrese Haliburton",
      team: "IND",
      position: "PG",
      gamesPlayed: 58,
      ppg: 20.8,
      rpg: 3.9,
      apg: 10.9,
      spg: 1.2,
      bpg: 0.6,
      tpg: 2.3,
      mpg: 32.9,
      fgp: 47.3,
      tpp: 36.8,
      ftp: 85.7,
      overRate: 72,
      underRate: 28,
      propSuccessRate: 74,
    },
    {
      id: 15,
      player: "Anthony Davis",
      team: "LAL",
      position: "PF",
      gamesPlayed: 65,
      ppg: 24.7,
      rpg: 12.6,
      apg: 3.4,
      spg: 1.2,
      bpg: 2.3,
      tpg: 2.1,
      mpg: 35.4,
      fgp: 55.6,
      tpp: 28.4,
      ftp: 81.3,
      overRate: 59,
      underRate: 41,
      propSuccessRate: 63,
    },
  ];

  // Sample data for team offensive stats
  const teamOffenseStats = [
    {
      id: 1,
      team: "Boston Celtics",
      abbreviation: "BOS",
      record: "52-14",
      ppg: 120.8,
      fgp: 48.9,
      tpp: 38.5,
      apg: 26.8,
      pace: 99.2,
      ortg: 122.5,
      overHitRate: 65,
      ptsOverLastTen: 7,
    },
    {
      id: 2,
      team: "Indiana Pacers",
      abbreviation: "IND",
      record: "37-29",
      ppg: 119.5,
      fgp: 50.2,
      tpp: 37.2,
      apg: 30.1,
      pace: 102.3,
      ortg: 119.7,
      overHitRate: 68,
      ptsOverLastTen: 8,
    },
    {
      id: 3,
      team: "Milwaukee Bucks",
      abbreviation: "MIL",
      record: "41-25",
      ppg: 119.3,
      fgp: 49.1,
      tpp: 37.5,
      apg: 25.7,
      pace: 98.7,
      ortg: 118.9,
      overHitRate: 61,
      ptsOverLastTen: 6,
    },
    {
      id: 4,
      team: "Oklahoma City Thunder",
      abbreviation: "OKC",
      record: "45-20",
      ppg: 118.7,
      fgp: 49.8,
      tpp: 38.7,
      apg: 26.9,
      pace: 100.1,
      ortg: 119.2,
      overHitRate: 63,
      ptsOverLastTen: 7,
    },
    {
      id: 5,
      team: "Dallas Mavericks",
      abbreviation: "DAL",
      record: "38-28",
      ppg: 118.3,
      fgp: 47.8,
      tpp: 36.9,
      apg: 24.8,
      pace: 97.9,
      ortg: 118.6,
      overHitRate: 59,
      ptsOverLastTen: 6,
    },
    {
      id: 6,
      team: "Sacramento Kings",
      abbreviation: "SAC",
      record: "37-28",
      ppg: 118.2,
      fgp: 48.3,
      tpp: 36.8,
      apg: 27.8,
      pace: 100.5,
      ortg: 118.1,
      overHitRate: 64,
      ptsOverLastTen: 7,
    },
    {
      id: 7,
      team: "Cleveland Cavaliers",
      abbreviation: "CLE",
      record: "42-24",
      ppg: 117.9,
      fgp: 49.2,
      tpp: 37.1,
      apg: 26.3,
      pace: 97.2,
      ortg: 118.8,
      overHitRate: 60,
      ptsOverLastTen: 6,
    },
    {
      id: 8,
      team: "Denver Nuggets",
      abbreviation: "DEN",
      record: "46-20",
      ppg: 117.5,
      fgp: 49.5,
      tpp: 37.7,
      apg: 29.3,
      pace: 97.8,
      ortg: 118.5,
      overHitRate: 57,
      ptsOverLastTen: 5,
    },
    {
      id: 9,
      team: "Phoenix Suns",
      abbreviation: "PHX",
      record: "38-28",
      ppg: 117.2,
      fgp: 48.7,
      tpp: 38.2,
      apg: 27.1,
      pace: 99.3,
      ortg: 117.9,
      overHitRate: 58,
      ptsOverLastTen: 6,
    },
    {
      id: 10,
      team: "Atlanta Hawks",
      abbreviation: "ATL",
      record: "30-36",
      ppg: 117.1,
      fgp: 46.9,
      tpp: 36.4,
      apg: 25.2,
      pace: 101.8,
      ortg: 116.5,
      overHitRate: 61,
      ptsOverLastTen: 6,
    },
  ];

  // Sample data for team defensive stats
  const teamDefenseStats = [
    {
      id: 1,
      team: "Minnesota Timberwolves",
      abbreviation: "MIN",
      record: "45-21",
      oppPpg: 106.4,
      oppFgp: 44.5,
      oppTpp: 34.1,
      stl: 8.3,
      blk: 6.2,
      drtg: 108.3,
      underHitRate: 69,
      ptsUnderLastTen: 8,
    },
    {
      id: 2,
      team: "Boston Celtics",
      abbreviation: "BOS",
      record: "52-14",
      oppPpg: 108.1,
      oppFgp: 45.2,
      oppTpp: 34.9,
      stl: 7.2,
      blk: 5.7,
      drtg: 110.1,
      underHitRate: 65,
      ptsUnderLastTen: 7,
    },
    {
      id: 3,
      team: "Cleveland Cavaliers",
      abbreviation: "CLE",
      record: "42-24",
      oppPpg: 109.8,
      oppFgp: 46.1,
      oppTpp: 35.2,
      stl: 7.5,
      blk: 4.9,
      drtg: 110.8,
      underHitRate: 62,
      ptsUnderLastTen: 6,
    },
    {
      id: 4,
      team: "Oklahoma City Thunder",
      abbreviation: "OKC",
      record: "45-20",
      oppPpg: 110.2,
      oppFgp: 45.8,
      oppTpp: 35.7,
      stl: 8.2,
      blk: 5.4,
      drtg: 111.5,
      underHitRate: 61,
      ptsUnderLastTen: 6,
    },
    {
      id: 5,
      team: "Orlando Magic",
      abbreviation: "ORL",
      record: "36-30",
      oppPpg: 110.3,
      oppFgp: 46.5,
      oppTpp: 35.9,
      stl: 7.1,
      blk: 5.1,
      drtg: 111.7,
      underHitRate: 60,
      ptsUnderLastTen: 6,
    },
    {
      id: 6,
      team: "Denver Nuggets",
      abbreviation: "DEN",
      record: "46-20",
      oppPpg: 110.6,
      oppFgp: 46.8,
      oppTpp: 36.3,
      stl: 7.4,
      blk: 4.3,
      drtg: 112.4,
      underHitRate: 57,
      ptsUnderLastTen: 5,
    },
    {
      id: 7,
      team: "Miami Heat",
      abbreviation: "MIA",
      record: "35-30",
      oppPpg: 110.8,
      oppFgp: 47.0,
      oppTpp: 36.8,
      stl: 7.6,
      blk: 4.1,
      drtg: 112.6,
      underHitRate: 59,
      ptsUnderLastTen: 6,
    },
    {
      id: 8,
      team: "New York Knicks",
      abbreviation: "NYK",
      record: "38-27",
      oppPpg: 111.0,
      oppFgp: 45.9,
      oppTpp: 35.6,
      stl: 6.8,
      blk: 4.5,
      drtg: 113.1,
      underHitRate: 56,
      ptsUnderLastTen: 6,
    },
    {
      id: 9,
      team: "Los Angeles Clippers",
      abbreviation: "LAC",
      record: "41-25",
      oppPpg: 111.4,
      oppFgp: 47.2,
      oppTpp: 36.5,
      stl: 7.1,
      blk: 5.0,
      drtg: 113.6,
      underHitRate: 55,
      ptsUnderLastTen: 5,
    },
    {
      id: 10,
      team: "Philadelphia 76ers",
      abbreviation: "PHI",
      record: "36-30",
      oppPpg: 111.7,
      oppFgp: 47.5,
      oppTpp: 36.7,
      stl: 7.2,
      blk: 5.2,
      drtg: 113.8,
      underHitRate: 54,
      ptsUnderLastTen: 5,
    },
  ];

  // Stats filter categories
  const statCategories = [
    { id: "scoring", label: "Scoring" },
    { id: "rebounds", label: "Rebounds" },
    { id: "assists", label: "Assists" },
    { id: "fantasy", label: "Fantasy" },
    { id: "prop-success", label: "Prop Success" },
  ];

  // Time frame filters
  const timeFrameFilters = [
    { id: "season", label: "Season" },
    { id: "last-10", label: "Last 10" },
    { id: "last-5", label: "Last 5" },
    { id: "home", label: "Home" },
    { id: "away", label: "Away" },
  ];

  // Team filters
  const teams = [
    { id: "all", name: "All Teams" },
    { id: "BOS", name: "Boston Celtics" },
    { id: "DEN", name: "Denver Nuggets" },
    { id: "GSW", name: "Golden State Warriors" },
    { id: "LAL", name: "Los Angeles Lakers" },
    { id: "MIL", name: "Milwaukee Bucks" },
    { id: "NYK", name: "New York Knicks" },
    { id: "OKC", name: "Oklahoma City Thunder" },
    { id: "PHI", name: "Philadelphia 76ers" },
    { id: "PHX", name: "Phoenix Suns" },
  ];

  // Function to render the player stats based on selected category
  const renderPlayerStatsTable = () => {
    // Sort players based on the selected stat category
    let sortedPlayers = [...playerStatsData];
    
    if (statCategory === "scoring") {
      sortedPlayers = sortedPlayers.sort((a, b) => b.ppg - a.ppg);
    } else if (statCategory === "rebounds") {
      sortedPlayers = sortedPlayers.sort((a, b) => b.rpg - a.rpg);
    } else if (statCategory === "assists") {
      sortedPlayers = sortedPlayers.sort((a, b) => b.apg - a.apg);
    } else if (statCategory === "fantasy") {
      // Fantasy points calculation (simple version: pts + 1.2*reb + 1.5*ast + 3*stl + 3*blk - 1*to)
      sortedPlayers = sortedPlayers.sort((a, b) => {
        const aFantasy = a.ppg + 1.2*a.rpg + 1.5*a.apg + 3*a.spg + 3*a.bpg - a.tpg;
        const bFantasy = b.ppg + 1.2*b.rpg + 1.5*b.apg + 3*b.spg + 3*b.bpg - b.tpg;
        return bFantasy - aFantasy;
      });
    } else if (statCategory === "prop-success") {
      sortedPlayers = sortedPlayers.sort((a, b) => b.propSuccessRate - a.propSuccessRate);
    }
    
    // Filter by team if needed
    if (teamFilter !== "all") {
      sortedPlayers = sortedPlayers.filter(player => player.team === teamFilter);
    }

    return (
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-800 border-b border-gray-700">
            <tr>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Rank</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Player</th>
              <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Team</th>
              <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Pos</th>
              <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">GP</th>
              {statCategory === "scoring" && (
                <>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">PPG</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">FG%</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">3P%</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">FT%</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">PTS OVER%</th>
                </>
              )}
              {statCategory === "rebounds" && (
                <>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">RPG</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">MPG</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">REB OVER%</th>
                </>
              )}
              {statCategory === "assists" && (
                <>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">APG</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">AST/TO</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">AST OVER%</th>
                </>
              )}
              {statCategory === "fantasy" && (
                <>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">PTS</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">REB</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">AST</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">STL</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">BLK</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">TO</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">FPTS</th>
                </>
              )}
              {statCategory === "prop-success" && (
                <>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Prop Success</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">OVER Rate</th>
                  <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">UNDER Rate</th>
                </>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {sortedPlayers.map((player, index) => (
              <tr key={player.id} className="bg-gray-900 hover:bg-gray-800 transition-colors">
                <td className="py-4 px-4 font-medium text-gray-300">{index + 1}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className="h-8 w-8 bg-purple-600 rounded-full mr-2 flex items-center justify-center font-bold text-white">
                      {player.player.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-white">{player.player}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-center text-gray-300">{player.team}</td>
                <td className="py-4 px-4 text-center text-gray-300">{player.position}</td>
                <td className="py-4 px-4 text-center text-gray-300">{player.gamesPlayed}</td>
                
                {statCategory === "scoring" && (
                  <>
                    <td className="py-4 px-4 text-center font-medium text-white">{player.ppg}</td>
                    <td className="py-4 px-4 text-center text-gray-300">{player.fgp}%</td>
                    <td className="py-4 px-4 text-center text-gray-300">{player.tpp}%</td>
                    <td className="py-4 px-4 text-center text-gray-300">{player.ftp}%</td>
                    <td className="py-4 px-4 text-center">
                      <span className={`font-medium ${
                        player.overRate >= 70 ? "text-green-400" : 
                        player.overRate >= 50 ? "text-yellow-400" : "text-red-400"
                      }`}>
                        {player.overRate}%</span>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">NBA Analytics Dashboard</h1>
        
        {/* Main content tabs */}
        <div className="flex mb-8 border-b border-gray-700">
          <button
            className={`px-4 py-2 font-medium ${
              teamFilter === "all" ? "text-purple-400 border-b-2 border-purple-400" : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setTeamFilter("all")}
          >
            All Players
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              teamStatView === "offense" && teamFilter !== "all" ? "text-purple-400 border-b-2 border-purple-400" : "text-gray-400 hover:text-white"
            }`}
            onClick={() => {setTeamStatView("offense"); setTeamFilter("team");}}
          >
            Team Offense
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              teamStatView === "defense" ? "text-purple-400 border-b-2 border-purple-400" : "text-gray-400 hover:text-white"
            }`}
            onClick={() => {setTeamStatView("defense"); setTeamFilter("team");}}
          >
            Team Defense
          </button>
        </div>
        
        {/* Filters */}
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Only show stat categories filter for player stats */}
            {teamFilter === "all" && (
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Stat Category</label>
                <div className="flex flex-wrap gap-2">
                  {statCategories.map((category) => (
                    <button
                      key={category.id}
                      className={`px-3 py-1 text-sm rounded-full ${
                        statCategory === category.id
                          ? "bg-purple-600 text-white"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                      onClick={() => setStatCategory(category.id)}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Time frame filters */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Time Frame</label>
              <div className="flex flex-wrap gap-2">
                {timeFrameFilters.map((filter) => (
                  <button
                    key={filter.id}
                    className={`px-3 py-1 text-sm rounded-full ${
                      timeFrame === filter.id
                        ? "bg-purple-600 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                    onClick={() => setTimeFrame(filter.id)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Team filters - only show for player stats */}
            {teamFilter === "all" && (
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Team</label>
                <select
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white"
                  value={teamFilter}
                  onChange={(e) => setTeamFilter(e.target.value)}
                >
                  {teams.map((team) => (
                    <option key={team.id} value={team.id}>
                      {team.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            
            {/* Team offense/defense toggle - only show for team stats */}
            {teamFilter !== "all" && (
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Team View</label>
                <div className="flex">
                  <button
                    className={`px-4 py-2 text-sm rounded-l-md ${
                      teamStatView === "offense"
                        ? "bg-purple-600 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                    onClick={() => setTeamStatView("offense")}
                  >
                    Offense
                  </button>
                  <button
                    className={`px-4 py-2 text-sm rounded-r-md ${
                      teamStatView === "defense"
                        ? "bg-purple-600 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                    onClick={() => setTeamStatView("defense")}
                  >
                    Defense
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Stats tables */}
        <div className="bg-gray-800 rounded-lg p-6">
          {teamFilter === "all" ? (
            <>
              <h2 className="text-xl font-bold mb-4">
                {statCategory === "scoring" && "Top Scorers"}
                {statCategory === "rebounds" && "Top Rebounders"}
                {statCategory === "assists" && "Top Playmakers"}
                {statCategory === "fantasy" && "Fantasy Leaders"}
                {statCategory === "prop-success" && "Prop Bet Success Rate Leaders"}
              </h2>
              {renderPlayerStatsTable()}
            </>
          ) : teamStatView === "offense" ? (
            <>
              <h2 className="text-xl font-bold mb-4">Team Offensive Stats</h2>
              {renderTeamOffenseStats()}
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold mb-4">Team Defensive Stats</h2>
              {renderTeamDefenseStats()}
            </>
          )}
        </div>
        
        {/* Stats insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="font-bold text-lg mb-2 text-purple-400">Scoring Trends</h3>
            <p className="text-gray-300">League scoring is up 2.8% compared to last season with average points per game now at 114.7.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="font-bold text-lg mb-2 text-purple-400">Prop Bet Analysis</h3>
            <p className="text-gray-300">Point props have hit the over 58% of the time in the last two weeks, indicating lines may be adjusting slower than player performance.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="font-bold text-lg mb-2 text-purple-400">Fantasy Advice</h3>
            <p className="text-gray-300">Centers are providing the best value in fantasy leagues this season with elite big men contributing across multiple categories.</p>
          </div>
        </div>
      </div>
    </div>
  );
  };

  // Function to render team offensive stats
  const renderTeamOffenseStats = () => {
    const sortedTeams = [...teamOffenseStats].sort((a, b) => b.ppg - a.ppg);
    
    return (
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-800 border-b border-gray-700">
            <tr>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Rank</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Team</th>
              <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Record</th>
              <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">PPG</th>
              <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">FG%</th>
              <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">3P%</th>
              <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">APG</th>
              <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Pace</th>
              <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">ORTG</th>
              <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Over Hit Rate</th>
              <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Pts Over L10</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {sortedTeams.map((team, index) => (
              <tr key={team.id} className="bg-gray-900 hover:bg-gray-800 transition-colors">
                <td className="py-4 px-4 font-medium text-gray-300">{index + 1}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className="h-8 w-8 bg-blue-600 rounded-full mr-2 flex items-center justify-center font-bold text-white">
                      {team.abbreviation.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-white">{team.team}</div>
                      <div className="text-xs text-gray-400">{team.abbreviation}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-center text-gray-300">{team.record}</td>
                <td className="py-4 px-4 text-center font-medium text-white">{team.ppg}</td>
                <td className="py-4 px-4 text-center text-gray-300">{team.fgp}%</td>
                <td className="py-4 px-4 text-center text-gray-300">{team.tpp}%</td>
                <td className="py-4 px-4 text-center text-gray-300">{team.apg}</td>
                <td className="py-4 px-4 text-center text-gray-300">{team.pace}</td>
                <td className="py-4 px-4 text-center text-gray-300">{team.ortg}</td>
                <td className="py-4 px-4 text-center">
                  <span className={`font-medium ${
                    team.overHitRate >= 65 ? "text-green-400" : 
                    team.overHitRate >= 55 ? "text-yellow-400" : "text-red-400"
                  }`}>
                    {team.overHitRate}%</span>
                </td>
                <td className="py-4 px-4 text-center">
                  <span className={`font-medium ${
                    team.ptsOverLastTen >= 7 ? "text-green-400" : 
                    team.ptsOverLastTen >= 5 ? "text-yellow-400" : "text-red-400"
                  }`}>
                    {team.ptsOverLastTen}/10</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Function to render team defensive stats
  const renderTeamDefenseStats = () => {
    const sortedTeams = [...teamDefenseStats].sort((a, b) => a.oppPpg - b.oppPpg);
    
    return (
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-800 border-b border-gray-700">
            <tr>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Rank</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Team</th>
              <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Record</th>
              <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">OPP PPG</th>
              <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">OPP FG%</th>
              <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">OPP 3P%</th>
              <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">STL</th>
              <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">BLK</th>
              <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">DRTG</th>
              <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Under Hit Rate</th>
              <th className="py-3 px-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Pts Under L10</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {sortedTeams.map((team, index) => (
              <tr key={team.id} className="bg-gray-900 hover:bg-gray-800 transition-colors">
                <td className="py-4 px-4 font-medium text-gray-300">{index + 1}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className="h-8 w-8 bg-red-600 rounded-full mr-2 flex items-center justify-center font-bold text-white">
                      {team.abbreviation.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-white">{team.team}</div>
                      <div className="text-xs text-gray-400">{team.abbreviation}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-center text-gray-300">{team.record}</td>
                <td className="py-4 px-4 text-center font-medium text-white">{team.oppPpg}</td>
                <td className="py-4 px-4 text-center text-gray-300">{team.oppFgp}%</td>
                <td className="py-4 px-4 text-center text-gray-300">{team.oppTpp}%</td>
                <td className="py-4 px-4 text-center text-gray-300">{team.stl}</td>
                <td className="py-4 px-4 text-center text-gray-300">{team.blk}</td>
                <td className="py-4 px-4 text-center text-gray-300">{team.drtg}</td>
                <td className="py-4 px-4 text-center">
                  <span className={`font-medium ${
                    team.underHitRate >= 65 ? "text-green-400" : 
                    team.underHitRate >= 55 ? "text-yellow-400" : "text-red-400"
                  }`}>
                    {team.underHitRate}%</span>
                </td>
                <td className="py-4 px-4 text-center">
                  <span className={`font-medium ${
                    team.ptsUnderLastTen >= 7 ? "text-green-400" : 
                    team.ptsUnderLastTen >= 5 ? "text-yellow-400" : "text-red-400"
                  }`}>
                    {team.ptsUnderLastTen}/10</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
                
                {statCategory === "rebounds" && (
                  <>
                    <td className="py-4 px-4 text-center font-medium text-white">{player.rpg}</td>
                    <td className="py-4 px-4 text-center text-gray-300">{player.mpg}</td>
                    <td className="py-4 px-4 text-center">
                      <span className={`font-medium ${
                        player.overRate >= 70 ? "text-green-400" : 
                        player.overRate >= 50 ? "text-yellow-400" : "text-red-400"
                      }`}>
                        {player.overRate}%</span>
                    </td>
                  </>
                )}
                
                {statCategory === "assists" && (
                  <>
                    <td className="py-4 px-4 text-center font-medium text-white">{player.apg}</td>
                    <td className="py-4 px-4 text-center text-gray-300">{(player.apg / player.tpg).toFixed(1)}</td>
                    <td className="py-4 px-4 text-center">
                      <span className={`font-medium ${
                        player.overRate >= 70 ? "text-green-400" : 
                        player.overRate >= 50 ? "text-yellow-400" : "text-red-400"
                      }`}>
                        {player.overRate}%</span>
                    </td>
                  </>
                )}
                
                {statCategory === "fantasy" && (
                  <>
                    <td className="py-4 px-4 text-center text-gray-300">{player.ppg}</td>
                    <td className="py-4 px-4 text-center text-gray-300">{player.rpg}</td>
                    <td className="py-4 px-4 text-center text-gray-300">{player.apg}</td>
                    <td className="py-4 px-4 text-center text-gray-300">{player.spg}</td>
                    <td className="py-4 px-4 text-center text-gray-300">{player.bpg}</td>
                    <td className="py-4 px-4 text-center text-gray-300">{player.tpg}</td>
                    <td className="py-4 px-4 text-center font-medium text-white">
                      {(player.ppg + 1.2*player.rpg + 1.5*player.apg + 3*player.spg + 3*player.bpg - player.tpg).toFixed(1)}
                    </td>
                  </>
                )}
                
                {statCategory === "prop-success" && (
                  <>
                    <td className="py-4 px-4 text-center font-medium text-white">{player.propSuccessRate}%</td>
                    <td className="py-4 px-4 text-center text-gray-300">{player.overRate}%</td>
                    <td className="py-4 px-4 text-center text-gray-300">{player.underRate}%</td>
                  </>
                )}
