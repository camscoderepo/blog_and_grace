<!-- src/routes/blog.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';

    interface Blog {
    slug: string;
    title: string;
    excerpt: string;
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
  
  {#each blogs as blog}
  <div>
    <a href={`/blog/${blog.slug}`}>
      <h2>{blog.title}</h2>
    </a>
    <p>{blog.excerpt}</p>
  </div>
{/each}
  