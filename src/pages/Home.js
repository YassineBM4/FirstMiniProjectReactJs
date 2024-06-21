import React from "react";
import { Link } from "react-router-dom";
import kimetsu from "../assets/demonslayer.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${kimetsu})` }}>
      <div className="headerContainer">
        <h1>Welcome to Ufotable Animations animes</h1>
        <p>
          Ufotable, Inc. is a Japanese animation studio founded in October 2000
          by former Telecom Animation Film producer Hikaru Kondō and located in
          Shinjuku, Tokyo. A unique hallmark seen in many of their works is a
          claymation sequence.
        </p>
        <Link to="/List">
          <button>Watch now!</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
