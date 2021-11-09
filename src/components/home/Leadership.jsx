import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Leadership = ({ heading, message, img, imageSize }) => {
  return (
    <div
      id="leadership"
      className="jumbotron jumbotron-fluid m-0"
      style={{ backgroundColor: "white" }}
    >
      <div className="container container-fluid">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
            <Carousel style={{padding: '2%'}}>
              {img.map((value, index) => {
                return (  
                  <Carousel.Item>
                    
                    <img
                      className="d-block w-100"
                      src={value.img}
                      alt="First slide"
                      width={imageSize.width}
                      object-fit="cover"
                      height={imageSize.height}
                    />
                    <Carousel.Caption style={{backgroundColor: 'rgb(0, 0, 0, 0.3)', margin: 0, padding: 0, borderRadius: '1em'}}>
                      <h3>{value.label}</h3>
                      <p>
                        {value.paragraph}
                      </p>
                      <p>
                      <a href='https://www.google.com' target='__blank' style={{fontSize: '1.1em', color: 'cyan'}}>Link</a>
                      <span> | </span>
                      <a href='https://www.google.com' target='__blank' style={{fontSize: '1.1em', color:'cyan'}}>Repo</a>
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
      </div>
    </div>
  );
};

export default Leadership;
