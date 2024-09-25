// src/stores/blogs.ts
import { writable } from 'svelte/store';
import { supabase } from '$lib/supabaseClient';
import type { Blog } from '../types';
// Store to hold blog data
export const blogStore = writable<Blog[]>([]);
export const blogsError = writable('');



// const signIn = async () => {
//     const { data, error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//     });

//     if (error) {
//         console.error('Sign-in error:', error);
//         return;
//     }

//     console.log('Signed in user:', data);
//     // Now you can fetch blogs or perform other actions
//     fetchBlogs();
// };

// signIn();



// Fetch blog data and update the store
// Fetch blog data and update the store
export const fetchBlogs = async () => {
    console.log('Fetching blogs...'); // Log to indicate fetch is happening
    const { data: blog_posts, error } = await supabase
    .from('blog_posts')
    .select('*')

    console.log('Data:', blog_posts); // Log the data received
    console.log('Error:', error); // Log any error received

    if (error) {
        console.error('Error loading posts:', error);
        blogsError.set('Error loading posts');
    } else {
        blogStore.set(blog_posts); // Update the store with fetched posts
    }
};


