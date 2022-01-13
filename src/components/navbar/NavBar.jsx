import './navbar.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-scroll';
import { FaMoon, FaSun } from "react-icons/fa";
import Trademark from "../../assets/trademark.png"

export const Navbar = () => {
    const { Themes, currentTheme, handleChangeTheme } = useContext(ThemeContext);
    const navCont = [{ to:"homeID", text: "HOME", id:1 }, { to:"aboutID", text:"ABOUT", id:2 }, { to:"skillsID", text:"SKILLS", id:3 }, { to:"projectsID", text:"PROJECTS", id:4 } ];


    return (
        <>
        <div className="Navbar"  style={ currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar }>
            <div className="onlySmallScreen">RANJAN</div>
            <div className="NavRow">
                <img src={Trademark} className='Trademark' alt="trademark"/>
                {
                    navCont.map((ele) => {
                        return (
                            <Link key={ ele.id } className="nav-cont" to={ ele.to } spy={true} smooth={true} ><p>{ ele.text }</p></Link>
                        )
                    })
                }
            </div>
            <div className="theme-cont">
            <div style={ currentTheme === "light" ? Themes.light.themebtn : Themes.dark.themebtn } className="theme-btn" onClick={ handleChangeTheme }>
                  {
                      currentTheme === "light" ? <FaMoon/> : <FaSun/>
                  }
            </div>
            </div>
        </div>
        </>
    )
}