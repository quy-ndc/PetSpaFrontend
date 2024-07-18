import React, { useEffect, useState } from 'react';
import './doctor-dashboard-item.css';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';

interface DoctorDashboardItemProp {
    time: string;
    type: string;
    gender: string;
    name: string;
    service: string;
}

const DoctorDashboardItem: React.FC<DoctorDashboardItemProp> = ({
    time, type, gender, name, service
}) => {

    return (
        <>
            <div className="doctor-dashboard-item">
                <span className='item-time'><AccessTimeFilledIcon />{time}</span>
                <h2 className='item-detail'>
                    {type} with
                    <span> {gender} </span>
                    <a >{name}</a>
                </h2>
                <h3 className='item-service'><HealthAndSafetyIcon />{service}</h3>
            </div>
        </>
    );
};

export default DoctorDashboardItem;