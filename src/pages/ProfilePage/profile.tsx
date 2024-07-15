import React, { useEffect, useState } from 'react'
import { UserProfileProvider } from './UserProfie/user-profile-context'
import UserSideBar from './UserProfie/UserProfileSide/user-sidebar'
import UserProfileMainContent from './UserProfie/UserProfileMain/user-profile-main'
import './user-profile.css'
import api from '../../service/apiService'

const Profile: React.FC = () => {

    const [account, setAccount] = useState<any>();
    const [loading, setLoading] = useState(true);

    const fetchCurrentUser = async () => {
        try {
            if (sessionStorage.getItem("jwtToken") == null) {
                window.location.href = "http://localhost:5173"
            }
            const response = await api.get(`user/currentUser/` + sessionStorage.getItem("jwtToken"));
            setAccount(response.data)
        } catch (error) {
            console.error("Error fetching account data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    if (loading) {
        return <h1 style={{ color: 'black' }}>LOADING</h1>
    }

    return (
        <div className="user-profile-container">
            <div className='user-profile-main-content' >
                <div className='user-profile-nav-content-container'>
                    <UserProfileProvider>
                        <UserSideBar />
                        <UserProfileMainContent />
                    </UserProfileProvider>
                </div>
            </div>
        </div>
    )
}

export default Profile
