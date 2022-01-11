import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./connect.css"
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const Connect = () => {
    const { currentTheme } = useContext(ThemeContext);
    return (
        <div className="connect-row">
                        <div className="connect-each" >
                            <a style={ currentTheme === "light" ? { color: "rgb(221,171,52)" } : { color: "rgb(221,171,52)" } } className="connect-content" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/d-ranjan-j-gowda-85a7a9200">
                            <FaLinkedin />
                            </a>

                            <a style={ currentTheme === "light" ? { color: "rgb(221,171,52)" } : { color: "rgb(221,171,52)" } } className="connect-content" rel="noopener noreferrer" target="_blank" href="mailto: dranjanjgowda@gmail.com">
                            <FaEnvelope />
                            </a>

                            <a style={ currentTheme === "light" ? { color: "rgb(221,171,52)" } : { color: "rgb(221,171,52)" } } className="connect-content" rel="noopener noreferrer" target="_blank" href="https://github.com/dranjangowda">
                            <FaGithub />
                            </a>

                            <a style={ currentTheme === "light" ? { color: "rgb(221,171,52)" } : { color: "rgb(221,171,52)  " } } className="connect-content" rel="noopener noreferrer" target="_blank" href="https://twitter.com/RanjanG56811885">
                            <FaTwitter />
                            </a>
                        </div>
        </div>
    )
}