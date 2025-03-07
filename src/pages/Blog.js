import React, { useState } from "react";

const NBAPrizePicksBlog = () => {
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Finding Value in NBA Player Assist Props",
      category: "Strategy",
      author: "Michael Johnson",
      date: "Feb 22, 2025",
      readTime: "8 min read",
      excerpt: "Learn how to identify high-value opportunities in the assists market by analyzing team pace, injuries, and matchup history.",
      imageUrl: "/blog/assists-props.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "How Pace Factors Affect NBA Over/Unders",
      category: "Analysis",
      author: "Sarah Williams",
      date: "Feb 20, 2025",
      readTime: "6 min read",
      excerpt: "Dive deep into the correlation between team pace metrics and the success rate of various player prop bets.",
      imageUrl: "/blog/pace-factors.jpg",
      featured: true,
    },
    {
      id: 3,
      title: "The Impact of Back-to-Back Games on Player Performance",
      category: "Research",
      author: "David Thompson",
      date: "Feb 18, 2025",
      readTime: "10 min read",
      excerpt: "Our research shows significant performance declines in specific statistical categories when players are on the second night of back-to-backs.",
      imageUrl: "/blog/back-to-back.jpg",
      featured: false,
    },
    {
      id: 4,
      title: "Undervalued Role Players: Finding Edges in the Props Market",
      category: "Strategy",
      author: "Lisa Chen",
      date: "Feb 15, 2025",
      readTime: "7 min read",
      excerpt: "While everyone focuses on stars, significant value can be found by analyzing the prop lines for key role players.",
      imageUrl: "/blog/role-players.jpg",
      featured: false,
    },
    {
      id: 5,
      title: "Post All-Star Break Trends: Historical Prop Performance",
      category: "Analysis",
      author: "James Wilson",
      date: "Feb 12, 2025",
      readTime: "9 min read",
      excerpt: "How player performance and prop line accuracy changes after the All-Star break based on five years of historical data.",
      imageUrl: "/blog/all-star-break.jpg",
      featured: false,
    },
    {
      id: 6,
      title: "Advanced Metrics and Player Props: Beyond the Box Score",
      category: "Research",
      author: "Emma Davis",
      date: "Feb 10, 2025",
      readTime: "12 min read",
      excerpt: "Using advanced analytics like PER, VORP, and usage rate to predict player performance against prop lines.",
      imageUrl: "/blog/advanced-metrics.jpg",
      featured: false,
    },
  ];

  // Popular articles for sidebar
  const popularArticles = [
    {
      id: 1,
      title: "NBA Betting Systems That Actually Work",
      category: "Strategy",
      date: "Jan 5, 2025",
      views: "24.5K",
    },
    {
      id: 2,
      title: "How to Build a Profitable Player Prop Model",
      category: "Analysis",
      date: "Jan 18, 2025",
      views: "19.8K",
    },
    {
      id: 3,
      title: "The Ultimate Guide to NBA Prop Betting",
      category: "Guides",
      date: "Dec 12, 2024",
      views: "17.3K",
    },
    {
      id: 4,
      title: "Injury Impact: How to Adjust Your Prop Betting",
      category: "Strategy",
      date: "Jan 28, 2025",
      views: "15.9K",
    },
  ];

  // Category filters
  const categoryFilters = [
    { id: "all", label: "All Categories" },
    { id: "strategy", label: "Strategy" },
    { id: "analysis", label: "Analysis" },
    { id: "research", label: "Research" },
    { id: "guides", label: "Guides" },
    { id: "interviews", label: "Interviews" },
  ];

  // Featured authors
  const featuredAuthors = [
    {
      id: 1,
      name: "Michael Johnson",
      role: "NBA Analyst",
      articles: 28,
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Data Scientist",
      articles: 24,
    },
    {
      id: 3,
      name: "David Thompson",
      role: "Former NBA Scout",
      articles: 32,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navigation */}
      {/* Header component will be imported separately */}

      {/* Main Blog Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg overflow-hidden mb-8">
          <div className="relative py-8 px-6 md:py-10 md:px-8">            
            <div className="relative z-10 md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                NBA Insights Blog
              </h2>
              <div className="h-1 w-20 bg-purple-500 rounded mb-5"></div>
              <p className="text-xl text-purple-200 font-medium mb-4">
                Expert Analysis, Strategy, and Research
              </p>
              <p className="text-purple-200 mb-6 max-w-xl">
                Our team of NBA experts, data scientists, and former bookmakers share the latest insights to improve your player prop predictions.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="bg-purple-600 hover:bg-purple-700 transition-colors px-6 py-3 rounded-lg font-semibold text-white shadow-md hover:shadow-lg flex items-center">
                  <span className="mr-2">Latest Strategy Articles</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="bg-transparent border border-purple-500 text-purple-200 hover:bg-purple-800 px-6 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg">
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>
          
          {/* Stats Bar */}
          <div className="bg-purple-800 py-3 px-4 md:px-8 flex flex-wrap justify-between items-center text-purple-200 text-sm">
            <div className="flex items-center">
              <span className="font-medium">Total Articles:</span>
              <span className="ml-2">124</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">Expert Contributors:</span>
              <span className="ml-2">18</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">Monthly Readers:</span>
              <span className="ml-2">85K+</span>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-300 font-medium">Next Article:</span>
              <span className="ml-2 font-mono">Tomorrow</span>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 mb-8">
          <h3 className="text-lg font-semibold mb-4 text-purple-200">Browse Categories</h3>
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
          {/* Blog Posts - Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Articles */}
            <div className="bg-gray-900 rounded-lg border border-gray-800">
              <div className="p-4 border-b border-gray-800 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-purple-200">
                  Featured Articles
                </h3>
                <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                  View All
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                {blogPosts.filter(post => post.featured).map((post) => (
                  <div
                    key={post.id}
                    className="border border-gray-800 rounded-lg overflow-hidden hover:border-purple-500 transition cursor-pointer bg-gray-800"
                  >
                    <div className="h-48 bg-gray-700"></div>
                    <div className="p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-purple-600 text-xs px-2 py-1 rounded text-white font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-400 text-xs ml-2">
                          {post.date} • {post.readTime}
                        </span>
                      </div>
                      <h4 className="font-semibold text-lg text-gray-200 mb-2">
                        {post.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-3">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-400">
                          By {post.author}
                        </div>
                        <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                          Read Article
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Articles */}
            <div className="bg-gray-900 rounded-lg border border-gray-800">
              <div className="p-4 border-b border-gray-800">
                <h3 className="text-lg font-semibold text-purple-200">Recent Articles</h3>
              </div>

              <div className="p-4 space-y-4">
                {blogPosts.filter(post => !post.featured).map((post) => (
                  <div
                    key={post.id}
                    className="border border-gray-800 rounded-lg overflow-hidden hover:border-purple-500 transition cursor-pointer bg-gray-800"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 h-40 bg-gray-700"></div>
                      <div className="p-4 md:w-2/3">
                        <div className="flex items-center mb-2">
                          <span className="bg-purple-600 text-xs px-2 py-1 rounded text-white font-medium">
                            {post.category}
                          </span>
                          <span className="text-gray-400 text-xs ml-2">
                            {post.date} • {post.readTime}
                          </span>
                        </div>
                        <h4 className="font-semibold text-lg text-gray-200 mb-2">
                          {post.title}
                        </h4>
                        <p className="text-gray-400 text-sm mb-3">
                          {post.excerpt}
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-gray-400">
                            By {post.author}
                          </div>
                          <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                            Read Article
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-800 flex justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search box */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
              <h3 className="text-lg font-semibold text-purple-200 mb-3">Search Articles</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by keyword or author..."
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-gray-200 focus:outline-none focus:border-purple-500"
                />
                <button className="absolute right-3 top-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Popular Articles */}
            <div className="bg-gray-900 rounded-lg border border-gray-800">
              <div className="p-4 border-b border-gray-800">
                <h3 className="text-lg font-semibold text-purple-200">Popular Articles</h3>
              </div>

              <div className="p-4">
                {popularArticles.map((article, index) => (
                  <div
                    key={article.id}
                    className={`py-3 ${
                      index < popularArticles.length - 1 ? "border-b border-gray-800" : ""
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="text-lg font-bold text-purple-500 mr-3">{index + 1}</div>
                      <div>
                        <h4 className="font-medium text-gray-200 hover:text-purple-300 transition cursor-pointer">
                          {article.title}
                        </h4>
                        <div className="flex text-xs text-gray-500 mt-1">
                          <span>{article.category}</span>
                          <span className="mx-2">•</span>
                          <span>{article.date}</span>
                          <span className="mx-2">•</span>
                          <span>{article.views} views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-purple-800 to-indigo-900 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Get Weekly Insights</h3>
              <p className="text-purple-200 text-sm mb-4">
                Subscribe to our newsletter for exclusive tips, analysis, and predictions every week.
              </p>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-purple-900 bg-opacity-50 border border-purple-700 rounded-lg py-2 px-4 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                />
              </div>
              <button className="w-full bg-white text-purple-900 font-medium py-2 rounded-lg hover:bg-gray-100 transition">
                Subscribe Now
              </button>
            </div>

            {/* Featured Contributors */}
            <div className="bg-gray-900 rounded-lg border border-gray-800">
              <div className="p-4 border-b border-gray-800">
                <h3 className="text-lg font-semibold text-purple-200">Featured Contributors</h3>
              </div>

              <div className="p-4 space-y-4">
                {featuredAuthors.map((author) => (
                  <div key={author.id} className="flex items-center">
                    <div className="h-12 w-12 bg-purple-600 rounded-full mr-3 flex items-center justify-center font-bold text-white">
                      {author.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-200">{author.name}</div>
                      <div className="text-xs text-gray-500">
                        {author.role} • {author.articles} articles
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-800 text-center">
                <button className="text-purple-400 hover:text-purple-300 font-medium">
                  View All Contributors
                </button>
              </div>
            </div>

            {/* Tags/Topics */}
            <div className="bg-gray-900 rounded-lg border border-gray-800">
              <div className="p-4 border-b border-gray-800">
                <h3 className="text-lg font-semibold text-purple-200">Popular Topics</h3>
              </div>

              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-800 hover:bg-gray-700 transition px-3 py-1 rounded-full text-sm text-gray-300 cursor-pointer">
                    Points Props
                  </span>
                  <span className="bg-gray-800 hover:bg-gray-700 transition px-3 py-1 rounded-full text-sm text-gray-300 cursor-pointer">
                    Rebounds
                  </span>
                  <span className="bg-gray-800 hover:bg-gray-700 transition px-3 py-1 rounded-full text-sm text-gray-300 cursor-pointer">
                    Assists
                  </span>
                  <span className="bg-gray-800 hover:bg-gray-700 transition px-3 py-1 rounded-full text-sm text-gray-300 cursor-pointer">
                    Player Models
                  </span>
                  <span className="bg-gray-800 hover:bg-gray-700 transition px-3 py-1 rounded-full text-sm text-gray-300 cursor-pointer">
                    Betting Strategy
                  </span>
                  <span className="bg-gray-800 hover:bg-gray-700 transition px-3 py-1 rounded-full text-sm text-gray-300 cursor-pointer">
                    Data Analysis
                  </span>
                  <span className="bg-gray-800 hover:bg-gray-700 transition px-3 py-1 rounded-full text-sm text-gray-300 cursor-pointer">
                    Fantasy Basketball
                  </span>
                  <span className="bg-gray-800 hover:bg-gray-700 transition px-3 py-1 rounded-full text-sm text-gray-300 cursor-pointer">
                    Injuries
                  </span>
                  <span className="bg-gray-800 hover:bg-gray-700 transition px-3 py-1 rounded-full text-sm text-gray-300 cursor-pointer">
                    Advanced Stats
                  </span>
                  <span className="bg-gray-800 hover:bg-gray-700 transition px-3 py-1 rounded-full text-sm text-gray-300 cursor-pointer">
                    Betting Tools
                  </span>
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

export default NBAPrizePicksBlog;
