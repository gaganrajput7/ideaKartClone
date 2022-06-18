import Footer from "./components/footer/Footer";
import NavBar from "./components/header/Navbar";
import Signin from "./components/SingIN/SingIn";
import {BrowserRouter}from 'react-router-dom'
import MinRoutes from "./components/MinRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <NavBar/>
    <MinRoutes/>
     <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
