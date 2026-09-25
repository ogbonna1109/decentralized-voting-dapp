import {
    BarChart3,
    Trophy,
    Users,
    Vote,
    Lock,
} from "lucide-react";

function AdminResultsPage() {
    const electionActive = true;

    const candidates = [
        {
            id: 1,
            name: "Candidate One",
            party: "Party A",
            votes: 1240,
        },
        {
            id: 2,
            name: "Candidate Two",
            party: "Party B",
            votes: 980,
        },
        {
            id: 3,
            name: "Candidate Three",
            party: "Party C",
            votes: 760,
        },
    ];

    const totalVotes = candidates.reduce(
        (total, candidate) => total + candidate.votes,
        0
    );

    return (
        <main className="space-y-6 px-5 py-6 md:px-8">
            {/* Header */}
            <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    Administration
                </p>

                <h1 className="mt-1 text-2xl font-bold text-slate-900">
                    Election Results
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                    Monitor voting statistics and election results.
                </p>
            </div>

            {/* Election Status */}
            <section className="border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <h2 className="text-lg font-bold text-slate-900">
                            2027 Nigerian Presidential General Election
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Current voting statistics from the election.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 bg-emerald-50 px-3 py-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />

                        <span className="text-xs font-semibold text-emerald-700">
                            Election Active
                        </span>
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs text-slate-500">
                                Total Votes
                            </p>

                            <p className="mt-2 text-2xl font-bold text-slate-900">
                                {totalVotes.toLocaleString()}
                            </p>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-[#008751]">
                            <Vote size={19} />
                        </div>
                    </div>
                </div>

                <div className="border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs text-slate-500">
                                Candidates
                            </p>

                            <p className="mt-2 text-2xl font-bold text-slate-900">
                                {candidates.length}
                            </p>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                            <Users size={19} />
                        </div>
                    </div>
                </div>

                <div className="border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs text-slate-500">
                                Election Status
                            </p>

                            <p className="mt-2 text-lg font-bold text-emerald-700">
                                Active
                            </p>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                            <BarChart3 size={19} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Candidate Results */}
            <section className="border border-slate-200 bg-white p-6 shadow-sm">
                <div>
                    <h2 className="text-lg font-bold text-slate-900">
                        Candidate Results
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Current vote distribution among registered candidates.
                    </p>
                </div>

                <div className="mt-6 space-y-5">
                    {candidates.map((candidate, index) => {
                        const percentage =
                            totalVotes === 0
                                ? 0
                                : (candidate.votes / totalVotes) * 100;

                        return (
                            <div key={candidate.id}>
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600">
                                            {index + 1}
                                        </div>

                                        <div>
                                            <p className="text-sm font-semibold text-slate-800">
                                                {candidate.name}
                                            </p>

                                            <p className="text-xs text-slate-400">
                                                {candidate.party}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-sm font-bold text-slate-800">
                                            {candidate.votes.toLocaleString()}
                                        </p>

                                        <p className="text-xs text-slate-400">
                                            {percentage.toFixed(1)}%
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-3 h-2 w-full bg-slate-100">
                                    <div
                                        className="h-2 bg-[#008751]"
                                        style={{
                                            width: `${percentage}%`,
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Winner */}
            <section className="border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                        {electionActive ? (
                            <Lock size={20} />
                        ) : (
                            <Trophy size={20} />
                        )}
                    </div>

                    <div>
                        <h2 className="text-lg font-bold text-slate-900">
                            {electionActive
                                ? "Winner Announcement Locked"
                                : "Election Winner"}
                        </h2>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                            {electionActive
                                ? "The final winner will be calculated and displayed after the administrator ends the election."
                                : "The election has ended and the final winner is now available."}
                        </p>
                    </div>
                </div>
            </section>

            {/* Prototype Notice */}
            <section className="border border-amber-200 bg-amber-50 p-5">
                <p className="text-sm font-semibold text-slate-800">
                    Prototype Mode
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-600">
                    Results are currently displayed using mock data. During
                    blockchain integration, these figures will be retrieved
                    directly from the voting smart contract.
                </p>
            </section>
        </main>
    );
}

export default AdminResultsPage;