import "./projects.css";
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Purpple from "../../assets/purpple.png";
import Lynda from "../../assets/lynda.png";


export const Project = () => {
    const projectCont = [
        { 
            name: "Purpple.com",
            description: "This is a clone of the Purplle.com website which is an online portal with a very large collection of cosmetics, skincare, hair care & fragrances. It showcases some of the best products from the leading brands in the world at the best price. From this website, users can buy beauty products based on brands and categorize them with ratings & prices. This was a collaborative project which was done by me and 2 other members in 6-days using Javascript, HTML, CSS, MongoDB, Express & MVC.",
            // tech: ["HTML", "CSS", "JavaScript", "MongoDB", "Node"],
            tech: "Tech-Stack: HTML | CSS | JavaScript | NodeJS | MongoDB",
            image:Purpple,
            imageAlt: "purpple ",
            git: "https://github.com/bhawaniCodes/Purplle_Final_Project",
            live: "https://frozen-castle-82316.herokuapp.com/", 
        },
        { 
            name: "Lynda ",
            description: "A responsive E-Learning Website with User friendly UI and UX, like a LinkedIn. It operates with, all the required advanced functionalities in it, from watching any video to purchase it along with faster and safer payment procedure.",
            // tech: ["React", "CSS", "JavaScript", "MongoDB", "Node"],
            tech: "Tech-Stack: html | CSS | JavaScript | NodeJS | MongoDB",
            image: Lynda,
            imageAlt: "Lynda",
            git: "https://github.com/sumitsingh-ara/Lynda_Backend",
            live: "https://lynda-cloned.herokuapp.com/signup", 
        }
    ]

    const { Themes, currentTheme } = useContext(ThemeContext);
    return (
        <section id="projectsID" className="section-pro" style={ currentTheme === "light" ? Themes.light.home : Themes.dark.home }>
            <h1 className="heading-project">Projects</h1>
            <div className="main-projects">

                <div className="projects" >
                    {
                        projectCont.map((ele, j) => {
                            return (
                                <div key={`project${j}`} className="pro" style={ currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar }>
                                    <div className="data">
                                        <h2 className="pro-head">{ ele.name }</h2>
                                        <p className="desc">{ ele.description }</p>
                                        <p className="tech-stack"> { ele.tech }
                                            {/* {
                                                ele.tech.map((e, i) => {
                                                    return (
                                                        <span className="tech" key={`tech${i}`}> { e } </span>
                                                    )
                                                })
                                            } */}
                                        </p>
                                        <p className="repo">
                                            <a href={ ele.git } rel="noopener noreferrer" target="_blank"><span style={ currentTheme === "light" ? Themes.light.pro : Themes.dark.pro }>GitHub</span></a>
                                            <a href={ ele.live } rel="noopener noreferrer" target="_blank"><span style={ currentTheme === "light" ? Themes.light.pro : Themes.dark.pro }>Live Demo</span></a>
                                        </p>
                                        </div>
                                        <div className="img">
                                            <img src={ ele.image } alt={ ele.imageAlt } />
                                        </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}