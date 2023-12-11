import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header";
import HeaderMobile from "./components/header-mobile";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <HeaderMobile></HeaderMobile>
      <Header></Header>
      <Footer></Footer>
      <Counter></Counter>
    </div>
  );
}

export default App;
