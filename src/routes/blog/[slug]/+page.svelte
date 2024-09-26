<script lang="ts">

  export let post;


  </script>




  {#if post}
    <!-- <h1>{post.title}</h1> -->
    <div>{post.content}</div>
    <!-- <div>{post.created_at}</div> -->
    <!-- <p>{post.excerpt}</p> -->
  {:else}
    <p>Blog will be here...</p>
   
  {/if}
  