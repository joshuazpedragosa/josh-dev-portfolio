import { useEffect, useState } from "react";
import Header from "./Header";
import dcyImg from "./../../../public/projects/Screenshot 2026-03-02 154055.png";

const Projects = () => {
    const [translateText, setTranslateText] = useState<boolean>(false);

    useEffect(()=>{
        setTimeout(()=>{
            setTranslateText(true);
        },500)
    },[]);

    return(
        <div className="h-full overflow-x-hidden min-sm:overflow-y-hidden">
            <Header />
            <div className={`text-center duration-600 ease-linear py-6 ${translateText ? 'translate-y-0' : '-translate-y-14'}`}>
                <h2 className={`text-2xl uppercase font-semibold ${translateText ? '' : 'text-gray-900'}`}>Projects</h2>
            </div>
            <div className="flex flex-col gap-4 items-center h-full md:w-full my-4 px-8">
               <div className="bg-black/45 p-4 rounded flex flex-col md:flex-row gap-8">
                    <div>
                        <img src={dcyImg} alt="dcy" className="w-96"  />
                    </div>
                    <div className="flex flex-col gap-2 mx-4">
                        <h2 className="text-sm md:text-xl font-semibold">DCY Malolos (Centralized database system)</h2>
                        <h3 className="text-xs md:text-lg font-semibold">Tech stack used:</h3>
                        <ul className="text-xs md:text-md px-4">
                            <li>• Laravel + inertia (Backend)</li>
                            <li>• React JS (Front End)</li>
                            <li>• MySql Database (Database)</li>
                            <li>• CI/CD Pipeline (Automated build, testing, and deployment)</li>
                        </ul>
                        <div className="flex items-center gap-2 text-xs md:text-lg">
                            <p>Link:</p>
                            <a href="https://dcymalolos.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">dcymalolos.com</a> 
                        </div>
                    </div>
               </div>
             </div>
        </div>
    )
}

export default Projects;