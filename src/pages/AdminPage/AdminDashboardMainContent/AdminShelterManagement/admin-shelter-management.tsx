import React, { useState, useEffect } from 'react';
import '../AdminAccountManagement/admin-account-management.css'
import ShelterTable from './shelter-table';


const AdminShelterManagement: React.FC = () => {


    return (
        <>
            <div className="admin-account-management-container">
                <div className="admin-account-management-tabs">
                    <h1>SHELTER</h1>
                </div>
                <ShelterTable />
            </div>
        </>
    );
};


export default AdminShelterManagement;