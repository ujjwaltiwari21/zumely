"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

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
  const [isMobile, setIsMobile] = useState(false);
  const [imageErrors, setImageErrors] = useState({});
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleImageError = (logoName) => {
    setImageErrors(prev => ({ ...prev, [logoName]: true }));
  };

  // Fallback initials for failed images
  const getInitials = (name) => name.slice(0, 2).toUpperCase();

  // Split logos into two rows for better mobile display
  const firstRowLogos = logos.slice(0, Math.ceil(logos.length / 2));
  const secondRowLogos = logos.slice(Math.ceil(logos.length / 2));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 lg:py-32 bg-[#020617] overflow-hidden"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Primary glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-emerald-500/15 blur-[120px] rounded-full animate-pulse-slow" />
        
        {/* Secondary glow */}
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/10 blur-[100px] rounded-full" />
        
        {/* Tertiary glow */}
        <div className="absolute bottom-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-purple-500/10 blur-[100px] rounded-full" />
        
        {/* Subtle dot pattern instead of SVG grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={containerVariants}
          className="text-center mb-10 md:mb-16"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4 md:mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] md:text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                Trusted By Industry Leaders
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight"
          >
            Powering Innovation for{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Global Industry Leaders
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base lg:text-lg text-gray-400 mt-4 md:mt-6 max-w-3xl mx-auto leading-relaxed"
          >
            We partner with forward-thinking brands to engineer scalable digital solutions,
            high-performance software architectures, and seamless user experiences across the
            global tech ecosystem.
          </motion.p>
        </motion.div>

        {/* Marquee Logos Section */}
        <div className="relative overflow-hidden py-6 md:py-8">
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#020617] to-transparent z-20" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#020617] to-transparent z-20" />

          {/* Desktop: Single Marquee */}
          <div className="hidden md:block">
            <div className="marquee-wrapper overflow-hidden">
              <div className="marquee flex gap-12 lg:gap-16 items-center">
                {[...logos, ...logos].map((logo, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center flex-shrink-0 w-[120px] md:w-[140px] h-[60px] md:h-[80px] group"
                  >
                    {imageErrors[logo.name] ? (
                      <div className="w-full h-full flex items-center justify-center bg-white/5 rounded-xl">
                        <span className="text-white/40 font-bold text-lg">
                          {getInitials(logo.name)}
                        </span>
                      </div>
                    ) : (
                      <img
                        src={logo.src}
                        alt={`${logo.name} official brand partner logo`}
                        loading="lazy"
                        className="h-8 md:h-10 object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110 opacity-70 group-hover:opacity-100"
                        onError={() => handleImageError(logo.name)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Two Rows (No animation on mobile for better performance) */}
          <div className="md:hidden space-y-6">
            {/* First Row */}
            <div className="flex flex-wrap justify-center gap-6">
              {firstRowLogos.map((logo, i) => (
                <motion.div
                  key={`row1-${i}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03, duration: 0.3 }}
                  className="flex items-center justify-center w-[90px] h-[50px] group"
                >
                  {imageErrors[logo.name] ? (
                    <div className="w-full h-full flex items-center justify-center bg-white/5 rounded-lg">
                      <span className="text-white/40 font-bold text-sm">
                        {getInitials(logo.name)}
                      </span>
                    </div>
                  ) : (
                    <img
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      loading="lazy"
                      className="h-6 object-contain transition-all duration-300 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                      onError={() => handleImageError(logo.name)}
                    />
                  )}
                </motion.div>
              ))}
            </div>
            {/* Second Row */}
            <div className="flex flex-wrap justify-center gap-6">
              {secondRowLogos.map((logo, i) => (
                <motion.div
                  key={`row2-${i}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03 + 0.3, duration: 0.3 }}
                  className="flex items-center justify-center w-[90px] h-[50px] group"
                >
                  {imageErrors[logo.name] ? (
                    <div className="w-full h-full flex items-center justify-center bg-white/5 rounded-lg">
                      <span className="text-white/40 font-bold text-sm">
                        {getInitials(logo.name)}
                      </span>
                    </div>
                  ) : (
                    <img
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      loading="lazy"
                      className="h-6 object-contain transition-all duration-300 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                      onError={() => handleImageError(logo.name)}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section - Premium Addition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={itemVariants}
          className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div className="space-y-1 md:space-y-2">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">500+</p>
              <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">Projects Delivered</p>
            </div>
            <div className="space-y-1 md:space-y-2">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">98%</p>
              <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">Client Retention</p>
            </div>
            <div className="space-y-1 md:space-y-2">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">24/7</p>
              <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">Support Available</p>
            </div>
            <div className="space-y-1 md:space-y-2">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">50M+</p>
              <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">Users Impacted</p>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.25;
            transform: scale(1.05);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .marquee-wrapper {
          overflow: hidden;
          width: 100%;
        }
        
        .marquee {
          width: max-content;
          animation: scroll 30s linear infinite;
          will-change: transform;
        }
        
        .marquee:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 768px) {
          .marquee {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
}