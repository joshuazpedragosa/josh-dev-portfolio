import Header from "./Header";
import myImg from "./../../assets/IMG_8624.png";
import { useEffect, useRef, useState } from "react";
import GitHubSvg from './../../assets/svg/github-svgrepo-com.svg';
import FBSvg from './../../assets/svg/facebook-svgrepo-com.svg';
import Li from './../../assets/svg/linkedin-linked-in-svgrepo-com.svg';
import { useNavigate } from "react-router-dom";
import path from "../../utils/path.constant";

const Home = () => {
    const navigate = useNavigate();
    const [translateText, setTranslateText] = useState<boolean>(false);
    const prevScrollY = useRef(0);
    const hasNavigated = useRef(false);

    useEffect(()=>{
        setTimeout(()=>{
            setTranslateText(true);
        },500)
    },[]);

    useEffect(()=>{
        const handleScroll = () =>{
            const currentScroll = window.scrollY;
            console.log('fvck')
            if(!hasNavigated.current && currentScroll > prevScrollY.current){
                navigate(path.ABOUT_PAGE);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    },[navigate]);
    
    return (
        <div className="h-full overflow-x-hidden min-sm:overflow-y-hidden">
            <Header />
            <div className="flex max-sm:flex-wrap overflow-y-auto gap-2 h-full justify-center items-center">
                <div className={`flex w-full justify-center items-center `}>
                    <div className={`
                        w-72 bg-blue-300 border-solid 
                        overflow-hidden shadow-2xl rounded-br-full rounded-tl-full
                        shadow-blue-300 duration-300 ease-linear
                        ${translateText ? 'translate-x-0' : 
                        '-translate-x-48 bg-gray-900 shadow-none'}`}>
                        <img src={myImg} alt="" className={`w-full h-full max-sm:w-64 max-sm:h-52 object-contain ${translateText ? '' : 'hidden'}`} />
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-full justify-start max-sm:items-center">
                    <div className={`flex gap-3 duration-200 ease-linear ${translateText ? 'translate-x-0' : 'translate-x-48 text-gray-900'}`}>
                        <h1 className="text-xl font-normal uppercase">Hi there !</h1>
                    </div>
                    <div className={`flex gap-3 duration-400 ease-linear ${translateText ? 'translate-x-0' : 'translate-x-48 text-gray-900'}`}>
                        <h1 className="text-5xl max-sm:text-2xl font-bold uppercase">I am</h1>
                        <h1 className={`text-5xl max-sm:text-2xl font-bold uppercase ${translateText ? 'text-blue-300' : 'text-gray-900'} `}>Joshua</h1>
                    </div>
                    <div className={`duration-600 ease-linear ${translateText ? 'translate-y-0' : 'translate-y-full text-gray-900'}`}>
                        <h1 className="text-2xl max-sm:text-xl uppercase">full stack web developer</h1>
                    </div>
                    <div className={`duration-700 ease-linear ${translateText ? 'translate-y-0' : 'translate-y-full text-gray-900'}`}>
                        <p className="max-w-96 text-xl max-sm:text-lg max-sm:text-center">
                            With 2 years of solid experience in both frontend and backend development, I turn ideas into polished, scalable products.
                        </p>
                    </div>
                    <div className={`my-6 ease-linear duration-800 ${translateText ? 'translate-y-0' : 'translate-y-full text-gray-900'}`}>
                        <button type="button" onClick={() => window.open("https://drive.google.com/file/d/1VooiVILwIkA6jHeHnQlX6Q2GytYqcZry/view?usp=sharing", "_blank")} className={`ease-linear duration-800 max-sm:text-sm ${translateText ? 'translate-y-0 btn' : 'translate-y-full text-gray-900'}`}>
                            See my Resume
                        </button>
                    </div>
                    <div className={`flex gap-6 items-center ease-linear duration-1000 ${translateText ? 'translate-y-0' : 'translate-y-full'}`}>
                        <div>
                            <button onClick={() => window.open("https://github.com/joshuazpedragosa", "_blank")} className="cursor-pointer">
                                <img src={GitHubSvg} className={`w-8 ease-linear duration-1000 ${translateText ? '' : 'hidden'}`} alt="" />
                            </button>
                        </div>
                        <div>
                            <button onClick={() => window.open("https://www.facebook.com/joshua.pedragosa.71", "_blank")} className="cursor-pointer">
                                <img src={FBSvg} className={`w-8 ease-linear duration-1000 ${translateText ? '' : 'hidden'}`} alt="" />
                            </button>
                        </div>
                        <div>
                            <button onClick={() => window.open("https://www.linkedin.com/in/joshua-pedragosa-83601b339/", "_blank")} className="cursor-pointer">
                                <img src={Li} className={`w-8 ease-linear duration-1000 ${translateText ? '' : 'hidden'}`} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;