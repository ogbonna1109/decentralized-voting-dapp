import {
    Wallet,
    Search,
    Vote,
    CheckCircle2,
} from "lucide-react";

function HowVotingWorks() {
    const steps = [
        {
            number: "01",
            title: "Connect Wallet",
            description: "Connect your supported wallet to the voting application.",
            icon: Wallet,
        },
        {
            number: "02",
            title: "Review Candidates",
            description: "View the available candidates and their information.",
            icon: Search,
        },
        {
            number: "03",
            title: "Cast Your Vote",
            description: "Select a candidate and submit your vote.",
            icon: Vote,
        },
        {
            number: "04",
            title: "Confirm",
            description: "Confirm the blockchain transaction in your wallet.",
            icon: CheckCircle2,
        },
    ];

    return (
        <section className="border border-slate-200 bg-white p-6 shadow-sm">
            <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    Getting Started
                </p>

                <h2 className="mt-2 text-xl font-bold text-slate-900">
                    How Voting Works
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Follow these steps to participate in the demo election.
                </p>
            </div>

            <div className="mt-6 space-y-5">
                {steps.map((step) => {
                    const Icon = step.icon;

                    return (
                        <div
                            key={step.number}
                            className="flex gap-4"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#063B2F] text-xs font-bold text-white">
                                {step.number}
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <Icon size={16} className="text-[#008751]" />

                                    <h3 className="text-sm font-semibold text-slate-800">
                                        {step.title}
                                    </h3>
                                </div>

                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default HowVotingWorks;