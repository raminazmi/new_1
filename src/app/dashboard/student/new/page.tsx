'use client';
import { useState } from 'react';
import { users, Request } from '@/lib/data';
import { useRouter } from 'next/navigation';

export default function NewRequestPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        recommenderId: '',
        type: 'أكاديمية',
        universityName: '',
        universityEmail: '',
        notes: ''
    });

    const recommenders = users.filter(u => u.role === 'recommender');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        router.push('/dashboard/student?success=true');
    };

    return (
        <div className="max-w-3xl mx-auto animate-fade-in font-tajawal">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-8">طلب توصية جديد</h1>

            <form onSubmit={handleSubmit} className="glass-panel space-y-6 relative overflow-hidden">

                {/* Info Box */}
                <div className="bg-blue-500/10 border-r-4 border-r-blue-500 p-4 mb-6 rounded-l text-sm text-blue-200 leading-relaxed">
                    <h4 className="font-bold mb-2 text-white">خطوات الحصول على التوصية:</h4>
                    <ul className="list-disc list-inside space-y-1 marker:text-blue-500">
                        <li>اختيار عضو هيئة التدريس المناسب.</li>
                        <li>تحديد نوع التوصية (أكاديمية، مهنية، بحثية).</li>
                        <li>تعبئة البيانات المطلوبة بدقة (خاصة البريد الإلكتروني للجهة المستلمة).</li>
                        <li>سيتم إشعارك فور اعتماد التوصية من الموصي.</li>
                    </ul>
                </div>

                <div>
                    <label className="label">عضو هيئة التدريس (الموصي)</label>
                    <select
                        required
                        className="input bg-black/50"
                        value={formData.recommenderId}
                        onChange={e => setFormData({ ...formData, recommenderId: e.target.value })}
                    >
                        <option value="">اختر الأستاذ...</option>
                        {recommenders.map(r => (
                            <option key={r.id} value={r.id}>{r.name} ({r.department})</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="label">نوع التوصية</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {['أكاديمية', 'مهنية', 'بحثية'].map(type => (
                            <button
                                type="button"
                                key={type}
                                className={`p-4 rounded-lg border text-sm font-medium transition-all ${formData.type === type ? 'bg-primary/20 border-primary text-white' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
                                onClick={() => setFormData({ ...formData, type: type })}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {formData.type === 'أكاديمية' && (
                    <div className="space-y-4 animate-fade-in bg-white/5 p-4 rounded-lg border border-white/5">
                        <div className="text-sm text-yellow-300 flex items-start gap-2">
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            التوصيات الأكاديمية يتم إرسالها مباشرة إلى بريد الجامعة المستلمة ولا يمكن للطالب تحميلها، وذلك لضمان السرية والمصداقية.
                        </div>
                        <div>
                            <label className="label">اسم الجامعة / الجهة المستلمة</label>
                            <input
                                type="text"
                                required
                                className="input"
                                placeholder="مثال: جامعة الملك سعود"
                                value={formData.universityName}
                                onChange={e => setFormData({ ...formData, universityName: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="label">البريد الإلكتروني للقبول (Admissions Email)</label>
                            <input
                                type="email"
                                required
                                className="input text-left"
                                placeholder="admissions@university.edu.sa"
                                dir="ltr"
                                value={formData.universityEmail}
                                onChange={e => setFormData({ ...formData, universityEmail: e.target.value })}
                            />
                        </div>
                    </div>
                )}

                <div>
                    <label className="label">ملاحظات إضافية (اختياري)</label>
                    <textarea
                        className="input min-h-[100px]"
                        placeholder="اذكر المقررات التي درستها مع الدكتور أو المشاريع التي عملت عليها لتذكيره..."
                        value={formData.notes}
                        onChange={e => setFormData({ ...formData, notes: e.target.value })}
                    />
                </div>

                <div className="pt-4 flex items-center justify-end gap-4 border-t border-white/5">
                    <button type="button" onClick={() => router.back()} className="text-gray-400 hover:text-white text-sm transition-colors">إلغاء</button>
                    <button type="submit" disabled={loading} className="btn btn-primary px-8 w-full md:w-auto">
                        {loading ? 'جاري الإرسال...' : 'إرسال الطلب'}
                    </button>
                </div>

            </form>
        </div>
    );
}
