import Header from "../components/Header";
import {
    UserRound,
    Wallet,
    ShieldCheck,
    Vote,
    Clock3,
    Copy,
    CheckCircle2,
} from "lucide-react";

function ProfilePage() {
    const walletAddress = "0x71C7...9A42";

    const votingActivity = [
        {
            title: "Vote submitted",
            description: "Your vote was recorded on the blockchain.",
            date: "Today, 10:42 AM",
            status: "Confirmed",
        },
        {
            title: "Wallet connected",
            description: "Wallet connected to the voting application.",
            date: "Today, 10:35 AM",
            status: "Completed",
        },
    ];

    return (
        <>
            <Header />

            <main className="space-y-6 px-5 py-6 md:px-8">



                    {/* Page Header */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                            Account
                        </p>

                        <h1 className="mt-1 text-2xl font-bold text-slate-900">
                            My Profile
                        </h1>

                        <p className="mt-1 text-sm text-slate-500">
                            View your wallet information and voting activity.
                        </p>
                    </div>

                    {/* Profile Overview */}
                    <section className="border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                            <div className="flex items-center gap-4">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-[#008751]">
                                    <UserRound size={30} />
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                                        Voter Profile
                                    </p>

                                    <h2 className="mt-1 text-xl font-bold text-slate-900">
                                        Demo Voter
                                    </h2>

                                    <div className="mt-2 flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                        <span className="text-xs font-medium text-emerald-700">
                                            Active Participant
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                                <ShieldCheck size={17} />
                                Blockchain Verified
                            </div>
                        </div>
                    </section>

                    {/* Wallet + Voting Status */}
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

                        {/* Wallet */}
                        <section className="border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-[#008751]">
                                    <Wallet size={19} />
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                                        Wallet
                                    </p>

                                    <h2 className="mt-1 text-lg font-bold text-slate-900">
                                        Connected Wallet
                                    </h2>
                                </div>
                            </div>

                            <div className="mt-6 border border-slate-100 bg-slate-50 p-4">
                                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                                    Wallet Address
                                </p>

                                <div className="mt-2 flex items-center justify-between gap-3">
                                    <p className="truncate text-sm font-semibold text-slate-700">
                                        {walletAddress}
                                    </p>

                                    <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-50">
                                        <Copy size={14} />
                                    </button>
                                </div>
                            </div>

                            <div className="mt-4 flex items-center gap-2 text-xs text-emerald-700">
                                <CheckCircle2 size={15} />
                                Wallet connected successfully
                            </div>
                        </section>

                        {/* Voting Status */}
                        <section className="border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-[#008751]">
                                    <Vote size={19} />
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                                        Voting Status
                                    </p>

                                    <h2 className="mt-1 text-lg font-bold text-slate-900">
                                        2027 General Election
                                    </h2>
                                </div>
                            </div>

                            <div className="mt-6 space-y-4">
                                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                                    <span className="text-sm text-slate-500">
                                        Election Status
                                    </span>

                                    <span className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                        Active
                                    </span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-slate-500">
                                        Voting Status
                                    </span>

                                    <span className="text-sm font-semibold text-slate-800">
                                        Vote Recorded
                                    </span>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Voting Activity */}
                    <section className="border border-slate-200 bg-white p-6 shadow-sm">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                                Activity
                            </p>

                            <h2 className="mt-2 text-xl font-bold text-slate-900">
                                Recent Activity
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Recent actions associated with your wallet.
                            </p>
                        </div>

                        <div className="mt-6 space-y-4">
                            {votingActivity.map((activity, index) => (
                                <div
                                    key={index}
                                    className="flex gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-[#008751]">
                                        {index === 0 ? (
                                            <Vote size={17} />
                                        ) : (
                                            <Wallet size={17} />
                                        )}
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex flex-col justify-between gap-1 sm:flex-row">
                                            <h3 className="text-sm font-semibold text-slate-800">
                                                {activity.title}
                                            </h3>

                                            <span className="flex items-center gap-1 text-xs text-slate-400">
                                                <Clock3 size={13} />
                                                {activity.date}
                                            </span>
                                        </div>

                                        <p className="mt-1 text-xs text-slate-500">
                                            {activity.description}
                                        </p>

                                        <span className="mt-2 inline-block text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                                            {activity.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Security Notice */}
                    <section className="border border-emerald-100 bg-emerald-50 p-5">
                        <div className="flex gap-3">
                            <ShieldCheck className="mt-0.5 shrink-0 text-[#008751]" size={19} />

                            <div>
                                <h3 className="text-sm font-semibold text-slate-800">
                                    Your wallet controls your voting identity
                                </h3>

                                <p className="mt-1 text-xs leading-5 text-slate-600">
                                    This prototype uses a blockchain wallet to identify voters
                                    and submit voting transactions. Never share your wallet
                                    recovery phrase or private key.
                                </p>
                            </div>
                        </div>
                    </section>

                </main>
        </>
    );
}

export default ProfilePage;


