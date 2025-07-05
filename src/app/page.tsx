'use client';

import React from 'react';
import Link from 'next/link';
import './globals.css';

export default function AdminPanelPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4 md:px-10 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">CodeCafe Admin Panel</h1>
          <p className="text-lg text-gray-600">
            Welcome to the admin panel. Use the options below to manage content and settings.
          </p>
        </header>

        {/* Dashboard Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Blog Management */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Blog Management</h2>
            <p className="text-gray-600 mb-4">Manage blog posts, drafts, and publish new articles.</p>
            <Link
              href="/blog"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Go to Blog
            </Link>
          </div>

          {/* Settings */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Settings</h2>
            <p className="text-gray-600 mb-4">Update admin preferences and site configurations.</p>
            <Link
              href="/settings"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Go to Settings
            </Link>
          </div>

          {/* Future Feature */}
          <div className="bg-white p-6 rounded-lg shadow opacity-80">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Future Feature</h2>
            <p className="text-gray-600 mb-4">This area is reserved for upcoming dashboard features.</p>
            <button
              disabled
              className="inline-block bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed"
            >
              Coming Soon
            </button>
          </div>
        </section>

        {/* Recent Activity Section */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Activity</h2>
          <p className="text-gray-600 mb-2">Track admin actions and blog post updates here.</p>
          <ul className="list-disc pl-5 text-sm text-gray-700">
            <li>Published new blog post: “Top 5 UI/UX Trends”</li>
            <li>Edited blog: “Getting Started with AI”</li>
            <li>Updated profile settings</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
