import React, { useState, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
    const [isShow, setIsShow] = useState(false);
    const [hasWidth, setHasWidth] = useState(false);

    useLayoutEffect(() => {
        const updateSize = () => {
            if (window.innerWidth <= 768) {
                setHasWidth(true);
            } else {
                setHasWidth(false);
            }
        };
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => {
            window.removeEventListener("resize", updateSize);
        };
    }, [hasWidth]);

    const toggleHandler = () => {
        setIsShow(!isShow);
    };
    return (
        <section id="header">
            <header className="wrapper">
                <NavLink to="/">NAFIH</NavLink>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="active">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" activeClassName="active">
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeClassName="active">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                {hasWidth && (
                    <div className="mobile-nav">
                        <button
                            id="menu-toggler"
                            data-class="menu-active"
                            className="hamburger"
                            onClick={(e) => {
                                setIsShow(!isShow);
                            }}
                        >
                            <span className="hamburger-line hamburger-line-top"></span>
                            <span className="hamburger-line hamburger-line-middle"></span>
                            <span className="hamburger-line hamburger-line-bottom"></span>
                        </button>
                        {isShow && (
                            <div onClick={toggleHandler} className="mob-menu">
                                <ul className="mobile-menu">
                                    <li>
                                        <NavLink
                                            to="/"
                                            onClick={(e) => setIsShow(false)}
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/about"
                                            onClick={(e) => setIsShow(false)}
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/projects"
                                            onClick={(e) => setIsShow(false)}
                                        >
                                            Projects
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/contact"
                                            onClick={(e) => setIsShow(false)}
                                        >
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </header>
        </section>
    );
}

export default Header;
