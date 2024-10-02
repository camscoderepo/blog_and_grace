<!-- src/routes/+page.svelte -->
<script lang="ts">
    import Navbar from '../components/Navbar.svelte';
    import Footer from '../components/Footer.svelte';
    import Blog from './blog.svelte';
  </script>
  
  <style>
    /* Add any custom styles here */
  </style>
  
  <Navbar slug="blog" />
  
  <main class="container mx-auto p-4 mt-16">
    <h1 class="text-4xl font-bold mb-4">Welcome to Blog & Grace</h1>
   <Blog />
  </main>
  
  <Footer />