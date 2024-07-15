import React from "react";
import "./user-pet-item.css";
import Drawer from '@mui/material/Drawer';
import UserPetCreateForm from "../PetCreateForm/pet-create-form";

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface UserPetItemProp {
    petid: string;
    name: string;
    gender: string;
    age: string;
    species: string;
    breed: string | null;
}

const UserPetEdit: React.FC<UserPetItemProp> = ({ petid, name, gender, age, species, breed }) => {

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

    const PetEdit = (anchor: Anchor) => (
        <div
            className="medical-record-drawer"
            role="presentation"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
        >
            <UserPetCreateForm
                method="update"
                petid={petid}
                name={name}
                gender={gender}
                age={age}
                species={species}
                breed={breed || ""}
            />
        </div>
    );

    return (
        <>
            <button
                className="user-profile-pet-edit"
                onClick={toggleDrawer("right", true)}
            >
                Edit
            </button>
            <Drawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
            >
                {PetEdit("right")}
            </Drawer>
        </>
    );
};

export default UserPetEdit;
