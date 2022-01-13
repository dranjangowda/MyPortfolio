import "./home.css";
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import hero from "../../assets/hero.svg";

// function mouseover() {
//     document.getElementById("gfg").style.color = "red";
// }
  
// function mouseout() {
//     document.getElementById("gfg").style.color = "green";
// }

export const Home = () => {
    const { Themes, currentTheme } = useContext(ThemeContext);
    
 
    return (
        <section id="homeID" className="section-home" style={ currentTheme === "light" ? Themes.light.home : Themes.dark.home }>
            <div className="home" >
                <div className="name">
                    <h2 className="info">Hi, I'am</h2>
                    <h1 className="my-name">Ranjan</h1>
                    <h2 className="info">Full-Stack web developer</h2>
                    <a href="https://drive.google.com/file/d/1FMEUYnOmOy6wtwKyJI2ckdyIS7xzOeB9/view?usp=sharing" target="_blank" rel="noopener noreferrer" ><button className="resume" style={ currentTheme === "light" ? Themes.light.resume : Themes.dark.resume } >My Resume</button></a>
                </div>
                <div className="hero">
                    <img src={hero} alt="hero" />
                </div>
            </div>
        </section>
    )
}

// style={ currentTheme === "light" ? Themes.light.resume : Themes.dark.resume }

// box-shadow: 1px 1px 1px 1px #9E9E9E;