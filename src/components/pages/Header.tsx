import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MsgSvg from './../../assets/svg/messages-1-svgrepo-com.svg';
import path from "../../utils/path.constant";

let hasAnimated = false;

const Header = () => {
    const [showHeader, setshowHeader] = useState<boolean>(hasAnimated);

    useEffect(()=>{
        setTimeout(()=>{
            setshowHeader(true);
            hasAnimated = true;
        },500)
    },[])

    return (
        <div className="w-full bg-transparent gap-8 p-2 px-6 flex h-12 shadow items-center">
            <div className={`w-full flex justify-start items-center ease-linear duration-200 ${showHeader ? 'translate-x-0' : '-translate-x-full text-gray-900'}`}>
                <h1 className="font-bold text-2xl">Josh|</h1>
                <h1 className="font-bold text-2xl text-blue-300">Dev</h1>
            </div>
            <div className={`w-full uppercase text-sm font-semibold flex ease-linear duration-200 ${showHeader ? 'translate-y-0' : '-translate-y-full text-gray-900'}`}>
                <div className="w-full">
                    <Link to={path.HOME} className="headers">
                        Home
                    </Link>
                </div>
                <div className="w-full">
                    <Link to={path.ABOUT_PAGE} className="headers">
                        About
                    </Link>
                </div>
                <div className="w-full">
                    <Link to='' className="headers">
                        Services
                    </Link>
                </div>
                <div className="w-full">
                    <Link to='' className="headers">
                        Projects
                    </Link>
                </div>
            </div>
            <div className="flex w-full">
                <div className={`relative ms-auto px-1 mx-4 ease-linear duration-200 ${showHeader ? 'translate-y-0' : '-translate-y-full text-gray-900'}`}>
                    <button type="button" className="cursor-pointer duration-200 hover:-rotate-12">
                        <img src={MsgSvg} className="w-8 text-gray-100" alt="msgLogo" />
                    </button>
                    <div className="absolute p-1.5 rounded-full bg-red-600 top-0 right-0 shadow-xl"></div>
                </div>
            </div>
        </div>
    )
}

export default Header;