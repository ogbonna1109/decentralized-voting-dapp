import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { CheckCircle2, ShieldCheck, Vote, Info } from "lucide-react";

const candidates = [
    {
        id: 1,
        name: "Candidate One",
        age: 48,
        party: "Party A",
        image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 2,
        name: "Candidate Two",
        age: 52,
        party: "Party B",
        image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 3,
        name: "Candidate Three",
        age: 45,
        party: "Party C",
        image:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    },
];

function VotePage() {
    return (
        <div className="min-h-screen bg-[#F5F8F7]">
            <Sidebar />

            <div className="lg:ml-64">
                <Header />

                <main className="px-5 py-6 md:px-8">
                    {/* Page heading */}
                    <div className="mb-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                            Cast Your Vote
                        </p>

                        <h1 className="mt-2 text-3xl font-bold text-slate-900">
                            Presidential Election
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                            Review the candidates below and select the candidate you wish to
                            vote for.
                        </p>
                    </div>

                    {/* Election status */}
                    <div className="mb-8 flex flex-col justify-between gap-4 border border-emerald-100 bg-emerald-50 p-5 sm:flex-row sm:items-center">
                        <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[#008751] shadow-sm">
                                <Vote size={20} />
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-slate-900">
                                    Voting is currently open
                                </p>

                                <p className="mt-1 text-xs text-slate-500">
                                    2027 General Election • Demo Environment
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                            <CheckCircle2 size={16} />
                            Election Active
                        </div>
                    </div>

                    {/* Wallet warning */}
                    <div className="mb-8 flex gap-4 border border-amber-200 bg-amber-50 p-5">
                        <Info className="mt-0.5 shrink-0 text-amber-600" size={19} />

                        <div>
                            <p className="text-sm font-semibold text-amber-900">
                                Wallet not connected
                            </p>

                            <p className="mt-1 text-xs leading-5 text-amber-800">
                                Connect your wallet before submitting a vote. This demo does
                                not currently send any blockchain transaction.
                            </p>
                        </div>
                    </div>

                    {/* Candidate selection */}
                    <section>
                        <div className="mb-5">
                            <h2 className="text-xl font-bold text-slate-900">
                                Select a Candidate
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                You can select one candidate in this election.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {candidates.map((candidate) => (
                                <div
                                    key={candidate.id}
                                    className="overflow-hidden border border-slate-200 bg-white shadow-sm transition hover:border-emerald-300 hover:shadow-md"
                                >
                                    {/* Image */}
                                    <div className="relative h-56 bg-slate-100">
                                        <img
                                            src={candidate.image}
                                            alt={candidate.name}
                                            className="h-full w-full object-cover"
                                        />

                                        <div className="absolute left-4 top-4 rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm">
                                            {candidate.party}
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="p-5">
                                        <p className="text-xs font-medium uppercase tracking-wide text-emerald-700">
                                            Candidate {candidate.id}
                                        </p>

                                        <h3 className="mt-1 text-xl font-bold text-slate-900">
                                            {candidate.name}
                                        </h3>

                                        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-wide text-slate-400">
                                                    Age
                                                </p>

                                                <p className="mt-1 text-sm font-semibold text-slate-700">
                                                    {candidate.age} years
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-[10px] uppercase tracking-wide text-slate-400">
                                                    Party
                                                </p>

                                                <p className="mt-1 text-sm font-semibold text-slate-700">
                                                    {candidate.party}
                                                </p>
                                            </div>
                                        </div>

                                        <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#008751] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#006b40]">
                                            <Vote size={17} />
                                            Select Candidate
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Security information */}
                    <div className="mt-8 flex gap-4 border border-slate-200 bg-white p-5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-[#008751]">
                            <ShieldCheck size={19} />
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-slate-900">
                                Blockchain-secured voting
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-slate-500">
                                In the completed application, your vote will be submitted as a
                                blockchain transaction and recorded by the voting smart
                                contract.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default VotePage;
