import React from 'react';
import Link from 'next/link';
import { CONTACT_LINKS, COMPANY_INFO } from '@/constants/social';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: August 15, 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By downloading, installing, or using the FitTrack mobile application (&quot;App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                FitTrack is a fitness tracking application that allows users to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Track workouts, exercises, and fitness activities</li>
                <li>Monitor progress and view statistics</li>
                <li>Create and follow personalized workout plans</li>
                <li>Set and track fitness goals</li>
                <li>Access fitness-related content and features</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To use certain features of the App, you must create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your account information</li>
                <li>Keep your login credentials secure</li>
                <li>Be responsible for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">You agree to use the App responsibly and not to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on the rights of others</li>
                <li>Upload harmful, offensive, or inappropriate content</li>
                <li>Attempt to hack, reverse engineer, or compromise the App</li>
                <li>Share false or misleading information</li>
                <li>Use the App for commercial purposes without permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Health and Safety Disclaimer</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-yellow-800 font-semibold">Important Health Notice:</p>
                <p className="text-yellow-700 mt-2">
                  FitTrack is not a medical device and should not replace professional medical advice. Always consult with a healthcare provider before starting any new fitness program.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                You acknowledge that:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Exercise involves inherent risks</li>
                <li>You should consult a doctor before beginning any fitness program</li>
                <li>You use the App and follow any recommendations at your own risk</li>
                <li>We are not responsible for injuries or health issues</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The App and its content, including but not limited to text, graphics, images, logos, and software, are owned by FitTrack or its licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your privacy is important to us. Please review our{' '}
                <Link href="/privacy" className="text-[#3d82f6] hover:underline cursor-pointer">
                  Privacy Policy
                </Link>
                {' '}to understand how we collect, use, and protect your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Subscription and Payments</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some features of the App may require a subscription or payment:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Subscription fees are charged in advance</li>
                <li>Subscriptions automatically renew unless cancelled</li>
                <li>Refunds are subject to our refund policy and applicable store policies</li>
                <li>We may change subscription prices with notice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your account and access to the App immediately, without prior notice, for any reason, including if you breach these Terms. You may also delete your account at any time through the App settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Disclaimers and Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                THE APP IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES AND SHALL NOT BE LIABLE FOR ANY DAMAGES ARISING FROM YOUR USE OF THE APP.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may modify these Terms at any time. Material changes will be communicated through the App or via email. Continued use of the App after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about these Terms, please contact us:
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
