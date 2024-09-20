// // src/stores/slugStore.ts
// import { writable } from 'svelte/store';
// import type { Blog } from '../types';
// import type { Params } from '../types'; // Import your Params type

// // Create a writable store for the slug
// export const slugStore = writable<string | null>(null);

// export const fetchSlug = async (params: Params) => {
//     const { slug } = params;
//     try {
//         const response = await fetch(`api/blogs/${slug}`);
//         if (!response.ok) throw new Error('Failed to fetch blog');
//         const blog: Blog = await response.json();
//         console.log('Fetched blog', blog);
//         return { blog };
//     } catch (error) {
//         console.error('Error fetching blog:', error);
//         return { blog: null }; // Return null in case of an error
//     }
// };
