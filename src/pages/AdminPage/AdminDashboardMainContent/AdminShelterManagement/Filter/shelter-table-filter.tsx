import React from "react";
import "../../../AdminDashboardMainContent/AdminAccountManagement/AccountTable/Filter/account-table-filter.css";
import { Popover, Tooltip } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
interface ShelterTableFilterProps {
  onFilterChange: (filters: any) => void;
}
const ShelterTableFilter: React.FC<ShelterTableFilterProps> = ({
  onFilterChange,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleApplyFilters = () => {
    // Construct filters object based on user selections
    const newFilters = {
      status: [] as string[],
      shelterStatus: [] as string[],
    };
    const statusCheckboxes = document.getElementsByName(
      "status"
    ) as NodeListOf<HTMLInputElement>;
    const shelterStatusCheckboxes = document.getElementsByName(
      "shelter-status"
    ) as NodeListOf<HTMLInputElement>;
    statusCheckboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        newFilters.status.push(checkbox.value);
      }
    });
    shelterStatusCheckboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        newFilters.shelterStatus.push(checkbox.value);
      }
    });
    onFilterChange(newFilters);

    handleClose();
  };

  return (
    <>
      <Tooltip title="Filter">
        <button
          className="account-table-filter-button"
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
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="account-filter-popup-container">
          <div className="account-filter-pop-up-items">
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

            <h3>Status of Shelter</h3>
            <div>
              <input type="checkbox" name="shelter-status" value="USING" />
              <span>Using</span>
            </div>
            <div>
              <input type="checkbox" name="shelter-status" value="EMPTY" />
              <span>Empty</span>
            </div>

            <div className="account-filter-pop-up-actions">
              <button
                className="apply-filter-button"
                onClick={handleApplyFilters}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </Popover>
    </>
  );
};

export default ShelterTableFilter;
function onFilterChange(newFilters: { status: string[] }) {
  throw new Error("Function not implemented.");
}
