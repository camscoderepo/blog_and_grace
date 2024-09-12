// src/routes/api/blogs/+server.ts
import type { RequestHandler } from  '@sveltejs/kit';

// Sample data or replace this with fetching from a database
const blogs = [
    { slug: 'first-post', title: 'First Post', content: 'This is the content of the first post' },
    { slug: 'second-post', title: 'Second Post', content: 'This is the content of the second post' }
];

// Handle GET request
export const GET: RequestHandler = async ({ url }) => {
    const slug = url.searchParams.get('slug'); // Get the slug from the query parameters
    
    if (slug) {
        const blog = blogs.find((b) => b.slug === slug);
        
        if (blog) {
            return new Response(JSON.stringify(blog), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } else {
            return new Response(JSON.stringify({ message: 'Blog not found' }), {
                status: 404
            });
        }
    }

    // If no slug, return all blogs
    return new Response(JSON.stringify(blogs), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};