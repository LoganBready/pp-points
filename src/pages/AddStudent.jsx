import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/footer";

const baseURL = `http://localhost:4500/api/points`;

function AddStudent() {
  const [name, setName] = useState("");
  const [cohort, setCohort] = useState("");
  const [spec, setSpec] = useState("");
  function handleChangeName(input) {
    setName(input);
  }
  function handleChangeCohort(input) {
    setCohort(input);
  }
  function handleChangeSpec(input) {
    setSpec(input);
  }
  function sendIT() {
    const article = { name: name, cohort: cohort, specialization: spec };
    axios.post(baseURL, article).then((res) => {
      return console.log("You did it");
    });
  }
  return (
    <div>
      <Header />
      <div className="main-page">
        <div className="admin-login">
          <h1 className="admin-log-header">Add Student</h1>
        </div>
        <div>
          <form>
            <input
              type="text"
              placeholder="name"
              onChange={(e) => handleChangeName(e.target.value)}
              className="form-input"
            ></input>
            <input
              type="text"
              placeholder="cohort"
              onChange={(e) => handleChangeCohort(e.target.value)}
              className="form-input"
            ></input>
            <input
              type="text"
              placeholder="specialization"
              onChange={(e) => handleChangeSpec(e.target.value)}
              className="form-input"
            ></input>
            <input
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                sendIT();
              }}
              className="form-input form-btn"
            ></input>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default AddStudent;
