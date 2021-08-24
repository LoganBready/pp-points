import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import AdminHeader from "../components/adminheader";
const axios = require("axios");

const baseURL = `http://localhost:4500/api/points`;

export default function StudentDirectory() {
  const [post, setPost] = useState(0);
  const [filtered, setFiltered] = useState(0);
  const [input, setInput] = useState(0);

  //function below retrieves all student from the data base

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setPost(res.data);
      setFiltered(res.data);
    });
  }, []);

  if (!post) return null;

  function handleChange(a) {
    setInput(a);
  }

  //function below created individual id cards for each student

  let orgData = filtered;
  let unfilteredArr = orgData;
  function submit(input) {
    unfilteredArr = orgData;
    console.log(orgData);
    let filteredArr = [];

    for (let i = 0; i < unfilteredArr.length; i++) {
      if (unfilteredArr[i].cohort.toLowerCase() === input.toLowerCase()) {
        filteredArr.push(unfilteredArr[i]);
      }
      console.log(filteredArr);
      setPost(filteredArr);
    }
  }

  //Function below handles put request to update points for the student.

  function addPoint(id) {
    let idNum = parseInt(id);
    axios.put(`${baseURL}/${idNum}`, { type: "plus1" }).then((res) => {
      setPost(res.data);
    });
  }

  function subPoint(id) {
    let idNum = parseInt(id);
    axios.put(`${baseURL}/${idNum}`, { type: "minus1" }).then((res) => {
      setPost(res.data);
    });
  }

  //return displays all the information on the DOM.

  return (
    <div>
      <AdminHeader />
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
            <p className="keyInfo">Name </p>
            <p className="keyInfo"> Cohort</p>
            <p className="keyInfo">Item 1 &emsp; &emsp; Item 2</p>
            <p className="keyInfo">#PP-Points</p>
          </div>
          {post.map((student, index) => (
            <div key={post[index].id} className="studentCard">
              <p className="studentInfo">{post[index].name}</p>
              <p className="studentInfo">{post[index].cohort}</p>
              <label className="switch">
                <input type="checkbox"></input>
                <span className="slider round"></span>
              </label>

              <label className="switch">
                <input type="checkbox"></input>
                <span className="slider round"></span>
              </label>

              <p className="studentInfo">
                <button
                  data-user={post[index].id}
                  className="plusMinusBtn"
                  onClick={(e) => subPoint(e.target.dataset.user)}
                >
                  -
                </button>
                {post[index].points}
                <button
                  data-user={post[index].id}
                  className="plusMinusBtn"
                  onClick={(e) => addPoint(e.target.dataset.user)}
                >
                  +
                </button>
              </p>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
