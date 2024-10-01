<!-- src/routes/profile/+page.svelte -->
<script>
  import { userStore } from '../../stores/userStore'; // Adjust the path as needed
  import { onDestroy } from 'svelte';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { goto } from '$app/navigation';
  export let user;

  // Subscribe to the userStore
  const unsubscribe = userStore.subscribe(value => {
    user = value;
  });

  // Clean up subscription when component is destroyed
  onDestroy(() => {
    unsubscribe();
  });

  // Function to handle navigation to settings
  const goToSettings = () => {
    goto('/profile/settings');
  };

  // Function to handle profile picture click (optional)
  const handleProfilePicClick = () => {
    // You can add functionality here, e.g., open profile picture in a modal
  };
</script>

<style>
.icon-container {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 1rem;
}
.profile-header {
  position: relative;
}
</style>

<div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6 relative profile-header">
<div class="icon-container">
  <FontAwesomeIcon icon="cog" class="cursor-pointer text-gray-600 hover:text-gray-800" on:click={goToSettings} size="lg" />
  <!-- <img src={user.profilePictureUrl || '/default-profile.png'} alt="Profile Picture" class="w-10 h-10 rounded-full cursor-pointer" on:click={handleProfilePicClick} /> -->
  <!-- Alternatively, use FontAwesome user-circle icon -->
  <!-- <FontAwesomeIcon icon="user-circle" class="cursor-pointer text-gray-600 hover:text-gray-800" on:click={handleProfilePicClick} size="lg" /> -->
</div>

{#if user}
  <div class="text-center mt-4">
    <h1 class="text-4xl font-bold mb-4 text-gray-800">{user.name}</h1>
    <p class="text-gray-600 text-sm mb-2">{user.email}</p>
    <p class="text-gray-700">{user.bio}</p>
    
    <!-- Additional User Info -->
    <div class="mt-4">
      <h2 class="text-2xl font-semibold text-gray-700 mb-2">About Me</h2>
      <p class="text-gray-600">{user.about}</p>
    </div>

    <!-- Display past blog posts -->
    <div class="mt-6">
      <h2 class="text-2xl font-semibold text-gray-700 mb-4">Past Blog Posts</h2>
      {#if user.blogPosts && user.blogPosts.length > 0}
        <ul class="space-y-2">
          {#each user.blogPosts as post}
            <li class="border-b pb-2">
              <a href={`/blog/${post.id}`} class="text-blue-500 hover:underline text-lg">{post.title}</a>
              <p class="text-gray-500 text-sm">{new Date(post.date).toLocaleDateString()}</p>
            </li>
          {/each}
        </ul>
      {:else}
        <p class="text-gray-500">No blog posts found.</p>
      {/if}
    </div>
  </div>
{:else}
  <p class="text-center text-gray-500">404 - User not found</p>
{/if}
</div>
