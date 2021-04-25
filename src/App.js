import './App.css';
import Footer from "./content/Footer";
import NavBar from "./content/NavBar";
import './App.css';
import {Wrapper} from "./components/Wrapper";
import {useRoutes} from "hookrouter";
import {NotFound} from "./content/NotFound";
import {AboutPage} from "./pages/AboutPage";
import {LanginPage} from "./pages/LanginPage";

const AppCss = {
    backgroundColor: "#004D00",
    color: "floralwhite"
}

const routes = {
    '/': () => <LanginPage />,
    '/about': () => <AboutPage />
}

export default function App() {
    const match = useRoutes(routes)
    return (

        <div className="App" style={AppCss}>
            <Wrapper>
                <NavBar/>
                {match || <NotFound />}
            </Wrapper>
            <Footer/>
        </div>
    );
}