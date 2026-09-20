function Footer() {
    return (
        <footer className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-200/80 pt-5 text-[11px] font-medium text-slate-400 sm:flex-row">
            <p>
                © 2027 Federal Republic of Nigeria. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
                <a href="#" className="hover:text-slate-600 transition">Privacy Policy</a>
                <span>|</span>
                <a href="#" className="hover:text-slate-600 transition">Terms of Service</a>
                <span>|</span>
                <a href="#" className="hover:text-slate-600 transition">Help</a>
            </div>
        </footer>
    );
}

export default Footer;
