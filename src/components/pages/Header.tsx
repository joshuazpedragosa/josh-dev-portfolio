import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import path from "../../utils/path.constant";
import menuIcon from "./../../assets/svg/menu-svgrepo-com (1).svg";
import closeIcon from "./../../assets/svg/times-close-error-fail-failure-failed-x-cross-bad-svgrepo-com.svg";

let hasAnimated = false;

const Header = () => {
    const [showHeader, setshowHeader] = useState<boolean>(hasAnimated);
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(()=>{
        setTimeout(()=>{
            setshowHeader(true);
            hasAnimated = true;
        },500)
    },[])

    useEffect(() => {
        const handleResize = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(()=>{
        if(size.width >= 640) setShowDropDown(false);
    },[size]);

    return (
        <div className="relative w-full">
            <div className="w-full bg-gray-800 gap-8 max-sm:gap-2 p-2 px-6 flex h-12 shadow items-center">
                <div className={`min-sm:hidden duration-300 ease-linear ${showHeader ? 'translate-y-0' : '-translate-y-9'}`}>
                    <button type="button" onClick={()=>setShowDropDown(showDropDown ? false : true)}>
                        {showDropDown ? (
                            <img src={closeIcon} alt="" className="w-8 h-full object-contain duration-200 ease-linear" />
                        ) : (
                            <img src={menuIcon} alt="" className="w-8 h-full object-contain duration-200 ease-linear" />
                        )}
                        
                    </button>
                </div>
                <div className={`w-full max-sm:ms-auto flex justify-start items-center ease-linear duration-200 ${showHeader ? 'translate-x-0' : '-translate-x-full text-gray-900'}`}>
                    <h1 className="font-bold text-2xl max-sm:text-sm">Josh|</h1>
                    <h1 className="font-bold text-2xl max-sm:text-sm text-blue-300">Dev</h1>
                </div>
                <div className={`ms-auto max-sm:hidden uppercase text-sm font-semibold flex justify-center items-end gap-14 ease-linear duration-200 ${showHeader ? 'translate-y-0' : '-translate-y-full text-gray-800'}`}>
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
            {showDropDown && (
                <div className="absolute w-full flex flex-col bg-gray-800 gap-2 z-50 px-6 py-4">
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
            )}
            
        </div>
        
    )
}

export default Header;