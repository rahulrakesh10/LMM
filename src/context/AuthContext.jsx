import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for stored user on mount
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setCurrentUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        // Mock login
        return new Promise((resolve) => {
            setTimeout(() => {
                const user = { id: '1', email, name: 'Test User' };
                setCurrentUser(user);
                localStorage.setItem('user', JSON.stringify(user));
                resolve(user);
            }, 1000);
        });
    };

    const signup = async (email, password, name) => {
        // Mock signup
        return new Promise((resolve) => {
            setTimeout(() => {
                const user = { id: '1', email, name };
                setCurrentUser(user);
                localStorage.setItem('user', JSON.stringify(user));
                resolve(user);
            }, 1000);
        });
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('user');
    };

    const value = {
        currentUser,
        login,
        signup,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
