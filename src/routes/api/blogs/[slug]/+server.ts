// src/routes/api/blogs/[slug]/+server.ts
import { json } from '@sveltejs/kit';


const blogPosts = [
  { slug: 'first-post', title: 'First Post', date: '2022-01-01', excerpt: 'This is the first post.', content: 'Content of the first post.' },
  { slug: 'second-post', title: 'Second Post', date: '2022-02-01', excerpt: 'This is the second post.', content: 'Content of the second post.' },
];

  // Replace this with actual data fetching logic
  export async function GET({ params }) {
    const { slug } = params;
    const blogPost = await blogPosts.find(post => post.slug === slug) || null; // Replace this with your actual data fetching logic(slug);
  
    if (!blogPost) {
      return json({ error: 'Blog post not found' }, { status: 404 });
    }
  
    return json(blogPost);
  }
