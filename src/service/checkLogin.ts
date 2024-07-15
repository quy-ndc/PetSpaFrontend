import axios from 'axios';

interface RoleResponse {
    userId: number;
    userName: string;
    email: string;
    password: string;
    fullName: string;
    age: number;
    gender: string;
    address: string;
    phone: string;
    create_date: string;
    status: string;
    role: {
        roleId: number;
        roleName: string;
        status: string;
    };
}

export const checkLogin = async (): Promise<string | null> => {
    const token = sessionStorage.getItem('jwtToken');
    if (!token) {
        console.error('No token found in session storage');
        return null;
    }

    const url = `http://localhost:8080/petspa/user/currentUser/{token}?token=${token}`;
    try {
        const response = await axios.get<RoleResponse>(url);
        const roleName = response.data.role.roleName;
        return roleName;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
};
