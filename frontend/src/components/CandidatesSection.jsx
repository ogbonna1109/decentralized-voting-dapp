import { Users, Search, SlidersHorizontal } from "lucide-react";
import CandidateCard from "./CandidateCard";

const candidatesData = [
    {
        id: 1,
        name: "Bola Ahmed Tinubu",
        partyCode: "APC",
        partyName: "All Progressives Congress",
        age: 71,
        state: "Lagos State",
        quote: "Renewed Hope for a Greater Nigeria",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
        id: 2,
        name: "Atiku Abubakar",
        partyCode: "PDP",
        partyName: "People's Democratic Party",
        age: 77,
        state: "Adamawa State",
        quote: "A United Nigeria is Possible",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    },
    {
        id: 3,
        name: "Peter Obi",
        partyCode: "LP",
        partyName: "Labour Party",
        age: 62,
        state: "Anambra State",
        quote: "A New Nigeria is Possible",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    },
    {
        id: 4,
        name: "Rabiu Kwankwaso",
        partyCode: "NNPP",
        partyName: "New Nigeria Peoples Party",
        age: 67,
        state: "Kano State",
        quote: "People First, Always",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    },
];

function CandidatesSection() {
    return (
        <section className="space-y-4">

            {/* Section Header with Search & Filter */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-emerald-700" />
                        <h2 className="text-xl font-bold text-slate-900">Candidates</h2>
                    </div>
                    <p className="mt-0.5 text-xs text-slate-400">
                        Choose your preferred candidate. Each vote counts!
                    </p>
                </div>

                {/* Right Search Input & Filter Button */}
                <div className="flex items-center gap-2">
                    <div className="relative flex-1 sm:w-64">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search candidates..."
                            className="w-full rounded-xl border border-slate-200/80 bg-white py-2 pl-9 pr-4 text-xs shadow-sm outline-none placeholder:text-slate-400 focus:border-emerald-500"
                        />
                    </div>
                    <button
                        type="button"
                        aria-label="Filter"
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50"
                    >
                        <SlidersHorizontal className="h-4 w-4" />
                    </button>
                </div>
            </div>

            {/* 2x2 Grid of Candidates */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {candidatesData.map((candidate) => (
                    <CandidateCard key={candidate.id} candidate={candidate} />
                ))}
            </div>

        </section>
    );
}

export default CandidatesSection;