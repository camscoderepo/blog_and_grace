<script lang="ts" context="module">
    //Declare blog as a prop
    export let blog: Blog | null;
    
    import type { Load } from '@sveltejs/kit';
    import type { Blog } from '../../../types'; // Adjust the path as needed

    export const load: Load = async ({ params }) => {
      const { slug } = params;
      try {
        const response = await fetch(`api/blogs/${slug}`);
        if (!response.ok) throw new Error('Failed to fetch blog');
        const blog: Blog = await response.json();
        return { props: { blog } };
      } catch (error) {
        console.error('Error fetching blog:', error);
        return { props: { blog: null } };
      }
    };

    
  </script>

<script lang="ts">
  import { onMount } from 'svelte';

  let blog: Blog | null = null;

  onMount(() => {
    console.log('Blog:', blog);
  });
</script>
  

  {#if blog}
    <h1>{blog.title}</h1>
    <div>{blog.content}</div>
  {:else}
    <p>Blog not here...</p>
   
  {/if}
  