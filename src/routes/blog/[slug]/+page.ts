import type { Load } from '@sveltejs/kit'; // Import the Load type
import type { Blog } from '../../../types';

// Load function to fetch the blog post
export const load: Load = async ({ params, fetch }) => {
  const { slug } = params;

  // Fetch blog data based on the slug
  const response = await fetch(`/api/blogs/${slug}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch blog for slug: ${slug}`);
  }

  const blog: Blog = await response.json()

  // Return the blog data
  return { blog };
};