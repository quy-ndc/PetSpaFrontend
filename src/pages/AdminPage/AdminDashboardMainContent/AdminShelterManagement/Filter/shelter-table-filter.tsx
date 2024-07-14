import React from "react";
import '../../../AdminDashboardMainContent/AdminAccountManagement/AccountTable/Filter/account-table-filter.css'
import { Popover, Tooltip } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';

const ShelterTableFilter: React.FC = () => {

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <>
            <Tooltip title="Filter">
                <button
                    className='account-table-filter-button'
                    aria-describedby={id}
                    onClick={handleClick}
                >
                    <FilterListIcon />
                    <span>Filter</span>
                </button>
            </Tooltip>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <div className="account-filter-popup-container">
                    <div className="account-filter-pop-up-items">
                       
                        <h3>Capacity</h3>
                        <div className="account-filter-pop-up-item-age">
                            <div>
                                <span>Min capacity</span>
                                <input type="number" />
                            </div>
                            <div>
                                <span>Max capacity</span>
                                <input type="number" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </Popover>
        </>
    );
};

export default ShelterTableFilter;
