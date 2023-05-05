import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { TopicZero } from "./components/page/0-intro";
import { TopicOne } from "./components/page/1-topic";
import { TopicTwo } from "./components/page/2-topic";
import { TopicThree } from "./components/page/3-topic";
import { TopicFour } from "./components/page/4-topic";
import { TopicFive } from "./components/page/5-topic";
import { TopicSix } from "./components/page/6-topic";
import { TopicSeven } from "./components/page/7-topic";
import { TopicEight } from "./components/page/8-topic";
import { TopicNine } from "./components/page/9-topic";
import "bootstrap/dist/css/bootstrap.min.css";
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
            <Route path="/intro" element={<TopicZero />} />
            <Route path="/one" element={<TopicOne />} />
            <Route path="/two" element={<TopicTwo />} />
            <Route path="/three" element={<TopicThree />} />
            <Route path="/four" element={<TopicFour />} />
            <Route path="/five" element={<TopicFive />} />
            <Route path="/six" element={<TopicSix />} />
            <Route path="/seven" element={<TopicSeven />} />
            <Route path="/eight" element={<TopicEight />} />
            <Route path="/nine" element={<TopicNine />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
