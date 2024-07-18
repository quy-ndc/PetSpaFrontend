import React from 'react';
import './doctor-dashboard.css';
import DoctorDashboardItemList from './DashboardItemList/doctor-dashboard-item-list';



const DoctorDashboard: React.FC = () => {

    return (
        <>
            <div className="doctor-dashboard-container">
                <h1>Schedule</h1>
                <div className='doctor-dashboard-items-container'>
                    <DoctorDashboardItemList />
                </div>
            </div>
        </>
    );
};

export default DoctorDashboard;