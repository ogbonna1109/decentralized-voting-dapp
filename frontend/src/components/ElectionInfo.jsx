import {
    CalendarDays,
    Users,
    ShieldCheck,
    Activity,
} from "lucide-react";

function ElectionInfo() {
    const information = [
        {
            label: "Election",
            value: "2027 General Election",
            icon: CalendarDays,
        },
        {
            label: "Candidates",
            value: "12 Candidates",
            icon: Users,
        },
        {
            label: "Election Status",
            value: "Voting Active",
            icon: Activity,
        },
        {
            label: "Security",
            value: "Blockchain Secured",
            icon: ShieldCheck,
        },
    ];

    return (
        <section className="border border-slate-200 bg-white p-6 shadow-sm">
            <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    Election Information
                </p>

                <h2 className="mt-2 text-xl font-bold text-slate-900">
                    Current Election
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Important information about this voting session.
                </p>
            </div>

            <div className="mt-6 space-y-3">
                {information.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.label}
                            className="flex items-center justify-between border-b border-slate-100 py-3 last:border-0"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-[#008751]">
                                    <Icon size={17} />
                                </div>

                                <span className="text-sm text-slate-500">
                                    {item.label}
                                </span>
                            </div>

                            <span className="text-sm font-semibold text-slate-800">
                                {item.value}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default ElectionInfo;