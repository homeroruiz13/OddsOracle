import React, { useState } from "react";

const ToolsAndResourcesPage = () => {
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Category filters
  const categoryFilters = [
    { id: "all", label: "All Resources" },
    { id: "tools", label: "Betting Tools" },
    { id: "strategies", label: "Strategies" },
    { id: "calculators", label: "Calculators" },
    { id: "research", label: "Research" },
    { id: "trends", label: "Trends" },
  ];

  // Popular tools data
  const popularTools = [
    {
      id: 1,
      title: "Player Prop Analyzer",
      description: "Compare player performance against historical data and defense matchups",
      icon: "chart",
      usageCount: "2.4K",
      category: "tools",
      isPremium: false,
    },
    {
      id: 2,
      title: "Lineup Optimizer",
      description: "Build optimal lineups based on projections and player correlations",
      icon: "users",
      usageCount: "1.8K",
      category: "tools",
      isPremium: true,
    },
    {
      id: 3,
      title: "Injury Impact Calculator",
      description: "Calculate how player injuries affect team projections and prop markets",
      icon: "medical",
      usageCount: "1.2K",
      category: "calculators",
      isPremium: false,
    },
    {
      id: 4,
      title: "Defense vs. Position Analyzer",
      description: "Detailed breakdowns of how teams perform against specific positions",
      icon: "shield",
      usageCount: "1.5K",
      category: "research",
      isPremium: false,
    },
  ];

  // Strategy guides
  const strategyGuides = [
    {
      id: 1,
      title: "Finding Value in 3-Point Props",
      author: "Mike Johnson",
      rating: 4.8,
      reviewCount: 124,
      description: "Learn how to identify valuable 3-point shooting props based on matchups and recent form",
      category: "strategies",
      readTime: "8 min read",
      date: "Feb 18, 2025",
    },
    {
      id: 2,
      title: "Back-to-Back Game Analysis",
      author: "Sarah Thompson",
      rating: 4.6,
      reviewCount: 98,
      description: "How to exploit player fatigue factors in back-to-back game scenarios",
      category: "research",
      readTime: "12 min read",
      date: "Feb 15, 2025",
    },
    {
      id: 3,
      title: "Leveraging Advanced Stats for Rebounds",
      author: "James Wilson",
      rating: 4.9,
      reviewCount: 156,
      description: "Using rebounding opportunity rate and box out statistics to predict rebound props",
      category: "strategies",
      readTime: "10 min read",
      date: "Feb 12, 2025",
    },
  ];

  // Quick access calculators
  const quickCalculators = [
    {
      id: 1,
      title: "Parlay Calculator",
      description: "Calculate potential payouts for parlay bets",
      icon: "calculator",
    },
    {
      id: 2,
      title: "EV Calculator",
      description: "Determine expected value of player prop bets",
      icon: "chart-line",
    },
    {
      id: 3,
      title: "Kelly Criterion Calculator",
      description: "Optimize your bet sizing based on edge",
      icon: "percentage",
    },
    {
      id: 4,
      title: "Prop Correlation Tool",
      description: "Find correlated player props for higher success rates",
      icon: "link",
    },
  ];

  // Market trends
  const marketTrends = [
    {
      id: 1,
      stat: "Points",
      trend: "OVER",
      percentage: 58,
      change: 3.2,
    },
    {
      id: 2,
      stat: "Rebounds",
      trend: "UNDER",
      percentage: 54,
      change: 2.1,
    },
    {
      id: 3,
      stat: "Assists",
      trend: "OVER",
      percentage: 52,
      change: 1.8,
    },
    {
      id: 4,
      stat: "3-Pointers",
      trend: "UNDER",
      percentage: 56,
      change: 4.5,
    },
  ];

  // Featured tutorials
  const featuredTutorials = [
    {
      id: 1,
      title: "Mastering NBA Prop Analysis",
      description: "Comprehensive video course on analyzing NBA player props",
      type: "Video Course",
      duration: "45 min",
      thumbnail: "nba-props-course",
    },
    {
      id: 2,
      title: "Building Prize Picks Entries",
      description: "Strategy guide for constructing winning PrizePicks entries",
      type: "Written Guide",
      duration: "15 min read",
      thumbnail: "prize-picks-guide",
    },
  ];

  // Render icon based on name
  const renderIcon = (iconName) => {
    // This would be replaced with actual SVG icons in a real implementation
    return (
      <div className="h-10 w-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navigation */}
      {/* Header component will be imported separately */}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg overflow-hidden mb-8">
          <div className="relative py-8 px-6 md:py-10 md:px-8">
            <div className="relative z-10 md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                NBA Betting Tools & Resources
              </h2>
              <div className="h-1 w-20 bg-purple-500 rounded mb-5"></div>
              <p className="text-xl text-purple-200 font-medium mb-4">
                Elevate your strategy with our advanced tools
              </p>
              <p className="text-purple-200 mb-6 max-w-xl">
                Access comprehensive data analysis tools, educational resources, and betting calculators to gain an edge on your NBA player prop picks.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="bg-purple-600 hover:bg-purple-700 transition-colors px-6 py-3 rounded-lg font-semibold text-white shadow-md hover:shadow-lg flex items-center">
                  <span className="mr-2">Explore All Tools</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="bg-transparent border border-purple-500 text-purple-200 hover:bg-purple-800 px-6 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg">
                  View Premium Resources
                </button>
              </div>
            </div>
          </div>
          
          {/* Stats Bar */}
          <div className="bg-purple-800 py-3 px-4 md:px-8 flex flex-wrap justify-between items-center text-purple-200 text-sm">
            <div className="flex items-center">
              <span className="font-medium">Total Tools:</span>
              <span className="ml-2">24</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">Strategy Guides:</span>
              <span className="ml-2">38</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">Tool Usage Today:</span>
              <span className="ml-2">12,841</span>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-300 font-medium">New Resources:</span>
              <span className="ml-2">5 this week</span>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 mb-8">
          <h3 className="text-lg font-semibold mb-4 text-purple-200">Resource Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categoryFilters.map((filter) => (
              <button
                key={filter.id}
                className={`px-4 py-2 rounded-md ${
                  categoryFilter === filter.id
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                }`}
                onClick={() => setCategoryFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Popular Tools */}
            <div className="bg-gray-900 rounded-lg border border-gray-800">
              <div className="p-4 border-b border-gray-800 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-purple-200">
                  Popular Betting Tools
                </h3>
                <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                  View All
                </button>
              </div>

              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {popularTools.map((tool) => (
                  <div
                    key={tool.id}
                    className="border border-gray-800 rounded-lg p-4 hover:border-purple-500 transition cursor-pointer bg-gray-800"
                  >
                    <div className="flex items-start gap-3">
                      {renderIcon(tool.icon)}
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-semibold text-gray-200">
                            {tool.title}
                          </h4>
                          {tool.isPremium && (
                            <span className="ml-2 px-2 py-0.5 bg-purple-600 rounded-full text-xs font-medium text-white">
                              PREMIUM
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-400 mt-1">
                          {tool.description}
                        </p>
                        <div className="flex items-center mt-2 text-xs text-gray-500">
                          <span className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            {tool.usageCount} uses this month
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 text-right">
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded text-sm">
                        Launch Tool
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-800 text-center">
                <button className="text-purple-400 hover:text-purple-300 font-medium">
                  Browse All Tools
                </button>
              </div>
            </div>

            {/* Strategy Guides */}
            <div className="bg-gray-900 rounded-lg border border-gray-800">
              <div className="p-4 border-b border-gray-800 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-purple-200">
                  Expert Strategy Guides
                </h3>
                <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                  View Library
                </button>
              </div>

              <div className="p-4 space-y-4">
                {strategyGuides.map((guide) => (
                  <div
                    key={guide.id}
                    className="border border-gray-800 rounded-lg overflow-hidden hover:border-purple-500 transition cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 bg-gray-800 md:h-auto h-32"></div>
                      <div className="p-4 md:w-2/3">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-xs font-medium px-2 py-1 rounded bg-purple-900 text-purple-200">
                              {guide.category.charAt(0).toUpperCase() + guide.category.slice(1)}
                            </span>
                            <h4 className="font-semibold text-gray-200 mt-2">
                              {guide.title}
                            </h4>
                          </div>
                          <div className="flex items-center text-yellow-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-sm ml-1">{guide.rating}</span>
                            <span className="text-xs text-gray-500 ml-1">({guide.reviewCount})</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-400 mt-2">
                          {guide.description}
                        </p>
                        
                        <div className="flex flex-wrap justify-between items-center mt-3 text-xs text-gray-500">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            {guide.author}
                          </div>
                          <div>
                            <span className="mr-3">{guide.readTime}</span>
                            <span>{guide.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-800 text-center">
                <button className="text-purple-400 hover:text-purple-300 font-medium">
                  See All Strategy Guides
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Access Calculators */}
            <div className="bg-gray-900 rounded-lg border border-gray-800">
              <div className="p-4 border-b border-gray-800">
                <h3 className="text-lg font-semibold text-purple-200">Quick Calculators</h3>
              </div>

              <div className="p-4 space-y-3">
                {quickCalculators.map((calc) => (
                  <div
                    key={calc.id}
                    className="border border-gray-800 rounded-lg p-3 hover:bg-gray-800 transition cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-gray-200">{calc.title}</div>
                        <div className="text-xs text-gray-500">{calc.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Trends */}
            <div className="bg-gray-900 rounded-lg border border-gray-800">
              <div className="p-4 border-b border-gray-800">
                <h3 className="text-lg font-semibold text-purple-200">Current Market Trends</h3>
              </div>

              <div className="p-4">
                {marketTrends.map((trend, index) => (
                  <div
                    key={trend.id}
                    className={`flex justify-between items-center py-3 ${
                      index < marketTrends.length - 1 ? "border-b border-gray-800" : ""
                    }`}
                  >
                    <div>
                      <div className="font-medium text-gray-200">{trend.stat}</div>
                      <div className="text-xs text-gray-500">Last 7 days</div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`font-bold ${
                          trend.trend === "OVER"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {trend.trend} {trend.percentage}%
                      </div>
                      <div className="text-xs text-gray-500">
                        {trend.change > 0 ? "+" : ""}{trend.change}% change
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-800 text-center">
                <button className="text-purple-400 hover:text-purple-300 font-medium">
                  View Detailed Analytics
                </button>
              </div>
            </div>

            {/* Featured Tutorials */}
            <div className="bg-gray-900 rounded-lg border border-gray-800">
              <div className="p-4 border-b border-gray-800">
                <h3 className="text-lg font-semibold text-purple-200">Featured Tutorials</h3>
              </div>

              <div className="p-4 space-y-4">
                {featuredTutorials.map((tutorial) => (
                  <div
                    key={tutorial.id}
                    className="border border-gray-800 rounded-lg overflow-hidden"
                  >
                    <div className="h-32 bg-gray-800"></div>
                    <div className="p-3">
                      <div className="flex justify-between items-center text-xs text-gray-500 mb-1">
                        <span>{tutorial.type}</span>
                        <span>{tutorial.duration}</span>
                      </div>
                      <h4 className="font-medium text-gray-200">
                        {tutorial.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">{tutorial.description}</p>
                      <button className="text-purple-400 hover:text-purple-300 text-sm mt-2">
                        Start Learning
                      </button>
                    </div>
                  </div>
                ))}
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

export default ToolsAndResourcesPage;
