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

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.back}>
        ← Back to Home
      </Link>

      <div className={styles.card}>
        <div
          className={`${styles.bg} ${isSignIn ? styles.signin : ""}`}
        />

        {/* HERO SIGN UP */}
        <div
          className={`${styles.hero} ${styles.signup} ${
            !isSignIn ? styles.active : ""
          }`}
        >
          <h2>Welcome to Arsana</h2>
          <p>Sign in to review your progress and stay connected with your future journey.</p>
          <button onClick={toggleView}>SIGN IN</button>
        </div>

        {/* HERO SIGN IN */}
        <div
          className={`${styles.hero} ${styles.signin} ${
            isSignIn ? styles.active : ""
          }`}
        >
          <h2>Hey There!</h2>
          <p>Begin your journey today and find the best study for your future.</p>
          <button onClick={toggleView}>SIGN UP</button>
        </div>

        {/* FORM SIGN UP */}
        <div
          className={`${styles.form} ${styles.signup} ${
            !isSignIn ? styles.active : ""
          }`}
        >
          <h2>Create Account</h2>
          {error && <div className={styles.error}>{error}</div>}
          <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" onChange={handleChange} />
            <select name="role" onChange={handleChange}>
              <option value="siswa">Siswa</option>
              <option value="guru">Guru</option>
            </select>
            <input name="email" type="email" placeholder="Email" onChange={handleChange} />
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={handleChange}
            />
            <input
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={handleChange}
            />
            <button disabled={loading}>
              {loading ? "CREATING..." : "SIGN UP"}
            </button>
          </form>
        </div>

        {/* FORM SIGN IN */}
        <div
          className={`${styles.form} ${styles.signin} ${
            isSignIn ? styles.active : ""
          }`}
        >
          <h2>Sign In</h2>
          {error && <div className={styles.error}>{error}</div>}
          <form onSubmit={handleSubmit}>
            <input name="email" type="email" placeholder="Email" onChange={handleChange} />
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <button disabled={loading}>
              {loading ? "SIGNING IN..." : "SIGN IN"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
