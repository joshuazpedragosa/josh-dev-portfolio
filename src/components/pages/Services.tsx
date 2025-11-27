import Header from "./Header";
import codeIcon from "./../../assets/svg/code-square-svgrepo-com.svg";
import fileIcon from "./../../assets/svg/file-link-svgrepo-com.svg";
import databaseIcon from "./../../assets/svg/database-svgrepo-com.svg";
import { useEffect, useState } from "react";

const Services = () => {
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
                <div className={`text-center max-sm:hidden duration-600 ease-linear ${translateText ? 'translate-y-0 max-sm:translate-y-16' : '-translate-y-14'}`}>
                    <h2 className={`text-2xl max-sm:text-lg uppercase font-semibold ${translateText ? '' : 'text-gray-900'}`}>Services</h2>
                </div>
                <div className={`flex max-sm:flex-col justify-center max-sm:pb-12 items-center m-4 gap-12 max-sm:gap-4 duration-600 ease-linear ${translateText ? 'translate-y-0 max-sm:translate-y-68' : 'translate-y-14'}`}>
                    <div className={`bg-gray-800 duration-100 ease-linear p-8 max-sm:p-4 rounded ${translateText ? '' : 'hidden'}`}>
                        <div className="flex items-center gap-2">
                            <img src={codeIcon} className="w-8 rounded-md bg-white p-1" alt="" />
                            <h2>
                                Web Development
                            </h2>
                        </div>
                        <div className="flex flex-col gap-8 my-4">
                            <div className="services-label">
                                Front-End Development (React, TypeScript)
                            </div>
                            <div className="services-label">
                                Back-End Development (Node.js, Express)
                            </div>
                            <div className="services-label">
                                API Integration & Development
                            </div>
                            <div className="services-label">
                                Responsive Website Design
                            </div>
                            <div className="services-label">
                                AI Integration
                            </div>
                        </div>
                    </div>

                    <div className={`bg-gray-800 duration-700 ease-linear p-8 max-sm:p-7 rounded ${translateText ? '' : 'hidden'}`}>
                        <div className="flex items-center gap-2">
                            <img src={fileIcon} className="w-8 rounded-md bg-white p-1" alt="" />
                            <h2>
                                File & Document Services
                            </h2>
                        </div>
                        <div className="flex flex-col gap-8 my-4">
                            <div className="services-label">
                                PDF Generation (Reports, Letters, etc.)
                            </div>
                            <div className="services-label">
                                Word DOCX Automation
                            </div>
                            <div className="services-label">
                                CSV & Excel Creation / Data Structuring
                            </div>
                            <div className="services-label">
                                PDF-to-Image Conversion
                            </div>
                            <div className="services-label">
                                Google Sheets API
                            </div>
                        </div>
                    </div>

                    <div className={`bg-gray-800 duration-700 ease-linear p-8 max-sm:p-4 rounded ${translateText ? '' : 'hidden'}`}>
                        <div className="flex items-center gap-2">
                            <img src={databaseIcon} className="w-8 rounded-md bg-white p-1" alt="" />
                            <h2>
                            Database & Backend Services
                            </h2>
                        </div>
                        <div className="flex flex-col gap-8 my-4">
                            <div className="services-label">
                                MySQL Database Design
                            </div>
                            <div className="services-label">
                                REST API Development
                            </div>
                            <div className="services-label">
                                CRUD Systems
                            </div>
                            <div className="services-label">
                                Server Deployment & Ubuntu VPS Setup
                            </div>
                            <div className="services-label">
                                SSL-secured server and database configuration
                            </div>
                        </div>
                    </div>

                </div>
             </div>
             
        </div>
    )
}

export default Services;