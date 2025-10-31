import React, { useState } from 'react';

const LoginForm = () => {
  // Step 1: Create state for username, password, and error message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Step 2: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Both fields are required!');
      return;
    }

    console.log('Username:', username);
    console.log('Password:', password);

    // Clear error message after successful submission
    setError('');
    alert(`Welcome, ${username}!`);
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
