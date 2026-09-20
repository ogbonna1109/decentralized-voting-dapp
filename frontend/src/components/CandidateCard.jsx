import { User, MapPin, Vote, ArrowRight } from "lucide-react";

function CandidateCard({ candidate }) {
    const partyBadgeColors = {
        APC: "bg-emerald-600 text-white",
        PDP: "bg-blue-600 text-white",
        LP: "bg-red-600 text-white",
        NNPP: "bg-purple-600 text-white",
    };

    return (
        <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:shadow-md">

            {/* Top row: Avatar & Main info */}
            <div className="flex gap-4">
                {/* Candidate Photo */}
                <img
                    src={candidate.image}
                    alt={candidate.name}
                    className="h-28 w-24 shrink-0 rounded-xl object-cover shadow-inner"
                />

                {/* Candidate Details */}
                <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold text-slate-900 truncate">
                        {candidate.name}
                    </h3>

                    {/* Party Badge + Full Name */}
                    <div className="mt-1.5 flex flex-wrap items-center gap-2">
                        <span className={`rounded-md px-2.5 py-0.5 text-xs font-extrabold uppercase tracking-wide ${partyBadgeColors[candidate.partyCode] || "bg-slate-700 text-white"}`}>
                            {candidate.partyCode}
                        </span>
                        <span className="text-[11px] font-medium text-slate-400 truncate">
                            {candidate.partyName}
                        </span>
                    </div>

                    {/* Age & Location */}
                    <div className="mt-3 space-y-1 text-xs text-slate-500">
                        <div className="flex items-center gap-1.5">
                            <User className="h-3.5 w-3.5 text-slate-400" />
                            <span>Age: {candidate.age}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-slate-400" />
                            <span>{candidate.state}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quote / Manifesto */}
            <p className="mt-4 text-xs italic text-slate-400 line-clamp-1">
                "{candidate.quote}"
            </p>

            {/* Bottom Vote Action Button */}
            <div className="mt-4 flex justify-end">
                <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#008751] px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-[#006b40] active:scale-95"
                >
                    <Vote className="h-3.5 w-3.5" />
                    <span>Vote Now</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                </button>
            </div>

        </div>
    );
}

export default CandidateCard;

