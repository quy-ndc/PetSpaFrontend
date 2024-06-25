import React, { useEffect, useState } from 'react';
import './doctor-dashboard-item-list.css';
import DoctorDashboardItem from '../DashboardItem/doctor-dashboard-item';

interface DoctorDashboardItemListProp {
    date: string;
}

const DoctorDashboardItemList: React.FC<DoctorDashboardItemListProp> = ({ date }) => {

    return (
        <>
            <div className="doctor-dashboard-item-list">
                <div className="doctor-dashboard-item-list-left">
                    <div className='list-line' />
                </div>
                <div className="doctor-dashboard-item-list-right">
                    <h4><div className='date-dot'>•</div>{date}</h4>
                    <div className="doctor-dashboard-items">
                        <DoctorDashboardItem
                            time='12:30 AM'
                            type='Appointment'
                            gender='Mr'
                            name='Andy Wood'
                            service='Grooming'
                        />
                        <DoctorDashboardItem
                            time='3:20 PM'
                            type='Apppointment'
                            gender='Mrs'
                            name='Jaden Katy'
                            service='Medical bath'
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DoctorDashboardItemList;