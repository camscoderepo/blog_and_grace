<script>
  import { supabase } from "$lib/supabaseClient";
  import { signUp } from "$stores/userStore";

    let email = '';
    let password = '';
    let error = '';
    let successMessage = '';


    const handleSignup = async () => {
     await signUp(email, password);
    
    };

  </script>
  
  <style>
    /* Add your styles here */
    .form-container {
      max-width: 400px;
      margin: auto;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
  
    .form-group {
      margin-bottom: 15px;
    }
  
    input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    button {
      padding: 10px 15px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  </style>
  
  <div class="form-container">
    <h2>Sign Up</h2>
    <form on:submit|preventDefault={handleSignup}>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          bind:value={email}
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          bind:value={password}
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
  

  {#if error}
  <p style="color: red;">{error}</p>
  {/if}

  {#if successMessage}
    <p style="color: green;">{successMessage}</p>
  {/if}