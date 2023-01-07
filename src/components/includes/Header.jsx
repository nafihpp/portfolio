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
                            <>
                                <div
                                    className="closebutton"
                                    onClick={(e) => setIsShow(false)}
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 512 512"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M331.3 308.7L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-15.6-7.1-22.6 0-7.1 7.1-6 16.6 0 22.6l52.7 52.7-52.7 52.7c-6.7 6.7-6.4 16.3 0 22.6 6.4 6.4 16.4 6.2 22.6 0l52.7-52.7 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0 6.3-6.2 6.3-16.4 0-22.6z"></path>
                                        <path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>
                                    </svg>
                                </div>
                                <div
                                    onClick={toggleHandler}
                                    className="mob-menu"
                                >
                                    <ul className="mobile-menu">
                                        <li>
                                            <NavLink
                                                to="/"
                                                onClick={(e) =>
                                                    setIsShow(false)
                                                }
                                            >
                                                Home
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/about"
                                                onClick={(e) =>
                                                    setIsShow(false)
                                                }
                                            >
                                                About
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/projects"
                                                onClick={(e) =>
                                                    setIsShow(false)
                                                }
                                            >
                                                Projects
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/contact"
                                                onClick={(e) =>
                                                    setIsShow(false)
                                                }
                                            >
                                                Contact
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </header>
        </section>
    );
}

export default Header;
