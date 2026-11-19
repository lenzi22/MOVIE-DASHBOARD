
import { useState } from 'react';
import './Login.css';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-visual">
          <h1>Movie<span>Watchlist</span></h1>
          <p>Your next favorite movie is waiting.</p>
        </div>

        <div className="login-form-container">
          <div className="login-form">
            <h2>Welcome Back!</h2>
            <p>Sign in to continue your movie journey.</p>

            <form>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>

                <div className="password-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Enter your password"
                  />

                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>

                <div className="forgot-password">
                  <a href="#">Forgot Password?</a>
                </div>
              </div>

              <button type="submit">Sign In</button>
            </form>

            <p className="login-footer">
              Your personal movie collection starts here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
