import Header from "../components/Header";
import ElectionHero from "../components/Hero";
import StatsCards from "../components/StatCard";
import CandidatesSection from "../components/CandidatesSection";
import RightPanelWidgets from "../components/RightPanelWidgets";
import Footer from "../components/Footer";

function HomePage() {
    return (
        <>
            <Header />

            <main className="px-4 py-6 md:px-6 lg:px-8">
                {/* 2-Column Dashboard Layout */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    {/* Left Column: Hero, Stats, Candidates */}
                    <div className="space-y-6 lg:col-span-8 xl:col-span-9">
                        <ElectionHero />
                        <StatsCards />
                        <CandidatesSection />
                    </div>

                    {/* Right Column: Widgets */}
                    <div className="lg:col-span-4 xl:col-span-3">
                        <RightPanelWidgets />
                    </div>
                </div>

                {/* Page Footer */}
                <Footer />
            </main>
        </>
    );
}


export default HomePage;