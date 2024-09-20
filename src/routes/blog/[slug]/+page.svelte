<script lang="ts">
    //Declare blog as a prop
  export let data;  // Data from load function in +page.ts
  const { blog } = data;  // Extract blog from data
  </script>




  {#if blog}
    <h1>{blog.title}</h1>
    <div>{blog.content}</div>
    <div>{blog.date}</div>
    <p>{blog.excerpt}</p>
  {:else}
    <p>Blog will be here...</p>
   
  {/if}
  