import React, { useState, useEffect } from 'react';
import './admin-account-management.css';
import AccountTable from './AccountTable/account-table';
import GraphWithFilter from '../../../../components/GraphsWithFilter/graph-wtih-filter';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PieChartIcon from '@mui/icons-material/PieChart';
import { Tooltip } from '@mui/material';
import { NewAccountWeek } from './NewAccountGraph/new-account-graph-week';
import { NewAccountMonth } from './NewAccountGraph/new-account-graph-month';
import { NewAccountYear } from './NewAccountGraph/new-account-graph-year';
import AccountTrafficGraphWithFilter from '../../../../components/GraphsWithFilter/account-traffic-graph-wtih-filter';
import { AccountTrafficGender } from './AccountTraffic/account-traffic-gender';
import { AccountTrafficAge } from './AccountTraffic/account-traffic-age';

interface BodyOption {
    id: number;
    label: string;
    icon: React.ElementType;
}

const AdminAccountManagement: React.FC = () => {

    const [selectedBody, setSelectedBody] = useState<JSX.Element | null>(<AccountTable />);
    const [selectedOption, setSelectedOption] = useState<number>(1);

    const bodyOptions: BodyOption[] = [
        { id: 1, label: 'Account List', icon: AccountBoxIcon },
        { id: 2, label: 'New Accounts Graph', icon: EqualizerIcon },
        { id: 3, label: 'Account Traffic', icon: PieChartIcon },
    ];

    const handleBodyChange = (bodyId: number) => {
        setSelectedBody(getSelectedChartComponent(bodyId));
        setSelectedOption(bodyId);
    };

    const getSelectedChartComponent = (bodyId: number): JSX.Element => {
        switch (bodyId) {
            case 1:
                return <AccountTable />;
            case 2:
                return <GraphWithFilter
                    graphByWeek={<NewAccountWeek />}
                    graphByMonth={<NewAccountMonth />}
                    graphByYear={<NewAccountYear />}
                    graphByAllTime={<h1>ALL</h1>}
                    description='Total accounts'
                />;
            case 3:
                return <AccountTrafficGraphWithFilter
                    graphByAge={<AccountTrafficAge />}
                    graphByGender={<AccountTrafficGender />}
                    description='Account traffic'
                />
            default:
                return <AccountTable />;
        }
    };

    return (
        <>
            <div className="admin-account-management-container">
                <div className="admin-account-management-tabs">
                    <h1>ACCOUNTS</h1>
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


export default AdminAccountManagement;