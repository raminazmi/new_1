"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Mock data import (simulated API)
const users = [
    { id: 's1', name: 'الطالب (أحمد)', email: 'student@nu.edu.sa', password: '123', role: 'student', gpa: 4.5, graduated: true },
    { id: 'r1', name: 'د. محمد', email: 'dr@nu.edu.sa', password: '123', role: 'recommender' },
    { id: 'a1', name: 'المدير', email: 'admin@nu.edu.sa', password: '123', role: 'admin' }
];

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        await new Promise(resolve => setTimeout(resolve, 1200));

        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            if (user.role === 'student') {
                if (!user.graduated || user.gpa < 4.0) {
                    setError('فشل التحقق: يجب أن يكون المعدل >= 4.0 وأن يكون الطالب خريجاً.');
                    setLoading(false);
                    return;
                }
            }
            localStorage.setItem('user', JSON.stringify(user));
            router.push(`/dashboard/${user.role}`);
        } else {
            setError('البريد الإلكتروني أو كلمة المرور غير صحيحة');
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-slate-50">
            {/* Unique Background Shapes */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" style={{ animationDelay: '2s' }}></div>

            <div className="w-full max-w-[450px] relative z-10">
                <div className="text-center mb-10 transform scale-100 hover:scale-105 transition-transform duration-500">
                    <div className="w-20 h-20 rounded-[2.5rem] bg-gradient-to-br from-primary via-primary-dark to-primary flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6 shadow-colored rotate-3">
                        ن
                    </div>
                    <h1 className="text-4xl font-black text-slate-800 tracking-tight mb-3">منصة توصيات</h1>
                    <p className="text-slate-500 font-medium">نظام التوصيات الأكاديمية الذكي | خطوتك نحو المستقبل</p>
                </div>

                <div className="glass-panel p-10 shadow-2xl relative overflow-hidden group">
                    {/* Decorative Top Line */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-80"></div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="group/input">
                            <label className="label group-focus-within/input:text-primary transition-colors">البريد الجامعي</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    required
                                    className="input pr-12 text-right bg-slate-50/50 border-slate-200 focus:bg-white transition-all"
                                    placeholder="s123456@nu.edu.sa"
                                    dir="ltr"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="group/input">
                            <label className="label group-focus-within/input:text-primary transition-colors">كلمة المرور</label>
                            <div className="relative">
                                <input
                                    type="password"
                                    required
                                    className="input pr-12 text-right bg-slate-50/50 border-slate-200 focus:bg-white transition-all"
                                    placeholder="••••••••"
                                    dir="ltr"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {error && (
                            <div className="p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm flex items-start gap-3 animate-bounce-subtle">
                                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                <span className="font-bold">{error}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className={`btn btn-primary w-full py-4 text-lg font-bold relative overflow-hidden transition-all group/btn ${loading ? 'cursor-not-allowed grayscale' : ''}`}
                        >
                            {loading ? (
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    <span>جاري التحقق...</span>
                                </div>
                            ) : (
                                <div className="flex items-center justify-center gap-2">
                                    <span>تسجيل الدخول</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14" />
                                    </svg>
                                </div>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-xs text-slate-400 font-bold mb-4 uppercase tracking-widest">محمي بواسطة نظام الهوية الأكاديمي</p>
                        <Link href="/" className="group inline-flex items-center gap-2 text-primary hover:text-primary-dark font-extrabold transition-all">
                            <span>العودة للرئيسية</span>
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Simulated Floating Tooltip for Demo */}
                <div className="mt-8 p-4 rounded-3xl bg-white/40 border border-white/60 backdrop-blur-sm shadow-sm animate-fade-in text-center group">
                    <p className="text-[10px] text-slate-400 font-bold mb-3 uppercase">حسابات تجريبية سريعة</p>
                    <div className="flex justify-center gap-2">
                        {users.map(u => (
                            <button key={u.id} onClick={() => { setEmail(u.email); setPassword(u.password); }} className="px-3 py-1.5 rounded-xl bg-white/50 hover:bg-primary/10 hover:text-primary border border-white/20 text-[11px] font-bold transition-all text-slate-600">
                                {u.role === 'student' ? 'طالب' : u.role === 'recommender' ? 'دكتور' : 'مدير'}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
