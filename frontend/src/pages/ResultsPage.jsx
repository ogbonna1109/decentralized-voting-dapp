
import Header from "../components/Header";
import {
    Activity,
    BarChart3,
    CheckCircle2,
    Clock3,
    LockKeyhole,
    Trophy,
    Users,
    Vote,
} from "lucide-react";

const candidates = [
    {
        id: 1,
        name: "Candidate One",
        party: "Party A",
        votes: 428,
    },
    {
        id: 2,
        name: "Candidate Two",
        party: "Party B",
        votes: 391,
    },
    {
        id: 3,
        name: "Candidate Three",
        party: "Party C",
        votes: 465,
    },
];

function ResultsPage() {
    const totalVotes = candidates.reduce(
        (total, candidate) => total + candidate.votes,
        0
    );

    const highestVotes = Math.max(
        ...candidates.map((candidate) => candidate.votes)
    );

    return (
        <>
            <Header />

            <main className="space-y-8 px-5 py-6 md:px-8">



                    {/* Page heading */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                            Election Results
                        </p>

                        <h1 className="mt-2 text-3xl font-bold text-slate-900">
                            Results Dashboard
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                            Monitor the votes recorded during the current election.
                            Final results will only become available after voting ends.
                        </p>
                    </div>

                    {/* Election status */}
                    <section className="flex flex-col justify-between gap-5 border border-emerald-100 bg-white p-6 shadow-sm lg:flex-row lg:items-center">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-[#008751]">
                                <Activity size={21} />
                            </div>

                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Election Status
                                </p>

                                <div className="mt-1 flex items-center gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

                                    <h2 className="text-lg font-bold text-slate-900">
                                        Voting is Active
                                    </h2>
                                </div>

                                <p className="mt-1 text-xs text-slate-500">
                                    Results are currently being recorded.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2.5 text-xs font-semibold text-emerald-700">
                            <Clock3 size={15} />
                            Final results locked
                        </div>
                    </section>

                    {/* Statistics */}
                    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                        <div className="border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium text-slate-500">
                                        Total Votes
                                    </p>

                                    <p className="mt-3 text-2xl font-bold text-slate-900">
                                        {totalVotes.toLocaleString()}
                                    </p>
                                </div>

                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-[#008751]">
                                    <Vote size={18} />
                                </div>
                            </div>

                            <p className="mt-2 text-xs text-slate-400">
                                Votes recorded so far
                            </p>
                        </div>

                        <div className="border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium text-slate-500">
                                        Candidates
                                    </p>

                                    <p className="mt-3 text-2xl font-bold text-slate-900">
                                        {candidates.length}
                                    </p>
                                </div>

                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-[#008751]">
                                    <Users size={18} />
                                </div>
                            </div>

                            <p className="mt-2 text-xs text-slate-400">
                                Participating candidates
                            </p>
                        </div>

                        <div className="border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium text-slate-500">
                                        Leading Votes
                                    </p>

                                    <p className="mt-3 text-2xl font-bold text-slate-900">
                                        {highestVotes.toLocaleString()}
                                    </p>
                                </div>

                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                                    <Trophy size={18} />
                                </div>
                            </div>

                            <p className="mt-2 text-xs text-slate-400">
                                Current highest vote count
                            </p>
                        </div>

                        <div className="border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium text-slate-500">
                                        Status
                                    </p>

                                    <p className="mt-3 text-2xl font-bold text-emerald-600">
                                        Active
                                    </p>
                                </div>

                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-[#008751]">
                                    <CheckCircle2 size={18} />
                                </div>
                            </div>

                            <p className="mt-2 text-xs text-slate-400">
                                Election currently accepting votes
                            </p>
                        </div>

                    </section>

                    {/* Candidate vote breakdown */}
                    <section className="border border-slate-200 bg-white p-6 shadow-sm">

                        <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-[#008751]">
                                <BarChart3 size={19} />
                            </div>

                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                                    Vote Breakdown
                                </p>

                                <h2 className="mt-1 text-xl font-bold text-slate-900">
                                    Candidate Vote Counts
                                </h2>

                                <p className="mt-1 text-sm text-slate-500">
                                    Current vote distribution across participating candidates.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 space-y-7">

                            {candidates.map((candidate) => {
                                const percentage =
                                    totalVotes === 0
                                        ? 0
                                        : (candidate.votes / totalVotes) * 100;

                                const isLeading =
                                    candidate.votes === highestVotes;

                                return (
                                    <div key={candidate.id}>

                                        <div className="flex items-center justify-between gap-4">

                                            <div className="min-w-0">
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <h3 className="text-sm font-semibold text-slate-900">
                                                        {candidate.name}
                                                    </h3>

                                                    <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-500">
                                                        {candidate.party}
                                                    </span>

                                                    {isLeading && (
                                                        <span className="rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">
                                                            Current Leader
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="shrink-0 text-right">
                                                <p className="text-sm font-bold text-slate-900">
                                                    {candidate.votes.toLocaleString()}
                                                </p>

                                                <p className="text-xs text-slate-400">
                                                    {percentage.toFixed(1)}%
                                                </p>
                                            </div>

                                        </div>

                                        {/* Progress bar */}
                                        <div className="mt-3 h-2 overflow-hidden bg-slate-100">
                                            <div
                                                className="h-full rounded-r-full bg-[#008751] transition-all"
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

                    {/* Winner locked section */}
                    <section className="relative overflow-hidden border border-slate-200 bg-white p-6 shadow-sm">

                        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-emerald-50 blur-3xl" />

                        <div className="relative">

                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                                        <LockKeyhole size={21} />
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                                            Final Winner
                                        </p>

                                        <h2 className="mt-1 text-xl font-bold text-slate-900">
                                            Winner Announcement Locked
                                        </h2>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 bg-slate-100 px-4 py-2.5 text-xs font-semibold text-slate-500">
                                    <LockKeyhole size={14} />
                                    Voting Still Active
                                </div>

                            </div>

                            <div className="mt-6 border border-dashed border-slate-200 bg-slate-50 p-6 text-center">

                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm">
                                    <Trophy size={23} />
                                </div>

                                <h3 className="mt-4 text-lg font-bold text-slate-700">
                                    Winner Not Yet Available
                                </h3>

                                <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
                                    The final winner will be determined after the election is
                                    closed. Current vote counts should not be treated as the
                                    final election result.
                                </p>

                                <div className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-slate-400">
                                    <LockKeyhole size={14} />
                                    Results will unlock when voting ends
                                </div>

                            </div>

                        </div>
                    </section>

                </main>
        </>
    );
}

export default ResultsPage;