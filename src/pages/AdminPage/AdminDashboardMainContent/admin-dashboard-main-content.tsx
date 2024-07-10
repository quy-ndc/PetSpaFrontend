import React, { useEffect, useState } from "react";
import "./admin-dashboard-main-content.css";
import { useAdminDashboard } from "../admin-dashboard-context";
import AdminAccountManagement from "./AdminAccountManagement/admin-account-management";
import AdminServiceManagement from "./AdminServiceManagement/admin-service-management";
import AdminOverview from "./AdminOverview/admin-overview";
import AdminPetManagement from "./AdminPetManagement/admin-pet-management";
import AdminRevenueManagement from "./AdminRevenue/admin-revenue-management";
import AdminShelterManagement from "./AdminShelterManagement/admin-shelter-management";


const AdminDashoardMainContent: React.FC = () => {

    const { selectedNavItem } = useAdminDashboard();

    return (
        <div className="admin-dashboard-content">
            {selectedNavItem === "general" && (
                <>
                    <AdminOverview />
                </>
            )}

            {selectedNavItem === "account" && (
                <>
                    <AdminAccountManagement />
                </>
            )}

            {selectedNavItem === "pet" && (
                <>
                    <AdminPetManagement />
                </>
            )}

            {selectedNavItem === "service" && (
                <>
                    <AdminServiceManagement />
                </>
            )}

            {selectedNavItem === "shelter" && (
                <>
                    <AdminShelterManagement />
                </>
            )}

            {selectedNavItem === "revenue" && (
                <>
                    <AdminRevenueManagement />
                </>
            )}
        </div>
    );
};

export default AdminDashoardMainContent;