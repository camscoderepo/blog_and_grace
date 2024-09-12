<!-- src/routes/profile/+page.svelte -->
<script lang="ts">
    import { userStore } from '../../stores/userStore'; // Adjust the path as needed
    import { onDestroy } from 'svelte';
    let user;
  
    // Subscribe to the userStore
    const unsubscribe = userStore.subscribe(value => {
      user = value;
    });
  
    // Clean up subscription when component is destroyed
    onDestroy(() => {
      unsubscribe();
    });
  </script>
  
  <style>
    .profile {
      max-width: 600px;
      margin: 0 auto;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  
    h1 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
  
    p {
      font-size: 1rem;
      color: #666;
    }
  </style>
  
  <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
    {#if user}
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4 text-gray-800">{user.name}</h1>
        <p class="text-gray-600 text-sm mb-2">{user.email}</p>
        <p class="text-gray-700">{user.bio}</p>
      </div>
    {:else}
      <p class="text-center text-gray-500">Loading...</p>
    {/if}
  </div>