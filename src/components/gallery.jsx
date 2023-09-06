import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Portafolio de proyectos</h2>
          <p>
            En [nombre de tu empresa], nos enorgullece presentarles una selección de nuestras creaciones tecnológicas más destacadas. A lo largo de nuestra trayectoria, hemos trabajado arduamente para satisfacer las necesidades y superar las expectativas de nuestros clientes en el mundo digital. Estos son solo algunos ejemplos de nuestra experiencia y compromiso en el campo de la informática
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
