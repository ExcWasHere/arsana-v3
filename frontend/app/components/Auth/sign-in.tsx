import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import styles from "../../common/AuthCard.module.css";

type Role = "siswa" | "guru";

const DUMMY_LOGIN = {
  email: "arsanapolinema@gmail.com",
  password: "12345678",
  role: "siswa" as Role,
  name: "Arsana Polinema",
};

const AuthCard: React.FC = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "siswa" as Role,
  });

  const toggleView = () => {
    setIsSignIn((p) => !p);
    setError("");
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "siswa",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (isSignIn) {
        if (
          formData.email === DUMMY_LOGIN.email &&
          formData.password === DUMMY_LOGIN.password
        ) {
          localStorage.setItem(
            "arsana_user",
            JSON.stringify({ ...DUMMY_LOGIN, isLoggedIn: true })
          );
          navigate("/dashboard");
          return;
        }
        setError("Email atau password salah");
        setLoading(false);
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setError("Password dan konfirmasi tidak sama");
        setLoading(false);
        return;
      }

      localStorage.setItem(
        "arsana_user",
        JSON.stringify({
          name: formData.name,
          email: formData.email,
          role: formData.role,
          isLoggedIn: true,
        })
      );

      navigate("/dashboard");
    }, 700);
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem(
        "arsana_user",
        JSON.stringify({
          name: "Google User",
          email: "user@gmail.com",
          role: "siswa",
          isLoggedIn: true,
        })
      );
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.back}>
        ← Back to Home
      </Link>

      <div className={styles.card}>
        {/* DESKTOP VERSION */}
        <div className={`${styles.bg} ${isSignIn ? styles.signin : ""}`} />

        {/* HERO SIGN UP - DESKTOP ONLY */}
        <div
          className={`${styles.hero} ${styles.signup} ${
            !isSignIn ? styles.active : ""
          }`}
        >
          <h2>Welcome to Arsana</h2>
          <p>
            Sign in to review your progress and stay connected with your future
            journey.
          </p>
          <button onClick={toggleView}>SIGN IN</button>
        </div>

        {/* HERO SIGN IN - DESKTOP ONLY */}
        <div
          className={`${styles.hero} ${styles.signin} ${
            isSignIn ? styles.active : ""
          }`}
        >
          <h2>Hey There!</h2>
          <p>
            Begin your journey today and find the best study for your future.
          </p>
          <button onClick={toggleView}>SIGN UP</button>
        </div>

        {/* MOBILE HEADER */}
        <div className={styles.mobileHeader}>
          <h2>{isSignIn ? "Welcome to Arsana" : "Hey There!"}</h2>
          <p>
            {isSignIn
              ? "Sign in to review your progress and stay connected with your future journey."
              : "Begin your journey today and find the best study for your future."}
          </p>
          <div className={styles.mobileTabs}>
            <button
              className={!isSignIn ? styles.active : ""}
              onClick={() => !isSignIn || toggleView()}
            >
              Sign Up
            </button>
            <button
              className={isSignIn ? styles.active : ""}
              onClick={() => isSignIn || toggleView()}
            >
              Sign In
            </button>
          </div>
        </div>

        {/* FORM SIGN UP */}
        {!isSignIn && (
          <div
            className={`${styles.form} ${styles.signup} ${styles.active}`}
          >
            <h2>Create Account</h2>
            {error && <div className={styles.error}>{error}</div>}
            <form onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="siswa">Siswa</option>
                <option value="guru">Guru</option>
              </select>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? "CREATING..." : "SIGN UP"}
              </button>
            </form>

            <div className={styles.divider}>or</div>

            <button
              type="button"
              className={styles.googleBtn}
              onClick={handleGoogleLogin}
              disabled={loading}
            >
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path
                  fill="#4285F4"
                  d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                />
                <path
                  fill="#34A853"
                  d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"
                />
                <path
                  fill="#FBBC05"
                  d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707 0-.593.102-1.17.282-1.709V4.958H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.042l3.007-2.335z"
                />
                <path
                  fill="#EA4335"
                  d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
                />
              </svg>
              Continue with Google
            </button>
          </div>
        )}

        {/* FORM SIGN IN */}
        {isSignIn && (
          <div
            className={`${styles.form} ${styles.signin} ${styles.active}`}
          >
            <h2>Sign In</h2>
            {error && <div className={styles.error}>{error}</div>}
            <form onSubmit={handleSubmit}>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? "SIGNING IN..." : "SIGN IN"}
              </button>
            </form>

            <div className={styles.divider}>or</div>

            <button
              type="button"
              className={styles.googleBtn}
              onClick={handleGoogleLogin}
              disabled={loading}
            >
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path
                  fill="#4285F4"
                  d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                />
                <path
                  fill="#34A853"
                  d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"
                />
                <path
                  fill="#FBBC05"
                  d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707 0-.593.102-1.17.282-1.709V4.958H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.042l3.007-2.335z"
                />
                <path
                  fill="#EA4335"
                  d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
                />
              </svg>
              Continue with Google
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthCard;