import Navbar from "./components/Header/Navbar";
import profile from "./Assests/profile.png";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Departments2 from "./Pages/Departments2";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
