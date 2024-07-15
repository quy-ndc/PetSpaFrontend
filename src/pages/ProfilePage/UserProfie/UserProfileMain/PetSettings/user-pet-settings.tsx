import React, { useEffect, useState } from "react";
import "./user-pet-settings.css";
import UserPetItem from "./PetItem/user-pet-item";
import AddIcon from '@mui/icons-material/Add';
import { Drawer, Tooltip } from "@mui/material";
import UserPetCreateForm from "./PetCreateForm/pet-create-form";

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const UserPetSettings: React.FC = () => {

    const [state, setState] = useState({
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

    const CreateForm = (anchor: Anchor) => (
        <UserPetCreateForm
            method="Add"
        />
    );

    return (
        <>
            <div className="user-profile-pet-container">
                <div className="user-profile-pet-top">
                    <h1>Your pets</h1>
                    <Tooltip title="Add pet">
                        <>
                            <button className='appointment-rate-button'
                                onClick={toggleDrawer("right", true)}
                            >
                                <AddIcon />
                                <span>Add pet</span>
                            </button>
                            <Drawer
                                anchor={"right"}
                                open={state["right"]}
                                onClose={toggleDrawer("right", false)}
                            >
                                {CreateForm("right")}
                            </Drawer>
                        </>
                    </Tooltip>
                </div>
                <div className="user-profile-pet-list">
                    <UserPetItem
                        name="Jake"
                        species="Dog"
                        breed="Husky"
                        gender="Male"
                        age="1"
                    />
                    <UserPetItem
                        name="Fiona"
                        species="Cat"
                        breed="Orange"
                        gender="Female"
                        age="3"
                    />
                    <UserPetItem
                        name="Kenny"
                        species="Bird"
                        breed="Tulip"
                        gender="Male"
                        age='6F'
                    />
                </div>
            </div>
        </>
    );
};

export default UserPetSettings;