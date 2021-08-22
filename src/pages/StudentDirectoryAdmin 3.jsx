import React, { useState, useEffect } from "react";
import Header from "../components/Header";
const axios = require("axios");

const baseURL = `http://localhost:4500/api/points`;

export default function StudentDirectory() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setPost(res.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <Header />
      <h1>Student Directory</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>{post[0].name}</p>
        <p>{post[0].cohort}</p>
        <p>{post[0].points}</p>
      </div>
    </div>
  );
}
