import React, { useState, useEffect } from 'react';
import '../../../../AdminPage/AdminDashboardMainContent/AdminAccountManagement/AccountTable/Filter/account-table-filter.css';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import { Drawer, Tooltip } from '@mui/material';
import AdminShelterCreateForm from './admin-shelter-create-form';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const ShelterTableAddButton: React.FC = () => {

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
            <AdminShelterCreateForm
                method='add'
            />
        </div>
    );


    return (
        <>
            <Tooltip title='Add service'>
                <button
                    className='account-table-add-button'
                    onClick={toggleDrawer("right", true)}
                >
                    <AddCircleOutlineTwoToneIcon />
                    <span>Add new service</span>
                </button>
            </Tooltip>
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


export default ShelterTableAddButton;