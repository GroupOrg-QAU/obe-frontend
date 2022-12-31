import Navbar from "./components/Header/Navbar";
import profile from "./Assests/profile.png";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Department from "./Pages/Department";
import FazalTesting from "./FazalTesting";

function App() {
  return (
    <div>
      <Navbar title="Q-OBE" userName="Muhammad Afraz" profile={profile} />
      <main style={{ display: "flex" }}>
        <Sidebar />

        <div>
          <Department />
        </div>
        <div>
          <FazalTesting />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
