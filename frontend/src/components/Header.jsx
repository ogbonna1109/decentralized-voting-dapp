import { Bell, ChevronDown } from "lucide-react";
import coatOfArms from "../assets/coat_of_arms.jpg";

function Header() {
    return (
        <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-100 bg-white/95 backdrop-blur-md px-6 md:px-8 shadow-sm">

            {/* Left: Coat of Arms + Title */}
            <div className="flex items-center gap-3 md:gap-4">
                <img
                    src={coatOfArms}
                    alt="Coat of Arms of Nigeria"
                    className="h-10 w-auto object-contain md:h-12"
                />
                <div>
                    <h1 className="text-sm font-bold text-slate-900 leading-tight md:text-base">
                        Federal Republic of Nigeria
                    </h1>
                    <p className="text-xs font-medium text-slate-500 leading-tight">
                        Blockchain Voting System
                    </p>
                </div>
            </div>

            {/* Center: National Motto / Tagline */}
            <div className="hidden lg:block">
                <p className="text-xs text-slate-400 font-medium">
                    Your Vote. Your Voice. A Stronger <span className="italic font-semibold text-slate-600">Nigeria.</span>
                </p>
            </div>

            {/* Right: Wallet, Bell Notification & Flag */}
            <div className="flex items-center gap-3 md:gap-4">

                {/* Wallet Status Pill */}
                <div className="flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm transition hover:bg-slate-50 cursor-pointer">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-100 text-sm">
                        🦊
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                            <span className="text-xs font-bold text-slate-800">0x7a3...4F2B</span>
                            <ChevronDown className="h-3 w-3 text-slate-400" />
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            <span className="text-[10px] font-medium text-emerald-600">Connected</span>
                        </div>
                    </div>
                </div>

                {/* Notification Bell */}
                <button
                    type="button"
                    aria-label="Notifications"
                    className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 shadow-sm"
                >
                    <Bell className="h-4 w-4" />
                </button>

                {/* Nigeria Flag Badge */}
                <div className="flex items-center" title="Federal Republic of Nigeria">
                    <svg
                        className="h-5 w-7 rounded-[3px] border border-slate-200 shadow-sm overflow-hidden"
                        viewBox="0 0 30 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="10" height="20" fill="#008751" />
                        <rect x="10" width="10" height="20" fill="#FFFFFF" />
                        <rect x="20" width="10" height="20" fill="#008751" />
                    </svg>
                </div>

            </div>

        </header>
    );
}

export default Header;