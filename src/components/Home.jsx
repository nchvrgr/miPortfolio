import React from "react";
import {mainBody, about, repos, skills} from "./../editable-stuff/config.js";
import MainBody from "./home/MainBody";
import AboutMe from "./home/AboutMe";
import Project from "./home/Project";
import Skills from "./home/Skills";


const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />

      {
      about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
          resumeSpanish={about.resumeSpanish}
        />)
      }

      {
      repos.show && (
        <Project
          heading={repos.heading}
          projects={repos.projects}
        />)
      }

      {
      skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />)
      }
      
    </>
  );
});

export default Home;