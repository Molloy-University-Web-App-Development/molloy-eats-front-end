import React from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Menu from "./pages/Menu";
// import Foo from "./Foo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <h1>Anselma Room Menu</h1>
              <p> :)</p>
              <Link to="about">Here is the Menu</Link>
            </>
          }
        ></Route>
        <Route exact path="/about" element={<Menu />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
