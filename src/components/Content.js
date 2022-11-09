import React from "react";
import Navbar from "./Navbar";
import Home from "views/Home";
import Search from "views/Search";
import Collection from "views/Collection";
import {  Routes, Route } from "react-router-dom";
function Content() {
  return (
    <main className="flex-auto">
      <Navbar />
     <div className="px-8 pt-2">
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/collection" element={<Collection/>} />
      </Routes>
      
     </div>
   
    </main>
  );
}

export default Content;