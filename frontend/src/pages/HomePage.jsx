
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function HomePage() {
    return (
        <div className="min-h-screen bg-[#F5F8F7]">

            <Sidebar />

            <div className="lg:ml-64">

                <Header />

                <main className="px-5 py-6 md:px-8">

                    <h1 className="text-2xl font-bold text-slate-900">
                        Welcome to the National Voting Portal
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                        Your vote matters. Participate in a secure and transparent
                        electoral process.
                    </p>

                </main>

            </div>

        </div>
    );
}

export default HomePage;