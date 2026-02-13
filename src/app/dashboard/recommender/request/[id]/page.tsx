'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { mockRequests, users, Request } from '@/lib/data';

export default function RequestDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [request, setRequest] = useState<Request | null>(null);
    const [student, setStudent] = useState<any>(null);
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const id = params?.id as string;
        if (!id) return;

        // Simulate API fetch
        const req = mockRequests.find(r => r.id === id);
        if (req) {
            setRequest(req);
            const stu = users.find(u => u.id === req.studentId);
            setStudent(stu);
            // Pre-fill Arabic/English template depending on context, using English for now as most Academic Recommendations are English
            // But UI is Arabic.
            setContent(`To Whom It May Concern,\n\nI am writing to highly recommend ${stu?.name} for admission to your graduate program.\n\nHe/She has demonstrated exceptional skills in Information Systems and consistently performed well in my courses.\n\n[Add your specific observations here regarding the student's project work, analytical skills, and character.]\n\nSincerely,\n${req.recommenderName}\nCollege of Computer Science and Information Systems\nNajran University`);
        }
    }, [params]);

    const handleApprove = async () => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        router.push('/dashboard/recommender?success=approved');
    };

    if (!request || !student) return <div className="p-8 text-center text-gray-500">جاري تحميل الطلب...</div>;

    return (
        <div className="max-w-5xl mx-auto animate-fade-in pb-20 font-tajawal">
            <div className="flex items-center gap-2 mb-6 text-sm text-gray-400">
                <button onClick={() => router.back()} className="hover:text-white transition-colors">الطلبات</button>
                <span>/</span>
                <span className="text-white">{student.name}</span>
            </div>

            <div className="glass-panel mb-8 border-r-4 border-r-purple-500">
                <h2 className="text-xl font-bold text-white mb-4">الملف الأكاديمي للطالب</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div className="border-b border-white/5 pb-2">
                        <label className="label text-xs">اسم الطالب</label>
                        <p className="text-white text-lg">{student.name}</p>
                    </div>
                    <div className="border-b border-white/5 pb-2">
                        <label className="label text-xs">المعدل التراكمي</label>
                        <p className="text-white text-lg font-mono" dir="ltr">{student.gpa} / 5.00</p>
                    </div>
                    <div className="border-b border-white/5 pb-2">
                        <label className="label text-xs">القسم</label>
                        <p className="text-white">{student.department}</p>
                    </div>
                    <div className="border-b border-white/5 pb-2">
                        <label className="label text-xs">حالة التخرج</label>
                        <span className={`px-2 py-1 rounded text-xs ${student.graduated ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                            {student.graduated ? 'خريج' : 'غير متخرج'}
                        </span>
                    </div>
                </div>
            </div>

            <div className="glass-panel relative">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">مسودة خطاب التوصية</h2>
                    <span className="text-xs px-2 py-1 bg-white/10 rounded text-gray-300">اللغة: الإنجليزية</span>
                </div>

                <div className="mb-6 relative">
                    <textarea
                        className="w-full bg-white/95 text-gray-900 border border-white/10 rounded-lg p-8 font-serif leading-relaxed h-[500px] focus:outline-none focus:ring-2 focus:ring-primary shadow-inner text-left resize-none"
                        dir="ltr"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                    ></textarea>
                    <div className="absolute top-4 right-4 text-xs text-gray-400 pointer-events-none">
                        قابل للتعديل
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-6 gap-4">
                    <div className="text-xs text-gray-500 flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        سيتم إرفاق التوقيع الرقمي المعتمد تلقائياً عند الاعتماد.
                    </div>
                    <div className="flex gap-4 w-full md:w-auto">
                        <button className="btn btn-secondary px-6 text-red-300 hover:bg-red-500/10 hover:border-red-500/30 flex-1 md:flex-none justify-center">رفض الطلب</button>
                        <button
                            onClick={handleApprove}
                            disabled={loading}
                            className="btn btn-primary px-8 gap-2 flex-1 md:flex-none justify-center"
                        >
                            {loading ? 'جاري المعالجة...' : (
                                <>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    اعتماد وإرسال
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
