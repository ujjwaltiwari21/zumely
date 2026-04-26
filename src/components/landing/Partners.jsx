"use client";

import React from "react";

const logos = [
  { name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Figma", src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  { name: "Notion", src: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
  { name: "Meta", src: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png" },
  { name: "Amazon", src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Apple", src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Slack", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
  { name: "Netflix", src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Dropbox", src: "https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg" },
  { name: "Spotify", src: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
  { name: "Airbnb", src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" },
  { name: "Uber", src: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" },
  { name: "Zoom", src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg" },
];

export default function BrandPartners() {
  return (
    <section className="relative py-20 bg-[#020617] overflow-hidden">

      <div className="text-center mb-12 max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-white text-5xl md:text-4xl font-width-500">
          Powering Innovation for Global Industry Leaders & Emerging Tech Startups
        </h2>

        <p className="text-gray-400 mt-5 text-sm md:text-lg font-light leading-relaxed">
          We partner with forward-thinking brands to engineer scalable digital solutions, high-performance software architectures, and seamless user experiences across the global tech ecosystem.
        </p>
      </div>

      <div className="relative overflow-hidden z-10">
        <div className="marquee flex gap-16 items-center">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-[140px] h-[70px]"
            >
              <img
                src={logo.src}
                alt={`${logo.name} official brand partner logo`}
                loading="lazy"
                className="h-10 object-contain transition-all duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#020617] to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#020617] to-transparent"></div>
      </div>

      <style jsx>{`
        .marquee {
          width: max-content;
          animation: scroll 35s linear infinite;
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      {/* Green Glass Glow Effect */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[900px] h-[400px] bg-emerald-500/15 blur-[120px] rounded-full opacity-60"></div>
      </div>
      
      {/* Subtle Green Overlay for Glass Texture */}
      <div className="absolute inset-0 bg-emerald-500/[0.02] pointer-events-none"></div>
    </section>
  );
}