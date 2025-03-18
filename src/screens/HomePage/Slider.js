import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home from "../../images/home.png";
import slider2img from "../../images/slider2img.png";
import slider3img from "../../images/slider3img.png";
import slider4img from "../../images/slider4img.png";
import slider5img from "../../images/slider5img.png";
import slider6img from "../../images/slider6img.png"; 
import slider7img from "../../images/slider7img.png";
import slider8img from "../../images/slider8img.png";
import slider9img from "../../images/slider9img.png";
import slider10img from "../../images/slider10img.png";
import slider11img from "../../images/slider11img.png";
import slider12img from "../../images/slider12img.png";
import slider13img from "../../images/slider13img.png";
import slider14img from "../../images/slider14img.png";
import slider15img from "../../images/slider15img.png";
import slider16img from "../../images/slider16img.png";
import slider17img from "../../images/slider17img.png";
import slider18img from "../../images/slider18img.png";
import slider19img from "../../images/slider19img.png";
import darkhome from "../../images/darkhome.png";
 
const Slidersection = () => {

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };
    const toggleTheme = () => {
        // Toggle the dark mode theme
        const newTheme = isDarkMode ? "light" : "dark";
        localStorage.setItem("theme", newTheme);

        // Apply the theme to the document element
        document.documentElement.classList.toggle("dark", newTheme === "dark");

        // Update the state
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        // Check localStorage or OS preference on page load
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else if (savedTheme === "light") {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        } else {
            // Handle default based on system preference
            const prefersDarkMode = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setIsDarkMode(prefersDarkMode);
            document.documentElement.classList.toggle("dark", prefersDarkMode);
        }
    }, []);

    // Detect dark mode changes (e.g., using a class or preference)
    useEffect(() => {
        const checkDarkMode = () => {
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        };

        // Check for initial mode
        checkDarkMode();

        // Add an observer for changes in the class
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, { attributes: true });

        // Cleanup observer
        return () => observer.disconnect();
    }, []);

    const sliderRef = useRef();

    const handlePrevClick = () => {
        sliderRef.current?.slickPrev();
    };

    const handleNextClick = () => {
        sliderRef.current?.slickNext();
    };



    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 19,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 18,
                },
            },
            {
                breakpoint: 1699,
                settings: {
                    slidesToShow: 16,
                },
            },
            {
                breakpoint: 1599,
                settings: {
                    slidesToShow: 15,
                },
            },
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 13,
                },
            },
            {
                breakpoint: 1299,
                settings: {
                    slidesToShow: 12,
                },
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 10,
                },
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 9,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 8,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 7,
                },
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 4,
                },
            },
        ],
    };

    return (
        <div className="max-[420px]:overflow-hidden image-slider  relative max-sm:px-[15px] px-5 max-sm:mb-[10px] mb-5 mt-[-1px]">
            <div className="p-[15px_20px_15px_20px] sm:p-3 s15:p-4 s18:p-5 border border-solid rounded-[0px_0px_20px_20px] dark:bg-[#182D4A] bg-lightyellow shadow-inputshadow border-yellow dark:border-[#5D6C80]">
                <div className="max-[575px]:justify-center max-md:ml-[0px] max-lg:p-0 p-[0px_0px_0px_18px] grid grid-cols-12 gap-[35px] items-center">
                    <div className="max-[575px]:hidden max-[575px]:col-span-0 col-span-1">
                        <button
                            className="max-[575px]:hidden ml-auto custom-arrow custom-prev flex justify-center items-center  max-md:w-8 max-md:h-8 md:w-[38px] md:h-[38px] s18:w-12 s18:h-12 bg-yellow border-solid border-2 border-yellow rounded-5px hover:bg-transparent transition-all duration-300"
                            onClick={handlePrevClick}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                <path d="M0.244377 8.51452L8.57678 15.7869C8.6542 15.8544 8.7461 15.908 8.84725 15.9446C8.9484 15.9812 9.05681 16 9.1663 16C9.27578 16 9.38419 15.9812 9.48534 15.9446C9.58649 15.908 9.6784 15.8544 9.75581 15.7869C9.83323 15.7193 9.89464 15.6391 9.93654 15.5508C9.97844 15.4625 10 15.3679 10 15.2724C10 15.1768 9.97844 15.0822 9.93654 14.9939C9.89464 14.9056 9.83323 14.8254 9.75581 14.7578L2.01189 8L9.75581 1.24216C9.91216 1.1057 10 0.920622 10 0.72764C10 0.534658 9.91216 0.34958 9.75581 0.213121C9.59946 0.0766618 9.38741 1.43783e-09 9.1663 0C8.94518 -1.43783e-09 8.73313 0.0766618 8.57678 0.213121L0.244377 7.48548C0.166905 7.55302 0.105446 7.63323 0.0635138 7.72151C0.0215816 7.8098 0 7.90443 0 8C0 8.09557 0.0215816 8.1902 0.0635138 8.27849C0.105446 8.36677 0.166905 8.44698 0.244377 8.51452Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                    <div className="max-[575px]:col-span-12 col-span-10">
                        <div className="image-slider-wrp max-[575px]:ml-[0px] max-md:ml-[10px] max-lg:ml-[5px]">
                            <Slider ref={sliderRef} {...settings}>
                                {imgslider.map((imgslider, index) => (
                                    <div key={index}>
                                        <div className="cursor-pointer">
                                            <div className="max-[575px]:flex max-[575px]:justify-center">
                                                <img
                                                    // src={isDarkMode ? imgslider.darkImage : imgslider.image}
                                                    src={
                                                        isDarkMode && imgslider.darkImage
                                                            ? imgslider.darkImage
                                                            : imgslider.image
                                                    }
                                                    alt="img"
                                                    className="max-[575px]:w-[35px] size-[35px] xl:size-9 s15:size-10 s18:size-12 rounded-5px"
                                                />
                                            </div>
                                            <span className="block text-center max-md:text-[10px] text-xs leading-4 mt-[3px] dark:text-white">{imgslider.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="max-[575px]:hidden max-[575px]:col-span-0 col-span-1">
                        <button
                            className="max-[575px]:hidden ml-[-20px] custom-arrow custom-next flex justify-center items-center  max-md:w-8 max-md:h-8 md:w-[38px] md:h-[38px] s18:w-12 s18:h-12 bg-yellow border-solid border-2 border-yellow rounded-5px hover:bg-transparent transition-all duration-300"
                            onClick={handleNextClick}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                <path d="M9.75562 8.51452L1.42322 15.7869C1.3458 15.8544 1.2539 15.908 1.15275 15.9446C1.0516 15.9812 0.943187 16 0.833703 16C0.72422 16 0.615808 15.9812 0.514659 15.9446C0.413509 15.908 0.321602 15.8544 0.244186 15.7869C0.166769 15.7193 0.105359 15.6391 0.0634615 15.5508C0.021564 15.4625 0 15.3679 0 15.2724C0 15.1768 0.021564 15.0822 0.0634615 14.9939C0.105359 14.9056 0.166769 14.8254 0.244186 14.7578L7.98811 8L0.244186 1.24216C0.0878359 1.1057 -1.64741e-09 0.920622 0 0.72764C1.64741e-09 0.534658 0.0878359 0.34958 0.244186 0.213121C0.400535 0.0766618 0.612592 1.43783e-09 0.833703 0C1.05482 -1.43783e-09 1.26687 0.0766618 1.42322 0.213121L9.75562 7.48548C9.83309 7.55302 9.89455 7.63323 9.93649 7.72151C9.97842 7.8098 10 7.90443 10 8C10 8.09557 9.97842 8.1902 9.93649 8.27849C9.89455 8.36677 9.83309 8.44698 9.75562 8.51452Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="relative top-[-65px] p-[0px_140px_0px_120px] hidden">
                    <div className="custom-arrows w-full justify-between top-1/2 -translate-y-1/2 flex max-md:space-x-2 space-x-4">
                        <button
                            className="custom-prev flex justify-center items-center max-xl:p-4 max-md:p-[10px] max-md:w-8 max-md:h-8 md:w-[45px] md:h-[45px] w-12 h-12 bg-yellow border-solid border-2 border-yellow rounded-5px hover:bg-transparent transition-all duration-300"
                            onClick={handlePrevClick}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                <path d="M0.244377 8.51452L8.57678 15.7869C8.6542 15.8544 8.7461 15.908 8.84725 15.9446C8.9484 15.9812 9.05681 16 9.1663 16C9.27578 16 9.38419 15.9812 9.48534 15.9446C9.58649 15.908 9.6784 15.8544 9.75581 15.7869C9.83323 15.7193 9.89464 15.6391 9.93654 15.5508C9.97844 15.4625 10 15.3679 10 15.2724C10 15.1768 9.97844 15.0822 9.93654 14.9939C9.89464 14.9056 9.83323 14.8254 9.75581 14.7578L2.01189 8L9.75581 1.24216C9.91216 1.1057 10 0.920622 10 0.72764C10 0.534658 9.91216 0.34958 9.75581 0.213121C9.59946 0.0766618 9.38741 1.43783e-09 9.1663 0C8.94518 -1.43783e-09 8.73313 0.0766618 8.57678 0.213121L0.244377 7.48548C0.166905 7.55302 0.105446 7.63323 0.0635138 7.72151C0.0215816 7.8098 0 7.90443 0 8C0 8.09557 0.0215816 8.1902 0.0635138 8.27849C0.105446 8.36677 0.166905 8.44698 0.244377 8.51452Z" fill="black" />
                            </svg>
                        </button>
                        <button
                            className="custom-next flex justify-center items-center max-xl:p-4 max-md:p-[10px] max-md:w-8 max-md:h-8 md:w-[45px] md:h-[45px] w-12 h-12 bg-yellow border-solid border-2 border-yellow rounded-5px hover:bg-transparent transition-all duration-300"
                            onClick={handleNextClick}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                <path d="M9.75562 8.51452L1.42322 15.7869C1.3458 15.8544 1.2539 15.908 1.15275 15.9446C1.0516 15.9812 0.943187 16 0.833703 16C0.72422 16 0.615808 15.9812 0.514659 15.9446C0.413509 15.908 0.321602 15.8544 0.244186 15.7869C0.166769 15.7193 0.105359 15.6391 0.0634615 15.5508C0.021564 15.4625 0 15.3679 0 15.2724C0 15.1768 0.021564 15.0822 0.0634615 14.9939C0.105359 14.9056 0.166769 14.8254 0.244186 14.7578L7.98811 8L0.244186 1.24216C0.0878359 1.1057 -1.64741e-09 0.920622 0 0.72764C1.64741e-09 0.534658 0.0878359 0.34958 0.244186 0.213121C0.400535 0.0766618 0.612592 1.43783e-09 0.833703 0C1.05482 -1.43783e-09 1.26687 0.0766618 1.42322 0.213121L9.75562 7.48548C9.83309 7.55302 9.89455 7.63323 9.93649 7.72151C9.97842 7.8098 10 7.90443 10 8C10 8.09557 9.97842 8.1902 9.93649 8.27849C9.89455 8.36677 9.83309 8.44698 9.75562 8.51452Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slidersection;

const imgslider = [
    { image: home, darkImage: darkhome, name: 'Home', },
    { image: slider2img, darkImage: slider2img, name: '[55]' },
    { image: slider3img, darkImage: slider3img, name: 'Soccer' },
    { image: slider4img, darkImage: slider4img, name: 'OdiLeague' },
    { image: slider5img, darkImage: slider5img, name: 'Aviator' },
    { image: slider6img, darkImage: slider6img, name: 'Games' },
    { image: slider7img, darkImage: slider7img, name: 'Crash' },
    { image: slider8img, darkImage: slider8img, name: 'Casino' },
    { image: slider9img, darkImage: slider9img, name: 'Promos' },
    { image: slider10img, darkImage: slider10img, name: 'LigiNare' },
    { image: slider11img, darkImage: slider11img, name: 'Evolution' },
    { image: slider12img, darkImage: slider12img, name: 'OdiTurbo' },
    { image: slider13img, darkImage: slider13img, name: 'Slots' },
    { image: slider14img, darkImage: slider14img, name: 'eSoccer' },
    { image: slider15img, darkImage: slider15img, name: 'Tennis' },
    { image: slider16img, darkImage: slider16img, name: 'Jackpot' },
    { image: slider17img, darkImage: slider17img, name: 'Basketball' },
    { image: slider18img, darkImage: slider18img, name: 'Ice Hockey' },
    { image: slider19img, darkImage: slider19img, name: 'Rugby' },
];
