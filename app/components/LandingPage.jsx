"use client";
import React, { useState } from "react";
import { SparklesIcon, GlobeAltIcon, HeartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Header from "./Header";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex w-full items-center bg-white/10 text-white rounded-lg px-5 py-3 space-x-4 backdrop-blur-md border border-white/10 hover:border-amber-400/30 transition-all duration-300">
      <MagnifyingGlassIcon className="h-5 w-5 text-amber-300/80" />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by name, ingredient, country..."
        className="bg-transparent flex-grow outline-none placeholder-white/60 text-white/90 text-sm md:text-base"
      />
      <select className="bg-black/40 text-white/90 text-sm outline-none cursor-pointer border-l border-white/10 pl-3 pr-8 py-1 appearance-none bg-no-repeat bg-[length:12px] bg-[center_right_0.5rem]"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23f59e0b'%3E%3Cpath d='M12 15l-5-5h10l-5 5z'/%3E%3C/svg%3E\")" }}>
        <option value="">Region</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="americas">Americas</option>
      </select>
      <select className="bg-black/40 text-white/90 text-sm outline-none cursor-pointer border-l border-white/10 pl-3 pr-8 py-1 appearance-none bg-no-repeat bg-[length:12px] bg-[center_right_0.5rem]"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23f59e0b'%3E%3Cpath d='M12 15l-5-5h10l-5 5z'/%3E%3C/svg%3E\")" }}>
        <option value="">Type</option>
        <option value="whiskey">Whiskey</option>
        <option value="vodka">Vodka</option>
        <option value="rum">Rum</option>
      </select>
    </div>
  );
};
const LandingPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Animated Background (non-interactive) */}
      <div
        className="absolute inset-0 z-0 animate-fade-in pointer-events-none"
        style={{
          backgroundImage: 'url("/HeroBackground.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          opacity: 0.7
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/50 to-black/90 z-10 pointer-events-none" />

      {/* Content (fully interactive) */}
      <div className="relative z-20">
        <Header />

        <section
          className="flex flex-col items-center justify-center min-h-[95vh] px-4 text-center pt-20 pb-12"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {/* Animated Heading */}
          <div className="max-w-4xl space-y-6 transform transition-all duration-1000">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.15]">
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                Booz Globe
              </span>
              <span className="block mt-4 text-3xl sm:text-4xl font-light text-amber-100/90 tracking-wide">
                From <span className="font-medium">Cellars</span> to{" "}
                <span className="font-medium">Connoisseurs</span>
              </span>
            </h1>

            {/* Decorative Separator */}
            <div className="flex justify-center items-center space-x-4 opacity-70">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-500/50" />
              <SparklesIcon className="h-6 w-6 text-amber-400 animate-pulse" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-500/50" />
            </div>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl font-light italic text-amber-100/80 mt-6">
              "Where every bottle tells a story of heritage and craftsmanship"
            </p>

            {/* Enhanced Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <button 
                className="relative group cursor-pointer bg-gradient-to-br from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-medium py-3 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <GlobeAltIcon className="h-5 w-5 mr-2 inline-block" />
                Explore Collection
                <div className={`absolute inset-0 border border-amber-400/30 rounded-lg transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
              </button>

              <button className="relative cursor-pointer group bg-white/5 hover:bg-white/10 backdrop-blur-lg border border-amber-500/30 hover:border-amber-500/50 text-amber-100 font-medium py-3 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <HeartIcon className="h-5 w-5 mr-2 inline-block text-amber-400" />
                Mood Selection
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>

          {/* Elevated Search Section */}
          <div className="mt-24 w-full max-w-4xl px-4">
            <div className="relative group">
              <SearchBar />
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 to-transparent rounded-xl opacity-0 group-hover:opacity-50 blur-[20px] transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Curated Tags */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {[
                "SingleMalt",
                "AgedRum",
                "Cognac",
                "SmallBatch",
                "Vintage",
                "LimitedEdition",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-gradient-to-b from-amber-900/50 to-amber-800/30 border border-amber-500/30 text-amber-100 px-4 py-1.5 rounded-full hover:bg-amber-900/70 hover:border-amber-400/50 hover:scale-105 transition-all duration-300 cursor-pointer text-sm font-medium tracking-wide"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;