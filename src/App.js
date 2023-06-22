import "./App.css";
import Welcome from "../src/paginas/Welcome";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Error404 from "./paginas/Error404";
import Home from "./paginas/Home";
import NS from "./paginas/NS";
import SN from "./paginas/SN";
import Informacion from "./paginas/Informacion";
import Senias from "./paginas/Senias";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Welcome/>}/>
        <Route path="/senias"  element={<Senias/>}/>
        <Route path="/home"  element={<Home/>}/>
        <Route path="/NS"  element={<NS/>}/>
        <Route path="/SN"  element={<SN/>}/>
        <Route path="/info"  element={<Informacion/>}/>
        <Route path="*"  element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
