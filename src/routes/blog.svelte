<!-- src/routes/blog.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import type { Blog } from '../types';
  import { invalidate } from '$app/navigation';
  import { goto } from '$app/navigation';
  import { blogStore, fetchBlogs } from '../stores/blog';

  let blogs: Blog[] = [];

  const unsubscribe = blogStore.subscribe(value => {
    blogs = value;
  });

  const navigateToBlog = async (slug: string) => {
    try {
      console.log('Navigating to blog and invalidating:', slug); // Log invalidation step
      await invalidate(`/blog/${slug}`); // Force re-fetch of blog data
      goto(`/blog/${slug}`);
    } catch (error) {
      console.error('Error navigating:', error);
    }
  };



  // Optional: Fetch data on component mount
  onMount(() => {
    fetchBlogs(); // Only if you need to refresh the data
    
    return () => {
      unsubscribe(); // Cleanup on component unmount
    };
  });

  </script>
  
  <h1>All Blogs</h1>
  
  <div class="max-w-4xl mx-auto p-4 grid grid-cols-1 md:grid-cols-1 gap-6">
    {#each blogs as blog}
      <button on:click={() => navigateToBlog(blog.slug)} class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-3xl font-bold mb-2">{blog.title}</h2>
        <p class="text-gray-600 mb-4">{blog.date}</p>
        <p class="text-gray-700">{blog.excerpt}</p>
        <p class="text-gray-700">{blog.content}</p>
      </button>
    {/each}
  </div>
  