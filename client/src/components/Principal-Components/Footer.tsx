import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import img from "../../assets/programming.jpg";

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white lg:px-40 px-4 py-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="mb-4 md:mb-0">
                    <img
                        src={img}
                        alt="gif"
                        className="h-20 w-30 object-contain border border-white b_glow rounded"
                    />
                    <p className="text-[25px] my-4">Thanks for Watch!</p>
                </div>

                <div>
                    <h2 className="text-[22px] font-semibold text-red-800 py-2">Services</h2>
                    <ul className="text-[16px] my-4">
                        <li className="my-2">Web Design</li>
                        <li className="my-2">Web Development</li>
                        <li className="my-2">E-Commerce</li>
                    </ul>
                </div>

                <div className="mb-4 md:mb-0">
                    <h2 className="text-[22px] font-semibold text-red-800 py-2">Contact</h2>
                    <p className="text-[16px] my-4">E-mail: davidoar15@gmail.com</p>
                    <p className="text-[16px] my-4">Phone: +54 9 1124016394</p>
                </div>

                <div>
                    <h2 className="text-[22px] font-semibold text-red-800 py-2">Follow Me</h2>
                    <div className="flex space-x-4">
                        <a 
                            href="https://www.linkedin.com/in/david-olivo-rodr%C3%ADguez-401412239/"
                            className="text-white hover:text-red-600 transition-all duration-150 ease-in-out"
                        >
                            <AiFillLinkedin className="text-[25px]"/>
                        </a>

                        <a 
                            href="https://github.com/Davidoar15"
                            className="text-white hover:text-red-600 transition-all duration-150 ease-in-out"
                        >
                            <AiFillGithub className="text-[25px]"/>
                        </a>

                        <a 
                            href="https://www.instagram.com/davidoar15/?igshid=MmIzYWVlNDQ5Yg%3D%3D"
                            className="text-white hover:text-red-600 transition-all duration-150 ease-in-out"
                        >
                            <FiInstagram className="text-[25px]"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;