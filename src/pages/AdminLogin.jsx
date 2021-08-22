import React from "react";
import axios from "axios";
import Footer from "../components/footer";
import Header from "../components/Header";

const baseURL = `http://localhost:4500/api/login`;

export default function AdminLogin() {
  const [post, setPost] = React.useState(null);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  React.useEffect(() => {
    axios.get(baseURL).then((res) => {
      setPost(res.data);
    });
  }, []);
  function checkPass() {
    if (post[0].username !== username) {
      return console.log("Hello");
    } else {
      if (post[0].password !== password) {
        return console.log("Hello");
      } else {
        return console.log("Hello");
      }
    }
  }
  function handleEventPass(userInput) {
    setPassword(userInput);
  }
  function handleEventUser(userInput) {
    setUsername(userInput);
  }
  if (!post) return null;
  return (
    <div>
      <Header />
      <div className="main-page">
        <div className="admin-login">
          <h2 className="admin-log-header">Admin Login</h2>
        </div>
        <form>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="username"
            onChange={(e) => handleEventUser(e.target.value)}
          ></input>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => handleEventPass(e.target.value)}
          ></input>
          <input
            className="form-input form-btn"
            type="submit"
            name="login"
            placeholder="submit"
            onClick={(e) => {
              e.preventDefault();
              checkPass();
            }}
          ></input>
        </form>
      </div>
      <Footer />
    </div>
  );
}
