import React, { useEffect, useState } from 'react';
import '../../../../../DoctorPage/DashboardItem/doctor-dashboard-item.css';
import './user-finished-appointment-item.css'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import StarIcon from '@mui/icons-material/Star';
import { Drawer } from '@mui/material';

interface UserAppointmentItemProp {
    time: string;
    type: string;
    name: string;
    service: string;
}

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const UserFinishedAppointmentItem: React.FC<UserAppointmentItemProp> = ({
    time, type, name, service
}) => {

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <div
            className="service-rate-drawer"
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
        </div>
    );


    return (
        <>
            <div className="doctor-dashboard-item">
                <span className='item-time'><AccessTimeFilledIcon />{time}</span>
                <h2 className='item-detail'>
                    {type} with
                    <span> Dr.{name} </span>
                </h2>
                <h3 style={{ color: 'black' }} className='item-service'><HealthAndSafetyIcon />{service}</h3>
                <button
                    className='appointment-rate-button'
                    onClick={toggleDrawer("right", true)}
                >
                    <StarIcon />
                    <span>Rate</span>
                </button>
                <Drawer
                    anchor={"right"}
                    open={state["right"]}
                    onClose={toggleDrawer("right", false)}
                >
                    {list("right")}
                </Drawer>
            </div>
        </>
    );
};

export default UserFinishedAppointmentItem;