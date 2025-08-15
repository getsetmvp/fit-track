'use client';

import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  imageUrl,
  imageAlt
}) => {
  return (
    <div className="group cursor-pointer">
      {/* Feature Image */}
      <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] shadow-lg group-hover:shadow-2xl transition-all duration-300">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-lg">
        {description}
      </p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Workout Tracking',
      description: 'Easily log your workouts, track your exercises, and monitor your performance over time with our intuitive tracking system.',
      imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Person tracking workout on mobile app'
    },
    {
      title: 'Personalized Plans',
      description: 'Get customized workout plans tailored to your fitness level and goals, ensuring optimal results for your unique journey.',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Personal trainer creating custom workout plan'
    },
    {
      title: 'Progress Monitoring',
      description: 'Visualize your progress with detailed charts and statistics, keeping you motivated and on track towards your goals.',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Fitness progress charts and analytics'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold text-[#3d82f6] tracking-wide uppercase mb-4">
            Key Features
          </h2>
          <h3 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Unlock Your Potential
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the features that make our app the perfect companion for your fitness journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
              imageAlt={feature.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
