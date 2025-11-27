import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
            <div className={`ms-auto uppercase text-sm font-semibold flex justify-center items-end gap-14 ease-linear duration-200 ${showHeader ? 'translate-y-0' : '-translate-y-full text-gray-900'}`}>
                <div>
                    <Link to={path.HOME} className="headers">
                        Home
                    </Link>
                </div>
                <div>
                    <Link to={path.ABOUT_PAGE} className="headers">
                        About
                    </Link>
                </div>
                <div>
                    <Link to={path.SERVICES} className="headers">
                        Services
                    </Link>
                </div>
                <div>
                    <Link to={path.PROJECTS} className="headers">
                        Projects
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;