// src/routes/api/blogs/+server.ts
import { json } from '@sveltejs/kit';

export async function GET() {
  // Replace this with actual data fetching logic
  const blogs = [
    { slug: 'first-post', title: 'First Post' },
    { slug: 'second-post', title: 'Second Post' }
  ];

  return json(blogs);
}
