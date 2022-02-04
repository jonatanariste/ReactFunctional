import React from "react";
import "../assets/css/Producto.css";
import img from "../assets/statics/0.png";

export default function Producto() {
  return (
    <>
      <div className="detalle">
        <img src={img} alt="" className="detalle-img" />
        <h1 className="home-item-titulo">Cerebro loco</h1>
        <p className="home-item-medidas">Medidas: 20x10</p>
        <div className="home-item-actions">
          <h3 className="home-item-precio">AR$ 150</h3>&nbsp;
          <a href="carrito.html">
            {" "}
            <button className="home-item-comprar">+</button>
          </a>
        </div>
        <p>
          "En la colección de stickers de Escuela Devrock no podía faltar uno de
          Jakob Nielsen a.k.a Cat Nielsen en esta versión. ¿Está hecho gatito?
          Sí, lo viste bien. Tiene bijotes, orejas y te enseña las heurísticas
          de usabilidad."
        </p>
      </div>
    </>
  );
}
