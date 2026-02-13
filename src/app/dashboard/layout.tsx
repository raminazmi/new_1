import Sidebar from '@/components/Sidebar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen bg-[#fafbfc] text-[#1f2937] font-tajawal">
            {/* Sidebar Container */}
            <div className="hidden lg:block">
                <Sidebar />
            </div>

            {/* Main content */}
            <main className="flex-1 p-4 lg:p-8 relative z-10 w-full lg:max-w-[calc(100vw-16rem)]">
                <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
                    {children}
                </div>
            </main>

            {/* Background Accent */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
            </div>
        </div>
    );
}
