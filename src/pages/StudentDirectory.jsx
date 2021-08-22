import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/Header";
const axios = require("axios");

const baseURL = `http://localhost:4500/api/points`;

export default function StudentDirectory() {
  const [post, setPost] = useState(null);
  const [filtered, setFiltered] = useState(null);
  const [input, setInput] = useState(0);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setPost(res.data);
      setFiltered(res.data);
    });
  }, []);

  if (!post) return null;

  function handleChange(a) {
    setInput(a);
    console.log(a);
  }

  let orgData = filtered;
  let unfilteredArr = orgData;
  function submit(input) {
    unfilteredArr = orgData;
    console.log(orgData);
    let filteredArr = [];

    for (let i = 0; i < unfilteredArr.length; i++) {
      if (input === "") {
        alert('DON"T WORK');
      } else if (
        unfilteredArr[i].cohort.toLowerCase() === input.toLowerCase()
      ) {
        filteredArr.push(unfilteredArr[i]);
      }
      setPost(filteredArr);
    }
  }

  return (
    <div>
      <Header />
      <div className="sDirectory">
        <h1>Student Directory</h1>
        <div className="searchContainer">
          <input
            className="searchDirectory"
            onChange={(e) => handleChange(e.target.value)}
            placeholder="search by cohort"
          ></input>
          <button className="submitDirectory" onClick={() => submit(input)}>
            Search
          </button>
        </div>
        <div className="directoryContainer">
          <div className="keyCard">
            <p className="keyInfo">Name</p>
            <p className="keyInfo">Cohort</p>
            <p className="keyInfo">#PP-Points</p>
          </div>
          {post.map((student, index) => (
            <div className="studentCard">
              <p className="studentInfo">{post[index].name}</p>
              <p className="studentInfo">{post[index].cohort}</p>
              <p className="studentInfo">{post[index].points}</p>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

// onChange={ (e) => this.handleChange(e.target.value)}
