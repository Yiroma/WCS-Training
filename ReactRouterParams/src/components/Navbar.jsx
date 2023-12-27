import React from "react";
import { Link } from "react-router-dom";

const users = ["angrymouse274", "whiteostrich844", "greenswan545", "purpleleopard311"];

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          Users
          <ul>
            {users.map((username) => (
              <li key={username}>
                <Link to={`/users/${username}`}>{username}</Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
