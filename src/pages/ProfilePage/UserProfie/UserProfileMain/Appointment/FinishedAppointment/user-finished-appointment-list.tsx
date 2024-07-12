import React, { useEffect, useState } from 'react';
import '../../../../../DoctorPage/DashboardItemList/doctor-dashboard-item-list.css';
import UserFinishedAppointmentItem from './user-finished-appointment-item';

interface UserAppointmentItemListProp {
    date: string;
}

const UserFinishedAppointmentItemList: React.FC<UserAppointmentItemListProp> = ({ date }) => {

    return (
        <>
            <div className="doctor-dashboard-item-list" style={{ padding: 12 }}>
                <div className="doctor-dashboard-item-list-right">
                    <h4 style={{ color: 'black' }}>{date}</h4>
                    <div className="doctor-dashboard-items">
                        <UserFinishedAppointmentItem
                            time='12:30 AM'
                            type='Appointment'
                            name='Andy Wood'
                            service='Grooming'
                        />
                        <UserFinishedAppointmentItem
                            time='3:20 PM'
                            type='Apppointment'
                            name='Jaden Katy'
                            service='Medical bath'
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserFinishedAppointmentItemList;