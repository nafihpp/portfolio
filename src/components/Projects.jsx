import React, { useState } from "react";
import YouTube from "react-youtube";
import styled from "styled-components";
import Modal from "../components/Modals/AcceptModal";

function Projects() {
    const [showModal, setShowModal] = useState(true);
    const [activeTab, setActiveTab] = useState(1);
    const [categories] = useState([
        {
            id: 1,
            name: "All",
            projects: [],
        },
        {
            id: 2,
            name: "React",
            projects: [
                {
                    id: "1",
                    thumb: "trendzThumb",
                    title: "Edtech Platform",
                    description:
                        "Ed-tech Platform with Monthly users of 10K+ fully functional built with Next JS, Zustand, Node JS, and PostgreSql database",
                },
                {
                    id: "2",
                    thumb: "trendzThumb",
                    title: "Food Ordering",
                    description:
                        "Food Ordering App a fully functional built with Next JS, Zustand, Node JS, and PostgreSql database",
                },
                {
                    id: "3",
                    thumb: "trendzThumb",
                    title: "E-commerce",
                    description:
                        "E-commerce built with React, Redux, Node Js, and PostgreSql database",
                },
            ],
        },
        {
            id: 3,
            name: "React-Native",
            projects: [
                {
                    id: "nL47iZHogWk",
                    thumb: "whatsappThumb",
                    title: "Food Ordering App",
                    description: "WhatsApp UI clone built using React-Native",
                    githubLink:
                        "https://github.com/safwantaliparamba/WhatsApp-UI",
                },
            ],
        },
        {
            id: 4,
            name: "React JS & Node JS",
            projects: [
                {
                    id: "qT88sxiRquY",
                    thumb: "todoThumb",
                    title: "ToDo Website",
                    description:
                        "Todo Website built using Express JS and PostgreSQL database",
                },
            ],
        },
    ]);
    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <>
            <Container>
                <h1>Projects</h1>
                <TopTab>
                    {categories.map((category, index) => (
                        <span
                            key={index}
                            className={
                                category.name === activeTab ? "active" : ""
                            }
                            onClick={(e) => {
                                if (category.name !== "All") {
                                    setActiveTab(category.name);
                                } else {
                                    setActiveTab(1);
                                }
                            }}
                        >
                            {category.name}
                        </span>
                    ))}
                </TopTab>
                <ItemContainer>
                    {categories.map((item) => {
                        if (item.name === activeTab) {
                            return item.projects.map((project, index) => (
                                <ImageContainer
                                    key={index}
                                    onClick={(e) => setShowModal(null)}
                                >
                                    {/* <img
                                        loading="lazy"
                                        src={video.thumb}
                                        key={index}
                                        alt=""
                                    /> */}
                                    <h1>{project.title}</h1>
                                </ImageContainer>
                            ));
                        } else if (activeTab === 1) {
                            return item.projects.map((project, index) => (
                                <ImageContainer
                                    key={index}
                                    onClick={(e) => setShowModal(true)}
                                >
                                    {/* <img
                                        loading="lazy"
                                        src={video.thumb}
                                        key={index}
                                        alt=""
                                    /> */}
                                    <h1>{project.title}</h1>
                                </ImageContainer>
                            ));
                        }
                        return null;
                    })}
                </ItemContainer>
                {showModal && <Modal showModal={showModal} />}
            </Container>
        </>
    );
}

export default Projects;

const Container = styled.div`
    width: 90%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 12px;

    h1 {
        text-align: center;
        font-weight: 600;
        margin-bottom: 52px;
    }
`;

const ItemContainer = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 50px;
`;

const ImageContainer = styled.div`
    width: 31%;
    display: block;

    iframe {
        width: 100%;
        /* height: auto; */
    }
    img {
        width: 100%;
        cursor: pointer;
    }
    @media all and (max-width: 960px) {
        width: 48%;
    }
    @media screen and (max-width: 640px) {
        width: 100%;

        iframe {
            height: auto;
        }
    }
`;

const TopTab = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: auto;
    margin: 0 auto;
    margin-top: 32px;

    @media screen and (max-width: 640px) {
        flex-wrap: wrap;
    }
    span {
        display: inline-block;
        padding: 8px 18px;
        font-weight: 600;
        border-radius: 15px;
        cursor: pointer;

        &.active {
            background: #9e5ef3;
            color: #fff;
        }
    }
`;

const VideoContainer = styled.div`
    text-align: center;
    max-height: 70vh;
    h1 {
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 24px;
    }
    p {
        margin-bottom: 22px;
        font-weight: 600;
        color: #808080;
    }
    a {
        display: inline-block;
        color: blue;
        text-decoration: underline;
        font-weight: 600;
        margin-bottom: 32px;
    }
    iframe {
        width: 100%;
    }
    @media screen and (max-width: 640px) {
        overflow-y: scroll;
    }
`;
