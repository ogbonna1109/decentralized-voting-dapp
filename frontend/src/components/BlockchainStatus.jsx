import {
    Blocks,
    CircleCheck,
    ExternalLink,
    ShieldCheck,
} from "lucide-react";

function BlockchainStatus() {
    return (
        <section className="border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">

                <div>
                    <div className="flex items-center gap-2">
                        <Blocks size={18} className="text-[#008751]" />

                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                            Blockchain Network
                        </p>
                    </div>

                    <h2 className="mt-2 text-xl font-bold text-slate-900">
                        Network Status
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Blockchain infrastructure used by this demo.
                    </p>
                </div>

                <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
                    <CircleCheck size={15} />
                    Network Online
                </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">

                <div className="bg-slate-50 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                        Network
                    </p>

                    <p className="mt-2 text-sm font-semibold text-slate-800">
                        Hardhat Localhost
                    </p>
                </div>

                <div className="bg-slate-50 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                        Contract
                    </p>

                    <p className="mt-2 truncate text-sm font-semibold text-slate-800">
                        0x5FbDB...80aa3
                    </p>
                </div>

                <div className="bg-slate-50 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                        Security
                    </p>

                    <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
                        <ShieldCheck size={16} className="text-[#008751]" />
                        On-chain
                    </div>
                </div>

            </div>

            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <p className="text-xs text-slate-400">
                    Contract interactions are recorded on the blockchain.
                </p>

                <button className="flex items-center gap-1 text-xs font-semibold text-[#008751] hover:text-[#006b40]">
                    View Contract
                    <ExternalLink size={13} />
                </button>
            </div>
        </section>
    );
}

export default BlockchainStatus;