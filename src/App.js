import Navbar from "./components/Header/Navbar";
import profile from "./Assests/profile.png";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Departments2 from "./Pages/Departments2";
import { Fragment } from "react";
// import Login from "./Pages/Login/Login";
// import SignUp from "./Pages/Login/SignUp";

function App() {
  return (
    <Fragment>
      {/* <Login />
      <SignUp /> */}
      <Navbar title="Q-OBE" userName="Muhammad Afraz" profile={profile} />
      <main style={{ display: "flex" }}>
        <Sidebar />

        <div>
          <Departments2 />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}

export default App;
