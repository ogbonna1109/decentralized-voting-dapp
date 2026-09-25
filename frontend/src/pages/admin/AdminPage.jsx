import {
    ShieldCheck,
    Users,
    Plus,
    Play,
    Square,
    Blocks,
    Settings,
    Trash2,
} from "lucide-react";

function AdminPage() {
    const candidates = [
        {
            id: 1,
            name: "Candidate One",
            party: "Party A",
            age: 48,
        },
        {
            id: 2,
            name: "Candidate Two",
            party: "Party B",
            age: 52,
        },
        {
            id: 3,
            name: "Candidate Three",
            party: "Party C",
            age: 45,
        },
    ];

    return (
        <main className="space-y-6 px-5 py-6 md:px-8">


                    {/* Page Header */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                            Administration
                        </p>

                        <h1 className="mt-1 text-2xl font-bold text-slate-900">
                            Election Management
                        </h1>

                        <p className="mt-1 text-sm text-slate-500">
                            Manage candidates and control the election state.
                        </p>
                    </div>

                    {/* Admin Notice */}
                    <section className="border border-amber-200 bg-amber-50 p-5">
                        <div className="flex gap-3">
                            <ShieldCheck
                                size={20}
                                className="mt-0.5 shrink-0 text-amber-600"
                            />

                            <div>
                                <h2 className="text-sm font-semibold text-slate-800">
                                    Administrator Panel
                                </h2>

                                <p className="mt-1 text-xs leading-5 text-slate-600">
                                    This area is restricted to the election administrator.
                                    Actions performed here will eventually interact directly
                                    with the voting smart contract.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Election Overview */}
                    <section className="border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                            <div>
                                <div className="flex items-center gap-2">
                                    <Settings size={18} className="text-[#008751]" />

                                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                                        Election Control
                                    </p>
                                </div>

                                <h2 className="mt-2 text-xl font-bold text-slate-900">
                                    2027 General Election
                                </h2>

                                <p className="mt-1 text-sm text-slate-500">
                                    Control the current state of the election.
                                </p>
                            </div>

                            <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                Election Active
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

                            <div className="bg-slate-50 p-4">
                                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                                    Candidates
                                </p>

                                <p className="mt-2 text-2xl font-bold text-slate-900">
                                    {candidates.length}
                                </p>

                                <p className="mt-1 text-xs text-slate-500">
                                    Registered candidates
                                </p>
                            </div>

                            <div className="bg-slate-50 p-4">
                                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                                    Election State
                                </p>

                                <p className="mt-2 text-lg font-bold text-emerald-700">
                                    Active
                                </p>

                                <p className="mt-1 text-xs text-slate-500">
                                    Voting is currently open
                                </p>
                            </div>

                            <div className="bg-slate-50 p-4">
                                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                                    Administrator
                                </p>

                                <p className="mt-2 truncate text-sm font-bold text-slate-800">
                                    0x5FbDB...80aa3
                                </p>

                                <p className="mt-1 text-xs text-slate-500">
                                    Contract owner
                                </p>
                            </div>

                        </div>

                        {/* Election Controls */}
                        <div className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row">
                            <button className="flex items-center justify-center gap-2 rounded-lg bg-[#008751] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#006b40]">
                                <Play size={16} />
                                Start Election
                            </button>

                            <button className="flex items-center justify-center gap-2 rounded-lg border border-red-200 bg-white px-5 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50">
                                <Square size={16} />
                                End Election
                            </button>
                        </div>
                    </section>

                    {/* Add Candidate */}
                    <section className="border border-slate-200 bg-white p-6 shadow-sm">
                        <div>
                            <div className="flex items-center gap-2">
                                <Plus size={18} className="text-[#008751]" />

                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                                    Candidate Management
                                </p>
                            </div>

                            <h2 className="mt-2 text-xl font-bold text-slate-900">
                                Add Candidate
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Register a new candidate for the election.
                            </p>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">

                            <div>
                                <label className="text-xs font-semibold text-slate-600">
                                    Candidate Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter candidate name"
                                    className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#008751] focus:ring-1 focus:ring-[#008751]"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-slate-600">
                                    Political Party
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter party name"
                                    className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#008751] focus:ring-1 focus:ring-[#008751]"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-slate-600">
                                    Age
                                </label>

                                <input
                                    type="number"
                                    placeholder="Enter age"
                                    className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#008751] focus:ring-1 focus:ring-[#008751]"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-slate-600">
                                    Image URL
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter candidate image URL"
                                    className="mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#008751] focus:ring-1 focus:ring-[#008751]"
                                />
                            </div>

                        </div>

                        <div className="mt-5">
                            <button className="flex items-center gap-2 rounded-lg bg-[#063B2F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#052f26]">
                                <Plus size={16} />
                                Add Candidate
                            </button>
                        </div>
                    </section>

                    {/* Candidate List */}
                    <section className="border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                                    Registered Candidates
                                </p>

                                <h2 className="mt-2 text-xl font-bold text-slate-900">
                                    Candidate List
                                </h2>
                            </div>

                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-[#008751]">
                                <Users size={18} />
                            </div>
                        </div>

                        <div className="mt-6 overflow-x-auto">
                            <table className="w-full min-w-[600px] text-left">
                                <thead>
                                    <tr className="border-b border-slate-100">
                                        <th className="pb-3 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                                            ID
                                        </th>

                                        <th className="pb-3 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                                            Candidate
                                        </th>

                                        <th className="pb-3 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                                            Party
                                        </th>

                                        <th className="pb-3 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                                            Age
                                        </th>

                                        <th className="pb-3 text-right text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {candidates.map((candidate) => (
                                        <tr
                                            key={candidate.id}
                                            className="border-b border-slate-100 last:border-0"
                                        >
                                            <td className="py-4 text-sm font-medium text-slate-500">
                                                #{candidate.id}
                                            </td>

                                            <td className="py-4 text-sm font-semibold text-slate-800">
                                                {candidate.name}
                                            </td>

                                            <td className="py-4 text-sm text-slate-600">
                                                {candidate.party}
                                            </td>

                                            <td className="py-4 text-sm text-slate-600">
                                                {candidate.age}
                                            </td>

                                            <td className="py-4 text-right">
                                                <button className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-600">
                                                    <Trash2 size={15} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Blockchain Contract */}
                    <section className="border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-[#008751]">
                                <Blocks size={19} />
                            </div>

                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                                    Smart Contract
                                </p>

                                <h2 className="mt-2 text-lg font-bold text-slate-900">
                                    Contract Information
                                </h2>

                                <p className="mt-1 text-sm text-slate-500">
                                    Blockchain contract currently used by this prototype.
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 bg-slate-50 p-4">
                            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                                Contract Address
                            </p>

                            <p className="mt-2 break-all font-mono text-sm font-medium text-slate-700">
                                0x5FbDB2315678afecb367f032d93F642f64180aa3
                            </p>
                        </div>
                    </section>

                </main>
    );
}

export default AdminPage;