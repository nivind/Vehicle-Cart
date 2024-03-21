import React from "react";
import arun from "../assets/arun.png";

const AboutMore = () => {
  return (
    <>
      <div
        className="flex justify-between w-full mt-3"
        style={{ minHeight: "calc(100vh - 119px)" }}
      >
        <div className="flex justify-start m-2">
          I'm Arunkumar Raja, working in the Information Technology and Services
          Industry. Skilled in Computer Networks, Backup & Recovery Systems,
          Linux System Administration, monitoring and maintaining product
          environment.
          <br></br>
          <br></br>
          Strong information technology professional with a Engineer’s Degree
          focused in Computer Science Engineering from P.S.V College of
          Engineering And Technology, Krishnagiri, Tamilnadu, India..
        </div>
        <img className="m-2 w-[35%] h-[35%]" src={arun}></img>
      </div>
    </>
  );
};

export default AboutMore;
