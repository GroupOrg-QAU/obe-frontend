import React from "react";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Header/Navbar";
import profile from "./Assests/profile.png";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Departments from "./Pages/Departments/Departments";

import Login from "./Pages/Login/Login";
function App() {
  return (
    <Fragment>
      {/* <Login />
      <SignUp /> */}
      <Fragment>
        {/* <Login />
      <SignUp /> */}
        <Navbar title="Q-OBE" userName="Muhammad Afraz" profile={profile} />
        <main style={{ display: "flex" }}>
          <Sidebar />

          <div>
            <Departments />
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </Fragment>
    </Fragment>
  );
}

export default App;
