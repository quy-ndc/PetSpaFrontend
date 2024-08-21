import React, { useEffect, useState } from "react";
import "./user-pet-settings.css";
import UserPetItem from "./PetItem/user-pet-item";
import AddIcon from '@mui/icons-material/Add';
import { Drawer, Tooltip } from "@mui/material";
import UserPetCreateForm from "./PetCreateForm/pet-create-form";
import api from "../../../../../service/apiService";

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const UserPetSettings: React.FC = () => {

    const [account, setAccount] = useState<any>()
    const [loading, setLoading] = useState(true)
    const fetchCurrentUser = async () => {
        try {
            const response = await api.get(`user/currentUser/` + sessionStorage.getItem("jwtToken"));
            setAccount(response.data);
        } catch (error) {
            console.error("Error fetching account data:", error);
        }
    };
    useEffect(() => {
        fetchCurrentUser();
    }, []);

    const [pets, setPets] = useState<any[]>([]);
    const fetchAccountData = async () => {
        try {
            const response = await api.get(`/pet/${account.userId}/ownPet`);
            setPets(response.data.data);
        } catch (error) {
            console.error("Error fetching account data:", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (account) {
            fetchAccountData();
        }
    }, [account]);

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

    if (loading) {
        return <h1 style={{ color: "black" }}>LOADING</h1>
    }

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
                    {pets?.map((pet) => (
                        pet.status === 'ACTIVE' && (
                            <UserPetItem
                                key={pet.pet_id}
                                petid={pet.pet_id}
                                name={pet.pet_name}
                                species={pet.species}
                                breed={pet.type_of_species}
                                gender={pet.gender}
                                age={pet.age}
                            />
                        )
                    ))}
                </div>
            </div>
        </>
    );
};

export default UserPetSettings;

