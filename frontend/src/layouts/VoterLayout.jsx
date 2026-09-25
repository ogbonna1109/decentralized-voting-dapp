import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function VoterLayout() {
    return (
        <div className="min-h-screen bg-[#F5F8F7]">
            <Sidebar />

            <div className="lg:ml-64">
                <Outlet />
            </div>
        </div>
    );
}

export default VoterLayout;
