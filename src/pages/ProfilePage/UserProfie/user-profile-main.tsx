import React, { useEffect, useState } from "react";
import "./user-profile-main.css";
import { useUserProfile } from "./user-profile-context";


const UserProfileMainContent: React.FC = () => {

    const { selectedNavItem } = useUserProfile();

    return (
        <>
            <div className="admin-dashboard-content">
                {selectedNavItem === "setting" && (
                    <>
                        <h1>SETTINGS</h1>
                    </>
                )}

                {selectedNavItem === "password" && (
                    <>
                        <h1>PASSWORD</h1>
                    </>
                )}

                {selectedNavItem === "history" && (
                    <>
                        <h1>HISTORY</h1>
                    </>
                )}

                {selectedNavItem === "pets" && (
                    <>
                        <h1>PETS</h1>
                    </>
                )}
            </div>
        </>
    );
};

export default UserProfileMainContent;