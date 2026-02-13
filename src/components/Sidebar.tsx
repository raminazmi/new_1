"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Refined Icons
const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);
const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
);
const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
const LogoutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
);

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const stored = localStorage.getItem('user');
        if (!stored) {
            router.push('/login');
        } else {
            setUser(JSON.parse(stored));
        }
    }, [router]);

    if (!user) return null;

    const handleLogout = () => {
        localStorage.removeItem('user');
        router.push('/');
    };

    const NavItem = ({ href, icon, label }: { href: string; icon: any; label: string }) => {
        const active = pathname === href;
        return (
            <Link
                href={href}
                className={`flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all duration-300 group ${active
                    ? 'bg-primary/10 text-primary shadow-sm font-bold scale-[1.02]'
                    : 'text-slate-500 hover:text-primary hover:bg-primary/5'
                    }`}
            >
                <div className={`transition-all duration-300 ${active ? 'text-primary scale-110' : 'text-slate-400 group-hover:text-primary'}`}>
                    {icon}
                </div>
                <span className="text-[15px]">{label}</span>
                {active && (
                    <div className="mr-auto">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    </div>
                )}
            </Link>
        );
    };

    return (
        <aside className="w-72 h-[calc(100vh-2rem)] sticky top-4 right-4 m-4 flex flex-col glass border-none shadow-xl rounded-[2rem] overflow-hidden p-3 group/sidebar">
            {/* Brand Logo */}
            <div className="p-6 mb-4">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-2xl shadow-colored transform group-hover/sidebar:rotate-6 transition-transform">
                        ت
                    </div>
                    <div>
                        <h1 className="text-xl font-extrabold tracking-tight text-slate-800 leading-none">منصة توصيات</h1>
                        <p className="text-[10px] text-primary font-bold mt-1 tracking-widest uppercase">UniReco Portal</p>
                    </div>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 px-2 space-y-1.5 overflow-y-auto no-scrollbar">
                <div className="px-4 py-3 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                    القائمة الرئيسية
                </div>
                {user.role === 'student' && (
                    <>
                        <NavItem href="/dashboard/student" icon={<HomeIcon />} label="لوحة التحكم" />
                        <NavItem href="/dashboard/student/new" icon={<PlusIcon />} label="طلب توصية جديد" />
                    </>
                )}
                {user.role === 'recommender' && (
                    <>
                        <NavItem href="/dashboard/recommender" icon={<HomeIcon />} label="الطلبات الواردة" />
                    </>
                )}
                {user.role === 'admin' && (
                    <>
                        <NavItem href="/dashboard/admin" icon={<HomeIcon />} label="نظرة عامة" />
                        <NavItem href="/dashboard/admin/users" icon={<UsersIcon />} label="إدارة المستخدمين" />
                        <NavItem href="/dashboard/admin/templates" icon={<CheckIcon />} label="نماذج التوصيات" />
                    </>
                )}
            </nav>

            {/* Profile Section */}
            <div className="mt-auto pt-4">
                <div className="p-4 rounded-[1.5rem] bg-white/60 border border-white/40 shadow-sm backdrop-blur-md">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="relative">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-primary text-xl font-bold shadow-sm">
                                {user.name.charAt(0)}
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-slate-800 truncate">{user.name}</p>
                            <p className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
                                {user.role === 'student' ? 'طالب خريج' : user.role === 'recommender' ? 'عضو هيئة تدريس' : 'مدير النظام'}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-red-50 hover:bg-red-100 text-red-500 rounded-xl transition-all duration-300 text-sm font-bold group/logout"
                    >
                        <LogoutIcon />
                        <span className="transition-transform group-hover/logout:translate-x-1">تسجيل الخروج</span>
                    </button>
                </div>

                <div className="px-4 py-4 flex items-center justify-between text-[10px] text-slate-400 font-medium">
                    <span>UniReco v2.0</span>
                    <span className="flex items-center gap-1 group">
                        مصنوع بـ
                        <span className="text-red-400 group-hover:scale-125 transition-transform inline-block">❤️</span>
                    </span>
                </div>
            </div>
        </aside>
    );
}
