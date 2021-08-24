import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../src/App.css";
export default function Header() {
  return (
    <header className="header">
      <main>
        <nav>
          <ul className="nav-list">
            <li className="nav-items">
              <Link className="nav-link" to="/" element={<h1>test</h1>}>
                Home
              </Link>
            </li>
            <li className="nav-items">
              <Link className="nav-link" to="/AddStudent">
                Add Student
              </Link>
            </li>
            <li className="nav-items">
              <NavLink className="nav-link" to="/StudentDirectory">
                Student Directory
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink className="nav-link" to="/AdminLogin">
                Admin Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </main>
    </header>
  );
}
