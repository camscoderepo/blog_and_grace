<script>
    let email = '';
    let password = '';
  
    const handleSignup = (event) => {
      event.preventDefault();
      // Handle signup logic here
      console.log('Signup:', email, password);
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
        <label for="signup-email">Email</label>
        <input
          id="signup-email"
          type="email"
          placeholder="Enter your email"
          bind:value={email}
          required
        />
      </div>
      <div class="form-group">
        <label for="signup-password">Password</label>
        <input
          id="signup-password"
          type="password"
          placeholder="Enter your password"
          bind:value={password}
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
  