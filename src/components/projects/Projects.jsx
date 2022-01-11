import "./projects.css";
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import onnBikes from "../../assets/onnBikes.png";
import organplus from "../../assets/login.png";
import atom from "../../assets/atom.png";
import marvel from "../../assets/marvel.png";
// import movie from "../../assets/movie.png";

// export const Project = () => {
//     const projectCont = [
//         { 
//             name: "",
//             description: "OnnBikes is an bike rental website for the users to rent a bike or a scooty.",
//             // tech: ["HTML", "CSS", "JavaScript", "MongoDB", "Node"],
//             tech: "Tech-Stack: HTML | CSS | JavaScript | NodeJS | MongoDB",
//             image: onnBikes,
//             imageAlt: "Onn Bikes image",
//             git: "https://github.com/harshith128/onnbikes",
//             live: "https://harshith128.github.io/onnbikes-client/", 
//         },
//         { 
//             name: "Organ +",
//             description: "Organ+ is a web application for approved hospitals for registering an organ donner, organ seeker, and notify the seeker in case of organ availability.",
//             // tech: ["React", "CSS", "JavaScript", "MongoDB", "Node"],
//             tech: "Tech-Stack: ReactJS | CSS | JavaScript | NodeJS | MongoDB",
//             image: organplus,
//             imageAlt: "Organ Plus image",
//             git: "https://github.com/harshith128/Organ",
//             live: "https://organ-plus-harshithcr1357-gmailcom.vercel.app", 
//         },
//         { 
//             name: "Atom",
//             description: "Atom is a clone of the Kickstarter website, where the creators will share their ideas with the communities and the communities will fund them to bring that idea to a reality.",
//             // tech: ["React", "CSS", "JavaScript", "MongoDB", "Node"],
//             tech: "Tech-Stack: ReactJS | CSS | JavaScript | NodeJS | MongoDB | Material-UI",
//             image: atom,
//             imageAlt: "Atom image",
//             git: "https://github.com/harshith128/Atom",
//             live: "https://atom-client.vercel.app/", 
//         },
//         { 
//             name: "Marvel",
//             description: "Marvel is a marvel comics character and comic book search engine app.",
//             // tech: ["React", "CSS", "JavaScript", "MongoDB", "Node"],
//             tech: "Tech-Stack: HTML | CSS | JavaScript",
//             image: marvel,
//             imageAlt: "Marvel image",
//             git: "https://github.com/harshith128/Marvel-Search-Engine",
//             live: "https://marvel-comics-search-engine.netlify.app/", 
//         },
//         // { 
//         //     name: "MovieHub",
//         //     description: "MovieHub is movie search engine app",
//         //     // tech: ["React", "CSS", "JavaScript", "MongoDB", "Node"],
//         //     tech: "Tech-Stack: HTML | CSS | JavaScript",
//         //     image: movie,
//         //     imageAlt: "MovieHub image",
//         //     git: "https://github.com/harshith128/movieHub",
//         //     live: "https://moviesearch-engine.netlify.app/", 
//         // }
//     ]

//     const { Themes, currentTheme } = useContext(ThemeContext);
//     return (
//         <section id="projectsID" className="section-pro" style={ currentTheme === "light" ? Themes.light.home : Themes.dark.home }>
//             <h1 className="heading-project">Projects</h1>
//             <div className="main-projects">

//                 <div className="projects" >
//                     {
//                         projectCont.map((ele, j) => {
//                             return (
//                                 <div key={`project${j}`} className="pro" style={ currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar }>
//                                     <div className="data">
//                                         <h2 className="pro-head">{ ele.name }</h2>
//                                         <p className="desc">{ ele.description }</p>
//                                         <p className="tech-stack"> { ele.tech }
//                                             {/* {
//                                                 ele.tech.map((e, i) => {
//                                                     return (
//                                                         <span className="tech" key={`tech${i}`}> { e } </span>
//                                                     )
//                                                 })
//                                             } */}
//                                         </p>
//                                         <p className="repo">
//                                             <a href={ ele.git } rel="noopener noreferrer" target="_blank"><span style={ currentTheme === "light" ? Themes.light.pro : Themes.dark.pro }>GitHub</span></a>
//                                             <a href={ ele.live } rel="noopener noreferrer" target="_blank"><span style={ currentTheme === "light" ? Themes.light.pro : Themes.dark.pro }>Live Demo</span></a>
//                                         </p>
//                                         </div>
//                                         <div className="img">
//                                             <img src={ ele.image } alt={ ele.imageAlt } />
//                                         </div>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//         </section>
//     )
// }