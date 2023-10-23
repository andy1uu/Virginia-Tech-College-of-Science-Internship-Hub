import * as React from "react";
import { Navigate } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/common/Header";
import Home from "../components/pages/Home";
import "../styles/components/App.css";

function App() {
  const buildPage = (page) => (
    <div className="App">
        <Header />
        {page}
    </div>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={buildPage(<Home />)} />
        <Route path="/home" element={buildPage(<Home />)} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
