// src/stores/blogs.ts
import { writable } from 'svelte/store';

// Store to hold blog data
export const blogs = writable([]);


// Fetch blog data and update the store
export const fetchBlogs = async () => {
    try {
        const response = await fetch('/api/blogs');
        const data = await response.json();
        blogs.set(data); // Update the store with the data
    } catch (error) {
        console.error('Error fetching blogs:', error);
    }
};