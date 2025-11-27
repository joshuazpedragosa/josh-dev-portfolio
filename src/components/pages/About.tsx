import { useEffect, useState } from "react";
import Header from "./Header";
import myImg from "./../../assets/IMG_8624.png";
import TS from "./../../assets/svg/typescript-icon-svgrepo-com.svg";
import ReactJS from "./../../assets/svg/reactjs-svgrepo-com.svg";
import NodeJs from "./../../assets/svg/nodejs-svgrepo-com.svg";
import Mysql from "./../../assets/svg/mysql-logo-svgrepo-com.svg";
import MongoDb from "./../../assets/svg/mongodb-svgrepo-com.svg";
import TailWindIcon from "./../../assets/svg/tailwindcss-icon-svgrepo-com.svg";
import OpenAIIcon from "./../../assets/svg/openai-svgrepo-com.svg";

const About = () => {
    const [translateText, setTranslateText] = useState<boolean>(false);

    useEffect(()=>{
        setTimeout(()=>{
            setTranslateText(true);
        },500)
    },[]);

    return (
        <div className="h-full overflow-hidden">
            <Header />
            <div className="flex w-full h-full justify-center items-center gap-2">
                <div className="flex flex-col gap-8 w-full justify-end items-start ms-44">
                    <div className={`duration-700 ease-linear ${translateText ? 'translate-y-0' : 'translate-y-full text-gray-900'}`}>
                        <h1>
                            ABOUT ME
                        </h1>
                    </div>
                    <div className={`duration-700 ease-linear ${translateText ? 'translate-y-0' : 'translate-y-full text-gray-900'}`}>
                        <p className="max-w-[32rem] text-xl">
                            I am a software developer specializing in TypeScript, React, and Node.js. 
                            I help businesses automate workflows, improve user experience, and build reliable digital products. 
                            My goal is to create solutions that are functional, scalable, and easy to use.
                        </p>
                    </div>
                    <div className={`duration-800 ease-linear ${translateText ? 'translate-x-0' : '-translate-x-full text-gray-900'}`}>
                        <h2 className="uppercase">Primary Skills:</h2>
                    </div>
                    <div className="flex w-full gap-12">

                        <div className={`flex flex-col gap-6 duration-800 ease-linear px-6 ${translateText ? 'translate-x-0' : '-translate-x-full text-gray-900'}`}>
                            <div className="flex justify-start gap-2 items-center text-xl font-semibold">
                                <div>
                                    <img src={TS} className={`w-8 rounded-md ease-linear duration-800 ${translateText ? '' : 'hidden'}`} alt="" />
                                </div>
                                <h3>TypeScript</h3>
                            </div>
                            <div className="flex justify-start gap-2 items-center text-xl font-semibold">
                                <div>
                                    <img src={ReactJS} className={`w-8 rounded-md ease-linear duration-800 ${translateText ? '' : 'hidden'}`} alt="" />
                                </div>
                                <h3>ReactJS</h3>
                            </div>
                            <div className="flex justify-start gap-2 items-center text-xl font-semibold">
                                <div>
                                    <img src={NodeJs} className={`w-8 rounded-md ease-linear duration-800 ${translateText ? '' : 'hidden'}`} alt="" />
                                </div>
                                <h3>NodeJS</h3>
                            </div>
                            <div className="flex justify-start gap-2 items-center text-xl font-semibold">
                                <div>
                                    <img src={Mysql} className={`w-8 rounded-md ease-linear duration-800 ${translateText ? '' : 'hidden'}`} alt="" />
                                </div>
                                <h3>MySQL</h3>
                            </div>
                            <div className="flex justify-start gap-2 items-center text-xl font-semibold">
                                <div>
                                    <img src={MongoDb} className={`w-8 rounded-md ease-linear duration-800 ${translateText ? '' : 'hidden'}`} alt="" />
                                </div>
                                <h3>MongoDB</h3>
                            </div>
                        </div>

                        <div className={`flex flex-col gap-6 duration-800 ease-linear px-6 ${translateText ? 'translate-x-0' : '-translate-x-full text-gray-900'}`}>
                            <div className="flex justify-start gap-2 items-center text-xl font-semibold">
                                <div className="bg-white p-1 rounded-lg">
                                    <img src={OpenAIIcon} className={`w-8 rounded-md ease-linear duration-800 ${translateText ? '' : 'hidden'}`} alt="" />
                                </div>
                                <h3>AI Integration (OpenAI)</h3>
                            </div>
                            <div className="flex justify-start gap-2 items-center text-xl font-semibold">
                                <div>
                                    <img src={TailWindIcon} className={`w-8 rounded-md ease-linear duration-800 ${translateText ? '' : 'hidden'}`} alt="" />
                                </div>
                                <h3>Tailwind CSS </h3>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="flex w-full justify-center items-center">
                    <div className={`
                        w-72 bg-blue-300 border-solid 
                        overflow-hidden shadow-2xl rounded-bl-full rounded-tr-full
                        shadow-blue-300 duration-300 ease-linear
                        ${translateText ? '-translate-x-48' : 
                        '-ranslate-x-0 bg-gray-900 shadow-none'}`}>
                        <img src={myImg} alt="" className={`w-full h-full object-contain ${translateText ? '' : 'hidden'}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;