import { useState, useEffect } from 'react';
import { fetchUser } from '../service/userService';

const useUser = (id: number) => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const userData = await fetchUser(id);
                setUser(userData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getUser();
    }, [id]);

    return { user, loading, error };
};

export default useUser;
