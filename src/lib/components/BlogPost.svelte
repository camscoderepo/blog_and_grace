<!-- src/lib/components/BlogPost.svelte -->
<script lang="ts">
    export let post: {
      title: string;
      date?: string;
      excerpt: string;
    } = { title: "", excerpt: "" }; // Default values to avoid errors
    
    export let showDate = true;
  </script>
  
  <style>
    .post {
      @apply mb-4 p-4 border border-gray-200 rounded-lg shadow-sm;
    }
    .title {
      @apply text-xl font-bold mb-2;
    }
    .date {
      @apply text-gray-600 mb-2;
    }
    .excerpt {
      @apply text-gray-800;
    }
  </style>
  
  <div class="post">
    <h2 class="title">{post.title}</h2>
    {#if showDate && post.date}
      <p class="date">{post.date}</p>
    {/if}
    <p class="excerpt">{post.excerpt}</p>
  </div>
  