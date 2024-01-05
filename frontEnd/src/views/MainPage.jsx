/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";
import { Typewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import {
    FiGithub,
    FiGlobe,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
    FiFacebook,
    FiCode,
    FiCoffee,
    FiRepeat,
    FiArrowUp,
} from "react-icons/fi";
import { RiTiktokLine } from "react-icons/ri";
import photo from "../assets/image/foto.png";
import vectorProfile from "../assets/image/profileVector.svg";
import vectorContact from "../assets/image/contactVector.svg";
import laravel from "../assets/image/laravel.png";
import react from "../assets/image/react.png";
import vite from "../assets/image/vite.png";
import bootstrap from "../assets/image/bootstrap.png";
import sass from "../assets/image/sass.png";
import tailwind from "../assets/image/tailwind.png";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/element/css/autoplay";
function MainPage() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const handleInputChange = (e) => {
        // Menghapus karakter selain nomor dari input
        const cleanedValue = e.target.value.replace(/\D/g, "");
        setPhoneNumber(cleanedValue);
    };
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className="portfolio-page">
            <Tooltip id="my-tooltip" />
            <div className="navbar h-16 w-full flex justify-center md:justify-end">
                <div className="navbar-item w-1/2 hidden md:flex justify-around my-auto font-bold text-heading items-center">
                    <h3
                        className="cursor-pointer"
                        onClick={() => scrollToSection("profile")}
                    >
                        Profile
                    </h3>
                    <h3
                        className="cursor-pointer"
                        onClick={() => scrollToSection("project")}
                    >
                        Project
                    </h3>
                    <h3
                        className="cursor-pointer"
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact
                    </h3>
                    <h3
                        className="cursor-pointer"
                        onClick={() =>
                            scrollToSection("connection-reflections")
                        }
                    >
                        Connection Reflections
                    </h3>
                    <h3
                        className="cursor-pointer border p-2 rounded-xl hover:brightness-75"
                        onClick={() =>
                            scrollToSection("connection-reflections")
                        }
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="My Github"
                        data-tooltip-place="bottom"
                    >
                        <FiGithub className="text-3xl" />
                    </h3>
                </div>
                <div className="navbar-item-mobile w-full flex md:hidden justify-between my-auto px-4 font-bold text-heading items-center">
                    <h3
                        className="cursor-pointer"
                        onClick={() => scrollToSection("profile")}
                    >
                        Profile
                    </h3>
                    <h3
                        className="cursor-pointer"
                        onClick={() => scrollToSection("project")}
                    >
                        Project
                    </h3>
                    <h3
                        className="cursor-pointer"
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact
                    </h3>
                    <h3
                        className="cursor-pointer"
                        onClick={() =>
                            scrollToSection("connection-reflections")
                        }
                    >
                        Connection Reflections
                    </h3>
                    <h3
                        className="cursor-pointer border p-2 rounded-xl hover:brightness-75"
                        onClick={() =>
                            scrollToSection("connection-reflections")
                        }
                    >
                        <FiGithub className="text-xl" />
                    </h3>
                </div>
            </div>
            {/* Jumbotron */}
            <div className="jumbotron grid grid-cols-1 gap-8 lg:grid-cols-2 lg:mt-36 container">
                <div className="name flex flex-wrap justify-center lg:justify-end px-4">
                    <div className="text w-full md:w-2/3 flex items-end lg:text-left ">
                        <div className="">
                            <label className="text-secondary text-xl">
                                Hello 🙌
                            </label>
                            <h1 className="text-tertiary font-bold text-4xl">
                                I&apos;M{" "}
                                <span>
                                    {" "}
                                    <Typewriter
                                        words={[
                                            "IQBAL FARIS AKBAR",
                                            "A WEB DEVELOPER",
                                        ]}
                                        loop={0}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={80}
                                        deleteSpeed={50}
                                        delaySpeed={1500}
                                    />
                                </span>
                            </h1>
                        </div>
                    </div>
                    <div className="stack w-full md:w-2/3 flex justify-center my-8 lg:my-0 lg:justify-start gap-8">
                        <div
                            className="grayscale hover:grayscale-0 duration-300 w-16 flex m-auto"
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Laravel"
                            data-tooltip-place="bottom"
                        >
                            <img src={laravel} className="" alt="" />
                        </div>
                        <div
                            className="grayscale hover:grayscale-0 duration-300 w-16 flex m-auto"
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Vite"
                            data-tooltip-place="bottom"
                        >
                            <img src={vite} className="" alt="" />
                        </div>
                        <div
                            className="grayscale hover:grayscale-0 duration-300 w-16 flex m-auto"
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="React"
                            data-tooltip-place="bottom"
                        >
                            <img src={react} className="" alt="" />
                        </div>
                        <div
                            className="grayscale hover:grayscale-0 duration-300 w-16 flex m-auto"
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Tailwind"
                            data-tooltip-place="bottom"
                        >
                            <img src={tailwind} className="" alt="" />
                        </div>
                        <div
                            className="grayscale hover:grayscale-0 duration-300 w-16 flex m-auto"
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Bootstrap"
                            data-tooltip-place="bottom"
                        >
                            <img src={bootstrap} className="" alt="" />
                        </div>
                    </div>
                    <div className="w-full md:w-2/3 flex justify-center lg:justify-start">
                        <button className="bg-tertiary-hover hover:brightness-75 duration-500 rounded-lg w-2/3 h-12 m-auto">
                            <h1 className="font-semibold text-lg">
                                Curiculum Vitae
                            </h1>
                        </button>
                    </div>
                </div>

                <div className="images flex justify-center">
                    <div className="image w-64 overflow-hidden rounded-full border-4 border-orange">
                        <img src={photo} alt="" />
                    </div>
                </div>
            </div>
            {/* Profile */}
            <section
                id="profile"
                className="profile grid grid-cols-1 gap-8 lg:grid-cols-2 mt-36 container"
            >
                <div className="vector-profile text-center hidden lg:flex">
                    <img className="w-2/3" src={vectorProfile} alt="" />
                </div>
                <div className="biodata-profile ">
                    <h1 className="text-center text-2xl font-bold text-secondary">
                        Profile
                    </h1>
                    <p className="text-justify text-paragraph text-lg p-2.5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eligendi architecto, dolor distinctio nostrum id
                        repudiandae? Impedit ducimus laudantium laboriosam
                        inventore vero architecto commodi, labore nesciunt natus
                        deleniti molestiae quo tenetur obcaecati, ipsam maxime
                        ab doloribus in modi, itaque aliquid similique velit
                        eveniet voluptatibus. Porro dicta accusantium dolore
                        itaque ratione modi veniam magnam rem recusandae, vitae
                        molestias. Consequatur quasi accusantium suscipit amet
                        ab! Deserunt, sint repudiandae dolore reiciendis
                        accusantium ullam alias temporibus deleniti doloremque
                        architecto odit repellendus beatae iste molestiae aut
                        voluptatibus aliquam distinctio iure optio rem id.
                        Veniam nulla a, nostrum minima ea vero in! Incidunt
                        voluptatum consequatur, ipsam sapiente cum numquam est,
                        quisquam minima sit velit eos aperiam rem molestias
                        voluptate? Facere eum repudiandae eos, repellendus
                        quibusdam necessitatibus velit possimus minus, officiis,
                        distinctio fugit! Animi, dolores deserunt earum dolore
                        optio dicta quisquam fuga itaque, officia aspernatur
                        minus quis, asperiores harum temporibus? Maiores commodi
                        nam doloribus. Alias in, inventore ab tempore possimus
                        corporis optio iste sunt minima laborum, quos accusamus
                        ipsum quam obcaecati libero! Quasi explicabo odit
                        quisquam? Laborum alias quia saepe soluta laboriosam
                        tempora maiores fugiat blanditiis, quidem a similique
                        facilis corporis, libero obcaecati, aliquid eum beatae
                        quo autem quis. Ut sit veritatis ea eaque optio aliquam,
                        enim voluptatibus!
                    </p>
                </div>
            </section>
            {/* Project */}
            <section
                id="project"
                className="project lg:grid-cols-2 mt-36 container"
            >
                <div className="projects">
                    <h1 className="text-center text-2xl font-bold text-secondary">
                        Project
                    </h1>
                    <div className="project-list mt-5 px-5 rounded-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                            <div className="card-project border-2 rounded-lg overflow-hidden flex flex-col">
                                <div className="image-project overflow-hidden max-h-52 ">
                                    <img
                                        src="https://iqbalfaris.my.id/img/project%202.png"
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="details-project flex items-center justify-center p-2">
                                    <p className="text-justify text-paragraph text-lg">
                                        <label htmlFor="" className="font-bold">
                                            NOMADS &nbsp;
                                        </label>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Excepturi animi beatae
                                        explicabo similique distinctio, odio
                                        qui! Dolorum qui in id necessitatibus,
                                        iure similique nisi laudantium soluta
                                        nulla. Voluptatum!
                                    </p>
                                </div>
                                <div className="action-project grid grid-cols-2 mt-auto">
                                    <button className="flex flex-col items-center p-1 duration-300 bg-tertiary hover:bg-tertiary-hover">
                                        <FiGithub className="text-xl" /> Github
                                    </button>
                                    <button className="flex flex-col items-center p-1 duration-300 bg-orange hover:bg-orange-hover">
                                        <FiGlobe className="text-xl" />
                                        View Page
                                    </button>
                                </div>
                            </div>
                            <div className="card-project border-2 rounded-lg overflow-hidden flex flex-col">
                                <div className="image-project overflow-hidden max-h-52 ">
                                    <img
                                        src="https://iqbalfaris.my.id/img/project%202.png"
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="details-project flex items-center justify-center p-2">
                                    <p className="text-justify text-paragraph text-lg">
                                        <label htmlFor="" className="font-bold">
                                            NOMADS &nbsp;
                                        </label>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Excepturi animi beatae
                                        explicabo similique distinctio, odio
                                        qui! Dolorum qui in id necessitatibus,
                                        iure similique nisi laudantium soluta
                                        nulla. Voluptatum!
                                    </p>
                                </div>
                                <div className="action-project grid grid-cols-2 mt-auto">
                                    <button className="flex flex-col items-center p-1 duration-300 bg-tertiary hover:bg-tertiary-hover">
                                        <FiGithub className="text-xl" /> Github
                                    </button>
                                    <button className="flex flex-col items-center p-1 duration-300 bg-orange hover:bg-orange-hover">
                                        <FiGlobe className="text-xl" />
                                        View Page
                                    </button>
                                </div>
                            </div>
                            <div className="card-project border-2 rounded-lg overflow-hidden flex flex-col">
                                <div className="image-project overflow-hidden max-h-52 ">
                                    <img
                                        src="https://iqbalfaris.my.id/img/project%202.png"
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="details-project flex items-center justify-center p-2">
                                    <p className="text-justify text-paragraph text-lg">
                                        <label htmlFor="" className="font-bold">
                                            NOMADS &nbsp;
                                        </label>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Excepturi animi beatae
                                        explicabo similique distinctio, odio
                                        qui! Dolorum qui in id necessitatibus,
                                        iure similique nisi laudantium soluta
                                        nulla. Voluptatum!
                                    </p>
                                </div>
                                <div className="action-project grid grid-cols-2 mt-auto">
                                    <button className="flex flex-col items-center p-1 duration-300 bg-tertiary hover:bg-tertiary-hover">
                                        <FiGithub className="text-xl" /> Github
                                    </button>
                                    <button className="flex flex-col items-center p-1 duration-300 bg-orange hover:bg-orange-hover">
                                        <FiGlobe className="text-xl" />
                                        View Page
                                    </button>
                                </div>
                            </div>
                            <div className="card-project border-2 rounded-lg overflow-hidden flex flex-col">
                                <div className="image-project overflow-hidden max-h-52 ">
                                    <img
                                        src="https://iqbalfaris.my.id/img/project%202.png"
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="details-project flex items-center justify-center p-2">
                                    <p className="text-justify text-paragraph text-lg">
                                        <label htmlFor="" className="font-bold">
                                            NOMADS &nbsp;
                                        </label>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisisi laudantium soluta nulla.
                                        Voluptatum!
                                    </p>
                                </div>
                                <div className="action-project grid grid-cols-2 mt-auto">
                                    <button className="flex flex-col items-center p-1 duration-300 bg-tertiary hover:bg-tertiary-hover">
                                        <FiGithub className="text-xl" /> Github
                                    </button>
                                    <button className="flex flex-col items-center p-1 duration-300 bg-orange hover:bg-orange-hover">
                                        <FiGlobe className="text-xl" />
                                        View Page
                                    </button>
                                </div>
                            </div>
                            <div className="card-project border-2 rounded-lg overflow-hidden flex flex-col">
                                <div className="image-project overflow-hidden max-h-52 ">
                                    <img
                                        src="https://iqbalfaris.my.id/img/project%202.png"
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="details-project flex items-center justify-center p-2">
                                    <p className="text-justify text-paragraph text-lg">
                                        <label htmlFor="" className="font-bold">
                                            NOMADS &nbsp;
                                        </label>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Excepturi animi beatae
                                        explicabo similique distinctio, odio
                                        qui! Dolorum qui in id necessitatibus,
                                        iure similique nisi laudantium soluta
                                        nulla. Voluptatum!
                                    </p>
                                </div>
                                <div className="action-project grid grid-cols-2 mt-auto">
                                    <button className="flex flex-col items-center p-1 duration-300 bg-tertiary hover:bg-tertiary-hover">
                                        <FiGithub className="text-xl" /> Github
                                    </button>
                                    <button className="flex flex-col items-center p-1 duration-300 bg-orange hover:bg-orange-hover">
                                        <FiGlobe className="text-xl" />
                                        View Page
                                    </button>
                                </div>
                            </div>
                            <div className="card-project border-2 rounded-lg overflow-hidden flex flex-col">
                                <div className="image-project overflow-hidden max-h-52 ">
                                    <img
                                        src="https://iqbalfaris.my.id/img/project%202.png"
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="details-project flex items-center justify-center p-2">
                                    <p className="text-justify text-paragraph text-lg">
                                        <label htmlFor="" className="font-bold">
                                            NOMADS &nbsp;
                                        </label>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Excepturi animi beatae
                                        explicabo similique distinctio, odio
                                        qui! Dolorum qui in id necessitatibus,
                                        iure similique nisi laudantium soluta
                                        nulla. Voluptatum!
                                    </p>
                                </div>
                                <div className="action-project grid grid-cols-2 mt-auto">
                                    <button className="flex flex-col items-center p-1 duration-300 bg-tertiary hover:bg-tertiary-hover">
                                        <FiGithub className="text-xl" /> Github
                                    </button>
                                    <button className="flex flex-col items-center p-1 duration-300 bg-orange hover:bg-orange-hover">
                                        <FiGlobe className="text-xl" />
                                        View Page
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact */}
            <section
                id="contact"
                className="contact grid grid-cols-1 gap-8 lg:grid-cols-2 mt-36 container p-2 lg:p-0"
            >
                <div className="biodata-contact">
                    <h1 className="text-center text-2xl font-bold text-secondary">
                        Contact
                    </h1>
                    <div className="form-input space-y-1 ">
                        <div className="sm:col-span-4">
                            <label className="block text-sm font-medium leading-6">
                                Full name
                            </label>
                            <div className="">
                                <input
                                    type="text"
                                    name="full-name"
                                    id="full-name"
                                    className="p-2 w-full border rounded-md focus:outline-none focus:ring-orange focus:border-orange"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label className="block text-sm font-medium leading-6 mt-2">
                                Email address
                            </label>
                            <div className="">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="p-2 w-full border rounded-md focus:outline-none focus:ring-orange focus:border-orange"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label className="block text-sm font-medium leading-6 mt-2">
                                Phone number
                            </label>
                            <div className="">
                                <input
                                    type="tel"
                                    name="phone"
                                    value={phoneNumber}
                                    onChange={handleInputChange}
                                    className="p-2 w-full border rounded-md focus:outline-none focus:ring-orange focus:border-orange"
                                    required
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label className="block text-sm font-medium leading-6 mt-2">
                                Message
                            </label>
                            <div className="">
                                <textarea
                                    id="about"
                                    name="about"
                                    rows="3"
                                    className="p-2 w-full border rounded-md focus:outline-none focus:ring-orange focus:border-orange"
                                ></textarea>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="w-full p-2 duration-300 font-bold bg-tertiary text-white rounded-md hover:bg-tertiary-hover focus:outline-none focus:ring focus:border-tertiary-hover"
                        >
                            Submit
                        </button>
                    </div>
                </div>
                <div className="vector-contact text-center hidden lg:flex items-center justify-center">
                    <img className="w-2/3" src={vectorContact} alt="" />
                </div>
            </section>
            {/* Connection Reflections */}
            <section
                id="connection-reflections"
                className="reflection lg:grid-cols-2 mt-36 container"
            >
                <div className="heading mb-16">
                    <h1 className="text-center text-2xl font-bold text-secondary">
                        Connection Reflections
                    </h1>
                    <h1 className="text-center italic text-paragraph font-mono">
                        Beyond Words, Beyond Bonds – Connection Reflections,
                        Where Relationships Speak Volumes.
                    </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 container">
                    <div className="card-swiper flex m-auto">
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            modules={[EffectCards, Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide className="text-center rounded-2xl bg-background  border-2 border-orange p-4">
                                <div className="mx-auto shadow-md rounded-md ">
                                    {/* Gambar dengan div untuk overflow hidden */}
                                    <div className="relative overflow-hidden">
                                        <div className="w-32 h-32 relative mx-auto">
                                            {/* Div untuk animasi */}
                                            <div className="w-full h-full rounded-full absolute top-0 left-0 border-2 border-x-tertiary hover:animate-spin"></div>

                                            {/* Gambar */}
                                            <img
                                                className="w-full h-full object-cover rounded-full"
                                                src={photo}
                                                alt="User Photo"
                                            />
                                        </div>
                                    </div>

                                    {/* Informasi nama dan pesan */}
                                    <div className="p-4">
                                        <h2 className="text-xl font-bold mb-2">
                                            Nama User 1
                                        </h2>
                                        <p className="text-sm mb-4">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Curabitur sit amet urna ac libero
                                            sagittis aliquet. Duis tincidunt
                                            ligula nec efficitur fermentum.
                                            Vestibulum ante ipsum primis in
                                            faucibus orci luctus et ultrices
                                            posuere cubilia Curae; In eu diam
                                            justo.
                                        </p>

                                        {/* Social Media */}
                                        <div className="flex items-center justify-start sm:justify-center space-x-2 running-text">
                                            <div className="flex items-center">
                                                <FiGithub className="" />
                                                <span className="ml-1 text-teal-400">
                                                    @username
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <FiInstagram className="" />
                                                <span className="ml-1 text-teal-400">
                                                    @username
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <FiLinkedin className="" />
                                                <span className="ml-1 text-teal-400">
                                                    @username
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <FiTwitter className="" />
                                                <span className="ml-1 text-teal-400">
                                                    @username
                                                </span>
                                            </div>
                                            {/* Tambahkan sosial media lainnya jika diperlukan */}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className="form p-2">
                        <h1 className="text-center font-semibold capitalize text-xl	text-tertiary mt-10 md:mt-0">
                            Express your views on my personality in Connection
                            Reflections – your perspective is valuable!
                        </h1>
                        {/* max-w-md mx-auto mt-10 p-6 */}
                        <div className=" rounded-md shadow-md mt-10 border p-6">
                            {/* Image Input */}
                            <div className="mb-4 text-center ">
                                <label
                                    htmlFor="image"
                                    className="block text-sm text-left font-medium "
                                >
                                    Profile Image (Optional)
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm border">
                                    <input
                                        type="file"
                                        accept=".jpg, .jpeg, .png"
                                        id="image"
                                        name="image"
                                        className="sr-only"
                                    />
                                    <label
                                        htmlFor="image"
                                        className="cursor-pointer"
                                    >
                                        <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
                                            <div className="flex items-center justify-center">
                                                <span className="text-gray-300">
                                                    <svg
                                                        className="h-10 w-10 text-gray-300"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {/* Name Input */}
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium "
                                >
                                    Name <label className="text-red">*</label>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-1 p-2 w-full border rounded-md"
                                />
                            </div>

                            {/* Message Input */}
                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium "
                                >
                                    Message (Max: 250)
                                    <label className="text-red"> *</label>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="mt-1 p-2 w-full border rounded-md"
                                ></textarea>
                            </div>

                            {/* Social Media Inputs */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                                <div className="flex items-center space-x-2">
                                    <FiInstagram className="text-2xl" />
                                    <input
                                        type="text"
                                        id="instagram"
                                        name="instagram"
                                        className="p-2 border rounded-md flex-grow"
                                        placeholder="Instagram Username"
                                    />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RiTiktokLine className="text-2xl" />
                                    <input
                                        type="text"
                                        id="tiktok"
                                        name="tiktok"
                                        className="p-2 border rounded-md flex-grow"
                                        placeholder="TikTok Username"
                                    />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FiTwitter className="text-2xl" />
                                    <input
                                        type="text"
                                        id="twitter"
                                        name="twitter"
                                        className="p-2 border rounded-md flex-grow"
                                        placeholder="Twitter Username"
                                    />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FiLinkedin className="text-2xl" />
                                    <input
                                        type="text"
                                        id="linkedin"
                                        name="linkedin"
                                        className="p-2 border rounded-md flex-grow"
                                        placeholder="LinkedIn Username"
                                    />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FiGithub className="text-2xl" />
                                    <input
                                        type="text"
                                        id="github"
                                        name="github"
                                        className="p-2 border rounded-md flex-grow"
                                        placeholder="GitHub Username"
                                    />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FiFacebook className="text-2xl" />
                                    <input
                                        type="text"
                                        id="facebook"
                                        name="facebook"
                                        className="p-2 border rounded-md flex-grow"
                                        placeholder="Facebook Username"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="button"
                                className="w-full p-2 duration-300 font-bold bg-tertiary text-white rounded-md hover:bg-tertiary-hover focus:outline-none focus:ring focus:border-tertiary-hover"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="w-full capitalize flex items-center justify-center mt-24 bg-deep-blue">
                <FiCode />
                &nbsp;
                <FiCoffee />
                &nbsp;
                <FiRepeat />
                &nbsp;
                <label htmlFor="">
                    : Fueling your coding adventures -{" "}
                    <a href="" className="text-blue font-semibold">
                        Iqbal Faris Akbar
                    </a>{" "}
                </label>
            </footer>

            <button
                onClick={scrollToTop}
                className={`fixed bottom-4 right-4 p-3 bg-blue text-white rounded-full shadow-md transition-all duration-300 ${
                    isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            >
                <FiArrowUp />
            </button>
        </div>
    );
}

export default MainPage;
