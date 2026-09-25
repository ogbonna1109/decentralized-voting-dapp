import { useState } from "react";
import {
    CheckCircle2,
    Circle,
    ShieldCheck,
    Vote,
    Wallet,
    ArrowRight,
    ArrowLeft,
} from "lucide-react";

function VotePage() {
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [step, setStep] = useState(1);
    const [voteSubmitted, setVoteSubmitted] = useState(false);

    const candidates = [
        {
            id: 1,
            name: "Candidate One",
            party: "Party A",
            age: 48,
            image:
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
        },
        {
            id: 2,
            name: "Candidate Two",
            party: "Party B",
            age: 52,
            image:
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
        },
        {
            id: 3,
            name: "Candidate Three",
            party: "Party C",
            age: 45,
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
        },
    ];

    const selected = candidates.find(
        (candidate) => candidate.id === selectedCandidate
    );

    function handleContinue() {
        if (!selectedCandidate) return;

        setStep(2);
    }

    function handleBack() {
        setStep(1);
    }

    function handleConfirmVote() {
        setVoteSubmitted(true);
        setStep(3);
    }

    return (
        <main className="min-h-screen px-5 py-6 md:px-8">
            {/* Header */}
            <div className="mx-auto max-w-5xl">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    2027 General Election
                </p>

                <h1 className="mt-1 text-2xl font-bold text-slate-900">
                    Cast Your Vote
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                    Select one candidate and confirm your choice.
                </p>
            </div>

            {/* Progress */}
            <div className="mx-auto mt-8 max-w-5xl">
                <div className="flex items-center">
                    {/* Step 1 */}
                    <div className="flex items-center gap-2">
                        <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${step >= 1
                                ? "bg-[#008751] text-white"
                                : "bg-slate-100 text-slate-400"
                                }`}
                        >
                            1
                        </div>

                        <span className="hidden text-sm font-medium text-slate-700 sm:block">
                            Select Candidate
                        </span>
                    </div>

                    <div className="mx-3 h-px flex-1 bg-slate-200" />

                    {/* Step 2 */}
                    <div className="flex items-center gap-2">
                        <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${step >= 2
                                ? "bg-[#008751] text-white"
                                : "bg-slate-100 text-slate-400"
                                }`}
                        >
                            2
                        </div>

                        <span className="hidden text-sm font-medium text-slate-700 sm:block">
                            Review & Confirm
                        </span>
                    </div>

                    <div className="mx-3 h-px flex-1 bg-slate-200" />

                    {/* Step 3 */}
                    <div className="flex items-center gap-2">
                        <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${step >= 3
                                ? "bg-[#008751] text-white"
                                : "bg-slate-100 text-slate-400"
                                }`}
                        >
                            3
                        </div>

                        <span className="hidden text-sm font-medium text-slate-700 sm:block">
                            Complete
                        </span>
                    </div>
                </div>
            </div>

            {/* STEP 1 */}
            {step === 1 && (
                <section className="mx-auto mt-8 max-w-5xl">
                    {/* Election Status */}
                    <div className="mb-6 flex items-start gap-3 border border-emerald-200 bg-emerald-50 p-4">
                        <ShieldCheck
                            size={19}
                            className="mt-0.5 shrink-0 text-emerald-700"
                        />

                        <div>
                            <p className="text-sm font-semibold text-emerald-900">
                                Election is active
                            </p>

                            <p className="mt-1 text-xs leading-5 text-emerald-800">
                                You are eligible to cast one vote. Your vote will be
                                recorded on the blockchain after confirmation.
                            </p>
                        </div>
                    </div>

                    {/* Candidates */}
                    <div className="border border-slate-200 bg-white p-6 shadow-sm">
                        <div>
                            <h2 className="text-lg font-bold text-slate-900">
                                Choose Your Candidate
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Select one candidate from the list below.
                            </p>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                            {candidates.map((candidate) => {
                                const isSelected =
                                    selectedCandidate === candidate.id;

                                return (
                                    <button
                                        key={candidate.id}
                                        onClick={() =>
                                            setSelectedCandidate(candidate.id)
                                        }
                                        className={`overflow-hidden border text-left transition ${isSelected
                                            ? "border-[#008751] ring-2 ring-[#008751]/20"
                                            : "border-slate-200 hover:border-slate-300"
                                            }`}
                                    >
                                        {/* Candidate Image */}
                                        <div className="relative h-52 overflow-hidden bg-slate-100">
                                            <img
                                                src={candidate.image}
                                                alt={candidate.name}
                                                className="h-full w-full object-cover"
                                            />

                                            <div className="absolute right-3 top-3">
                                                {isSelected ? (
                                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#008751] text-white">
                                                        <CheckCircle2 size={18} />
                                                    </div>
                                                ) : (
                                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-400">
                                                        <Circle size={18} />
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Candidate Info */}
                                        <div className="p-5">
                                            <p className="text-base font-bold text-slate-900">
                                                {candidate.name}
                                            </p>

                                            <p className="mt-1 text-sm font-medium text-emerald-700">
                                                {candidate.party}
                                            </p>

                                            <p className="mt-3 text-xs text-slate-500">
                                                Age: {candidate.age}
                                            </p>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Continue */}
                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={handleContinue}
                                disabled={!selectedCandidate}
                                className="flex items-center gap-2 rounded-lg bg-[#008751] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#006b40] disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
                            >
                                Continue
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </section>
            )}

            {/* STEP 2 */}
            {step === 2 && selected && (
                <section className="mx-auto mt-8 max-w-2xl">
                    <div className="border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="text-center">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-[#008751]">
                                <Vote size={22} />
                            </div>

                            <h2 className="mt-4 text-xl font-bold text-slate-900">
                                Review Your Vote
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Please confirm that this is the candidate you want
                                to vote for.
                            </p>
                        </div>

                        {/* Selected Candidate */}
                        <div className="mt-8 flex items-center gap-4 border border-emerald-200 bg-emerald-50 p-4">
                            <img
                                src={selected.image}
                                alt={selected.name}
                                className="h-16 w-16 object-cover"
                            />

                            <div>
                                <p className="text-base font-bold text-slate-900">
                                    {selected.name}
                                </p>

                                <p className="mt-1 text-sm font-medium text-emerald-700">
                                    {selected.party}
                                </p>

                                <p className="mt-1 text-xs text-slate-500">
                                    Age: {selected.age}
                                </p>
                            </div>

                            <CheckCircle2
                                size={22}
                                className="ml-auto text-[#008751]"
                            />
                        </div>

                        {/* Important Notice */}
                        <div className="mt-6 border border-amber-200 bg-amber-50 p-4">
                            <p className="text-sm font-semibold text-slate-800">
                                Before you confirm
                            </p>

                            <p className="mt-1 text-xs leading-5 text-slate-600">
                                Your vote can only be submitted once. Review your
                                selection carefully before confirming.
                            </p>
                        </div>

                        {/* Wallet */}
                        <div className="mt-4 flex items-center gap-3 border border-slate-200 p-4">
                            <Wallet size={18} className="text-slate-500" />

                            <div>
                                <p className="text-xs text-slate-400">
                                    Voting Wallet
                                </p>

                                <p className="mt-1 font-mono text-xs text-slate-700">
                                    0x71C7...9A42
                                </p>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                            <button
                                onClick={handleBack}
                                className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                            >
                                <ArrowLeft size={16} />
                                Change Selection
                            </button>

                            <button
                                onClick={handleConfirmVote}
                                className="flex items-center justify-center gap-2 rounded-lg bg-[#008751] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#006b40]"
                            >
                                Confirm Vote
                                <CheckCircle2 size={16} />
                            </button>
                        </div>
                    </div>
                </section>
            )}

            {/* STEP 3 */}
            {step === 3 && voteSubmitted && (
                <section className="mx-auto mt-12 max-w-xl">
                    <div className="border border-slate-200 bg-white p-8 text-center shadow-sm">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-[#008751]">
                            <CheckCircle2 size={32} />
                        </div>

                        <h2 className="mt-5 text-2xl font-bold text-slate-900">
                            Vote Submitted
                        </h2>

                        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                            Your vote has been successfully submitted. Your
                            transaction will be recorded on the blockchain once
                            confirmed.
                        </p>

                        <div className="mt-6 border border-slate-200 bg-slate-50 p-4 text-left">
                            <p className="text-xs text-slate-400">
                                Selected Candidate
                            </p>

                            <p className="mt-1 text-sm font-semibold text-slate-800">
                                {selected?.name}
                            </p>

                            <p className="mt-3 text-xs text-slate-400">
                                Status
                            </p>

                            <p className="mt-1 text-sm font-semibold text-emerald-700">
                                Submitted
                            </p>
                        </div>

                        <button
                            onClick={() => {
                                setSelectedCandidate(null);
                                setVoteSubmitted(false);
                                setStep(1);
                            }}
                            className="mt-6 rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                        >
                            Return to Voting
                        </button>
                    </div>
                </section>
            )}
        </main>
    );
}

export default VotePage;