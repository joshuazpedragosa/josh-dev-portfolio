import path from "./path.constant";
import Home from "../components/pages/Home";
import About from "../components/pages/About";

const routes = [
    {path : path.HOME, element : <Home />},
    {path : path.ABOUT_PAGE, element : <About />}
]

export default routes;