import Sidebar from "../components/Sidebar";

function VoterLayout({ children }) {
    return (
        <div className="min-h-screen bg-[#F5F8F7]">
            <Sidebar />

            <div className="lg:ml-64">
                {children}
            </div>
        </div>
    );
}

export default VoterLayout;