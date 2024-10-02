<!-- src/components/Navbar.svelte -->
<script lang="ts">
    import { username } from '../stores/userStore'; // Import the username store
    export let slug: string;
    
    // Reactive assignment from the store
    let currentUsername: string | null = '';
    $: currentUsername = $username; // Automatically updates when username changes
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
