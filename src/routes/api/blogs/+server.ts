// src/routes/api/blogs/+server.ts
import type { RequestHandler } from  '@sveltejs/kit';



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