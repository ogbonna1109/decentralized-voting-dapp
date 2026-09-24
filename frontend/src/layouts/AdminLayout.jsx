import { Outlet } from "react-router-dom"
import AdminSidebar from "../components/admin/AdminSidebar";

function AdminLayout({ children }) {
    return (
        <div className="min-h-screen bg-[#F5F8F7]">
            <AdminSidebar />

            <div className="lg:ml-64">
                <Outlet />
            </div>
        </div>
    );
}

export default AdminLayout;