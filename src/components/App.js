import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// The user object with all necessary fields:
const user = {
  name: "Liza",
  city: "New York",
  bio: "I made this!",
  color: "firebrick",
  links: {
    github: "https://github.com/liza",
    linkedin: "https://www.linkedin.com/in/liza/",
  },
};

function App() {
  return (
    <div className="App">
      {/* Render the NavBar so that <nav> exists */}
      <NavBar />

      {/* Wrap Home component in a container with id="home" */}
      <div id="home">
        <Home name={user.name} city={user.city} color={user.color} />
      </div>

      {/* Wrap About component in a container with id="about" */}
      <div id="about">
        <About bio={user.bio} links={user.links} />
      </div>
    </div>
  );
}

export default App;
