import { Users, Clock, Vote, Calendar } from "lucide-react";

function StatsCards() {
    const stats = [
        {
            title: "Total Candidates",
            value: "4",
            description: "Registered candidates",
            icon: Users,
            iconBg: "bg-emerald-100/70 text-emerald-700",
            cardBg: "bg-white",
        },
        {
            title: "Election Status",
            value: "Not Started",
            description: "Election will begin soon",
            icon: Clock,
            iconBg: "bg-sky-100/70 text-sky-700",
            cardBg: "bg-white",
        },
        {
            title: "Total Votes",
            value: "0",
            description: "No votes cast yet",
            icon: Vote,
            iconBg: "bg-purple-100/70 text-purple-700",
            cardBg: "bg-white",
        },
        {
            title: "Election Year",
            value: "2027",
            description: "Next general election",
            icon: Calendar,
            iconBg: "bg-amber-100/70 text-amber-700",
            cardBg: "bg-white",
        },
    ];

    return (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                    <div
                        key={stat.title}
                        className="flex items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition hover:shadow-md"
                    >
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${stat.iconBg}`}>
                            <Icon className="h-6 w-6" />
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                                {stat.title}
                            </p>
                            <h3 className="mt-0.5 text-xl font-bold tracking-tight text-slate-900">
                                {stat.value}
                            </h3>
                            <p className="mt-0.5 text-[11px] text-slate-400 truncate">
                                {stat.description}
                            </p>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}

export default StatsCards;