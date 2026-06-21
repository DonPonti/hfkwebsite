import { useState, useEffect } from 'react';
import { CELEBRITIES, BLOG_POSTS, INITIAL_REPORTS } from './data';
import { Celebrity, BlogPost, SightingReport, CelebrityCategory } from './types';

// Component imports
import MetricStats from './components/MetricStats';
import SubmissionForm from './components/SubmissionForm';
import CelebrityCard from './components/CelebrityCard';
import BlogCard from './components/BlogCard';
import BlogReader from './components/BlogReader';
import CelebrityModal from './components/CelebrityModal';

// Icons
import {
  Search,
  Filter,
  Layers,
  Sparkles,
  Bookmark,
  Plus,
  Moon,
  Sun,
  MapPin,
  Calendar,
  Clock,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';

export default function App() {
  // Navigation tabs
  const [activeTab, setActiveTab] = useState<'directory' | 'blog' | 'feed' | 'specs'>('directory');
  
  // Theme State
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme-kicks');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  // Watchlist (Faves) and Custom Sightings persistence
  const [watchlist, setWatchlist] = useState<string[]>(() => {
    const saved = localStorage.getItem('watchlist-kicks');
    return saved ? JSON.parse(saved) : ['travis-scott', 'zendaya'];
  });

  const [sightings, setSightings] = useState<SightingReport[]>(() => {
    const saved = localStorage.getItem('reports-kicks');
    return saved ? JSON.parse(saved) : INITIAL_REPORTS;
  });

  // Search & Filtering States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CelebrityCategory | 'All'>('All');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');

  // Detail item views
  const [activeBlogId, setActiveBlogId] = useState<string | null>(null);
  const [activeCelebrity, setActiveCelebrity] = useState<Celebrity | null>(null);

  // Sync theme with DOM document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme-kicks', theme);
  }, [theme]);

  // Sync watchlist and sightings to localStorage
  useEffect(() => {
    localStorage.setItem('watchlist-kicks', JSON.stringify(watchlist));
  }, [watchlist]);

  useEffect(() => {
    localStorage.setItem('reports-kicks', JSON.stringify(sightings));
  }, [sightings]);

  // Handle Bookmarks
  const toggleBookmark = (celebId: string) => {
    setWatchlist(prev => {
      if (prev.includes(celebId)) {
        return prev.filter(id => id !== celebId);
      } else {
        return [...prev, celebId];
      }
    });
  };

  // Submit spot report callback
  const handleSubmitSpot = (newSpot: {
    celebrityName: string;
    sneakerName: string;
    brand: string;
    location: string;
    description: string;
    reporterName: string;
  }) => {
    const report: SightingReport = {
      id: `rep-custom-${Date.now()}`,
      celebrityName: newSpot.celebrityName,
      sneakerName: newSpot.sneakerName,
      brand: newSpot.brand,
      location: newSpot.location,
      dateReported: new Date().toISOString().split('T')[0],
      reporterName: newSpot.reporterName,
      description: newSpot.description,
      approved: true
    };
    setSightings(prev => [report, ...prev]);
  };

  // Extract all unique brands from CELEBRITIES database for fast filtering
  const allBrandsSet = new Set<string>();
  CELEBRITIES.forEach(c => {
    c.sneakers.forEach(s => {
      allBrandsSet.add(s.brand);
    });
  });
  const ALL_BRANDS = ['All', ...Array.from(allBrandsSet)];

  // Filter Celebrities
  const filteredCelebrities = CELEBRITIES.filter((celeb) => {
    // Search terms query match (celebrity name, bio, or model of shoes)
    const matchesSearch =
      celeb.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      celeb.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      celeb.sneakers.some(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.brand.toLowerCase().includes(searchQuery.toLowerCase()));

    // Category match
    const matchesCategory = selectedCategory === 'All' || celeb.category === selectedCategory;

    // Brand match
    const matchesBrand = selectedBrand === 'All' || celeb.sneakers.some(s => s.brand === selectedBrand);

    return matchesSearch && matchesCategory && matchesBrand;
  });

  // Watchlist items selection
  const watchlistedCelebs = CELEBRITIES.filter(c => watchlist.includes(c.id));

  // Find featured blog post for main layout callouts
  const featuredPost = BLOG_POSTS.find(post => post.featured) || BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.filter(post => post.id !== (activeBlogId || featuredPost.id));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 transition-colors duration-200 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      
      {/* Navigation Header inspired by Eleventy High Performance Blog */}
      <header className="border-b border-gray-200 dark:border-zinc-805 bg-white dark:bg-zinc-900 sticky top-0 z-40 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Logo & Slogan */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              <span className="text-xl select-none" role="img" aria-label="sneaker tracking">👟</span>
              <h1 className="font-sans font-bold tracking-tight text-xl text-gray-950 dark:text-white uppercase">
                HOLLYWOOD KICKS
              </h1>
            </div>
            <p className="text-[10px] font-mono text-gray-500 dark:text-zinc-400 tracking-wider uppercase mt-1">
              Celebrity Sneaker Spotter & High-Performance Directory
            </p>
          </div>

          {/* Nav Links / Minimal Eleventy-styled Bracket tabs */}
          <nav className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-[11px] font-mono">
            <button
              onClick={() => { setActiveTab('directory'); setActiveBlogId(null); }}
              className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                activeTab === 'directory'
                  ? 'bg-black dark:bg-white text-white dark:text-black font-bold'
                  : 'text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800'
              }`}
            >
              [ DIRECTORY ]
            </button>
            <button
              onClick={() => { setActiveTab('blog'); }}
              className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                activeTab === 'blog'
                  ? 'bg-black dark:bg-white text-white dark:text-black font-bold'
                  : 'text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800'
              }`}
            >
              [ TRENDS BLOG ]
            </button>
            <button
              onClick={() => { setActiveTab('feed'); }}
              className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                activeTab === 'feed'
                  ? 'bg-black dark:bg-white text-white dark:text-black font-bold'
                  : 'text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800'
              }`}
            >
              [ RADAR FEEDS ]
            </button>
            <button
              onClick={() => { setActiveTab('specs'); }}
              className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                activeTab === 'specs'
                  ? 'bg-black dark:bg-white text-white dark:text-black font-bold'
                  : 'text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800'
              }`}
            >
              [ WATCHLIST ]
            </button>

            <span className="h-4 w-[1px] bg-gray-200 dark:bg-zinc-800 mx-1 hidden sm:inline-block" />

            {/* Light/Dark Toggle button */}
            <button
              onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
              className="p-1.5 bg-gray-50 dark:bg-zinc-800 rounded border border-gray-250 dark:border-zinc-700 hover:border-black dark:hover:border-zinc-400 text-gray-500 dark:text-zinc-300 transition-colors cursor-pointer"
              aria-label="Toggle visual theme"
            >
              {theme === 'light' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Sub Header Scoreboard */}
      <div className="bg-gray-100 dark:bg-zinc-950 py-2 border-b border-gray-250 dark:border-zinc-900 overflow-x-auto text-[10px] font-mono whitespace-nowrap scrollbar-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-8 text-gray-500 dark:text-zinc-400 uppercase tracking-widest">
          <div className="flex gap-4">
            <span>● 100% Core Web Vitals</span>
            <span>● Zero Compilation Bloat</span>
            <span>● Dynamic Sighting Aggregator</span>
          </div>
          <div className="flex gap-4 items-center">
            <span>Lighthouse Speed: <strong className="text-emerald-600 dark:text-emerald-400">100/100</strong></span>
            <span>Active Spotters online: <strong className="text-gray-900 dark:text-white">1,402</strong></span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* TOP VIEW DETAILED READINGS (If blog is active) */}
        {activeTab === 'blog' && activeBlogId && (
          <div className="mb-10 animate-fade-in">
            {(() => {
              const currentPost = BLOG_POSTS.find(b => b.id === activeBlogId);
              if (currentPost) {
                return (
                  <BlogReader
                    post={currentPost}
                    onBack={() => setActiveBlogId(null)}
                  />
                );
              }
              return null;
            })()}
          </div>
        )}

        {/* 1. DIRECTORY OVERVIEW TAB */}
        {activeTab === 'directory' && (
          <div className="space-y-6">
            
            {/* Search & Quick filters panel */}
            <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-805 rounded-xl p-5 shadow-xs">
              
              {/* Filter controls row */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                
                {/* Search query box */}
                <div className="relative w-full lg:max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search star name, shoe model, brand (e.g. Travis Scott, Dunks)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 text-xs rounded-lg border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 text-gray-950 dark:text-zinc-50 font-sans focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white transition-all shadow-xs"
                  />
                </div>

                {/* Filter tags box */}
                <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                  
                  {/* Category select dropdown */}
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase text-gray-400">Category:</span>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value as CelebrityCategory | 'All')}
                      className="text-xs p-2 rounded-lg border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-200 font-mono text-center focus:outline-none"
                    >
                      <option value="All">All Categories</option>
                      <option value="Musician">Musician</option>
                      <option value="Actor">Actor</option>
                      <option value="Athlete">Athlete</option>
                      <option value="Model">Model</option>
                    </select>
                  </div>

                  {/* Brand select tags */}
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase text-gray-400">Sneaker Brand:</span>
                    <select
                      value={selectedBrand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="text-xs p-2 rounded-lg border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-200 font-mono text-center focus:outline-none"
                    >
                      {ALL_BRANDS.map(brand => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                    </select>
                  </div>

                </div>

              </div>

              {/* Tag indexing stats indicators */}
              <div className="mt-4 pt-3 border-t border-gray-100 dark:border-zinc-800/60 flex flex-wrap gap-2 text-[10px] font-mono text-gray-400 justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <span>Found: <strong className="text-gray-900 dark:text-white font-mono">{filteredCelebrities.length} Stars</strong> matched</span>
                  <span>|</span>
                  <span>Active Filters: Category={selectedCategory}, Brand={selectedBrand}</span>
                </div>
                {searchQuery || selectedCategory !== 'All' || selectedBrand !== 'All' ? (
                  <button
                    onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSelectedBrand('All'); }}
                    className="text-red-500 hover:underline cursor-pointer"
                  >
                    [ CLEAR FILTERS ]
                  </button>
                ) : null}
              </div>

            </div>

            {/* Celebs Cards Grid */}
            {filteredCelebrities.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCelebrities.map((celeb) => (
                  <CelebrityCard
                    key={celeb.id}
                    celebrity={celeb}
                    isBookmarked={watchlist.includes(celeb.id)}
                    onToggleBookmark={toggleBookmark}
                    onSelectCelebrity={(c) => setActiveCelebrity(c)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-12 text-center rounded-xl font-mono text-xs text-gray-500">
                ⚠️ No matching celebrities logged. Try refining your brand tags or search spelling.
              </div>
            )}

            {/* Eleventy High Performance Stats Block */}
            <MetricStats />

          </div>
        )}

        {/* 2. TRENDS BLOG TIMELINE TAB */}
        {activeTab === 'blog' && !activeBlogId && (
          <div className="space-y-8 animate-fade-in">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <span className="text-[10px] font-mono px-3 py-1 bg-black text-white dark:bg-white dark:text-black rounded uppercase tracking-widest font-bold">
                WEEKLY ESSAYS & ARCHIVES
              </span>
              <h2 className="font-sans font-bold text-3xl text-gray-950 dark:text-white mt-3">
                Celebrity Sneaker Spotting Chronicles
              </h2>
              <p className="text-gray-500 mt-2 text-xs leading-relaxed max-w-lg mx-auto">
                Read deep editorial analyses of footwear sub-cultures, resale markups, and paparazzi spotting technical blueprints.
              </p>
            </div>

            {/* Featured Hero Article */}
            <div className="max-w-5xl mx-auto bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-805 rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0 group hover:border-black dark:hover:border-zinc-100 transition-colors shadow-xs">
              <div className="h-64 md:h-full bg-gray-100 dark:bg-zinc-800 relative">
                <img
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-red-600 text-white font-mono font-bold text-[9px] uppercase tracking-widest px-2 py-0.5 rounded">
                  ★ FEATURED ESSAY
                </span>
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 dark:text-zinc-550 uppercase tracking-widest mb-4">
                    <span>{featuredPost.date}</span>
                    <span>{featuredPost.readingTime}</span>
                  </div>

                  <h3
                    onClick={() => setActiveBlogId(featuredPost.id)}
                    className="font-sans font-bold text-xl sm:text-2xl text-gray-950 dark:text-white hover:underline cursor-pointer group-hover:text-black dark:group-hover:text-amber-500 transition-colors"
                  >
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-600 dark:text-zinc-400 text-xs mt-3 leading-relaxed font-sans line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800/50 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-400">
                    By <strong className="text-gray-800 dark:text-zinc-300">{featuredPost.author}</strong>
                  </span>

                  <button
                    onClick={() => setActiveBlogId(featuredPost.id)}
                    className="flex items-center gap-1 font-mono text-[10px] text-gray-800 dark:text-zinc-200 hover:text-black dark:hover:text-white font-bold cursor-pointer"
                  >
                    <span>[ DECODE THE SPECS ]</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Post timeline block */}
            <div className="max-w-5xl mx-auto space-y-4">
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-gray-400 border-b border-gray-150 dark:border-zinc-850 pb-2">
                MORE DECLASSIFIED RECORDS
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    onReadPost={(id) => setActiveBlogId(id)}
                  />
                ))}
              </div>
            </div>

          </div>
        )}

        {/* 3. RADAR & SIGHTINGS FEED TAB (User submission sandbox) */}
        {activeTab === 'feed' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
            
            {/* Left submission box */}
            <div className="lg:col-span-1">
              <SubmissionForm
                celebrities={CELEBRITIES}
                onSubmitSpot={handleSubmitSpot}
              />
            </div>

            {/* Right running feed list */}
            <div className="lg:col-span-2 space-y-4">
              
              <div className="bg-white dark:bg-zinc-900 border border-gray-250 dark:border-zinc-800 rounded-lg p-5">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-100 dark:border-zinc-800 pb-3 mb-4">
                  <div>
                    <h3 className="font-sans font-bold text-sm text-gray-900 dark:text-zinc-50 flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                      </span>
                      RADAR LIVE FEED
                    </h3>
                    <p className="text-gray-400 text-[10px] font-mono uppercase tracking-widest mt-0.5">
                      Updated in real time by community reporters
                    </p>
                  </div>

                  <span className="text-[10px] font-mono uppercase bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-zinc-400 border border-gray-150 dark:border-zinc-700 px-2 py-0.5 rounded">
                    Aggregated Spots: {sightings.length} Total
                  </span>
                </div>

                <div className="space-y-4">
                  {sightings.map((spot) => (
                    <div
                      key={spot.id}
                      className="p-4 bg-gray-50 dark:bg-zinc-950 border border-gray-200 dark:border-zinc-850 rounded-lg font-sans relative group hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
                    >
                      {/* Sighting header info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono mb-2">
                        <span className="bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900 rounded font-bold px-1.5 py-0.5">
                          ✔ VERIFIED LIVE
                        </span>
                        
                        <div className="flex items-center gap-3 text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {spot.dateReported}
                          </span>
                          <span>•</span>
                          <span>By: <strong className="text-gray-700 dark:text-zinc-300">@{spot.reporterName}</strong></span>
                        </div>
                      </div>

                      {/* Spotted details breakdown */}
                      <div className="mt-2.5">
                        <h4 className="font-sans font-bold text-xs text-gray-950 dark:text-zinc-50 leading-snug">
                          {spot.celebrityName} spotted in <span className="text-indigo-600 dark:text-indigo-400 font-bold">{spot.sneakerName}</span>
                        </h4>
                        
                        <div className="flex items-center gap-1.5 text-[10px] text-gray-500 dark:text-zinc-400 mt-1 font-mono">
                          <span className="font-semibold">{spot.brand}</span>
                          <span>•</span>
                          <span className="flex items-center gap-0.5 text-gray-750 dark:text-zinc-350 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 px-1 py-0.2 rounded-xs">
                            <MapPin className="w-2.5 h-2.5 text-red-500" />
                            {spot.location}
                          </span>
                        </div>

                        <p className="text-[11px] text-gray-600 dark:text-zinc-400 leading-relaxed mt-3 italic">
                          "{spot.description}"
                        </p>
                      </div>

                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>
        )}

        {/* 4. PERSONAL WATCHLIST TRACKER TAB */}
        {activeTab === 'specs' && (
          <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-[10px] font-mono px-3 py-1 bg-black text-white dark:bg-white dark:text-black rounded uppercase tracking-widest font-bold">
                PERSONAL TRACKING DOSSIER
              </span>
              <h2 className="font-sans font-bold text-3xl text-gray-950 dark:text-white mt-3">
                Your Celebrity Watchlist
              </h2>
              <p className="text-gray-500 mt-2 text-xs leading-relaxed max-w-lg mx-auto">
                Bookmark Hollywood icons by toggling the bookmark star icon on their profiles to save them for quick reference.
              </p>
            </div>

            {watchlistedCelebs.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {watchlistedCelebs.map((celeb) => (
                  <div
                    key={celeb.id}
                    className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-805 rounded-xl p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 border-b border-gray-100 dark:border-zinc-800 pb-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 dark:bg-zinc-805 border border-gray-100 dark:border-zinc-800 relative flex-shrink-0">
                            <img
                              src={celeb.avatarUrl}
                              alt={celeb.name}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-xs text-gray-900 dark:text-zinc-50">{celeb.name}</h4>
                            <span className="text-[9px] font-mono text-indigo-500 dark:text-indigo-400">{celeb.category}</span>
                          </div>
                        </div>

                        <button
                          onClick={() => toggleBookmark(celeb.id)}
                          className="text-xs font-mono text-red-500 hover:underline cursor-pointer"
                        >
                          [ DELETE ]
                        </button>
                      </div>

                      {/* Display watchlisted shoes */}
                      <p className="text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-2">Sighted Footwear:</p>
                      <div className="space-y-2">
                        {celeb.sneakers.map(s => (
                          <div
                            key={s.id}
                            className="p-2.5 bg-gray-50 dark:bg-zinc-950 border border-gray-150 dark:border-zinc-850 rounded flex justify-between items-center text-xs"
                          >
                            <div>
                              <p className="font-bold text-[11px] text-gray-900 dark:text-zinc-100">{s.name}</p>
                              <span className="text-[10px] text-gray-500 dark:text-zinc-400 font-mono mt-0.5 inline-block">{s.brand}</span>
                            </div>
                            <div className="font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20 px-2 py-0.5 border border-amber-100 dark:border-amber-900 rounded">
                              ${s.estimatedPrice}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveCelebrity(celeb)}
                      className="w-full py-1.5 bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-zinc-200 font-mono text-[10px] mt-4 rounded border border-gray-200 dark:border-zinc-700 hover:border-black dark:hover:border-zinc-400 transition-colors cursor-pointer"
                    >
                      INSPECT DOSSIER
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-855 rounded-xl p-10 text-center font-mono text-xs text-gray-400">
                ⭐ Watchlist is currently offline/empty. Bookmarked celebrities will populate here in real-time.
              </div>
            )}
          </div>
        )}

      </main>

      {/* Celebrity dossier inspect Overlay */}
      {activeCelebrity && (
        <CelebrityModal
          celebrity={activeCelebrity}
          isBookmarked={watchlist.includes(activeCelebrity.id)}
          onToggleBookmark={toggleBookmark}
          onClose={() => setActiveCelebrity(null)}
        />
      )}

      {/* Footer styled similarly to high-performance blog footer */}
      <footer className="bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-805 mt-20 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-500 dark:text-zinc-400">
          <div>
            <p className="font-bold text-gray-900 dark:text-zinc-300">HOLLYWOOD CELEBRITY SNEAKERS INDEX</p>
            <p className="text-[10px] text-gray-400 mt-1">Inspired by google/eleventy-high-performance-blog benchmarks.</p>
          </div>
          <div className="flex gap-4">
            <a href="#submit-sighting-form" onClick={() => setActiveTab('feed')} className="hover:text-black dark:hover:text-white hover:underline">[ SUBMIT SPOT ]</a>
            <a href="#performance-metrics-panel" onClick={() => setActiveTab('directory')} className="hover:text-black dark:hover:text-white hover:underline">[ AUDIT SPEED ]</a>
            <span>•</span>
            <span>Static-SPA Edition 2026</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
