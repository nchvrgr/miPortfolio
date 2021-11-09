import React from "react";
// import Pdf from "../../editable-stuff/resume.pdf";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";

const AboutMe = ({ heading, message, link, imgSize, resume, resumeSpanish }) => {

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid">
        <div className="aboutDescription">
          <div className="col-2 align-self-center">
              <img
                className="border border-secondary rounded-circle"
                src={link.default}
                alt="profilepicture"
                width={imgSize}
                height={imgSize}
                object-fit="cover"
              />
          </div>

          <div className="col-2"></div>

          <div className="col-lg-8">
            <h2 className="display-4 mb-5 text-center">{heading}</h2>
            <p className="lead text-center">{message}</p>
            <p className="lead text-center">
              <DropdownButton id="dropdown-basic-button" className="select" title="Resume" variant="secondary">
                <Dropdown.Item href={resume} target="_blank">English</Dropdown.Item>
                <Dropdown.Item href={resumeSpanish} target="_blank">Español</Dropdown.Item>
              </DropdownButton>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
