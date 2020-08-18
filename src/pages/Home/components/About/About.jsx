import React from "react";
import "./About.css";
import Perfil from "../../../../assets/images/Perfil.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <p>- Me llamo Gastón, lo primero -</p>
        <h2 className="headline">Acerca de mí</h2>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src={Perfil} alt="Foto de Gastón Konstantinides" />
        </div>
        <div className="about-text">
          <p>
            Full Stack especializado en <span>Frontend Developer</span>.
          </p>
          <p className="p-min">
            También trabajé como <span>Diseñador</span> y{" "}
            <span>Community Manager</span> de manera freelance.
          </p>
          <p className="p-min">
            Tengo 27 años, vivo en <span>Córdoba</span>, Argentina. Me encantan
            los <span>retos</span> y participar en comunidades.
          </p>
          <p className="p-min">
            Actualmente curso el programa <span>Codo a Codo</span> con
            especialidad en <span>Full Stack con Python</span>.
          </p>
          <div className="about-cta">
            <a
              href="https://drive.google.com/file/d/1LXMKHsL04jBbh_o5vcaB5YgJWEQuJEGh/preview"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Curriculum Vitae {">"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
