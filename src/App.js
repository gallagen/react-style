import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./components/All.css" 

function App() {
  return (
    <div className="all">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
