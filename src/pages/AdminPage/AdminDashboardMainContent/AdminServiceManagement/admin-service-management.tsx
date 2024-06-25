import React, { useState, useEffect } from 'react';
import '../AdminAccountManagement/admin-account-management.css'
import ServiceTable from './ServiceTable/service-table';

import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import { Tooltip } from '@mui/material';
import GraphWithFilter from '../../../../components/GraphsWithFilter/graph-wtih-filter';
import { MostEarningServiceWeek } from './MostEarningServiceGraph/most-earning-service-week';

interface BodyOption {
    id: number;
    label: string;
    icon: React.ElementType;
}

const AdminServiceManagement: React.FC = () => {

    const [selectedBody, setSelectedBody] = useState<React.ReactNode | null>(<ServiceTable />);
    const [selectedOption, setSelectedOption] = useState<number>(1);

    const bodyOptions: BodyOption[] = [
        { id: 1, label: 'Service List', icon: MiscellaneousServicesIcon },
        { id: 2, label: 'Most earning service', icon: CurrencyExchangeIcon },
        { id: 3, label: 'Most used service', icon: DonutSmallIcon },
    ];

    const handleBodyChange = (bodyId: number) => {
        setSelectedBody(getSelectedChartComponent(bodyId));
        setSelectedOption(bodyId);
    };

    const getSelectedChartComponent = (bodyId: number): React.ReactNode => {
        switch (bodyId) {
            case 1:
                return <ServiceTable />;
            case 2:
                return <GraphWithFilter
                    graphByWeek={<MostEarningServiceWeek />}
                    graphByMonth={<h1>month</h1>}
                    graphByYear={<h1>year</h1>}
                    graphByAllTime={<h1>all</h1>}
                    description='Most earning service'
                />
            case 3:
                return <GraphWithFilter
                    graphByWeek={<h1>Week</h1>}
                    graphByMonth={<h1>Motnh</h1>}
                    graphByYear={<h1>Year</h1>}
                    graphByAllTime={<h1>All</h1>}
                    description='Most used service'
                />
            default:
                return <ServiceTable />;
        }
    };

    return (
        <>
            <div className="admin-account-management-container">
                <div className="admin-account-management-tabs">
                    <h1>SERVICES</h1>
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


export default AdminServiceManagement;