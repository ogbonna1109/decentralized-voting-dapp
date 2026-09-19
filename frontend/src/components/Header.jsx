import {
    Bell,
    ChevronDown,
    Search,
} from "lucide-react";

function Header() {
    return (
        <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">

            {/* Left */}
            <div className="flex items-center gap-4">

                <div className="hidden md:block">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                        National Voting Portal
                    </p>

                    <h2 className="mt-1 text-lg font-semibold text-slate-900">
                        2027 General Election
                    </h2>
                </div>

            </div>

            {/* Right */}
            <div className="flex items-center gap-4">

                {/* Search */}
                <div className="hidden items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 md:flex">

                    <Search
                        size={16}
                        className="text-slate-400"
                    />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-32 bg-transparent text-xs outline-none placeholder:text-slate-400"
                    />

                </div>

                {/* Notification */}
                <button className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-50">

                    <Bell size={17} />

                    <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />

                </button>

                {/* Wallet */}
                <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 transition hover:bg-slate-50">

                    <span className="text-lg">
                        🦊
                    </span>

                    <span className="hidden text-left sm:block">

                        <span className="block text-[9px] uppercase tracking-wide text-slate-400">
                            Wallet
                        </span>

                        <span className="block text-xs font-medium text-slate-700">
                            Not Connected
                        </span>

                    </span>

                    <ChevronDown
                        size={14}
                        className="text-slate-400"
                    />

                </button>

            </div>

        </header>
    );
}

export default Header;