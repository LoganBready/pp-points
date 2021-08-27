import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/Header";
import trash from "./delete.png";
const axios = require("axios");
//im not the same
const baseURL = `/api/points`;

export default function StudentDirectory() {
  const [post, setPost] = useState(0);
  const [filtered, setFiltered] = useState(0);
  const [input, setInput] = useState(0);
  // const [checked, setChecked] = useState(false);

  
  //function below retrieves all student from the data base

  // useEffect(() => {
  //   axios.get(baseURL).then((res) => {
  //     setPost(res.data);
  //     setFiltered(res.data);
  //   });
  // }, []);

  useEffect(() => {
    const getData = async () => {
      await axios.get(baseURL).then((res) => {
        setPost(res.data);
        setFiltered(res.data);
      });
    };
    getData();
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

  //The functions below handle the PUT requests to update points for the student.

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


  function milestoneOne(id) {
    let idNum = parseInt(id);
    if (post[idNum - 1].milestone1 === false) {
      axios
        .put(`${baseURL}/milestone/${idNum}`, { type: "m1t" })
        .then((res) => {
          console.log(res.data);
        });
      axios.get(baseURL).then((res) => {
        setPost(res.data);
      });
    } else {
      axios
        .put(`${baseURL}/milestone/${idNum}`, { type: "m1f" })
        .then((res) => {
          console.log(res.data);
        });
      axios.get(baseURL).then((res) => {
        setPost(res.data);
      });
    }
  }

  //The function below handle the PUT request to update the milestone 2 Boolean for the student.

  function milestoneTwo(id) {
    let idNum = parseInt(id);
    if (post[idNum - 1].milestone2 === false) {
      axios
        .put(`${baseURL}/milestone/${idNum}`, { type: "m2t" })
        .then((res) => {
          console.log(res.data);
        });
      axios.get(baseURL).then((res) => {
        console.log(res.data);
        setPost(res.data);
      });
    } else {
      axios
        .put(`${baseURL}/milestone/${idNum}`, { type: "m2f" })
        .then((res) => {
          console.log(res.data);
        });
      axios.get(baseURL).then((res) => {
        console.log(res.data);
        setPost(res.data);
      });
    }
  }


  function deletePost(id) {
    let idNum = parseInt(id);
    axios.delete(`${baseURL}/${idNum}`).then((res) => {
      setPost(res.data);
    });
  }

  //return displays all the information on the DOM.

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
            <p className="keyInfo">Name </p>
            <p className="keyInfo"> Cohort</p>
            <p className="keyInfo">Item 1 &emsp; &emsp; Item 2</p>
            <p className="keyInfo">#PP-Points</p>
          </div>
          {post.map((student, index) => (
            <div key={post[index].id} className="studentCard">
              <p className="studentInfo">{post[index].name}</p>
              <p className="studentInfo">{post[index].cohort}</p>
              <label className="switch" id={index}>
                <input
                  type="checkbox"
                  // id={post[index].id}
                  data-user={post[index].id}
                  checked={post[index].milestone1}
                  onChange={(e) => milestoneOne(e.target.dataset.user)}
                ></input>
                <span className="slider round"></span>
              </label>

              <label className="switch">
                <input
                  type="checkbox"
                  data-user={post[index].id}
                  checked={post[index].milestone2}
                  onChange={(e) => milestoneTwo(e.target.dataset.user)}
                ></input>
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
                {/* <img
                  src={trash}
                  data-user={post[index].id}
                  className="plusMinusBtn trashImg"
                  onClick={(e) => deletePost(e.target.dataset.user)}
                /> */}
                <button
                  data-user={post[index].id}
                  className="plusMinusBtn"
                  onClick={(e) => deletePost(e.target.dataset.user)}
                >
                  X
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
