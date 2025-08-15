'use client';

import React from 'react';
import Image from 'next/image';
import { APP_DOWNLOAD_LINKS } from '@/constants/social';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Modern gym background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-white">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Your Personal Fitness Journey{' '}
              <span className="text-[#3d82f6]">Starts Here</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-10 leading-relaxed">
              Achieve your fitness goals with a comprehensive app. Track your workouts, monitor your progress, and stay motivated.
            </p>
            <div className="flex justify-start">
              <a 
                href={APP_DOWNLOAD_LINKS.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all transform hover:scale-105 cursor-pointer inline-block"
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="shadow-lg"
                />
              </a>
            </div>
          </div>

          {/* Right side - Feature Preview */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Fitness tracking preview"
                width={400}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-sm font-semibold text-gray-800">Today&apos;s Progress</div>
                <div className="text-2xl font-bold text-[#3d82f6]">2,847 steps</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
