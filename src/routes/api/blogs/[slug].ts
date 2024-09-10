import type { RequestHandler } from '@sveltejs/kit';



const blogs: Record<string, { title: string; date: string; content: string }> = {
    'example-slug': {
      title: 'Example Blog',
      date: '2024-09-10',
      content: 'This is an example blog post.',
    },
  };

export const get: RequestHandler = async ({ params }) => {
  const { slug } = params;

  if (slug && blogs[slug]) {
    return new Response(JSON.stringify(blogs[slug]), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return new Response(JSON.stringify({ error: 'Blog not found' }), {
    status: 404,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
