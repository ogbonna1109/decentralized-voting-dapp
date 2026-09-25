import {
    Blocks,
    Copy,
    ExternalLink,
    ShieldCheck,
    Database,
    Network,
    FileCode2,
} from "lucide-react";

function SmartContractPage() {
    const contractAddress =
        "0x5FbDB2315678afecb367f032d93F642f64180aa3";

    const shortAddress = `${contractAddress.slice(
        0,
        10
    )}...${contractAddress.slice(-8)}`;

    return (
        <main className="space-y-6 px-5 py-6 md:px-8">
            {/* Header */}
            <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    Administration
                </p>

                <h1 className="mt-1 text-2xl font-bold text-slate-900">
                    Smart Contract
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                    View the blockchain contract powering the voting system.
                </p>
            </div>

            {/* Contract Status */}
            <section className="border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                    <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-[#008751]">
                            <Blocks size={23} />
                        </div>

                        <div>
                            <h2 className="text-lg font-bold text-slate-900">
                                Voting Smart Contract
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Blockchain contract responsible for storing and processing
                                election data.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 bg-emerald-50 px-3 py-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />

                        <span className="text-xs font-semibold text-emerald-700">
                            Connected
                        </span>
                    </div>
                </div>
            </section>

            {/* Contract Information */}
            <section className="border border-slate-200 bg-white p-6 shadow-sm">
                <div>
                    <h2 className="text-lg font-bold text-slate-900">
                        Contract Information
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Basic information about the deployed voting contract.
                    </p>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* Contract Address */}
                    <div className="border border-slate-200 p-5">
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                                <Database size={17} />
                            </div>

                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                Contract Address
                            </p>
                        </div>

                        <div className="mt-4 flex items-center justify-between gap-3">
                            <p className="break-all font-mono text-sm text-slate-700">
                                {shortAddress}
                            </p>

                            <button
                                title="Copy contract address"
                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                            >
                                <Copy size={15} />
                            </button>
                        </div>
                    </div>

                    {/* Network */}
                    <div className="border border-slate-200 p-5">
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                                <Network size={17} />
                            </div>

                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                Network
                            </p>
                        </div>

                        <p className="mt-4 text-sm font-semibold text-slate-800">
                            Hardhat Local Network
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                            Local development blockchain
                        </p>
                    </div>

                    {/* Contract Name */}
                    <div className="border border-slate-200 p-5">
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                                <FileCode2 size={17} />
                            </div>

                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                Contract
                            </p>
                        </div>

                        <p className="mt-4 font-mono text-sm font-semibold text-slate-800">
                            voting
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                            Solidity smart contract
                        </p>
                    </div>

                    {/* Security */}
                    <div className="border border-slate-200 p-5">
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                                <ShieldCheck size={17} />
                            </div>

                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                Access Control
                            </p>
                        </div>

                        <p className="mt-4 text-sm font-semibold text-slate-800">
                            Owner Protected
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                            Administrative functions use onlyOwner
                        </p>
                    </div>
                </div>
            </section>

            {/* Contract Functions */}
            <section className="border border-slate-200 bg-white p-6 shadow-sm">
                <div>
                    <h2 className="text-lg font-bold text-slate-900">
                        Contract Functions
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Main functions currently available in the voting contract.
                    </p>
                </div>

                <div className="mt-6 overflow-x-auto">
                    <table className="w-full min-w-[650px] text-left">
                        <thead>
                            <tr className="border-b border-slate-100">
                                <th className="pb-3 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                                    Function
                                </th>

                                <th className="pb-3 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                                    Type
                                </th>

                                <th className="pb-3 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                                    Access
                                </th>

                                <th className="pb-3 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                                    Purpose
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-b border-slate-100">
                                <td className="py-4 font-mono text-sm font-medium text-slate-800">
                                    addCandidate()
                                </td>

                                <td className="py-4 text-sm text-slate-500">
                                    Write
                                </td>

                                <td className="py-4">
                                    <span className="bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-700">
                                        Owner
                                    </span>
                                </td>

                                <td className="py-4 text-sm text-slate-500">
                                    Register a candidate
                                </td>
                            </tr>

                            <tr className="border-b border-slate-100">
                                <td className="py-4 font-mono text-sm font-medium text-slate-800">
                                    vote()
                                </td>

                                <td className="py-4 text-sm text-slate-500">
                                    Write
                                </td>

                                <td className="py-4">
                                    <span className="bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
                                        Voter
                                    </span>
                                </td>

                                <td className="py-4 text-sm text-slate-500">
                                    Cast a vote
                                </td>
                            </tr>

                            <tr className="border-b border-slate-100">
                                <td className="py-4 font-mono text-sm font-medium text-slate-800">
                                    startElection()
                                </td>

                                <td className="py-4 text-sm text-slate-500">
                                    Write
                                </td>

                                <td className="py-4">
                                    <span className="bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-700">
                                        Owner
                                    </span>
                                </td>

                                <td className="py-4 text-sm text-slate-500">
                                    Open voting
                                </td>
                            </tr>

                            <tr className="border-b border-slate-100">
                                <td className="py-4 font-mono text-sm font-medium text-slate-800">
                                    endElection()
                                </td>

                                <td className="py-4 text-sm text-slate-500">
                                    Write
                                </td>

                                <td className="py-4">
                                    <span className="bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-700">
                                        Owner
                                    </span>
                                </td>

                                <td className="py-4 text-sm text-slate-500">
                                    Close voting
                                </td>
                            </tr>

                            <tr>
                                <td className="py-4 font-mono text-sm font-medium text-slate-800">
                                    getWinner()
                                </td>

                                <td className="py-4 text-sm text-slate-500">
                                    Read
                                </td>

                                <td className="py-4">
                                    <span className="bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                                        Public
                                    </span>
                                </td>

                                <td className="py-4 text-sm text-slate-500">
                                    Retrieve final winner
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Explorer */}
            <section className="flex flex-col justify-between gap-4 border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center">
                <div>
                    <h2 className="text-sm font-bold text-slate-900">
                        View Contract
                    </h2>

                    <p className="mt-1 text-xs text-slate-500">
                        Open the deployed contract address in a blockchain explorer.
                    </p>
                </div>

                <button
                    disabled
                    className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-400"
                >
                    <ExternalLink size={15} />
                    View on Explorer
                </button>
            </section>

            {/* Prototype Notice */}
            <section className="border border-amber-200 bg-amber-50 p-5">
                <p className="text-sm font-semibold text-slate-800">
                    Prototype Mode
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-600">
                    Contract information is currently displayed as a static
                    interface. During the integration stage, the address,
                    network status, and contract data will be read directly
                    from the blockchain.
                </p>
            </section>
        </main>
    );
}

export default SmartContractPage;