'use client';

import React from 'react';
import Link from 'next/link';
import { FaBlog, FaRegFileAlt, FaTasks } from 'react-icons/fa';

const DashboardPage: React.FC = () => {
  const stats = [
    { label: 'Total Blogs', value: 150, icon: <FaBlog className="text-blue-500 text-3xl" /> },
    { label: 'Drafts', value: 30, icon: <FaRegFileAlt className="text-yellow-500 text-3xl" /> },
    { label: 'Tasks', value: 5, icon: <FaTasks className="text-green-500 text-3xl" /> },
  ];

  const recentActivity = [
    { type: 'Blog Post Created', item: 'How to use React Hooks', date: '2023-10-27' },
    { type: 'Blog Post Updated', item: 'Understanding TypeScript', date: '2023-10-26' },
    { type: 'Comment Added', item: 'on "Getting Started with Next.js"', date: '2023-10-25' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg flex flex-col justify-between">
        <div>
          <div className="p-6 text-2xl font-bold text-blue-600 dark:text-white">CodeCafe Admin</div>
          <nav className="mt-4 px-4">
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard" className="block px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/blog" className="block px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/settings" className="block px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="p-4">
          <Link href="/logout" className="block px-4 py-2 text-red-600 rounded-md hover:bg-red-100 dark:hover:bg-red-900 transition">
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-8">Welcome, Admin!</h1>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center">
              <div className="mr-4">{stat.icon}</div>
              <div>
                <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">{stat.label}</h2>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Recent Activity */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <ul>
              {recentActivity.map((activity, index) => (
                <li
                  key={index}
                  className={`py-3 ${index < recentActivity.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''}`}
                >
                  <p>
                    <span className="font-medium">{activity.type}:</span> {activity.item}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{activity.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Quick Links */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <Link
            href="/blog/edit"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow transition"
          >
            Create New Blog
          </Link>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
