import {
    Home,
    Vote,
    BarChart3,
    UserRound,
    HelpCircle,
    Settings,
} from "lucide-react";
import coatOfArms from "../assets/coat_of_arms.jpg";
import sidebarBg from "../assets/sidebar_bg.jpg";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
    const navigation = [
        { name: "Home", icon: Home, path: "/" },
        { name: "Vote", icon: Vote, path: "/vote" },
        { name: "Results", icon: BarChart3, path: "/results" },
        { name: "My Profile", icon: UserRound, path: "/profile" },
        { name: "Help & Support", icon: HelpCircle, path: "/help" },
        { name: "Settings", icon: Settings, path: "/settings" },
    ];
    const location = useLocation();

    return (
        <aside className="fixed left-0 top-0 hidden h-screen w-64 flex-col justify-between bg-[#04281E] text-white lg:flex overflow-hidden shadow-2xl z-50">
            {/* Top Section */}
            <div className="relative z-10 flex flex-col px-4 pt-6">

                {/* Brand Header */}
                <div className="flex flex-col items-center text-center pb-6 border-b border-white/10">
                    {/* Coat of Arms */}
                    <div className="relative mb-3 h-16 w-16 drop-shadow-md">
                        <img
                            src={coatOfArms}
                            alt="Nigerian Coat of Arms"
                            className="h-full w-full object-contain"
                        />
                    </div>

                    <h1 className="text-sm font-semibold tracking-wide text-white">
                        Federal Republic of Nigeria
                    </h1>
                    <p className="mt-0.5 text-xs text-emerald-200/70 font-medium">
                        Blockchain Voting System
                    </p>
                </div>

                {/* Navigation Menu */}
                <nav className="mt-6 flex flex-col gap-1.5">
                    {navigation.map((item) => {
                        const Icon = item.icon;

                        return (
                            <a
                                key={item.name}
                                href={item.path}
                                className={`group flex items-center gap-3.5 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${location.pathname === item.path
                                    ? "bg-[#057A4E] text-white shadow-lg shadow-emerald-950/40"
                                    : "text-emerald-100/70 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                <Icon
                                    size={19}
                                    className={`transition-transform duration-200 group-hover:scale-110 ${location.pathname === item.path ? "text-white" : "text-emerald-200/70 group-hover:text-white"
                                        }`}
                                />
                                <span>{item.name}</span>
                            </a>
                        );
                    })}
                </nav>
            </div>

            {/* Bottom Section with Flag & National Assembly Artwork */}
            <div className="relative mt-auto w-full pt-20">
                {/* Background Art (Flag + National Assembly) */}
                <div className="absolute inset-0 z-0 opacity-45 mix-blend-luminosity">
                    <img
                        src={sidebarBg}
                        alt="Nigerian Flag and National Assembly Background"
                        className="h-full w-full object-cover object-bottom"
                    />
                </div>

                {/* Gradient Overlay for subtle depth */}
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#04281E] via-[#04281E]/60 to-transparent" />

                {/* Connected Wallet Card */}
                <div className="relative z-10 p-4">
                    <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-[#073629]/90 p-3.5 shadow-xl backdrop-blur-md">
                        {/* Fox avatar */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-xl border border-orange-500/20">
                            🦊
                        </div>

                        <div className="min-w-0 flex-1">
                            <span className="block text-[10px] font-medium tracking-wider text-emerald-200/60 uppercase">
                                Connected Wallet
                            </span>
                            <span className="block truncate text-xs font-bold text-white tracking-tight">
                                0x7a3...4F2B
                            </span>
                            <div className="mt-0.5 flex items-center gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-[10px] text-emerald-300/80 font-medium">MetaMask</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;