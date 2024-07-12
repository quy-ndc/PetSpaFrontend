import React, { useEffect, useState } from 'react';
import '../../../../../DoctorPage/DashboardItem/doctor-dashboard-item.css';
import './user-finished-appointment-item.css'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import StarIcon from '@mui/icons-material/Star';

interface UserAppointmentItemProp {
    time: string;
    type: string;
    name: string;
    service: string;
}

const UserFinishedAppointmentItem: React.FC<UserAppointmentItemProp> = ({
    time, type, name, service
}) => {

    return (
        <>
            <div className="doctor-dashboard-item">
                <span className='item-time'><AccessTimeFilledIcon />{time}</span>
                <h2 className='item-detail'>
                    {type} with
                    <span> Dr.{name} </span>
                </h2>
                <h3 style={{ color: 'black' }} className='item-service'><HealthAndSafetyIcon />{service}</h3>
                <button className='appointment-rate-button'><StarIcon /><span>Rate</span></button>
            </div>
        </>
    );
};

export default UserFinishedAppointmentItem;