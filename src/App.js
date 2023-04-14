import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { TopicOne } from "./components/page/TopicOne";
import { TopicTwo } from "./components/page/TopicTwo";
import "./app.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to={"/"}>
          <h1 className="brand">SUG’URTA BIZNESI</h1>
        </Link>
        <div className="home">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/one" element={<TopicOne />} />
            <Route path="/two" element={<TopicTwo />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

function About() {
  return <h1>About</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

export default App;
