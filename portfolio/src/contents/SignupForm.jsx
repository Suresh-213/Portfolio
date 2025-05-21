import React, { useState } from 'react';
// import './form.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { firstname, email, password, confirmPassword } = formData;

    if (!firstname || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      console.log('Form submitted', formData);
      // Submit logic here (e.g., API call)
    }
  };

  return (
    <div className="wrapper">
      <h1>SIGN UP</h1>
      <div id="error_message" style={{ color: 'red' }}>{error}</div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname-input">
            {/* Firstname Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M480-480q-66 0-113-47t-47-113..." />
            </svg>
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname-input"
            placeholder="Firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>

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

        <div>
          <label htmlFor="confirmpassword-input">
            {/* Confirm Password Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M240-80q-33 0-56.5-23.5T160-160..." />
            </svg>
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmpassword-input"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <br />
        <button type="submit">Sign Up</button>
      </form>

      <br />
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default SignupForm;
