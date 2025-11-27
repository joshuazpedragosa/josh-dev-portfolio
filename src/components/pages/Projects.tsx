import { useEffect, useState } from "react";
import Header from "./Header";

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
            <div className="flex flex-col gap-4 justify-center items-center h-full w-full">
                <div className={`text-center duration-600 ease-linear ${translateText ? 'translate-y-0' : '-translate-y-14'}`}>
                    <h2 className={`text-2xl uppercase font-semibold ${translateText ? '' : 'text-gray-900'}`}>Projects</h2>
                </div>
               
             </div>
        </div>
    )
}

export default Projects;