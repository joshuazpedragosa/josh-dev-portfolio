import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loading from "./Loading";

const Layout = () => {
    return(
        <>
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
        </>
    )
}

export default Layout;