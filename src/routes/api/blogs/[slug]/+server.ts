// src/routes/api/blogs/[slug]/+server.ts
// src/routes/api/blogs/[slug]/+server.ts
import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient'; // Adjust the import path if necessary

// Define the Post type according to your database structure

export async function GET({ params }: { params: { content: string } }) {
  const { content } = params;

  // Fetching the blog post from Supabase
  const { data: blogPost, error } = await supabase
    .from('blog_posts') // Replace 'posts' with your actual table name in Supabase
    .select('*')
    .eq('content', content)
    .maybeSingle(); // Use .single() to fetch one record

  // Error handling
  if (error || !blogPost) {
    return json({ error: 'Blog post not found' }, { status: 404 });
  }

  return json(blogPost);
}
