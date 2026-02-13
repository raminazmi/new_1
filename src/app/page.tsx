"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfdfe] selection:bg-primary/10 selection:text-primary overflow-x-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[80px]" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Modern Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "py-3 glass shadow-lg border-b border-white/20"
          : "py-6 bg-transparent"
          }`}
      >
        <div className="container mx-auto px-6 sm:px-12 flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-2xl shadow-colored transform group-hover:rotate-6 transition-transform">
              ت
            </div>
            <div>
              <span className="text-2xl font-black text-slate-800 tracking-tight block leading-none">منصة توصيات</span>
              <span className="text-[10px] text-primary font-bold mt-1 tracking-widest uppercase block">Academic Portal</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/login"
              className="hidden sm:block text-slate-600 font-bold hover:text-primary transition-colors text-sm"
            >
              عن المنصة
            </Link>
            <Link
              href="/login"
              className="btn btn-primary px-8 py-3 text-sm shadow-xl hover:shadow-primary/30 transition-all"
            >
              دخول النظام
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow !pt-14 z-10">
        <div className="container px-6 sm:px-12">
          <div className="text-center !py-6">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-3 !px-6 !py-2 rounded-full bg-white/80 border border-slate-200 shadow-sm mb-10 animate-fade-in backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">متاح الآن لجميع الخريجين</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-8 animate-fade-in translate-y-0">
              مستقبلك يبدأ من <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-light to-secondary">توصية موثوقة.</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              المنصة الرسمية لإصدار ومتابعة التوصيات العلمية لكلية علوم الحاسب ونظم المعلومات. أتمتة كاملة، أمان فائق، وسرعة في الإنجاز.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link
                href="/login"
                className="btn btn-primary px-10 py-5 text-lg shadow-2xl w-full sm:w-auto hover:scale-105 transition-transform group"
              >
                قدم طلبك الآن
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/login"
                className="btn btn-secondary px-10 py-5 text-lg w-full sm:w-auto hover:bg-slate-50 transition-colors"
              >
                شاهد كيف يعمل
              </Link>
            </div>
          </div>

          {/* Feature Highlight Section */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 text-right animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {/* Feature 1 */}
            <div className="glass-card p-10 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary opacity-20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-4">أمان وتشفير كامل</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                تعتمد المنصة أعلى معايير التشفير لضمان سرية التوصيات وصحتها، مع الربط المباشر بنظام الجامعة الأكاديمي.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-card p-10 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-secondary opacity-20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-4">إرسال فوري ومباشر</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                يتم إرسال التوصيات الأكاديمية فور اعتمادها إلى الجامعات المستهدفة عبر قنوات إلكترونية آمنة وسريعة.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-card p-10 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-accent opacity-20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-4">متابعة دقيقة للطلبات</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                لوحة تحكم تفاعلية تمكنك من متابعة حالة طلبك خطوة بخطوة، مع تنبيهات فورية عند أي تحديث جديد.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Modern Footer */}
      <footer className="bg-white border-t border-slate-100 !py-2 relative z-10">
        <div className="container mx-auto px-6 sm:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900/5 flex items-center justify-center text-slate-800 font-bold text-xl">
                ت
              </div>
              <div className="text-right">
                <p className="text-slate-800 font-extrabold text-sm">جامعة نجران</p>
                <p className="text-slate-400 text-xs font-bold">كلية علوم الحاسب ونظم المعلومات</p>
              </div>
            </div>

            <div className="flex items-center gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
              <span>جميع الحقوق محفوظة © {new Date().getFullYear()}</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:text-primary transition-colors cursor-pointer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </div>
              <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:text-primary transition-colors cursor-pointer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
