import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import NovoProjeto from "./pages/NovoProjeto/NovoProjeto";
import Projetos from "./pages/Projetos/Projetos";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/novo-projeto" element={<NovoProjeto/>}></Route>
          <Route path="/projetos" element={<Projetos/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

