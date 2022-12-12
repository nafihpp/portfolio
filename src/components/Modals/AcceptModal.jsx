import React from "react";
import styled from "styled-components";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function AcceptModal({ showModal }) {
    return (
        <BackContainer style={{ transform: showModal && "scale(1,1)" }}>
            <Overlay></Overlay>
            <Modal>
                <Conatiner>
                    <HeadingContainer>
                        <Heading style={{ color: "#000" }}>Project</Heading>
                    </HeadingContainer>
                    <MiddleContainer>
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={false}
                            autoplay={{ delay: 5000 }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log("slide change")}
                        >
                            <SwiperSlide>
                                <ImageContainer>
                                    <img
                                        style={{ width: "73%" }}
                                        src={require("../assets/images/IMG_5528.jpg")}
                                        alt=""
                                    />
                                </ImageContainer>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ImageContainer>
                                    <img
                                        style={{ width: "73%" }}
                                        src={require("../assets/images/IMG_5529.jpg")}
                                        alt=""
                                    />
                                </ImageContainer>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ImageContainer>
                                    <img
                                        style={{ width: "100px" }}
                                        src={require("../assets/images/profile-img.png")}
                                        alt=""
                                    />
                                </ImageContainer>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ImageContainer>
                                    <img
                                        style={{ width: "100px" }}
                                        src={require("../assets/images/profile-img.png")}
                                        alt=""
                                    />
                                </ImageContainer>
                            </SwiperSlide>

                            <SwiperSlide>
                                <ImageContainer>
                                    <img
                                        style={{ width: "100px" }}
                                        src={require("../assets/images/profile-img.png")}
                                        alt=""
                                    />
                                </ImageContainer>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ImageContainer>
                                    <img
                                        style={{ width: "100px" }}
                                        src={require("../assets/images/profile-img.png")}
                                        alt=""
                                    />
                                </ImageContainer>
                            </SwiperSlide>
                        </Swiper>
                    </MiddleContainer>
                </Conatiner>
            </Modal>
        </BackContainer>
    );
}

export default AcceptModal;
const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
`;
const BackContainer = styled.div`
    position: fixed;
    transition: 0.3s;
    transform: scale(0, 0);
    width: 100%;
    height: 100vh;
    z-index: 1000;
    left: 0;
    top: 0px;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(2px);
`;
const Overlay = styled.div`
    position: absolute;
    left: 0;
    top: 0px;
    width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    filter: blur(1px);
`;
const Modal = styled.div`
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    transition: 0.5s;
    z-index: 101;
    border: 1px solid #3b3b3b;
    border-radius: 5px;
    overflow-y: hidden;
    box-shadow: 0px 3px 56px #00000048;

    @media all and (max-width: 980px) {
        width: 650px;
        height: 80%;
    }
    @media all and (max-width: 768px) {
        width: 550px;
    }
    @media all and (max-width: 640px) {
        width: 400px;
        height: 80%;
    }
    @media all and (max-width: 480px) {
        width: 340px;
    }
    @media all and (max-width: 360px) {
        width: 300px;
    }
`;
const Conatiner = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    width: 100%;
    height: 100%;
    padding-bottom: 50px;

    @media all and (max-width: 640px) {
        padding: 28px;
    }
`;
const HeadingContainer = styled.div`
    border-bottom: 1px solid #3b3b3b;
    padding-bottom: 25px;
`;
const Heading = styled.h3`
    font-family: "gordita_medium";
    font-size: 18px;
`;
const MiddleContainer = styled.div`
    padding: 20px 0 30px 0;
    p {
        color: #fff;
        font-family: "gordita_regular";
        font-size: 16px;
    }
`;
