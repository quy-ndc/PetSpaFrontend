import React, { useState, useEffect } from 'react';
import '../AdminAccountManagement/admin-account-management.css';
import GraphWithFilter from '../../../../components/GraphsWithFilter/graph-wtih-filter';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import { Tooltip } from '@mui/material';
import { EarningWeek } from './RevenueChart/Earning/earning-chart-week';
import { EarningMonth } from './RevenueChart/Earning/earning-chart-month';
import { EarningYear } from './RevenueChart/Earning/earning-chart-year';
import { TotalRevenueWeek } from './RevenueChart/TotalRevenue/total-revenue-week';
import { TotalRevenueMonth } from './RevenueChart/TotalRevenue/total-revenue-month';
import { TotalRevenueYear } from './RevenueChart/TotalRevenue/total-revenue-year';


interface BodyOption {
    id: number;
    label: string;
    icon: React.ElementType;
}

const AdminRevenueManagement: React.FC = () => {

    const [selectedBody, setSelectedBody] = useState<React.ReactNode | null>(<GraphWithFilter
        graphByWeek={<EarningWeek />}
        graphByMonth={<EarningMonth />}
        graphByYear={<EarningYear />}
        graphByAllTime={<h1>All</h1>}
        description='Earning'
    />);
    const [selectedOption, setSelectedOption] = useState<number>(1);

    const bodyOptions: BodyOption[] = [
        { id: 1, label: 'Earning', icon: SsidChartIcon },
        { id: 2, label: 'Total revenue', icon: TroubleshootIcon },
    ];



    const handleBodyChange = (bodyId: number) => {
        setSelectedBody(getSelectedChartComponent(bodyId));
        setSelectedOption(bodyId);
    };

    const getSelectedChartComponent = (bodyId: number): React.ReactNode => {
        switch (bodyId) {
            case 1:
                return <GraphWithFilter
                    graphByWeek={<EarningWeek />}
                    graphByMonth={<EarningMonth />}
                    graphByYear={<EarningYear />}
                    graphByAllTime={<h1>All</h1>}
                    description='Earning'
                />;
            case 2:
                return <GraphWithFilter
                    graphByWeek={<TotalRevenueWeek />}
                    graphByMonth={<TotalRevenueMonth />}
                    graphByYear={<TotalRevenueYear />}
                    graphByAllTime={<h1>All</h1>}
                    description='Total revenue'
                />;
            default:
                return <GraphWithFilter
                    graphByWeek={<EarningWeek />}
                    graphByMonth={<EarningMonth />}
                    graphByYear={<EarningYear />}
                    graphByAllTime={<h1>All</h1>}
                    description='Earning'
                />;
        }
    };

    return (
        <>
            <div className="admin-account-management-container">
                <div className="admin-account-management-tabs">
                    <h1>REVENUE</h1>
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


export default AdminRevenueManagement;