//TYPES

const LISTAME_PRODUCTOS = "LISTAME_PRODUCTOS";
const AGREGAR_CARRITO = "AGREGAR_CARRITO";
const ELIMINAR_CARRITO = "ELIMINAR_CARRITO";

export default function Reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case LISTAME_PRODUCTOS:
      console.log(payload);
      return { ...state, productos: payload };
    case AGREGAR_CARRITO:
      return {
        ...state,
        carrito: [
          ...state.carrito,
          state.productos.filter((ite) => ite.id == parseInt(payload)),
        ],
      };

    case ELIMINAR_CARRITO:
      console.log(
        payload,
        "<- payload, state ->",
        state.carrito,
        "lo que llega"
      );
      return {
        ...state,
        carrito: state.carrito.filter((items) => items[0].id !== payload),
      };
  }
}
