<!-- src/routes/__layout.svelte -->
<script>
    import { config } from '@fortawesome/fontawesome-svg-core';
    import "../app.css";
    import '../lib/fontAwesome.js';
    import '@fortawesome/fontawesome-svg-core/styles.css';
    config.autoAddCss = false; // Prevent Font Awesome from adding its CSS automatically
  </script>
  
  <slot />
  