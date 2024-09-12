<!-- src/components/Navbar.svelte -->
<script>
    import { LightSwitch } from '@skeletonlabs/skeleton'
  </script>
  
  <style>
    /* Add any custom styles here */
  </style>
  
  <nav class="bg-gray-800 p-4">
    <ul class="flex justify-center space-x-4">
      <li><a href="/" class="text-white hover:text-gray-400">Home</a></li>
      <li><a href="/blog" class="text-white hover:text-gray-400">Blog</a></li>
      <li><a href="/profile" class="text-white hover:text-gray-400">Profile</a></li>
    </ul>
  </nav>