import React, { useState, useEffect } from 'react';
import './account-table-update-button.css';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import { Drawer, Tooltip } from '@mui/material';
import AdminAccountCreateForm from './admin-account-create-form';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface UserProps {
    userId: string;
    fullName: string;
    userName: string;
    email: string;
    age: string;
    gender: string;
    address: string;
    phone: string;
    role: string;
}


const AccountTableEditButton: React.FC<UserProps> = ({ userId, fullName, userName, email, age, gender, address, phone, role }) => {

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
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
            className="data-table-create-item"
            role="presentation"
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => event.stopPropagation()}
        >
            <AdminAccountCreateForm
                method='update'
                userId={userId}
                fullName={fullName}
                userName={userName}
                email={email}
                age={age}
                gender={gender}
                address={address}
                phone={phone}
                role={role}
            />
        </div>
    );


    return (
        <>
            <button
                className='account-table-edit-button'
                onClick={toggleDrawer("right", true)}
            >
                <span> Edit</span>
            </button>

            <Drawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
            >
                {list("right")}
            </Drawer>
        </>
    );
};


export default AccountTableEditButton;