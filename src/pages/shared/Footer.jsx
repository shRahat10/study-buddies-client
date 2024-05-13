import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useContext } from "react";
import logo from "../../assets/images/logo.svg"
import { AuthContext } from "../../provider/AuthProvider";

const Footer = () => {
    const { user } = useContext(AuthContext);

    return (
        <div class="py-10 mt-16 text-white bg-transparent">
            <div class="flex flex-col md:items-start items-center">
                    <img src={logo} class="font-bold text-3xl w-56" alt="Logo"></img>
                    <p class="text-lg mt-2">Engage. Collaborative. Support.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 items-start mb-6">
                <div class="col-span-3 text-center space-y-6 md:text-start mt-4">
                    <div class="flex justify-between md:justify-start md:gap-6 ">
                        <p>Careers</p>
                        <p>Privacy Policy</p>
                        <p>Term and Conditions</p>
                    </div>
                    <div class="flex gap-10 justify-center md:justify-start">
                        <a href="https://www.facebook.com/"><FiFacebook size={25} /></a>
                        <a href="https://twitter.com/"><FaXTwitter size={25} /></a>
                        <a href="https://www.instagram.com/"><FaInstagram size={25} /></a>
                    </div>
                </div>
                <div class="space-y-2 text-center md:text-start mt-4 md:mt-0">
                    <h1 class="text-lg font-bold">Contact Us</h1>
                    <p>Dhaka, Bangladesh</p>
                    <p><a href="mailto:study.buddies@gmail.com">study.buddies@gmail.com</a></p>
                </div>
            </div>
            <hr />
            <p class="text-center mt-8">© 2024 Study Buddies. All rights reserved.</p>
        </div>

    );
};

export default Footer;