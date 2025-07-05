'use client';

import React from 'react';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  author: string;
  status: 'published' | 'draft';
  category: string;
  tags: string[];
  readTime: string;
  createdDate: string;
  views: number;
  thumbnail: string;
  featured: boolean;
}


const dummyBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with CodeCafe Lab',
    author: 'Admin User',
    status: 'published',
    category: 'React',
    tags: ['react', 'basics'],
    readTime: '5 min',
    createdDate: '2023-10-27',
    views: 1200,
    thumbnail: '/images/blog1.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'Building Your First Feature',
    author: 'Admin User',
    status: 'draft',
    category: 'Next.js',
    tags: ['nextjs', 'routing'],
    readTime: '8 min',
    createdDate: '2023-10-26',
    views: 450,
    thumbnail: '/images/blog2.jpg',
    featured: false,
  },
];


const BlogManagementPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4 sm:px-10 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Blog Management</h1>
          <Link
            href="/blog/create"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium shadow transition"
          >
            Create New Blog
          </Link>
        </div>

        {/* Blog Table */}
        <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium">Title</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Author</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Category</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Tags</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Read Time</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Views</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Created</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Featured</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {dummyBlogPosts.map((post) => (
                <tr key={post.id}>
                  <td className="px-6 py-4">{post.title}</td>
                  <td className="px-6 py-4">{post.author}</td>
                  <td className="px-6 py-4">{post.category}</td>
                  <td className="px-6 py-4">{post.tags.join(', ')}</td>
                  <td className="px-6 py-4">{post.readTime}</td>
                  <td className="px-6 py-4">{post.views}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${post.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{post.createdDate}</td>
                  <td className="px-6 py-4">
                    {post.featured ? (
                      <span className="text-green-600 font-semibold">Yes</span>
                    ) : (
                      <span className="text-gray-500">No</span>
                    )}
                  </td>
                  <td className="px-6 py-4 space-x-3">
                    <Link href={`/blog/edit/${post.id}`} className="text-blue-600 hover:underline">
                      Edit
                    </Link>
                    <button onClick={() => alert(`Delete blog ${post.id}`)} className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogManagementPage;
