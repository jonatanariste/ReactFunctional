import React from "react";
import iconoCarrito from "../assets/statics/carrito.png";
import iconoVolver from "../assets/statics/volver.png";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <Link to="/carrito">
        <img src={iconoCarrito} alt="" className="carritou" />
      </Link>
      <Link to="/">
        <img src={iconoVolver} alt="" className="volver" />
      </Link>
      <h1 className="titulo">
        Dev <br />
        RockStore
      </h1>
    </>
  );
}
