import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";


const App = () => {
  return (
    <div className="font-lexend flex flex-col w-full min-h-screen ">
      <Navbar />
      <main className="flex-grow ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
