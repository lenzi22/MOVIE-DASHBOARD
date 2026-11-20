
import { useState, type FormEvent } from "react";
import "./Login.css";

interface LoginProps {
  onLogin: () => void;
}

function Login({ onLogin }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      email.trim().toLowerCase() === "admin@moviewatchlist.com" &&
      password === "Movie123"
    ) {
      setError("");
      onLogin();
    } else {
      setError("Incorrect email or password. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-visual">
          <h1>
            Movie<span>Watchlist</span>
          </h1>
          <p>Your next favorite movie is waiting.</p>
        </div>

        <div className="login-form-container">
          <div className="login-form">
            <h2>Welcome Back!</h2>
            <p>Sign in to continue your movie journey.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>

                <div className="password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />

                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>

                <div className="forgot-password">
                  <a href="#" onClick={(event) => event.preventDefault()}>
                    Forgot Password?
                  </a>
                </div>
              </div>

              {error && (
                <p className="login-error" role="alert">
                  {error}
                </p>
              )}

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
