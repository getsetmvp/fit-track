import React from 'react';
import { CONTACT_LINKS, COMPANY_INFO } from '@/constants/social';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: August 15, 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to FitTrack (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our mobile application and related services (collectively, the &quot;Service&quot;).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect information you provide directly to us, such as:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Account information (name, email address, username)</li>
                <li>Profile information (age, height, weight, fitness goals)</li>
                <li>Workout data (exercises, sets, reps, weights, duration)</li>
                <li>Progress photos and measurements</li>
                <li>Communications with us</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Device information (device type, operating system, app version)</li>
                <li>Usage data (features used, time spent in app, preferences)</li>
                <li>Location data (if you grant permission for location-based features)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Provide, maintain, and improve our Service</li>
                <li>Create and manage your account</li>
                <li>Track your fitness progress and provide personalized recommendations</li>
                <li>Send you updates, notifications, and promotional materials</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Analyze usage patterns to improve user experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>With your consent</li>
                <li>With service providers who assist us in operating our Service</li>
                <li>For legal compliance or to protect our rights</li>
                <li>In connection with a business transaction (merger, acquisition, etc.)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
              <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Access and update your personal information</li>
                <li>Delete your account and associated data</li>
                <li>Opt-out of promotional communications</li>
                <li>Control location sharing permissions</li>
                <li>Request a copy of your data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children&apos;s Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> {CONTACT_LINKS.email}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Company:</strong> {COMPANY_INFO.name}
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
