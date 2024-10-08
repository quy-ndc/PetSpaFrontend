import React, { useEffect, useState } from 'react';
import './admin-dashboard-side-bar.css';
import { useAdminDashboard } from '../admin-dashboard-context';
import GroupsIcon from '@mui/icons-material/Groups';
import PetsIcon from '@mui/icons-material/Pets';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import SettingsIcon from '@mui/icons-material/Settings';
import RemoveFromQueueIcon from '@mui/icons-material/RemoveFromQueue';
import HomeIcon from '@mui/icons-material/Home';

const AdminDashboardSideNav: React.FC = () => {

    const { selectedNavItem, setSelectedNavItem } = useAdminDashboard();

    return (
        <div className="admin-dashboard-left-nav">

            <ul className="admin-dashboard-left-nav-list">
                {/* <li
                        className={`admin-dashboard-left-nav-link ${selectedNavItem === 'general' ? 'active-dashboard-option' : ''}`}
                        onClick={() => setSelectedNavItem('general')}
                    >
                        <a>
                            <RemoveFromQueueIcon />
                            Overview
                        </a>
                    </li> */}

                <li
                    className={`admin-dashboard-left-nav-link ${selectedNavItem === 'account' ? 'active-dashboard-option' : ''}`}
                    onClick={() => setSelectedNavItem('account')}
                >
                    <a>
                        <GroupsIcon />
                        Accounts
                    </a>
                </li>

                <li
                    className={`admin-dashboard-left-nav-link ${selectedNavItem === 'pet' ? 'active-dashboard-option' : ''}`}
                    onClick={() => setSelectedNavItem('pet')}
                >
                    <a>
                        <PetsIcon />
                        Pets
                    </a>
                </li>

                <li
                    className={`admin-dashboard-left-nav-link ${selectedNavItem === 'service' ? 'active-dashboard-option' : ''}`}
                    onClick={() => setSelectedNavItem('service')}
                >
                    <a>
                        <SettingsIcon />
                        Services
                    </a>
                </li>
                {/* 
                <li
                    className={`admin-dashboard-left-nav-link ${selectedNavItem === 'shelter' ? 'active-dashboard-option' : ''}`}
                    onClick={() => setSelectedNavItem('shelter')}
                >
                    <a>
                        <HomeIcon />
                        Shelter
                    </a>
                </li> */}

                {/* <li
                        className={`admin-dashboard-left-nav-link ${selectedNavItem === 'revenue' ? 'active-dashboard-option' : ''}`}
                        onClick={() => setSelectedNavItem('revenue')}
                    >
                        <a>
                            <ShowChartIcon />
                            Revenue
                        </a>
                    </li> */}
            </ul>

        </div>
    );
};

export default AdminDashboardSideNav;