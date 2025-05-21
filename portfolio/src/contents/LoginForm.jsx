import React, { useState } from 'react';
// import './form.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError('Please enter both email and password');
    } else {
      setError('');
      console.log('Login submitted', formData);
      // Submit logic here
    }
  };

  return (
    <div className="wrapper">
      <h1>Login</h1>
      <div id="error_message" style={{ color: 'red' }}>{error}</div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email-input">
            {/* Email Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M480-80q-83 0-156-31.5T197-197..." />
            </svg>
          </label>
          <input
            type="email"
            name="email"
            id="email-input"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password-input">
            {/* Password Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M240-80q-33 0-56.5-23.5T160-160..." />
            </svg>
          </label>
          <input
            type="password"
            name="password"
            id="password-input"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <br />
        <button type="submit">Login</button>
      </form>

      <br />
      <p>
        Create an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
};

export default LoginForm;
