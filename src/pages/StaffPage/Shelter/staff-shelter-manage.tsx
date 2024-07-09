import React, { useState, useEffect } from "react";
// import "staff-shelter-manage.css";
import "../../AdminPage/AdminDashboardMainContent/AdminAccountManagement/AccountTable/account-table.css";
import { Link } from "react-router-dom";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { IconButton, TablePagination, Tooltip } from "@mui/material";
import { generateExamplePet } from "../../../utils/petExample";

const StaffShelterManage: React.FC = () => {
  const [columns, setColumns] = useState<string[]>([
    "Name",
    "Species",
    "Breed",
    "Owner",
    // "Status",
  ]);
  const [pets] = useState(generateExamplePet(5));

  type Order = "asc" | "desc";

  const [order, setOrder] = React.useState<Order>("asc");
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <div className="staff-manage-shelter">
        <div className="account-table-container">
          <div className="account-table-action ">
            <div className="account-table-action-left">
              <Tooltip title="Search">
                <IconButton>
                  <SearchTwoToneIcon sx={{ fill: "black" }} />
                </IconButton>
              </Tooltip>
              <input type="text" placeholder="Search for pet..." />
            </div>
            <div className="account-table-action-right">
              <Tooltip title="Filter">
                <button className="account-table-filter-button">
                  <FilterListIcon /> <span>Filter</span>
                </button>
              </Tooltip>
              <Tooltip title="Add account">
                <button className="account-table-add-button">
                  <AddCircleOutlineTwoToneIcon />
                  <span>Add new pet</span>{" "}
                </button>
              </Tooltip>
            </div>
          </div>

          <div className="account-table-main">
            <table className="admin-account-table">
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th>
                      <span>{column}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pets.map((pet) => (
                  <tr>
                    <td>
                      <a>{pet.name}</a>
                    </td>
                    <td>{pet.species}</td>
                    <td>{pet.breed}</td>
                    <td>
                      <Link to="#">{pet.owner}</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="account-table-bottom">
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={pets.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffShelterManage;
