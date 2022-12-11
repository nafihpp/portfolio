import React from "react";
import { Link } from "react-router-dom";
import "./Spotlight.css";
// import github from "../assets/images/linkedin.png";
// import linkedin from "../assets/images/linkedin.png";

function Spotlight() {
    return (
        <section id="spotlight">
            <div className="wrapper">
                <div className="left">
                    <h1>
                        Hi <br /> I'm <span>Mohammed Nafih Yuseph</span>
                        <br />
                    </h1>
                    <p>Software Engineer</p>
                    <div className="about">
                        <span className="line" />
                        <p>
                            React JS|ReactNative|Node JS <br />{" "}
                        </p>
                    </div>
                    <div className="links">
                        <Link to="/contact" className="link">
                            let's talk
                        </Link>
                        <Link to="/projects" className="link2">
                            Projects
                        </Link>
                    </div>
                    <div className="social">
                        <span>Get in touch</span>
                        <ul>
                            <li>
                                <a href="https://github.com/nafihpp">
                                    {/* <img src={github} alt="github" /> */}
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/nafihpp/">
                                    {/* <img src={linkedin} alt="linkedin" /> */}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <img
                        src={require("../assets/images/profile-img.png")}
                        alt="Profile"
                    />
                </div>
            </div>
        </section>
    );
}

export default Spotlight;
