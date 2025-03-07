iimport React, { useState } from "react";

const NBAPrizePicksCommunity = () => {
  const [feedFilter, setFeedFilter] = useState("trending");
  const [commentInput, setCommentInput] = useState("");
  const [expandedPostId, setExpandedPostId] = useState(null);
  
  // Sample data for community posts
  const communityPosts = [
    {
      id: 1,
      user: {
        name: "BasketballGuru",
        avatar: "BG",
        followers: 1243,
        winRate: 68,
      },
      date: "2h ago",
      content: "Fade the public on Curry tonight. Warriors on a back-to-back and he's gone under this line in 4 of last 5 games against elite perimeter defenders.",
      picks: [
        {
          player: "Stephen Curry",
          team: "GSW",
          opponent: "LAL",
          position: "SG",
          stat: "Points",
          line: 28.5,
          prediction: "UNDER",
          result: null, // null for pending, true for win, false for loss
        }
      ],
      likes: 42,
      comments: [
        {
          id: 101,
          user: "HoopsDreamer",
          content: "Agreed! Lakers' perimeter defense has been solid lately.",
          timestamp: "1h ago",
        },
        {
          id: 102,
          user: "BettingBaron",
          content: "Risky. Curry can explode any night regardless of matchup.",
          timestamp: "45m ago",
        }
      ]
    },
    {
      id: 2,
      user: {
        name: "StatsMaster",
        avatar: "SM",
        followers: 895,
        winRate: 72,
      },
      date: "4h ago",
      content: "Hit this parlay last night! Jokić continues to dominate the glass against smaller lineups. Looking to ride this trend again next game.",
      picks: [
        {
          player: "Nikola Jokić",
          team: "DEN",
          opponent: "MIN",
          position: "C",
          stat: "Rebounds",
          line: 11.5,
          prediction: "OVER",
          result: true,
        },
        {
          player: "Jamal Murray",
          team: "DEN",
          opponent: "MIN",
          position: "PG",
          stat: "Assists",
          line: 6.5,
          prediction: "OVER",
          result: true,
        }
      ],
      likes: 89,
      comments: [
        {
          id: 201,
          user: "DenverFan303",
          content: "Great call! Adding this to my picks tonight.",
          timestamp: "3h ago",
        },
        {
          id: 202,
          user: "PropHunter",
          content: "That Murray assist prop has hit 7 straight games. Good find!",
          timestamp: "2h ago",
        }
      ]
    },
    {
      id: 3,
      user: {
        name: "SharpShooter",
        avatar: "SS",
        followers: 2156,
        winRate: 64,
      },
      date: "6h ago",
      content: "Tatum's recent struggles continue against Embiid and the 76ers tonight. His points line is inflated due to season average.",
      picks: [
        {
          player: "Jayson Tatum",
          team: "BOS",
          opponent: "PHI",
          position: "SF",
          stat: "Points",
          line: 28.5,
          prediction: "UNDER",
          result: null,
        }
      ],
      likes: 67,
      comments: [
        {
          id: 301,
          user: "CelticsPride",
          content: "Disagree. Tatum always shows up for big games against rivals.",
          timestamp: "5h ago",
        }
      ]
    },
    {
      id: 4,
      user: {
        name: "AnalyticsAce",
        avatar: "AA",
        followers: 1785,
        winRate: 70,
      },
      date: "Yesterday",
      content: "Edwards has been unstoppable lately. His agressiveness getting to the rim has been paying off with trips to the free throw line.",
      picks: [
        {
          player: "Anthony Edwards",
          team: "MIN",
          opponent: "DEN",
          position: "SG",
          stat: "Points",
          line: 27.5,
          prediction: "OVER",
          result: true,
        }
      ],
      likes: 124,
      comments: [
        {
          id: 401,
          user: "TimberwolvesFan",
          content: "Ant-Man is in MVP form right now. Easy money!",
          timestamp: "22h ago",
        },
        {
          id: 402,
          user: "HoopsAnalyst",
          content: "His usage rate is off the charts in the last 5 games too.",
          timestamp: "20h ago",
        },
        {
          id: 403,
          user: "PropBettorPro",
          content: "Tailing this again if the line stays below 30.",
          timestamp: "18h ago",
        }
      ]
    },
  ];

  // Sample data for top community members
  const topMembers = [
    {
      name: "SharpShooter",
      avatar: "SS",
      winRate: 72,
      followers: 2156,
      streak: 8,
    },
    {
      name: "PropQueen",
      avatar: "PQ",
      winRate: 68,
      followers: 1843,
      streak: 5,
    },
    {
      name: "AnalyticsAce",
      avatar: "AA",
      winRate: 70,
      followers: 1785,
      streak: 4,
    },
    {
      name: "VegasInsider",
      avatar: "VI",
      winRate: 65,
      followers: 1452,
      streak: 3,
    },
  ];

  // Sample trending topics
  const trendingTopics = [
    "#NBAProps",
    "#LeBronJames",
    "#OverUnder",
    "#DailyPicks",
    "#Parlay",
    "#GrizzliesvsBulls",
    "#PropBetting",
  ];

  // Feed filters
  const feedFilters = [
    { id: "trending", label: "Trending" },
    { id: "latest", label: "Latest" },
    { id: "following", label: "Following" },
    { id: "verified", label: "Verified Cappers" },
  ];

  const handleCommentSubmit = (postId) => {
    // In a real app, this would submit the comment to a backend
    if (commentInput.trim()) {
      console.log(`New comment on post ${postId}: ${commentInput}`);
      setCommentInput("");
    }
  };

  const handleExpandPost = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  const handleLike = (postId) => {
    // In a real app, this would update likes in a backend
    console.log(`Liked post ${postId}`);
  };

  const handleFollow = (userName) => {
    // In a real app, this would update follow status in a backend
    console.log(`Now following ${userName}`);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navigation would be imported separately */}

      {/* Main Community Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg overflow-hidden mb-8">
          <div className="relative py-8 px-6 md:py-10 md:px-8">            
            <div className="relative z-10 md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                NBA PrizePicks Community
              </h2>
              <div className="h-1 w-20 bg-purple-500 rounded mb-5"></div>
              <p className="text-xl text-purple-200 font-medium mb-4">
                Share your picks, follow experts, and join the conversation
              </p>
              <p className="text-purple-200 mb-6 max-w-xl">
                Connect with thousands of NBA prop enthusiasts, share your winning strategies, 
                and discover high-value opportunities from our community of experts.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="bg-purple-600 hover:bg-purple-700 transition-colors px-6 py-3 rounded-lg font-semibold text-white shadow-md hover:shadow-lg flex items-center">
                  <span className="mr-2">Share Your Pick</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="bg-transparent border border-purple-500 text-purple-200 hover:bg-purple-800 px-6 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg">
                  Find Experts to Follow
                </button>
              </div>
            </div>
          </div>
          
          {/* Community Stats Bar */}
          <div className="bg-purple-800 py-3 px-4 md:px-8 flex flex-wrap justify-between items-center text-purple-200 text-sm">
            <div className="flex items-center">
              <span className="font-medium">Active Users:</span>
              <span className="ml-2">1,243</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">Picks Shared Today:</span>
              <span className="ml-2">867</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">Community Win Rate:</span>
              <span className="ml-2 text-green-400 font-bold">62%</span>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-300 font-medium">Top Winner:</span>
              <span className="ml-2 font-medium">SharpShooter (8W streak)</span>
            </div>
          </div>
        </div>

        {/* Feed Filters */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 mb-8">
          <h3 className="text-lg font-semibold mb-4 text-purple-200">Community Feed</h3>
          <div className="flex flex-wrap gap-2">
            {feedFilters.map((filter) => (
              <button
                key={filter.id}
                className={`px-4 py-2 rounded-md ${
                  feedFilter === filter.id
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                }`}
                onClick={() => setFeedFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Community Posts - Main Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post Box */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="h-10 w-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white">
                  ME
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Share your NBA picks and analysis..."
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-gray-200 focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-2">
                  <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    Add Pick
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    Add Image
                  </button>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded">
                  Post
                </button>
              </div>
            </div>

            {/* Community Posts */}
            {communityPosts.map((post) => (
              <div key={post.id} className="bg-gray-900 rounded-lg border border-gray-800">
                {/* Post Header */}
                <div className="p-4 border-b border-gray-800">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white">
                        {post.user.avatar}
                      </div>
                      <div>
                        <div className="font-medium text-gray-200">{post.user.name}</div>
                        <div className="flex items-center text-xs text-gray-500">
                          <span>{post.date}</span>
                          <span className="mx-1">•</span>
                          <span className="text-green-400">{post.user.winRate}% win rate</span>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleFollow(post.user.name)}
                      className="text-sm bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-800 hover:text-white px-3 py-1 rounded-md transition-colors"
                    >
                      Follow
                    </button>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-4">
                  <p className="text-gray-300 mb-4">{post.content}</p>

                  {/* Picks */}
                  <div className="space-y-3 mb-4">
                    {post.picks.map((pick, index) => (
                      <div key={index} className="border border-gray-800 rounded-lg p-3 bg-gray-800">
                        <div className="flex flex-wrap justify-between items-start">
                          <div>
                            <div className="flex items-center">
                              <div className="h-6 w-6 bg-purple-600 rounded-full mr-2 flex items-center justify-center font-bold text-xs">
                                {pick.team.charAt(0)}
                              </div>
                              <div className="font-semibold">
                                {pick.player}
                              </div>
                            </div>
                            <div className="text-gray-400 text-sm mt-1">
                              {pick.team} vs {pick.opponent} • {pick.position} • {pick.stat}
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="text-gray-300">
                              {pick.line}
                            </div>
                            <div
                              className={`font-bold ${
                                pick.prediction === "OVER"
                                  ? "text-green-400"
                                  : "text-red-400"
                              }`}
                            >
                              {pick.prediction}
                            </div>
                          </div>
                        </div>

                        {pick.result !== null && (
                          <div className="mt-2 text-sm">
                            <span className="font-medium">Result:</span>{" "}
                            <span 
                              className={pick.result ? "text-green-400 font-medium" : "text-red-400 font-medium"}
                            >
                              {pick.result ? "WIN" : "LOSS"}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Post Actions */}
                  <div className="flex justify-between items-center">
                    <button 
                      onClick={() => handleLike(post.id)}
                      className="flex items-center text-gray-400 hover:text-purple-400"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                      </svg>
                      {post.likes}
                    </button>

                    <button 
                      onClick={() => handleExpandPost(post.id)}
                      className="flex items-center text-gray-400 hover:text-purple-400"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                      </svg>
                      {post.comments.length} Comments
                    </button>

                    <button className="flex items-center text-gray-400 hover:text-purple-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                      Share
                    </button>

                    <button className="flex items-center text-gray-400 hover:text-purple-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                      Save
                    </button>
                  </div>
                </div>

                {/* Comments Section - Only show if expanded */}
                {expandedPostId === post.id && (
                  <div className="p-4 border-t border-gray-800 bg-gray-800 rounded-b-lg">
                    <h4 className="text-sm font-medium text-gray-300 mb-3">Comments</h4>
                    
                    {/* Comment List */}
                    <div className="space-y-3 mb-4">
                      {post.comments.map((comment) => (
                        <div key={comment.id} className="flex space-x-3">
                          <div className="h-8 w-8 bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold text-gray-300">
                            {comment.user.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <div className="bg-gray-900 rounded-lg p-3">
                              <div className="flex justify-between">
                                <span className="font-medium text-gray-300">{comment.user}</span>
                                <span className="text-xs text-gray-500">{comment.timestamp}</span>
                              </div>
                              <p className="text-gray-300 text-sm mt-1">{comment.content}</p>
                            </div>
                            <div className="flex space-x-3 mt-1 text-xs text-gray-500">
                              <button className="hover:text-purple-400">Like</button>
                              <button className="hover:text-purple-400">Reply</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Comment Input */}
                    <div className="flex space-x-3">
                      <div className="h-8 w-8 bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold text-white">
                        ME
                      </div>
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="Add a comment..."
                          className="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 px-3 text-gray-200 text-sm focus:outline-none focus:border-purple-500"
                          value={commentInput}
                          onChange={(e) => setCommentInput(e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              handleCommentSubmit(post.id);
                            }
                          }}
                        />
                        <div className="flex justify-end mt-2">
                          <button 
                            onClick={() => handleCommentSubmit(post.id)}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm"
                          >
                            Comment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Load More Button */}
            <div className="text-center">
              <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 font-medium px-6 py-2 rounded-lg">
                Load More Posts
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Top Community Members */}
            <div className="bg-gray-900 rounded-lg border border-gray-800">
              <div className="p-4 border-b border-gray-800">
                <h3 className="text-lg font-semibold text-purple-200">Top Experts</h3>
              </div>

              <div className="p-4">
                {topMembers.map((member, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center py-3 ${
                      index < topMembers.length - 1 ? "border-b border-gray-800" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="h-9 w-9 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white">
                        {member.avatar}
                      </div>
                      <div>
                        <div className="font-medium text-gray-200">{member.name}</div>
                        <div className="text-xs text-gray-500">
                          {member.followers} followers • {member.winRate}% win
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-center mb-1">
                        <span className="text-xs font-medium px-2 py-1 bg-green-900 text-green-400 rounded-full">
                          {member.streak}W streak
                        </span>
                      </div>
                      <button 
                        onClick={() => handleFollow(member.name)}
                        className="w-full text-xs bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-800 hover:text-white px-3 py-1 rounded-md transition-colors"
                      >
                        Follow
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-800 text-center">
                <button className="text-purple-400 hover:text-purple-300 font-medium">
                  See More Experts
                </button>
              </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-gray-900 rounded-lg border border-gray-800">
              <div className="p-4 border-b border-gray-800">
                <h3 className="text-lg font-semibold text-purple-200">Trending Topics</h3>
              </div>

              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic, index) => (
                    <button key={index} className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full text-sm text-purple-400 hover:text-purple-300">
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Community Rules */}
            <div className="bg-gray-900 rounded-lg border border-gray-800">
              <div className="p-4 border-b border-gray-800">
                <h3 className="text-lg font-semibold text-purple-200">Community Guidelines</h3>
              </div>

              <div className="p-4 space-y-3 text-sm text-gray-300">
                <div className="flex items-start space-x-2">
                  <div className="text-purple-400 mt-0.5">•</div>
                  <div>Be respectful and supportive of other community members</div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="text-purple-400 mt-0.5">•</div>
                  <div>Share the reasoning behind your picks, not just the selection</div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="text-purple-400 mt-0.5">•</div>
                  <div>No spamming or excessive self-promotion</div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="text-purple-400 mt-0.5">•</div>
                  <div>Keep discussions related to NBA prop betting</div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="text-purple-400 mt-0.5">•</div>
                  <div>Bet responsibly and never share content promoting reckless gambling</div>
                </div>
              </div>
              
              <div className="p-4 border-t border-gray-800 text-center">
                <button className="text-purple-400 hover:text-purple-300 font-medium text-sm">
                  Read Full Guidelines
                </button>
              </div>
            </div>

            {/* Join Discord Community */}
            <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-lg p-5 text-center">
              <h4 className="font-bold text-lg text-white mb-2">Join Our Discord Community</h4>
              <p className="text-purple-200 text-sm mb-4">
                Connect with 10,000+ prop bettors, get live alerts and share your picks in real-time
              </p>
              <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
                Join Discord
              </button>
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

export default NBAPrizePicksCommunity;
