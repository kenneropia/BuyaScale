import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { FaHeart, FaUserTimes, FaShoppingCart } from "react-icons/fa";

const Header: React.FC = () => {
    return (
        <header className="w-full bg-deepBlue text-white py-[28px] px-4 md:px-8 lg:px-10 xl:px-16 flex items-center justify-between">
            <Link to="/">
                <div className="logowrap w-max flex gap-1">
                    <img src={ logo } alt="logo" className="w-6" />
                    <p className="font-semibold text-base">BuyaScale</p>
                </div>
            </Link>
            <nav className="text-white text-sm">
                <ul className="list-style-none w-max flex items-center gap-4">
                    <li>
                        <Link to="/">
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <p>Shop</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <p>About</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <p>Contact</p>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="extras w-max flex gap-6">
                <div className="relative">
                    <FaUserTimes className="text-base text-white" />
                </div>
                <div className="relative">
                    <FaHeart className="text-base text-white" />
                    <div className="w-[14px] h-[14px] rounded-full flex items-center justify-center bg-gold absolute -top-[10px] -right-[10px]">
                        <p className="text-white text-[10px]">0</p>
                    </div>
                </div>
                <div className="relative">
                    <FaShoppingCart className="text-base text-white" />
                    <div className="w-[14px] h-[14px] rounded-full flex items-center justify-center bg-gold absolute -top-[10px] -right-[10px]">
                        <p className="text-white text-[10px]">0</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header