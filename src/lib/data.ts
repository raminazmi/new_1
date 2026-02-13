export type UserRole = 'student' | 'recommender' | 'admin';

export interface User {
    id: string;
    name: string;
    email: string;
    password?: string;
    role: UserRole;
    gpa?: number;
    graduated?: boolean;
    department?: string;
}

export interface Request {
    id: string;
    studentId: string;
    recommenderId: string;
    recommenderName: string;
    studentName: string;
    type: 'أكاديمية' | 'مهنية' | 'بحثية';
    status: 'قيد الانتظار' | 'تمت الموافقة' | 'مرفوض' | 'مكتمل';
    universityName?: string;
    universityEmail?: string;
    createdAt: string;
    content?: string; // The recommendation letter text
}

// Mock Database
export const users: User[] = [
    {
        id: 's1',
        name: 'أحمد بن عبدالله', // Ahmed
        email: 'student@nu.edu.sa',
        password: '123',
        role: 'student',
        gpa: 4.8,
        graduated: true,
        department: 'نظم المعلومات' // IS
    },
    {
        id: 's2',
        name: 'سارة محمد', // Sarah
        email: 'sarah@nu.edu.sa',
        password: '123',
        role: 'student',
        gpa: 3.5,
        graduated: false, // Not eligible
        department: 'علوم الحاسب' // CS
    },
    {
        id: 'r1',
        name: 'د. محمد علي', // Dr. Mohammed Ali
        email: 'dr@nu.edu.sa',
        password: '123',
        role: 'recommender',
        department: 'نظم المعلومات'
    },
    {
        id: 'a1',
        name: 'مدير النظام', // Admin
        email: 'admin@nu.edu.sa',
        password: '123',
        role: 'admin'
    }
];

export const mockRequests: Request[] = [
    {
        id: 'req1',
        studentId: 's1',
        recommenderId: 'r1',
        recommenderName: 'د. محمد علي',
        studentName: 'أحمد بن عبدالله',
        type: 'أكاديمية',
        status: 'قيد الانتظار',
        universityName: 'جامعة الملك سعود',
        universityEmail: 'admissions@ksu.edu.sa',
        createdAt: '2026-02-12'
    }
];

export const login = (email: string, pass: string): User | null => {
    const user = users.find(u => u.email === email && u.password === pass);
    if (!user) return null;

    if (user.role === 'student' && (!user.graduated || (user.gpa && user.gpa < 4.0))) {
        // Checking eligibility strictly as requested
        if (!user.graduated || (user.gpa && user.gpa < 4.0)) {
            throw new Error("فشل التحقق من الأهلية: يجب أن يكون المعدل >= 4.0 وأن يكون الطالب خريجاً.");
        }
    }
    return user;
};
