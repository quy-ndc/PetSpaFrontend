import React, { useEffect, useState } from 'react';
import './admin-dashboard.css';
import { AdminDashboardProvider } from './admin-dashboard-context';
import AdminDashboardSideNav from './AdminDashboardSideBar/admin-dashboard-side-bar';
import AdminDashoardMainContent from './AdminDashboardMainContent/admin-dashboard-main-content';

const AdminDashboard: React.FC = () => {

    return (
        <>
            <div className="admin-dashboard-container">
                <div className='admin-dashboard-main-content'>
                    <div className='admin-dashboard-nav-content-container'>
                        <AdminDashboardProvider>
                            <AdminDashboardSideNav />
                            <AdminDashoardMainContent />
                        </AdminDashboardProvider>
                    </div>
                </div>
            </div >
        </>
    );
};

export default AdminDashboard;