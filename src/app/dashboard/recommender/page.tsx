'use client';
import { useEffect, useState } from 'react';
import { mockRequests, Request } from '@/lib/data';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RecommenderDashboard() {
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
        setRequests(mockRequests.filter(r => r.recommenderId === u.id));
    }, [router]);

    return (
        <div className="animate-fade-in font-tajawal">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-8">طلبات التوصية الواردة</h1>

            <div className="grid gap-4">
                {requests.map(req => (
                    <div key={req.id} className="glass-card flex flex-col md:flex-row justify-between items-center gap-4 hover:shadow-lg transition-shadow">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className={`px-2 py-0.5 rounded text-xs border ${req.status === 'قيد الانتظار' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' : 'bg-green-500/20 text-green-300 border-green-500/30'}`}>
                                    {req.status}
                                </span>
                                <span className="text-xs text-gray-400" dir="ltr">{req.createdAt}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-white">{req.studentName}</h3>
                            <p className="text-sm text-gray-400">طلب توصية: {req.type} لـ {req.universityName || 'غرض عام'}</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Link href={`/dashboard/recommender/request/${req.id}`} className="btn btn-secondary text-sm">
                                مراجعة واعتماد
                            </Link>
                        </div>
                    </div>
                ))}

                {requests.length === 0 && (
                    <div className="text-center py-12 text-gray-500 bg-white/5 rounded-lg border border-white/5">
                        <svg className="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
                        <p>لا توجد طلبات معلقة حالياً.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
