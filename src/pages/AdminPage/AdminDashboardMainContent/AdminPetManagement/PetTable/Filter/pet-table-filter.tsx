import React, { useState } from "react";
import '../../../AdminAccountManagement/AccountTable/Filter/account-table-filter.css';
import { Popover, Tooltip } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';

interface PetTableFilterProps {
    onFilterChange: (filters: any) => void;
}

const PetTableFilter: React.FC<PetTableFilterProps> = ({ onFilterChange }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleApplyFilters = () => {
        const newFilters = {
            gender: [] as string[],
            species: [] as string[],
            status: [] as string[],
        };

        const genderCheckboxes = document.getElementsByName('gender') as NodeListOf<HTMLInputElement>;
        genderCheckboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                newFilters.gender.push(checkbox.value);
            }
        });

        const speciesCheckboxes = document.getElementsByName('species') as NodeListOf<HTMLInputElement>;
        speciesCheckboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                newFilters.species.push(checkbox.value);
            }
        });

        const statusCheckboxes = document.getElementsByName('status') as NodeListOf<HTMLInputElement>;
        statusCheckboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                newFilters.status.push(checkbox.value);
            }
        });

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
                        <h3>Species</h3>
                        <div className="account-filter-pop-up-item">
                            <div>
                                <input type="checkbox" name="species" value="DOG" />
                                <span>Dog</span>
                            </div>
                            <div>
                                <input type="checkbox" name="species" value="CAT" />
                                <span>Cat</span>
                            </div>
                            <div>
                                <input type="checkbox" name="species" value="OTHER" />
                                <span>Other</span>
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

export default PetTableFilter;
