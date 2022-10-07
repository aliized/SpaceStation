import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar/Navbar";

function App() {
  return (
    <div className="bg-black text-white font-IranSans">
      <Navbar />
      <Header/>

      <p className="bg-slate-800 ">.</p>
      <div className="h-screen"></div>
    </div>
  );
}

export default App;
