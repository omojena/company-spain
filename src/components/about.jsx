import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Sobre Nosotros</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="about-text">
              <h3>¿Por qué elegirnos?</h3>
              <div className="list-style">
                {props.data ? (
                    props.data.Why.map((item, index) => (
                        <div key={index} className="col-lg-6 col-sm-6 col-xs-12">
                          <div className="card mb-3">
                            <div className="card-body">
                              <h5 className="card-title">{item.title}</h5>
                              <p className="card-text">{item.description}</p>
                            </div>
                          </div>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
