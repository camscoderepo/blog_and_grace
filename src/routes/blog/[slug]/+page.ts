import type { Load } from '@sveltejs/kit'; // Import the Load type
// import type { Blog } from '../../../types';
import { fetchBlogByContent } from '../../../stores/blogPost';

// Load function to fetch the blog post
export const load: Load = async ({ params }) => {
  const { content } = params as {  content: string };

  console.log('Slug:', content);
  // Fetch blog data based on the slug
    const response = await fetchBlogByContent(content)
    if (!response) {
      return { status: 404, error: 'Blog post not found' }; // Handle the error case
  }

  return {
      props: {
          post: response // Pass the post data as props
      }
  };
};
