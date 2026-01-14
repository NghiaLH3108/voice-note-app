export const validateEmail = (email: string): string | null => {
    if (!email.trim()) return 'Email is required';
    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regex.test(email)) return 'Invalid email format';

    return null;
};

export const validatePassword = (password: string): string | null => {
    if (!password) return 'Password is required';

    if (password.length < 6) return 'Password must be at least 6 characters';

    return null;
};

export const validateFullName  = (name: string): string | null => {
    if (!name) return 'Full Name is required';

    if (name.trim().length < 2) return 'Full name is too short';

    return null;
};