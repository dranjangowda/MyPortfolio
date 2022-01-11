// import html from "../../assets/html5-plain.svg";
// import css from "../../assets/css3-plain.svg";
// import javascript from "../../assets/javascript-plain.svg";
// import express from "../../assets/express-original.svg";
// import github from "../../assets/github-original.svg";
// import nodejs from "../../assets/nodejs-plain.svg";
// import mongodb from "../../assets/mongodb-original.svg";
// import react from "../../assets/react-original.svg";
// import redux from "../../assets/redux-original.svg";
// import dsa from "../../assets/dsa.png";
import { DiHtml5, DiCss3, DiNpm } from "react-icons/di";
import { SiJavascript, SiRedux, SiReact, SiMaterialui, SiExpress, SiNodedotjs, SiMongodb, SiGit, SiGithub, SiBootstrap, SiPostman, SiVisualstudiocode  } from "react-icons/si";
import "./skills.css";
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const Skills = () => {
    // const skillsCont = [ { id:1, skill: html, text: "HTML" , alter: "HTML LOGO" },
    //                         { id:2, skill: css, text: "CSS" , alter: "CSS LOGO" },
    //                         { id:3, skill: javascript, text: "JavaScript" , alter: "JavaScript LOGO" },
    //                         { id:4, skill: nodejs, text: "NodeJS" , alter: "NodeJS LOGO" }, 
    //                         { id:5, skill: express, text: "Express" , alter: "Express LOGO" }, 
    //                         { id:6, skill: mongodb, text: "MongoDB" , alter: "MongoDB LOGO" }, 
    //                         { id:7, skill: github, text: "GitHub" , alter: "GitHub LOGO" },
    //                         { id:8, skill: react, text: "React" , alter: "React LOGO" }, 
    //                         { id:9, skill: redux, text: "Redux" , alter: "Redux LOGO" },
    //                         { id:10, skill: dsa, text: "DSA" , alter: "DSA LOGO" }, ]

    const { Themes, currentTheme } = useContext(ThemeContext);
    return (
        <section id="skillsID" className="section-skills" style={ currentTheme === "light" ? Themes.light.home : Themes.dark.home }>
            <div className="main-skills">
                <h1 className="skills-head">Skills And Tools</h1>
                <div className="skills-cont">
                    {/* {
                        skillsCont.map((ele) => {
                            return (
                                <div key={ ele.id } className="skill">
                                    <img src={ ele.skill } alt={ ele.alter } />
                                    <p className="skill-ptag">{ ele.text }</p>
                                </div>
                            )
                        })
                    } */}
                    <div className="skill" style={ currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar }>
                        <div className="badge JavaScript">
                            <SiJavascript />
                        </div>
                        <p className="skill-ptag">JavaScript</p>
                    </div>
                    <div className="skill" style={ currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar } >
                        <div className="badge html">
                            <DiHtml5 />
                        </div>
                        <p className="skill-ptag">HTML</p>
                    </div>
                    <div className="skill" style={ currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar } >
                        <div className="badge css">
                            <DiCss3 />
                        </div>
                        <p className="skill-ptag">CSS</p>
                    </div>
                    <div className="skill" style={ currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar } >
                        <div className="badge react">
                            <SiReact />
                        </div>
                        <p className="skill-ptag">React</p>
                    </div>
                    <div className="skill" style={ currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar } >
                        <div className="badge redux">
                            <SiRedux />
                        </div>
                        <p className="skill-ptag">Redux</p>
                    </div>
                    <div className="skill" style={ currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar } >
                        <div className="badge bootstrap">
                            <SiMaterialui />
                        </div>
                        <p className="skill-ptag">Material-UI</p>
                    </div>
                    <div className="skill" style={ currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar } >
                        <div className="badge bootstrap">
                            <SiBootstrap />
                        </div>
                        <p className="skill-ptag">Bootstrap</p> 
                    </div>
                    <div className="skill" style={ currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar } >
                        <div className="badge express">
                            <SiExpress />
                        </div>
                        <p className="skill-ptag">Express</p> 
                    </div>
                    <div className="skill" style={ currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar } >
                        <div className="badge nodejs">
                            <SiNodedotjs />
                        </div>
                        <p className="skill-ptag">Node JS</p>
                    </div>
                    <div className="skill" style={ currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar } >
                        <div className="badge mongo">
                            <SiMongodb />
                        </div>
                        <p className="skill-ptag">MongoDB</p>
                    </div>
                    <div className="skill" style={ currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar } >
                        <div className="badge postman">
                            <SiGit />
                        </div>
                        <p className="skill-ptag">Git</p>
                    </div>
                    <div className="skill" style={ currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar } >
                        <div className="badge bootstrap">
                            <SiGithub />
                        </div>
                        <p className="skill-ptag">GitHub</p>
                    </div>
                    <div className="skill" style={ currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar } >
                        <div className="badge postman">
                            <SiVisualstudiocode />
                        </div>
                        <p className="skill-ptag">VS-Code</p>
                    </div>
                    <div className="skill" style={ currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar } >
                        <div className="badge postman">
                            <SiPostman />
                        </div>
                        <p className="skill-ptag">Postman</p>
                    </div>
                    <div className="skill" style={ currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar } >
                        <div className="badge postman">
                            <DiNpm />
                        </div>
                        <p className="skill-ptag">NPM</p>
                    </div>
                </div>
            </div>
        </section>
    )
}