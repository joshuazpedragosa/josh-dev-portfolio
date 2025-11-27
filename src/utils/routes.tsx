import path from "./path.constant";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Services from "../components/pages/Services";
import Projects from "../components/pages/Projects";

const routes = [
    {path : path.HOME, element : <Home />},
    {path : path.ABOUT_PAGE, element : <About />},
    {path : path.SERVICES, element : <Services />},
    {path : path.PROJECTS, element : <Projects />}
]

export default routes;