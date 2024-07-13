import React from 'react'
import './user-sidebar.css'
import SettingsIcon from '@mui/icons-material/Settings';
import PetsIcon from '@mui/icons-material/Pets';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useUserProfile } from '../user-profile-context';


const UserSidebar: React.FC = () => {

    const { selectedNavItem, setSelectedNavItem } = useUserProfile();

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
                        className={`user-profile-left-nav-link ${selectedNavItem === 'pets' ? 'active-user-option' : ''}`}
                        onClick={() => setSelectedNavItem('pets')}
                    >
                        <a>
                            <PetsIcon />
                            Pets
                        </a>
                    </li>
                </ul>

            </div>
        </>
    )
}

export default UserSidebar