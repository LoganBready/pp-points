import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/Header";

export default function AdminLogin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/studentdirectoryadmin");
    } catch {
      setError("Failed to log in!");
    }
    setLoading(false);
  }

  return (
    <div>
      <Header />
      <div className="main-page">
        <div className="admin-login">
          <h2 className="admin-log-header">Admin Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="form-input"
            type="email"
            ref={emailRef}
            name="username"
            placeholder="email"
            required
          ></input>
          <input
            className="form-input"
            type="password"
            ref={passwordRef}
            name="password"
            placeholder="password"
            required
          ></input>
          <button className="form-input form-btn" type="submit" name="login">
            Log In
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
