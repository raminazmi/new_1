'use client';
import { useEffect, useState } from 'react';
import { Request, mockRequests } from '@/lib/data';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function StudentDashboard() {
    const router = useRouter();
    const [requests, setRequests] = useState<Request[]>([]);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const u = JSON.parse(localStorage.getItem('user') || '{}');
        if (!u.id) {
            router.push('/login');
            return;
        }
        setUser(u);
        setRequests(mockRequests.filter(r => r.studentId === u.id));
    }, [router]);

    const getStatusStyles = (status: string) => {
        switch (status) {
            case 'مكتمل': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
            case 'تمت الموافقة': return 'bg-blue-50 text-blue-600 border-blue-100';
            case 'مرفوض': return 'bg-red-50 text-red-600 border-red-100';
            default: return 'bg-amber-50 text-amber-600 border-amber-100';
        }
    };

    if (!user) return null;

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="relative z-10">
                    <h1 className="text-3xl font-extrabold text-gray-800 mb-2">مرحباً، {user.name} 👋</h1>
                    <p className="text-gray-500 font-medium italic">أهلاً بك في لوحة التحكم الخاصة بك</p>
                </div>
                <div className="flex items-center gap-4 relative z-10">
                    <div className="text-left md:text-right hidden sm:block">
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">المعدل التراكمي</p>
                        <p className="text-2xl font-black text-primary" dir="ltr">{user.gpa} / 5.00</p>
                    </div>
                    <div className="w-px h-12 bg-gray-100 hidden sm:block mx-2" />
                    <Link href="/dashboard/student/new" className="btn btn-primary px-8 py-4 shadow-colored group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                        </svg>
                        <span>طلب توصية جديد</span>
                    </Link>
                </div>
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl opacity-50" />
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-right">

                {/* Stats & Info Column */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="glass-card p-8 rounded-[32px] border-none shadow-lg bg-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-primary to-secondary" />
                        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            البيانات الأكاديمية
                        </h2>
                        <div className="space-y-4">
                            {[
                                { label: 'الرقم الجامعي', value: user.id === 's1' ? '441000000' : '442000000', dir: 'ltr' },
                                { label: 'الكلية', value: 'علوم الحاسب ونظم المعلومات' },
                                { label: 'القسم', value: user.department || 'نظم المعلومات' },
                                { label: 'الحالة', value: user.graduated ? 'خريج متميز' : 'طالب فعال', highlighted: true }
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-center p-3 rounded-2xl bg-gray-50/50 hover:bg-gray-50 transition-colors">
                                    <span className="text-sm font-bold text-gray-400">{item.label}</span>
                                    <span className={`text-sm font-bold ${item.highlighted ? 'text-primary' : 'text-gray-700'}`} dir={item.dir}>
                                        {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-[32px] text-white shadow-colored group transition-transform hover:scale-[1.02]">
                        <h3 className="text-lg font-bold mb-2">هل تحتاج مساعدة؟</h3>
                        <p className="text-sm text-white/80 mb-6 leading-relaxed">فريق وحدة التوصيات متاح للإجابة على استفساراتكم خلال ساعات العمل الرسمية.</p>
                        <button className="w-full py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-2xl text-sm font-bold border border-white/30 transition-all">
                            تواصل معنا
                        </button>
                    </div>
                </div>

                {/* Requests Column */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center justify-between mb-2 px-2">
                        <h2 className="text-xl font-black text-gray-800">حالة الطلبات</h2>
                        <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {requests.length} طلبات إجمالية
                        </span>
                    </div>

                    {requests.length > 0 ? (
                        requests.map((req) => (
                            <div key={req.id} className="group bg-white p-6 rounded-[28px] border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                                    <div className="flex-1 flex gap-5 items-center">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm ${req.type === 'أكاديمية' ? 'bg-purple-100 text-purple-600' : 'bg-cyan-100 text-cyan-600'
                                            }`}>
                                            {req.type === 'أكاديمية' ? '🎓' : '🔬'}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors">
                                                    {req.universityName || 'طلب توصية لمستوى عام'}
                                                </h3>
                                                <span className={`text-[10px] uppercase font-black px-2 py-0.5 rounded-md border ${getStatusStyles(req.status)}`}>
                                                    {req.status}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-500 font-medium">
                                                الموصي: <span className="text-gray-700 font-bold">{req.recommenderName}</span> • <span dir="ltr" className="text-xs">{req.createdAt}</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 w-full sm:w-auto">
                                        {req.status === 'مكتمل' ? (
                                            req.type === 'أكاديمية' ? (
                                                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-2xl text-sm font-bold border border-emerald-100">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                                    تم الإرسال
                                                </div>
                                            ) : (
                                                <button className="flex-1 sm:flex-none btn btn-ghost px-6 py-3 font-bold">
                                                    تحميل PDF
                                                </button>
                                            )
                                        ) : (
                                            <button className="flex-1 sm:flex-none py-2 px-4 text-xs font-bold text-gray-400 hover:text-gray-600 transition-colors">
                                                مشاهدة التفاصيل
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="bg-gray-50/50 border-2 border-dashed border-gray-200 rounded-[40px] p-20 text-center animate-pulse">
                            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-600 mb-2">لا توجد طلبات مسجلة</h3>
                            <p className="text-gray-400 mb-8 max-w-xs mx-auto text-sm leading-relaxed">لم تقم بتقديم أي طلب توصية حتى الآن. ابدأ رحلتك الأكاديمية الآن.</p>
                            <Link href="/dashboard/student/new" className="inline-flex btn btn-primary px-10">إضافة طلب أول</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
