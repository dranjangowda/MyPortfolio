import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import "./footer.css";

export const Footer = () => {
    const { Themes, currentTheme } = useContext(ThemeContext);
    return (
        <section className="section-footer" style={ currentTheme === "light" ? Themes.light.navbar : Themes.dark.navbar }>
            <div className="footer" >
                <p className="credit">© 2021 Ranjan. All rights are reserved.</p>
            </div>
        </section>
    )
}