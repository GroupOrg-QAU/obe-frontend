import Navbar from "./components/Header/Navbar";
import profile from "./Assests/profile.png";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar title="Q-OBE" userName="Muhammad Afraz" profile={profile} />
      <main style={{ display: "flex" }}>
        <Sidebar />

        <div>span1</div>
        <div>span2</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
