import React, { useState } from "react";
import './account-table-filter.css'
import { Popover, Tooltip, IconButton } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';

interface AccountTableFilterProps {
    onFilterChange: (filters: any) => void;
}

const AccountTableFilter: React.FC<AccountTableFilterProps> = ({ onFilterChange }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleApplyFilters = () => {
        // Construct filters object based on user selections
        const newFilters = {
            gender: [] as string[],
            minAge: '',
            maxAge: '',
            roles: [] as string[],
            status: [] as string[]
        };

        const genderCheckboxes = document.getElementsByName('gender') as NodeListOf<HTMLInputElement>;
        genderCheckboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                newFilters.gender.push(checkbox.value);
            }
        });

        const roleCheckboxes = document.getElementsByName('role') as NodeListOf<HTMLInputElement>;
        roleCheckboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                newFilters.roles.push(checkbox.value);
            }
        });

        const statusCheckboxes = document.getElementsByName('status') as NodeListOf<HTMLInputElement>;
        statusCheckboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                newFilters.status.push(checkbox.value);
            }
        });

        const minAgeInput = document.getElementById('minAge') as HTMLInputElement;
        if (minAgeInput) {
            newFilters.minAge = minAgeInput.value;
        }

        const maxAgeInput = document.getElementById('maxAge') as HTMLInputElement;
        if (maxAgeInput) {
            newFilters.maxAge = maxAgeInput.value;
        }

        // Notify parent component (AccountTable) of filter changes
        onFilterChange(newFilters);

        handleClose();
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
                                <input type="checkbox" name="gender" value="MALE" />
                                <span>Male</span>
                            </div>
                            <div>
                                <input type="checkbox" name="gender" value="FEMALE" />
                                <span>Female</span>
                            </div>
                        </div>
                        <h3>Age</h3>
                        <div className="account-filter-pop-up-item-age">
                            <div>
                                <span>Min age</span>
                                <input type="number" id="minAge" />
                            </div>
                            <div>
                                <span>Max age</span>
                                <input type="number" id="maxAge" />
                            </div>
                        </div>
                        <h3>Role</h3>
                        <div className="account-filter-pop-up-item">
                            <div>
                                <input type="checkbox" name="role" value="admin" />
                                <span>Admin</span>
                            </div>
                            <div>
                                <input type="checkbox" name="role" value="staff" />
                                <span>Staff</span>
                            </div>
                            <div>
                                <input type="checkbox" name="role" value="doctor" />
                                <span>Doctor</span>
                            </div>
                            <div>
                                <input type="checkbox" name="role" value="customer" />
                                <span>Customer</span>
                            </div>
                        </div>
                        <h3>Status</h3>
                        <div className="account-filter-pop-up-item">
                            <div>
                                <input type="checkbox" name="status" value="ACTIVE" />
                                <span>Active</span>
                            </div>
                            <div>
                                <input type="checkbox" name="status" value="INACTIVE" />
                                <span>Inactive</span>
                            </div>
                        </div>
                        <div className="account-filter-pop-up-actions">
                            <button className="apply-filter-button" onClick={handleApplyFilters}>Apply</button>
                        </div>
                    </div>
                </div>
            </Popover>
        </>
    );
};

export default AccountTableFilter;
