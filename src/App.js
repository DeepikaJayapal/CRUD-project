import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./home";
import Register from "./pages/register";
import Edit from "./pages/edit";
import Header from "./pages/component/header";
import "../src/App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route path="edit" element={<Edit></Edit>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;