import { About } from "./about/About";
import { Home } from "./home/Home";
import { Navbar } from "./navbar/NavBar";
import { Skills } from "./skills/Skills";
// import { Project } from "./projects/Projects";
// import { Contact } from "./contact/Contact";
import { Footer } from "./footer/Footer";
import { Connect } from "./connect/Connect";
import { Loader } from "./loader/loader";
import "./portfolio.css";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from '../context/ThemeContext';

export const Portfolio = () => {
    const { Themes, currentTheme } = useContext(ThemeContext);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 1000)
    }, [])

    if(loading){
        return (
            <div className="starting" style={ currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar }>
                <Loader />
            </div>
        )
    }
    return (
        <div>
            <Navbar />
            <Connect />
            <Home />
            <About />
            <Skills />
            {/* <Project /> */}
            {/* <Contact /> */}
            <Footer />
        </div>
    )
}