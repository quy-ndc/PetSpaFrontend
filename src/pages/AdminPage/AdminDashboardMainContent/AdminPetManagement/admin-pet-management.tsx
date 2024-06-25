import React, { useState, useEffect } from 'react';
import '../AdminAccountManagement/admin-account-management.css';
import PetTable from './PetTable/pet-table';
import GraphWithFilter from '../../../../components/GraphsWithFilter/graph-wtih-filter';
import PetsIcon from '@mui/icons-material/Pets';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Tooltip } from '@mui/material';
import PetTrafficGraphWithFilter from '../../../../components/GraphsWithFilter/pet-traffic-graph-with-filter';
import { PetTrafficBreed } from './PetTraffic/pet-traffic-breed';
import { PetTrafficSpecies } from './PetTraffic/pet-traffic-species';

interface BodyOption {
    id: number;
    label: string;
    icon: React.ElementType;
}

const AdminPetManagement: React.FC = () => {

    const [selectedBody, setSelectedBody] = useState<React.ReactNode | null>(<PetTable />);
    const [selectedOption, setSelectedOption] = useState<number>(1);

    const bodyOptions: BodyOption[] = [
        { id: 1, label: 'Pet List', icon: PetsIcon },
        { id: 2, label: 'Pet Traffic', icon: DonutLargeIcon },
    ];

    const handleBodyChange = (bodyId: number) => {
        setSelectedBody(getSelectedChartComponent(bodyId));
        setSelectedOption(bodyId);
    };

    const getSelectedChartComponent = (bodyId: number): React.ReactNode => {
        switch (bodyId) {
            case 1:
                return <PetTable />;
            case 2:
                return <PetTrafficGraphWithFilter
                    graphBySpecies={<PetTrafficSpecies />}
                    description='Pet traffic'
                />;
            default:
                return <PetTable />;
        }
    };

    return (
        <>
            <div className="admin-account-management-container">
                <div className="admin-account-management-tabs">
                    <h1>PETS</h1>
                    {bodyOptions.map(option => (
                        <Tooltip title={option.label}>
                            <button
                                onClick={() => handleBodyChange(option.id)}
                                className={`admin-dashboard-user-filter-option${selectedOption === option.id ? ' selected-option' : ''}`}
                            >
                                <option.icon />
                            </button>
                        </Tooltip>
                    ))}
                </div>
                {selectedBody}
            </div>
        </>
    );
};


export default AdminPetManagement;