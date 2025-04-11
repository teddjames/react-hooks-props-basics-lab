import React from "react";
import Links from "./Links";

function About({ bio, links }) {
  return (
    <section>
      {/* Only display the <p> if bio exists and is not an empty string */}
      {bio && bio.trim() !== "" && <p>{bio}</p>}
      <Links github={links.github} linkedin={links.linkedin} />
    </section>
  );
}

export default About;
