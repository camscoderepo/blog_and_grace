<!-- src/components/Navbar.svelte -->
<script lang="ts">
  import { LightSwitch } from '@skeletonlabs/skeleton';
  import { username } from '../stores/userStore'; // Import the username store
  import { onMount } from 'svelte';

  // Declare slug prop
  export let slug: string;
  console.log(slug);

  // Store to get current username
  let currentUsername: string | null = '';
  $: currentUsername = $username; // Reactive assignment from the store

  // Fetch username from localStorage on mount
  onMount(() => {
      const storedUsername = localStorage.getItem('username');
      if (storedUsername) {
          currentUsername = storedUsername;
      }
  });
</script>

<style>
  /* Add any custom styles here */
</style>

<nav class="bg-gray-800 p-4">
  <ul class="flex justify-center space-x-4">
      <li><a href="/" class="text-white hover:text-gray-400">Home</a></li>
      <li><a href={`/blog/${slug}`} class="text-white hover:text-gray-400">Blog</a></li>
      <li><a href="/profile" class="text-white hover:text-gray-400">Profile</a></li>
  </ul>

  <!-- Display the username -->
  <div class="text-white ml-auto">
      {#if currentUsername}
          Welcome, {currentUsername}!
      {/if}
  </div>
</nav>
