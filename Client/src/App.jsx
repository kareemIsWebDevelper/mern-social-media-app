// import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar';
import Home from './pages/Home';
import Details from "./pages/Details.jsx";
import Register from "./pages/Register.jsx";
import Create from "./pages/Create.jsx";
import Searched from "./pages/Searched.jsx";
// import './App.css'

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/create" element={<Create />} />
            <Route path="/register" element={<Register />} />
            <Route path="/searched/:title" element={<Searched />} />
        </Routes>
      </main>
      <footer>
      </footer>
    </>
  )
}

export default App
