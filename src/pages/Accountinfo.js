import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function AccountInfo() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/AdminLogin");
      console.log("hi");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <div className="app">
      <h2>Profile:</h2>
      <strong>Email: </strong>
      {currentUser.email}
      <button onClick={handleLogout}>log out</button>
    </div>
  );
}
