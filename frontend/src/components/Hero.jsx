
import { Shield, Eye } from "lucide-react";
import coatOfArms from "../assets/coat_of_arms.jpg";
import heroImg from "../assets/hero.png";

function ElectionHero() {
    return (
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#03241B] via-[#043326] to-[#032B20] text-white shadow-xl">

            {/* Top Right Coat of Arms Emblem */}
            <div className="absolute right-6 top-6 z-20 hidden md:block">
                <img
                    src={coatOfArms}
                    alt="Emblem"
                    className="h-10 w-auto object-contain opacity-90 drop-shadow-md"
                />
            </div>

            <div className="relative z-10 grid grid-cols-1 items-center gap-6 p-6 md:p-8 lg:grid-cols-12">

                {/* Left Text & Badges */}
                <div className="lg:col-span-7">
                    <p className="text-[11px] font-bold tracking-[0.2em] text-emerald-300 uppercase">
                        General Election 2027
                    </p>

                    <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
                        Your Vote Matters
                    </h1>

                    <p className="mt-3 max-w-xl text-xs leading-relaxed text-emerald-100/70 md:text-sm">
                        Be part of a transparent, secure and blockchain-powered electoral process.
                    </p>

                    {/* Security & Audit Badges */}
                    <div className="mt-6 flex flex-wrap items-center gap-3">

                        {/* Secure Badge */}
                        <div className="flex items-center gap-2.5 rounded-xl border border-emerald-500/20 bg-emerald-950/40 px-3.5 py-2 backdrop-blur-md">
                            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/20 text-emerald-300">
                                <Shield className="h-3.5 w-3.5" />
                            </div>
                            <div className="text-left">
                                <span className="block text-[10px] font-bold text-white leading-tight">Secure</span>
                                <span className="block text-[9px] text-emerald-200/60 leading-tight">Blockchain Protected</span>
                            </div>
                        </div>

                        {/* Transparent Badge */}
                        <div className="flex items-center gap-2.5 rounded-xl border border-emerald-500/20 bg-emerald-950/40 px-3.5 py-2 backdrop-blur-md">
                            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/20 text-emerald-300">
                                <Eye className="h-3.5 w-3.5" />
                            </div>
                            <div className="text-left">
                                <span className="block text-[10px] font-bold text-white leading-tight">Transparent</span>
                                <span className="block text-[9px] text-emerald-200/60 leading-tight">Verified & Auditable</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right Visual Image / Landmark & Motto */}
                <div className="relative flex items-center justify-center lg:col-span-5">
                    <div className="relative overflow-hidden rounded-xl border border-emerald-500/20 shadow-2xl">
                        <img
                            src={heroImg}
                            alt="National Assembly and Nigerian Flag"
                            className="h-48 w-full object-cover md:h-56 lg:h-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#03241B] via-transparent to-transparent opacity-80" />

                        {/* Handwriting Motto Overlay */}
                        <div className="absolute bottom-4 right-4 text-right">
                            <p className="font-serif text-lg font-bold italic tracking-wide text-emerald-100 drop-shadow-md md:text-xl">
                                A Greater Nigeria<br />is Possible
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ElectionHero;