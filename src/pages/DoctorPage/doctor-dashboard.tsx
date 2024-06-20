import React, { useEffect, useState } from 'react';
import './doctor-dashboard.css';
import DoctorDashboardItemList from './DashboardItemList/doctor-dashboard-item-list';

const DateList = [
    {
        date: 'June 19 - Wednesday'
    },
    {
        date: 'June 22 - Saturday'
    },
    {
        date: 'June 25 - Tuesday'
    }
]

const DoctorDashboard: React.FC = () => {

    return (
        <>
            <div className="doctor-dashboard-container">
                <h1>Schedule</h1>
                <div className='doctor-dashboard-items-container'>
                    {DateList.map((date) => (
                        <DoctorDashboardItemList date={date.date} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default DoctorDashboard;