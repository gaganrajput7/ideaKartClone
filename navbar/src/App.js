import NavBar from "./components/navBar/NavBar";
import "./app.css"
import Footer from "./components/footer/Footer";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Login/>
     <Footer/>
    </div>
  );
}

export default App;
