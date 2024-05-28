import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white p-12 text-center mt-6">
            <ul className="flex justify-center list-none">
                <li className="m-4">
                    <FaFacebook/>
                </li>
                <li className="m-4">
                    <FaInstagram/>
                </li>
                <li className="m-4">
                    <FaLinkedin/>
                </li>
            </ul>
        </footer>
    );
}