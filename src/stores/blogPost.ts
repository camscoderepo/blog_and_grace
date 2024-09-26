// src/stores/blogPost.ts
import { writable } from 'svelte/store';
import { supabase } from '$lib/supabaseClient';
import type { Blog } from '../types';

export const blogPostStore = writable<Blog | null>(null);
export const blogPostError = writable('');

export async function fetchBlogByContent(content: string) {
    const { data, error } = await supabase
      .from('blog_posts') // Make sure this matches your table name
      .select('*')
      .eq('content', content) // Specify the fields you want to return
      .single(); // Fetch a single blog post by slug
  
    if (error) {
      console.error('Error fetching blog post:', error);
      return null;
    }
  
    return data;
  }
