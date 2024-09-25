import type { Load } from '@sveltejs/kit'; // Import the Load type
// import type { Blog } from '../../../types';
import { fetchBlogBySlug } from '../../../stores/blogPost';

// Load function to fetch the blog post
export const load: Load = async ({ params }) => {
  const { slug } = params as { slug: string, title: string, content: string };

  console.log('Slug:', slug);
  // Fetch blog data based on the slug
    const response = await fetchBlogBySlug(slug)
    if (!response) {
      return { status: 404, error: 'Blog post not found' }; // Handle the error case
  }

  return {
      props: {
          post: response // Pass the post data as props
      }
  };
};
