import React, { useEffect, useState } from "react";
import "../../../AdminPage/AdminDashboardMainContent/admin-dashboard-main-content.css"
import { useUserProfile } from "../user-profile-context";
import AccountSetting from "./AccountSetting/account-setting";
import PasswordSetting from "./PasswordSetting/password-setting";
import UserAppointment from "./Appointment/OtherAppointment/user-appointment";
import UserAppointmentItemList from "./Appointment/OtherAppointment/user-appointment-item-list";
import UserFinishedAppointmentItemList from "./Appointment/FinishedAppointment/user-finished-appointment-list";
import UserPetSettings from "./PetSettings/user-pet-settings";
import UserOverview from "./UserOverview/user-overview";
import UserReviewList from "./UserReview/user-review-list";
import UserDoneAppointmentItemList from "./Appointment/FinishedAppointment/user-done-appoitment-list";

const UserProfileMainContent: React.FC = () => {

    const { selectedNavItem } = useUserProfile();

    return (
        <>
            <div className="admin-dashboard-content">
                {selectedNavItem === "overview" && (
                    <>
                        <UserOverview />
                    </>
                )}

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
                            futureAppointment={<UserAppointmentItemList />}
                            pastAppointment={<UserFinishedAppointmentItemList />}
                            finishAppointment={<UserDoneAppointmentItemList />}
                        />
                    </>
                )}

                {selectedNavItem === "review" && (
                    <>
                        <UserReviewList />
                    </>
                )}

                {selectedNavItem === "pets" && (
                    <>
                        <UserPetSettings />
                    </>
                )}
            </div >
        </>
    );
};

export default UserProfileMainContent;