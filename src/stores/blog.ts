// src/stores/blogs.ts
import { writable } from 'svelte/store';

// Store to hold blog data
export const blogStore = writable([]);


// Fetch blog data and update the store
// Fetch blog data and update the store
export const fetchBlogs = async () => {
    try {
        const response = await fetch('/api/blogs'); // This should point to your API
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        blogStore.set(data); // Update the store with the data
    } catch (error) {
        console.error('Error fetching blogs:', error);
    }
};