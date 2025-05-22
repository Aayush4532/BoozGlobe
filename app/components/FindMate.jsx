import React from "react";
import { UsersIcon, SparklesIcon, MapPinIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

const FindMatesSection = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto my-24 px-6 py-20 bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl shadow-2xl border border-amber-500/20 overflow-hidden isolate">
      
      {/* Decorative glow & blur */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-amber-500/10 blur-3xl rounded-full opacity-30 z-0" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-amber-400/10 blur-2xl rounded-full opacity-30 z-0" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-amber-400 leading-tight tracking-wide">
            Sip Together, Not Alone
          </h2>
          <p className="text-lg sm:text-xl text-amber-100/80 font-light max-w-md">
            Find like-minded drink lovers nearby or worldwide. Set your vibe, mood, or drink, and discover people who want to toast with you.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-sm font-medium shadow-md transition">
              <UsersIcon className="h-5 w-5" />
              Find Drinking Buddies
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 border border-amber-500/40 hover:border-amber-400 text-amber-100 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-lg text-sm font-medium transition">
              <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />
              Start a Toast Chat
            </button>
          </div>
        </div>

        {/* Visual card or mock UI */}
        <div className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl p-6 shadow-inner space-y-5 max-w-sm mx-auto">
          <h3 className="text-xl font-semibold text-white text-center">People Matching Your Vibe</h3>

          <ul className="space-y-4">
            <li className="flex items-center justify-between bg-black/30 px-4 py-3 rounded-xl">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-amber-500/30 flex items-center justify-center text-white font-bold">
                  A
                </span>
                <div>
                  <p className="text-white font-medium">Aanya (India)</p>
                  <p className="text-sm text-amber-100/70">Loves Whiskey | 5km away</p>
                </div>
              </div>
              <button className="text-sm text-amber-400 hover:text-white">Invite</button>
            </li>

            <li className="flex items-center justify-between bg-black/30 px-4 py-3 rounded-xl">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-amber-500/30 flex items-center justify-center text-white font-bold">
                  R
                </span>
                <div>
                  <p className="text-white font-medium">Rafael (Spain)</p>
                  <p className="text-sm text-amber-100/70">Red Wine | Open to chat</p>
                </div>
              </div>
              <button className="text-sm text-amber-400 hover:text-white">Toast</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FindMatesSection;