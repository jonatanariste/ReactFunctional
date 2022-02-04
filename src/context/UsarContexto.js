import axios from "axios";
import Contexto from "./Contexto";
import { useReducer } from "react";
import Reducer from "./Reducer";
export default function UsarContexto(props) {
  const { children } = props;
  const estadoInicial = {
    productos: [],
    carrito: [],
  };
  const [state, dispatch] = useReducer(Reducer, estadoInicial);
  const listameProductos = async () => {
    const res = await axios.get(
      "https://devrockstore-default-rtdb.firebaseio.com/productos.json"
    );
    dispatch({ type: "LISTAME_PRODUCTOS", payload: res.data });
    console.log(res.data, "desde UsarContexto()");
  };
  const agregarCarrito = (item) => {
    console.log("Agregamos a carrito", item);
    dispatch({ type: "AGREGAR_CARRITO", payload: item });
  };
  const eliminarCarrito = (item) => {
    console.log("Eliminar carrito", item);
    dispatch({ type: "ELIMINAR_CARRITO", payload: item });
  };
  return (
    <Contexto.Provider
      value={{
        productos: state.productos,
        carrito: state.carrito,
        listameProductos,
        agregarCarrito,
        eliminarCarrito,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}
