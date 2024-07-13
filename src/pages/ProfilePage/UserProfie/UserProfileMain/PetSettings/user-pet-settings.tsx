import React, { useEffect, useState } from "react";
import "./user-pet-settings.css";
import UserPetItem from "./PetItem/user-pet-item";

const UserPetSettings: React.FC = () => {

    return (
        <>
            <div className="user-profile-pet-container">
                <h1>Your pets</h1>
                <div className="user-profile-pet-list">
                    <UserPetItem
                        name="Jake"
                        species="Dog"
                        breed="Husky"
                        gender="Male"
                        age={1}
                    />
                    <UserPetItem
                        name="Fiona"
                        species="Cat"
                        breed="Orange"
                        gender="Female"
                        age={3}
                    />
                    <UserPetItem
                        name="Kenny"
                        species="Bird"
                        breed="Tulip"
                        gender="Male"
                        age={3}
                    />
                </div>
            </div>
        </>
    );
};

export default UserPetSettings;