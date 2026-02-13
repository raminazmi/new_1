'use client';

export default function TemplatesPage() {
    return (
        <div className="animate-fade-in font-tajawal">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-8">نماذج التوصيات</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-panel">
                    <h2 className="text-xl font-bold text-white mb-6">رفع نموذج جديد</h2>
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="label">اسم النموذج</label>
                            <input type="text" className="input" placeholder="مثال: التوصية الأكاديمية القياسية" />
                        </div>
                        <div>
                            <label className="label">الفئة</label>
                            <select className="input bg-black/50">
                                <option>توصية أكاديمية</option>
                                <option>توصية مهنية</option>
                                <option>توصية بحثية</option>
                            </select>
                        </div>
                        <div>
                            <label className="label">ملف النموذج</label>
                            <div className="border-2 border-dashed border-white/10 rounded-lg p-8 text-center hover:bg-white/5 cursor-pointer transition-colors">
                                <svg className="w-10 h-10 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                                <p className="text-sm text-gray-400">انقر لرفع الملف أو اسحبه هنا</p>
                                <p className="text-xs text-gray-500 mt-1" dir="ltr">PDF, DOCX up to 5MB</p>
                            </div>
                        </div>
                        <button className="btn btn-primary w-full">رفع النموذج</button>
                    </form>
                </div>

                <div className="glass-panel">
                    <h2 className="text-xl font-bold text-white mb-6">النماذج الحالية</h2>
                    <div className="space-y-4">
                        {['Academic_Standard_v1.docx', 'Research_Generic.pdf', 'Professional_Internship.docx'].map((file, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    <span className="text-sm text-gray-300" dir="ltr">{file}</span>
                                </div>
                                <button className="text-xs text-red-400 hover:text-red-300">حذف</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
