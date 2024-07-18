import React, { useState, useEffect } from 'react';
import '../../../AdminAccountManagement/AccountTable/CreateForm/account-table-update-button.css';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import { Drawer, Tooltip } from '@mui/material';
import AdminServiceCreateForm from './admin-service-create-form';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface ServiceProp {
    serviceId: string;
    name: string;
    type: string;
    description: string;
    price: string;
    discount: string;
}


const AccountTableEditButton: React.FC<ServiceProp> = ({ serviceId, name, type, description, price, discount }) => {

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
            <AdminServiceCreateForm
                method='update'
                serviceId={serviceId}
                name={name}
                type={type}
                description={description}
                price={price}
                discount={discount}
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