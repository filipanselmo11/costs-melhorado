import { Link } from "react-router-dom";
import logo from '../../assets/img/costs_logo.png';

export default function Navbar() {
    return (
        <nav className="bg-black">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link to="/">
                                    <img className="w-14" src={logo} alt="Cost logo" />
                                </Link>
                                <Link to="/">
                                    <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</button>
                                </Link>
                                <Link to="/projetos">
                                    <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projetos</button>
                                </Link>
                                <Link to="/contato">
                                    <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contato</button>
                                </Link>
                                <Link to="/empresa">
                                    <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Empresa</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}