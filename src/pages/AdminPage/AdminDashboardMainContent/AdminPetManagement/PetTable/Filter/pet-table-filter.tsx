import React from "react";
import '../../../AdminAccountManagement/AccountTable/Filter/account-table-filter.css'
import { Popover, Tooltip } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';

const PetTableFilter: React.FC = () => {

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
                        <h3>Gender</h3>
                        <div className="account-filter-pop-up-item">
                            <div>
                                <input type="checkbox" />
                                <span>Male</span>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <span>Female</span>
                            </div>
                        </div>
                        <h3>Species</h3>
                        <div className="account-filter-pop-up-item">
                            <div>
                                <input type="checkbox" />
                                <span>Dog</span>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <span>Cat</span>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <span>Other</span>
                            </div>
                        </div>
                        <h3>Status</h3>
                        <div className="account-filter-pop-up-item">
                            <div>
                                <input type="checkbox" />
                                <span>Active</span>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <span>Inactive</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Popover>
        </>
    );
};

export default PetTableFilter;
