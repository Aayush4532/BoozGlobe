import React from 'react';
import ListCard from './ListCard';
import FindMatesSection from './FindMate';

const Page2 = () => {
  return (
    <div className="bg-gradient-to-b from-black to-amber-950/20 min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-amber-100 mb-4">
            Our <span className="text-amber-400">Premium</span> Collection
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-transparent mx-auto mb-6"></div>
          <p className="text-amber-100/80 max-w-2xl mx-auto text-lg font-light">
            Carefully curated spirits from the world's finest distilleries and vineyards
          </p>
        </div>
        <ListCard />
        <FindMatesSection />
      </div>
    </div>
  );
};

export default Page2;