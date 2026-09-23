import {
    LayoutDashboard,
    Users,
    Settings,
    BarChart3,
    Blocks,
    ShieldCheck,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function AdminSidebar() {
    const navigation = [
        {
            name: "Dashboard",
            icon: LayoutDashboard,
            path: "/admin",
        },
        {
            name: "Candidates",
            icon: Users,
            path: "/admin/candidates",
        },
        {
            name: "Election Control",
            icon: Settings,
            path: "/admin/election",
        },
        {
            name: "Results",
            icon: BarChart3,
            path: "/admin/results",
        },
        {
            name: "Smart Contract",
            icon: Blocks,
            path: "/admin/contract",
        },
    ];

    return (
        <aside className="fixed left-0 top-0 hidden h-screen w-64 flex-col bg-[#063B2F] text-white lg:flex">

            {/* Logo / Header */}
            <div className="border-b border-white/10 px-6 py-7">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl">
                        🇳🇬
                    </div>

                    <div>
                        <p className="text-[9px] font-medium tracking-[0.18em] text-white/60">
                            VOTING SYSTEM
                        </p>

                        <h1 className="mt-1 text-sm font-semibold">
                            Administration
                        </h1>
                    </div>
                </div>

                <div className="mt-5 flex items-center gap-2">
                    <ShieldCheck size={16} className="text-emerald-300" />

                    <span className="text-xs text-white/70">
                        Administrator Panel
                    </span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6">
                <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    Administration
                </p>

                <div className="space-y-1">
                    {navigation.map((item) => {
                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                end={item.path === "/admin"}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition ${isActive
                                        ? "bg-white/10 font-semibold text-white"
                                        : "text-white/65 hover:bg-white/5 hover:text-white"
                                    }`
                                }
                            >
                                <Icon size={18} strokeWidth={1.8} />

                                <span>{item.name}</span>
                            </NavLink>
                        );
                    })}
                </div>
            </nav>

            {/* Admin Wallet */}
            <div className="border-t border-white/10 p-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[10px] text-white/40">
                        ADMIN WALLET
                    </p>

                    <p className="mt-2 truncate text-xs font-medium text-white/80">
                        Not Connected
                    </p>

                    <button className="mt-3 w-full rounded-lg bg-white py-2 text-xs font-semibold text-[#063B2F] transition hover:bg-emerald-50">
                        Connect Wallet
                    </button>
                </div>
            </div>
        </aside>
    );
}

export default AdminSidebar;