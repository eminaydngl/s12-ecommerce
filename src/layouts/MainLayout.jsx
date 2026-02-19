import SidebarMenu from "../companents/Siderbar/SidebarMenu";
import Header from "../companents/Header"
import Footer from "../companents/Footer"
import { Outlet } from "react-router-dom";


function MainLayout() {
    return (
        <>
            <Header />

            <div className="flex min-h-screen">
                <SidebarMenu />

                <main className="flex-1 p-8">
                    <Outlet />
                </main>
            </div>

            <Footer />
        </>
    );
}

export default MainLayout;