<script context="module" lang="ts">
    //Declare blog as a prop

    import type { Load } from '@sveltejs/kit';
    import type { Blog } from '../../../types'; // Adjust the path as needed
    
    let blog: Blog;
    

    export const load: Load = async ( ) => {

    }
    
  </script>




  {#if blog}
    <h1>{blog.title}</h1>
    <div>{blog.content}</div>
    <div>{blog.date}</div>
    <p>{blog.excerpt}</p>
  {:else}
    <p>Blog not here...</p>
   
  {/if}
  