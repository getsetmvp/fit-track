'use client';

import React from 'react';

interface PricingPlanProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  isRecommended?: boolean;
  isBestValue?: boolean;
  buttonText: string;
  buttonVariant: 'primary' | 'secondary';
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  name,
  price,
  period,
  features,
  isRecommended,
  isBestValue,
  buttonText,
  buttonVariant
}) => {
  return (
    <div className={`relative bg-white rounded-xl border-2 p-8 ${
      isRecommended ? 'border-[#3d82f6] shadow-xl' : 'border-gray-200'
    }`}>
      {/* Badges */}
      {isRecommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-[#3d82f6] text-white px-4 py-1 rounded-full text-sm font-semibold">
            Recommended
          </span>
        </div>
      )}
      {isBestValue && (
        <div className="absolute -top-3 right-4">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Best Value
          </span>
        </div>
      )}

      {/* Plan Name */}
      <h3 className="text-xl font-bold text-gray-900 mb-4">{name}</h3>

      {/* Price */}
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-500 ml-1">{period}</span>
      </div>

      {/* Button */}
      <button
        className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors mb-8 ${
          buttonVariant === 'primary'
            ? 'bg-[#3d82f6] hover:bg-blue-700 text-white'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
        }`}
      >
        {buttonText}
      </button>

      {/* Features */}
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <svg 
              className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                clipRule="evenodd" 
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      period: '/month',
      features: [
        'Workout Tracking',
        'Basic Exercises'
      ],
      buttonText: 'Get Started',
      buttonVariant: 'secondary' as const
    },
    {
      name: 'Premium',
      price: '$9.99',
      period: '/month',
      features: [
        'Workout Tracking',
        'Personalized Plans',
        'Advanced Exercises'
      ],
      isRecommended: true,
      buttonText: 'Upgrade',
      buttonVariant: 'primary' as const
    },
    {
      name: 'Pro',
      price: '$19.99',
      period: '/month',
      features: [
        'Workout Tracking',
        'Personalized Plans',
        'Advanced Exercises',
        'Premium Support'
      ],
      isBestValue: true,
      buttonText: 'Upgrade',
      buttonVariant: 'primary' as const
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your fitness journey
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              {...plan}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
