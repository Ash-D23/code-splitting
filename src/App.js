import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import './App.css'

const About = React.lazy(() => import('./Components/About'));
const Login = React.lazy(() => import('./Components/Login'));


function App() {

  return (
    <div>
      <Suspense fallback={<div>Loading Page...</div>}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
