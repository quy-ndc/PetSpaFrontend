import React, { useEffect, useState } from "react";
import "../../../AdminPage/AdminDashboardMainContent/admin-dashboard-main-content.css"
import { useUserProfile } from "../user-profile-context";
import AccountSetting from "./AccountSetting/account-setting";
import PasswordSetting from "./PasswordSetting/password-setting";
import UserAppointment from "./Appointment/OtherAppointment/user-appointment";
import UserAppointmentItemList from "./Appointment/OtherAppointment/user-appointment-item-list";
import UserFinishedAppointmentItemList from "./Appointment/FinishedAppointment/user-finished-appointment-list";
import UserPetSettings from "./PetSettings/user-pet-settings";

const UserProfileMainContent: React.FC = () => {

    const { selectedNavItem } = useUserProfile();

    return (
        <>
            <div className="admin-dashboard-content">
                {selectedNavItem === "setting" && (
                    <>
                        <AccountSetting />
                    </>
                )}

                {selectedNavItem === "password" && (
                    <>
                        <PasswordSetting />
                    </>
                )}

                {selectedNavItem === "history" && (
                    <>
                        <UserAppointment
                            futureAppointment={<UserAppointmentItemList date="June 22 - Saturday" />}
                            pastAppointment={<UserFinishedAppointmentItemList date="June 22 - Saturday" />}
                            onGoingAppointment={<UserAppointmentItemList date="June 22 - Saturday" />}
                        />
                    </>
                )}

                {selectedNavItem === "pets" && (
                    <>
                        <UserPetSettings />
                    </>
                )}
            </div>
        </>
    );
};

export default UserProfileMainContent;