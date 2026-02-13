'use client';
import { users, mockRequests } from '@/lib/data';

export default function AdminDashboard() {
    return (
        <div className="animate-fade-in font-tajawal">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-8">لوحة القيادة</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard title="إجمالي الطلاب المسجلين" value={users.filter(u => u.role === 'student').length} />
                <StatCard title="عدد التوصيات الصادرة" value={mockRequests.length} />
                <StatCard title="طلبات بانتظار المراجعة" value={mockRequests.filter(r => r.status === 'قيد الانتظار').length} />
            </div>

            <div className="glass-panel">
                <h2 className="text-xl font-bold mb-4 text-white">المستخدمون للنظام</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-right text-sm">
                        <thead>
                            <tr className="border-b border-white/10 text-gray-400">
                                <th className="py-3 px-2">الاسم</th>
                                <th className="py-3 px-2">الدور</th>
                                <th className="py-3 px-2">البريد الإلكتروني</th>
                                <th className="py-3 px-2">القسم</th>
                                <th className="py-3 px-2">الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(u => (
                                <tr key={u.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-2 font-medium text-white">{u.name}</td>
                                    <td className="py-3 px-2 text-gray-300">
                                        <span className={`px-2 py-0.5 rounded text-xs ${u.role === 'admin' ? 'bg-red-500/20 text-red-300' : u.role === 'recommender' ? 'bg-purple-500/20 text-purple-300' : 'bg-cyan-500/20 text-cyan-300'}`}>
                                            {u.role === 'admin' ? 'مدير' : u.role === 'recommender' ? 'أستاذ' : 'طالب'}
                                        </span>
                                    </td>
                                    <td className="py-3 px-2 text-gray-400" dir="ltr">{u.email}</td>
                                    <td className="py-3 px-2 text-gray-400">{u.department || '-'}</td>
                                    <td className="py-3 px-2">
                                        <button className="text-xs text-primary hover:underline">تعديل</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function StatCard({ title, value }: { title: string, value: number }) {
    return (
        <div className="glass-card p-6 border border-white/5">
            <h3 className="text-gray-400 text-sm mb-2">{title}</h3>
            <p className="text-3xl font-bold text-white font-mono" dir="ltr">{value}</p>
        </div>
    );
}
