<script lang="ts">
    //Declare blog as a prop
    import { onMount } from 'svelte';
    import type { Load } from '@sveltejs/kit';
    import type { Blog } from '../../../types'; // Adjust the path as needed
    let blog: Blog;
    
    onMount(async () => {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      blog = data;
    });

    export const load: Load = async ({ params }) => {
      const { slug } = params;
      try {
        const response = await fetch(`api/blogs/${slug}`);
        if (!response.ok) throw new Error('Failed to fetch blog');
        const blog: Blog = await response.json();
        return { props: { blog } };
      } catch (error) {
        console.error('Error fetching blog:', error);
        return { props: { blog } };
      }
    };

    
  </script>

  {#if blog}
    <h1>{blog.title}</h1>
    <div>{blog.content}</div>
  {:else}
    <p>Blog not here...</p>
   
  {/if}
  