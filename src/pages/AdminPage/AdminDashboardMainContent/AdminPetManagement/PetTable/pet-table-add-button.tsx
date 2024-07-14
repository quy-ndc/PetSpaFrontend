import React, { useState, useEffect } from 'react';
import '../../AdminAccountManagement/AccountTable/account-table.css';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import { Drawer, Tooltip } from '@mui/material';
import UserPetCreateForm from '../../../../ProfilePage/UserProfie/UserProfileMain/PetSettings/PetCreateForm/pet-create-form';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const PetTableAddButton: React.FC = () => {

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
            <UserPetCreateForm
                method='add'
            />
        </div>
    );


    return (
        <>
            <Tooltip title='Add pet'>
                <button
                    onClick={toggleDrawer("right", true)}
                    className='account-table-add-button'
                >
                    <AddCircleOutlineTwoToneIcon />
                    <span>Add new pet</span>
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


export default PetTableAddButton;