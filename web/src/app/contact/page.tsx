import React from 'react';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-gray-600 mb-8">
            We&apos;d love to hear from you. Get in touch with our team for support, questions, or feedback.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-[#3d82f6] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">support@fittrack.app</p>
                    <p className="text-sm text-gray-500 mt-1">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-[#3d82f6] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      FitTrack Inc.<br />
                      123 Fitness Street<br />
                      Health City, HC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-[#3d82f6] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Support Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday - Sunday: 10:00 AM - 4:00 PM PST
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#3d82f6] pl-4">
                    <h3 className="font-semibold text-gray-900">How do I sync my data across devices?</h3>
                    <p className="text-gray-600 text-sm mt-1">Create an account and sign in on all your devices to automatically sync your workout data.</p>
                  </div>
                  <div className="border-l-4 border-[#3d82f6] pl-4">
                    <h3 className="font-semibold text-gray-900">Can I export my workout data?</h3>
                    <p className="text-gray-600 text-sm mt-1">Yes, you can export your data from the app settings or contact us for assistance.</p>
                  </div>
                  <div className="border-l-4 border-[#3d82f6] pl-4">
                    <h3 className="font-semibold text-gray-900">Is my data secure?</h3>
                    <p className="text-gray-600 text-sm mt-1">We use industry-standard encryption to protect your data. Read our Privacy Policy for more details.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3d82f6] focus:border-transparent outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3d82f6] focus:border-transparent outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3d82f6] focus:border-transparent outline-none transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="feature">Feature Request</option>
                    <option value="bug">Bug Report</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3d82f6] focus:border-transparent outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#3d82f6] hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
