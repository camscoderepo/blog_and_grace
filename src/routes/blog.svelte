<!-- src/routes/blog.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';

    interface Blog {
    slug: string;
    title: string;
    content: string;
  }
  let blogs: Blog[] = [];
  
  onMount(async () => {
    try {
      const response = await fetch('/api/blogs');
      if (!response.ok) throw new Error('Failed to fetch blogs');
      blogs = await response.json();
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  });
  </script>
  
  <h1>All Blogs</h1>
  
  <div class="max-w-4xl mx-auto p-4 grid grid-cols-1 md:grid-cols-1 gap-6">
    {#each blogs as blog}
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-3xl font-bold mb-2">{blog.title}</h2>
        <p class="text-gray-600 mb-4">{blog.date}</p>
        <p class="text-gray-700">{blog.excerpt}</p>
      </div>
    {/each}
  </div>
  