import React, { useEffect, useState } from 'react'
import './user-sidebar.css'
import SettingsIcon from '@mui/icons-material/Settings';
import PetsIcon from '@mui/icons-material/Pets';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import StarsIcon from '@mui/icons-material/Stars';
import { useUserProfile } from '../user-profile-context';
import api from '../../../../service/apiService';


const UserSidebar: React.FC = () => {

    const { selectedNavItem, setSelectedNavItem } = useUserProfile();
    const [account, setAccount] = useState<any>()
    const [loading, setLoading] = useState(true);
    const fetchCurrentUser = async () => {
        try {
            const response = await api.get(`user/currentUser/` + sessionStorage.getItem("jwtToken"));
            setAccount(response.data);
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
        <>
            <div className="user-profile-left-nav">
                <ul className="user-profile-left-nav-list">

                    <li
                        className={`user-profile-left-nav-link ${selectedNavItem === 'setting' ? 'active-user-option' : ''}`}
                        onClick={() => setSelectedNavItem('setting')}
                    >
                        <a>
                            <SettingsIcon />
                            Settings
                        </a>
                    </li>

                    <li
                        className={`user-profile-left-nav-link ${selectedNavItem === 'password' ? 'active-user-option' : ''}`}
                        onClick={() => setSelectedNavItem('password')}
                    >
                        <a>
                            <LockOpenIcon />
                            Password
                        </a>
                    </li>
                    {/* {account.role?.roleName == "customer" && ( */}
                        <>
                            <li
                                className={`user-profile-left-nav-link ${selectedNavItem === 'history' ? 'active-user-option' : ''}`}
                                onClick={() => setSelectedNavItem('history')}
                            >
                                <a>
                                    <CalendarMonthIcon />
                                    Appointments
                                </a>
                            </li>

                            <li
                                className={`user-profile-left-nav-link ${selectedNavItem === 'review' ? 'active-user-option' : ''}`}
                                onClick={() => setSelectedNavItem('review')}
                            >
                                <a>
                                    <StarsIcon />
                                    Reviews
                                </a>
                            </li>

                            <li
                                className={`user-profile-left-nav-link ${selectedNavItem === 'pets' ? 'active-user-option' : ''}`}
                                onClick={() => setSelectedNavItem('pets')}
                            >
                                <a>
                                    <PetsIcon />
                                    Pets
                                </a>
                            </li>
                        </>
                    {/* )} */}
                </ul>

            </div>
        </>
    )
}

export default UserSidebar