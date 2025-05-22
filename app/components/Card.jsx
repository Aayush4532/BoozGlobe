// components/Card.jsx
"use client"; // Add this directive at the top

import React from "react";
import { StarIcon, HeartIcon } from "@heroicons/react/24/solid";

const Card = ({ image, name, origin, price, tags, premium }) => {
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/256x288/1a1a1a/cccccc?text=Spirit+Image';
  };

  return (
    <div className="w-64 group transform transition-all duration-500 hover:scale-105 hover:z-10">
      <div className="relative overflow-hidden rounded-xl shadow-2xl">
        <div className="relative">
          <img
            className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={image}
            alt={`${name} - ${origin}`}
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          {premium && (
            <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
              <StarIcon className="h-3 w-3 mr-1" />
              PREMIUM
            </div>
          )}
          
          <button className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-amber-600 transition-all">
            <HeartIcon className="h-5 w-5 text-white" />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="font-playfair text-2xl font-bold">{name}</h3>
              <p className="text-amber-300 font-light">{origin}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-amber-100/80">Starting from</p>
              <p className="text-xl font-bold">{price}</p>
            </div>
          </div>
          
          <div className="mt-4 flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-amber-900/50 text-amber-100 text-xs px-3 py-1 rounded-full border border-amber-800/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;