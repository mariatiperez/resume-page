import React, { useState } from "react";
import styled from "styled-components";
import Slideshow from "./Slider.js";

const PortfolioWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: auto;
  border-bottom: 1px solid #e8e8e8;
  padding: 5% 0;
  max-width: 1020px;
  & > i,
  h2 {
    margin: 10px 20px;
  }
`;

const ProjectsPreview = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0;
  & > img {
    cursor: pointer;
    max-height: 100px;
    max-width: 100px;
    padding: 0.25rem;
    &.active {
      border-bottom-style: solid;
      border-color: #ce4257;
    }
  }
`;

const Portfolio = () => {
  const projects = [
    {
      name: "Coleados",
      description:
        "Aplicación web para la administración negocios con delivery, con manejo de inventario, facturas, productos y empresas. Fue desarrollada bajo un estilo material, utilizando Angular en el frontend y Nodejs + Express en el backend bajo una RESTFUL Api.",
      images: [
        "/images/coleados/0.png",
        "/images/coleados/1.png",
        "/images/coleados/2.png",
        "/images/coleados/3.png",
        "/images/coleados/4.png",
        "/images/coleados/5.png",
        "/images/coleados/6.png",
      ],
      orientation: "horizontal",
    },
    {
      name: "Gestión de Sacramentos",
      description:
        "Aplicación de escritorio para llevar el control de los sacramentos realizados en una iglesia, además permite la generación de documentos PDF para certificación de los mismos. Fue desarrollada bajo un estilo material, utilizando Angular + Electron en el frontend y Nodejs + Express en el backend bajo una RESTFUL Api.",
      images: [
        "/images/service/0.png",
        "/images/service/1.png",
        "/images/service/2.png",
        "/images/service/3.png",
      ],
      orientation: "horizontal",
    },
    {
      name: "SGR",
      description:
        "Sistema de gestión y préstamos de recursos audiovisuales, con manejo de horario y disponibilidad. Fue desarrollada bajo un estilo material, utilizando Angular en el frontend y Nodejs + NestJS en el backend bajo una RESTFUL Api.",
      images: [
        "/images/sgr/0.png",
        "/images/sgr/1.png",
        "/images/sgr/3.png",
        "/images/sgr/4.png",
        "/images/sgr/5.png",
        // ], [
        //   "/images/library/0.png",
        //   "/images/library/1.png",
        //   "/images/library/2.png"
      ],
      orientation: "horizontal",
    },
    {
      name: "Billetera de Criptomonedas",
      description:
        "Aplicacion móvil de un monedero que permite el recibo y envio de pagos en distintas criptomonedas. Fue desarrollada utilizando React Native en el frontend y Django en el backend bajo una RESTFUL Api.",
      images: [
        "/images/cfive/0.png",
        "/images/cfive/1.jpg",
        "/images/cfive/2.jpg",
        "/images/cfive/3.jpg",
        "/images/cfive/4.jpg",
        "/images/cfive/5.jpg",
        "/images/cfive/6.jpg",
        "/images/cfive/7.jpg",
        "/images/cfive/8.jpg",
        "/images/cfive/9.jpg",
        "/images/cfive/10.jpg",
        "/images/cfive/11.jpg",
        // "/images/cfive/12.jpg",
      ],
      orientation: "vertical",
    },
    {
      name: "Nextline",
      description:
        "Aplicacion móvil para clientes de un proveedor de internet, en ella pueden contratar servicios, pagar facturas y solicitar servicio técnico a domicilio con geolocalización. También se realizó la aplicación para los técnicos, donde podían consultar sus tickets asignados, chatear con clientes y guardar información sobre una reparación realizada. Fue desarrollada utilizando Flutter en el frontend y Django en el backend bajo una RESTFUL Api.",
      images: [
        "/images/nextline/0.png",
        "/images/nextline/1.jpg",
        "/images/nextline/2.jpg",
        "/images/nextline/3.jpg",
        "/images/nextline/4.jpg",
        "/images/nextline/5.jpg",
        "/images/nextline/6.jpg",
        "/images/nextline/7.jpg",
        "/images/nextline/8.jpg",
      ],
      orientation: "vertical",
    },
  ];

  const [chosenProject, setChosenProject] = useState(0);

  return (
    <PortfolioWrapper
      id="portfolio"
      className={projects[chosenProject].orientation}
    >
      <h2>¡Aquí puedes ver algunas cosas que hemos hecho!</h2>
      <i>
        Haz click en alguno de los iconos y podrás ver las imágenes para cada
        proyecto :)
      </i>
      <ProjectsPreview>
        {projects.map((urls, index) => (
          <img
            src={urls.images[0]}
            alt="preview"
            key={"preview/" + urls.images[0]}
            onClick={() => setChosenProject(index)}
            className={chosenProject === index ? "active" : ""}
          />
        ))}
      </ProjectsPreview>
      <h3 style={{ color: "#ce4257" }}>{projects[chosenProject].name}</h3>
      <p style={{ paddingBottom: "20px" }}>
        {projects[chosenProject].description}
      </p>
      <Slideshow
        slideImages={projects[chosenProject].images.slice(1)}
        orientation={projects[chosenProject].orientation}
      />
    </PortfolioWrapper>
  );
};

export default Portfolio;
