import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}
