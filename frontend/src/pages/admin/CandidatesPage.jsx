import {
    Plus,
    Users,
    Trash2,
    Edit3,
    Search,
} from "lucide-react";

import AdminLayout from "../../layouts/AdminLayout";

function CandidatesPage() {
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
        <AdminLayout>
            <main className="space-y-6 px-5 py-6 md:px-8">

                {/* Header */}
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                            Administration
                        </p>

                        <h1 className="mt-1 text-2xl font-bold text-slate-900">
                            Candidate Management
                        </h1>

                        <p className="mt-1 text-sm text-slate-500">
                            Add and manage candidates registered for the election.
                        </p>
                    </div>

                    <button className="flex items-center justify-center gap-2 rounded-lg bg-[#008751] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#006b40]">
                        <Plus size={17} />
                        Add Candidate
                    </button>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

                    <div className="border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-slate-500">
                                    Total Candidates
                                </p>

                                <p className="mt-2 text-2xl font-bold text-slate-900">
                                    3
                                </p>
                            </div>

                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-[#008751]">
                                <Users size={19} />
                            </div>
                        </div>
                    </div>

                    <div className="border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-xs text-slate-500">
                            Election
                        </p>

                        <p className="mt-2 text-lg font-bold text-slate-900">
                            2027 General Election
                        </p>
                    </div>

                    <div className="border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-xs text-slate-500">
                            Status
                        </p>

                        <div className="mt-2 flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />

                            <span className="text-sm font-semibold text-emerald-700">
                                Election Active
                            </span>
                        </div>
                    </div>

                </div>

                {/* Candidate List */}
                <section className="border border-slate-200 bg-white p-6 shadow-sm">

                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

                        <div>
                            <h2 className="text-lg font-bold text-slate-900">
                                Registered Candidates
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Candidates currently registered on the system.
                            </p>
                        </div>

                        {/* Search */}
                        <div className="flex items-center gap-2 border border-slate-200 px-3 py-2">
                            <Search
                                size={16}
                                className="text-slate-400"
                            />

                            <input
                                type="text"
                                placeholder="Search candidates..."
                                className="w-48 bg-transparent text-sm outline-none placeholder:text-slate-400"
                            />
                        </div>

                    </div>

                    {/* Table */}
                    <div className="mt-6 overflow-x-auto">

                        <table className="w-full min-w-[700px] text-left">

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
                                        Actions
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

                                        <td className="py-4">
                                            <p className="text-sm font-semibold text-slate-800">
                                                {candidate.name}
                                            </p>

                                            <p className="mt-1 text-xs text-slate-400">
                                                Registered candidate
                                            </p>
                                        </td>

                                        <td className="py-4">
                                            <span className="bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                                                {candidate.party}
                                            </span>
                                        </td>

                                        <td className="py-4 text-sm text-slate-600">
                                            {candidate.age}
                                        </td>

                                        <td className="py-4">
                                            <div className="flex justify-end gap-2">

                                                <button
                                                    className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                                                    title="Edit candidate"
                                                >
                                                    <Edit3 size={15} />
                                                </button>

                                                <button
                                                    className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-600"
                                                    title="Remove candidate"
                                                >
                                                    <Trash2 size={15} />
                                                </button>

                                            </div>
                                        </td>

                                    </tr>
                                ))}

                            </tbody>

                        </table>

                    </div>

                </section>

                {/* Notice */}
                <section className="border border-amber-200 bg-amber-50 p-5">
                    <p className="text-sm font-semibold text-slate-800">
                        Prototype Mode
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-600">
                        Candidate information is currently displayed using mock data.
                        The Add, Edit, and Remove actions will be connected to the
                        blockchain smart contract during the integration stage.
                    </p>
                </section>

            </main>
        </AdminLayout>
    );
}

export default CandidatesPage;