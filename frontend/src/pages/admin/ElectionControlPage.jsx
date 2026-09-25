import {
    Play,
    Square,
    Users,
    Clock3,
    ShieldCheck,
    AlertCircle,
} from "lucide-react";

function ElectionControlPage() {
    const electionActive = true;

    return (
        <main className="space-y-6 px-5 py-6 md:px-8">
            {/* Page Header */}
            <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    Administration
                </p>

                <h1 className="mt-1 text-2xl font-bold text-slate-900">
                    Election Control
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                    Manage the election lifecycle and monitor its current status.
                </p>
            </div>

            {/* Election Overview */}
            <section className="border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                    <div>
                        <div className="flex items-center gap-3">
                            <h2 className="text-lg font-bold text-slate-900">
                                2027 Nigerian Presidential General Election
                            </h2>

                            <span className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                Active
                            </span>
                        </div>

                        <p className="mt-2 text-sm text-slate-500">
                            Election is currently open and voters can cast their votes.
                        </p>
                    </div>

                    <button className="flex items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700">
                        <Square size={16} />
                        End Election
                    </button>
                </div>
            </section>

            {/* Statistics */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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
                            <Clock3 size={19} />
                        </div>
                    </div>
                </div>

                <div className="border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs text-slate-500">
                                Registered Candidates
                            </p>

                            <p className="mt-2 text-2xl font-bold text-slate-900">
                                3
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
                                Election Access
                            </p>

                            <p className="mt-2 text-lg font-bold text-slate-900">
                                Public
                            </p>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                            <ShieldCheck size={19} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Election Controls */}
            <section className="border border-slate-200 bg-white p-6 shadow-sm">
                <div>
                    <h2 className="text-lg font-bold text-slate-900">
                        Election Controls
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Only the election administrator can control the election state.
                    </p>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* Start Election */}
                    <div className="border border-slate-200 p-5">
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                                <Play size={18} />
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-slate-900">
                                    Start Election
                                </h3>

                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                    Opens the election and allows registered voters to
                                    cast their votes.
                                </p>

                                <button
                                    disabled={electionActive}
                                    className="mt-4 rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-500 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    Start Election
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* End Election */}
                    <div className="border border-slate-200 p-5">
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                                <Square size={18} />
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-slate-900">
                                    End Election
                                </h3>

                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                    Closes voting and makes the final election results
                                    available.
                                </p>

                                <button className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-red-700">
                                    End Election
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Warning */}
            <section className="flex gap-3 border border-amber-200 bg-amber-50 p-5">
                <AlertCircle
                    size={19}
                    className="mt-0.5 shrink-0 text-amber-600"
                />

                <div>
                    <p className="text-sm font-semibold text-slate-800">
                        Administrator Notice
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-600">
                        Ending an election is an important blockchain transaction.
                        Once the transaction is confirmed, voters will no longer
                        be able to cast votes while the election is inactive.
                    </p>
                </div>
            </section>

            {/* Prototype Notice */}
            <section className="border border-amber-200 bg-amber-50 p-5">
                <p className="text-sm font-semibold text-slate-800">
                    Prototype Mode
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-600">
                    Election controls are currently UI-only. The Start Election
                    and End Election buttons will be connected to the Solidity
                    smart contract during the blockchain integration stage.
                </p>
            </section>
        </main>
    );
}

export default ElectionControlPage;