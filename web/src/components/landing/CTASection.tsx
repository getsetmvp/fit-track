'use client';

import React from 'react';
import Image from 'next/image';
import { APP_DOWNLOAD_LINKS } from '@/constants/social';

const CTASection: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Fitness motivation background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3d82f6]/90 to-blue-900/90"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8">
          Ready to Transform Your Fitness?
        </h2>
        <p className="text-xl sm:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
          Join thousands of users who are achieving their fitness goals with our app. 
          Download now and start your journey today.
        </p>
        <div className="flex justify-center">
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
    </section>
  );
};

export default CTASection;
