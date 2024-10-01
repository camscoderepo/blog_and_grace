<!-- src/routes/profile/settings/+page.svelte -->
<script>
    import { userStore } from '../../../stores/userStore'; // Adjust the path as needed
    import { onDestroy } from 'svelte';
    import { navigate } from 'svelte-routing'; // If using svelte-routing, adjust accordingly
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { onMount } from 'svelte';

    let user;
    let username = '';
    let password = '';
    let confirmPassword = '';
    let error = '';
    let success = '';

    // Subscribe to the userStore
    const unsubscribe = userStore.subscribe(value => {
      user = value;
      if (user) {
        username = user.name;
      }
    });

    // Clean up subscription when component is destroyed
    onDestroy(() => {
      unsubscribe();
    });

    // Handle username and password changes
    const handleUpdate = async () => {
      error = '';
      success = '';

      if (password !== confirmPassword) {
        error = 'Passwords do not match.';
        return;
      }

      try {
        // Replace with your API call to update user info
        const response = await fetch('/api/updateUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: username, password })
        });

        if (response.ok) {
          success = 'Profile updated successfully.';
          // Update the userStore if needed
        } else {
          const data = await response.json();
          error = data.message || 'Failed to update profile.';
        }
      } catch (err) {
        error = 'An error occurred.';
      }
    };

    // Handle account deletion
    const handleDeleteAccount = async () => {
      if (!confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
        return;
      }

      try {
        // Replace with your API call to delete user account
        const response = await fetch('/api/deleteUser', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userId: user.id })
        });

        if (response.ok) {
          // Perform logout or redirect as needed
          window.location.href = '/';
        } else {
          const data = await response.json();
          error = data.message || 'Failed to delete account.';
        }
      } catch (err) {
        error = 'An error occurred.';
      }
    };

    // Handle logout
    const handleLogout = async () => {
      try {
        // Replace with your API call to logout
        const response = await fetch('/api/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          // Clear userStore and redirect to login
          userStore.set(null);
          window.location.href = '/login';
        } else {
          const data = await response.json();
          error = data.message || 'Failed to logout.';
        }
      } catch (err) {
        error = 'An error occurred.';
      }
    };
</script>

<style>
  .settings-container {
    max-width: 2xl;
    margin: 2rem auto;
    padding: 1.5rem;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .form-group {
    margin-bottom: 1rem;
  }
  .error {
    color: red;
  }
  .success {
    color: green;
  }
  .button {
    margin-right: 1rem;
  }
</style>

<div class="settings-container">
  <h1 class="text-3xl font-bold mb-4">Settings</h1>

  {#if error}
    <p class="error mb-4">{error}</p>
  {/if}
  {#if success}
    <p class="success mb-4">{success}</p>
  {/if}

  <div class="form-group">
    <label class="block text-gray-700">Username:</label>
    <input type="text" bind:value={username} class="w-full px-3 py-2 border rounded" />
  </div>

  <div class="form-group">
    <label class="block text-gray-700">New Password:</label>
    <input type="password" bind:value={password} class="w-full px-3 py-2 border rounded" />
  </div>

  <div class="form-group">
    <label class="block text-gray-700">Confirm New Password:</label>
    <input type="password" bind:value={confirmPassword} class="w-full px-3 py-2 border rounded" />
  </div>

  <button on:click={handleUpdate} class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Update Profile</button>

  <hr class="my-6" />

  <button on:click={handleLogout} class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Logout</button>

  <button on:click={handleDeleteAccount} class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-4">Delete Account</button>
</div>
