import './App.css';
import LandingPage from "./content/landingPage";
import Footer from "./content/Footer";
import NavBar from "./content/NavBar";
import './App.css';

const AppCss = {
    backgroundColor: "#004D00",
    color : "floralwhite"
}

export default function App() {
  return (

    <div className="App" style={AppCss}>
        <NavBar />
        <LandingPage />
        <Footer />
    </div>
  );
}