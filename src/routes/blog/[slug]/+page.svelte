<script lang="ts">
  import { supabase } from "$lib/supabaseClient";
  export let post;

  export async function load({ params }: { params: { slug: string } }) {
    const { slug } = params;

    // Fetching the blog post from Supabase
    const { data: post, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error || !post) {
      throw new Error('Blog post not found');
    }

    return {
      props: {
        post
      }
    };
  }

  </script>




  {#if post}
    <!-- <h1>{post.title}</h1> -->
    <div>{post.content}</div>
    <!-- <div>{post.created_at}</div> -->
    <!-- <p>{post.excerpt}</p> -->
  {:else}
    <p>Blog will be here...</p>
   
  {/if}
  