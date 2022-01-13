import "./about.css";
import Ranjan from "../../assets/Ranjan.jpg";
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const About = () => {
    const { Themes, currentTheme } = useContext(ThemeContext);
    return (
        <section id="aboutID" className="section-about" style={ currentTheme === "light" ? Themes.light.home : Themes.dark.home }>
        <div className="main-about">
            <div className="about aboutClass">
                <h1 className="about-head">About me</h1>
                <p className="about-data">Hi there I'm Ranjan Gowda and I am from Bangalore, Karnataka.</p>
                <p className="about-data">I started learning coding as a hobby and just displaying a simple "Hello world" message on screen seemed exciting. Ever since I started learning web development, I fell in love with it. I enjoy making interactive and user-friendly websites. Looking forward to being an integral part of an organization where the learning curve is great and hard work is appreciated. When I am not coding I love to read novels and solving puzzles.</p>
            </div>
            <div className="main-img aboutClass">
                <div className="profilePicture">
                    <img src={Ranjan} alt="Ranjan's profile picture" />
                </div>
            </div>
        </div>
        </section>
    )
}