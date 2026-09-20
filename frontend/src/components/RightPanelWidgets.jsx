import { Calendar, ClipboardList, CheckCircle2, Circle, ArrowRight, Shield } from "lucide-react";

export function ElectionStatusWidget() {
    return (
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    <Calendar className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-800">Election Status</h3>
            </div>

            <h2 className="mt-3 text-2xl font-extrabold text-slate-900">
                Not Started
            </h2>

            <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                The election has not started yet. You will be able to vote once it begins.
            </p>

            {/* Stepper */}
            <div className="mt-6 flex items-center justify-between text-center">
                {/* Step 1: Preparation */}
                <div className="flex flex-col items-center">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm">
                        <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="mt-1.5 text-[10px] font-bold text-slate-800">Preparation</span>
                    <span className="text-[9px] font-medium text-emerald-600">Completed</span>
                </div>

                <div className="h-[2px] flex-1 bg-slate-200 mx-1 mb-5" />

                {/* Step 2: Voting */}
                <div className="flex flex-col items-center">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-400">
                        <Circle className="h-3 w-3 fill-slate-300 stroke-none" />
                    </div>
                    <span className="mt-1.5 text-[10px] font-semibold text-slate-400">Voting</span>
                    <span className="text-[9px] text-slate-400">Not Started</span>
                </div>

                <div className="h-[2px] flex-1 bg-slate-200 mx-1 mb-5" />

                {/* Step 3: Results */}
                <div className="flex flex-col items-center">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-400">
                        <Circle className="h-3 w-3 fill-slate-300 stroke-none" />
                    </div>
                    <span className="mt-1.5 text-[10px] font-semibold text-slate-400">Results</span>
                    <span className="text-[9px] text-slate-400">Not Started</span>
                </div>
            </div>
        </div>
    );
}

export function HowToVoteWidget() {
    const steps = [
        {
            num: "1",
            title: "Connect your wallet",
            desc: "Make sure MetaMask is connected.",
        },
        {
            num: "2",
            title: "Go to the vote section",
            desc: "Select your preferred candidate.",
        },
        {
            num: "3",
            title: "Confirm your vote",
            desc: "Sign the transaction in MetaMask.",
        },
        {
            num: "4",
            title: "Done!",
            desc: "Your vote is now recorded on the blockchain.",
        },
    ];

    return (
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    <ClipboardList className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-800">How to Vote</h3>
            </div>

            <p className="mt-1 text-xs text-slate-400">
                Follow these simple steps to cast your vote
            </p>

            <div className="mt-5 space-y-4">
                {steps.map((step) => (
                    <div key={step.num} className="flex gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-800 text-[11px] font-bold text-white">
                            {step.num}
                        </div>
                        <div>
                            <h4 className="text-xs font-bold text-slate-800">
                                {step.title}
                            </h4>
                            <p className="text-[11px] text-slate-400 leading-tight">
                                {step.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function SecurityBannerWidget() {
    return (
        <div className="flex items-center justify-between rounded-2xl border border-emerald-200/70 bg-emerald-50/60 p-4 shadow-sm cursor-pointer hover:bg-emerald-50 transition">
            <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#008751] text-white">
                    <Shield className="h-4 w-4" />
                </div>
                <div>
                    <h4 className="text-xs font-bold text-slate-900">
                        Secure • Transparent • Fair
                    </h4>
                    <p className="text-[10px] text-slate-500 font-medium">
                        Powered by Blockchain Technology
                    </p>
                </div>
            </div>
            <ArrowRight className="h-4 w-4 text-slate-400" />
        </div>
    );
}

export function NationalMottoCard() {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#032018] to-[#043326] p-6 text-white shadow-xl">
            {/* Watermark Quote Icon */}
            <span className="text-4xl font-serif text-emerald-500/20 leading-none">“</span>

            <p className="mt-1 text-sm font-medium italic text-emerald-100 leading-relaxed">
                'The power to build a better Nigeria is in your hands.'
            </p>

            <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                — Federal Republic of Nigeria
            </p>

            {/* Subtle Green Flag Silhouette */}
            <div className="absolute -right-6 -bottom-6 h-28 w-28 rounded-full bg-emerald-600/10 blur-xl" />
        </div>
    );
}

export default function RightPanelWidgets() {
    return (
        <div className="space-y-4">
            <ElectionStatusWidget />
            <HowToVoteWidget />
            <SecurityBannerWidget />
            <NationalMottoCard />
        </div>
    );
}
