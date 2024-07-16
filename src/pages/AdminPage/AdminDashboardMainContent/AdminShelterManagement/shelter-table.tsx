import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../AdminAccountManagement/AccountTable/account-table.css";
import FilterListIcon from "@mui/icons-material/FilterList";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { Icon, IconButton, TablePagination, Tooltip } from "@mui/material";
import { generateExampleShelters } from "../../../../utils/shelterExample";
import ShelterTableAddButton from "./CreateForm/shelter-table-add-button";
import ShelterTableFilter from "./Filter/shelter-table-filter";
import api from "../../../../service/apiService";

interface ShelterItem {
  shelter_id: number;
  shelter_name: string;
  shelterStatus: string;
  status: string;
}

const ShelterTable: React.FC = () => {
  const [columns, setColumns] = useState<string[]>([
    "Name",
    "Status",
    "Status of Shelter",
  ]);
  // const [shelters] = useState(generateExampleShelters(5));
  const [shelters, setShelters] = useState<ShelterItem[]>([]);

  type Order = "asc" | "desc";

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [loading, setLoading] = useState(true);

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");
  // State for filters
  const [filters, setFilters] = useState({
    status: [] as string[],
    shelterStatus: [] as string[],
  });

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const fetchAllShelter = async () => {
    try {
      const response = await api.get(`/shelter/viewAllShelter`);
      setShelters(response.data.data);
    } catch (error) {
      console.error("Error fetching shelter data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllShelter();
    console.log(shelters);
  }, []);

  const applyFilters = (data: any[]) => {
    return data.filter((shelter) => {
      // Status filter
      if (
        filters.status.length > 0 &&
        !filters.status.includes(shelter.status)
      ) {
        return false;
      }
      // Shelter status filter
      if (
        filters.shelterStatus.length > 0 &&
        !filters.shelterStatus.includes(shelter.shelterStatus)
      ) {
        return false;
      }
      // Search filter
      if (
        searchQuery &&
        !shelter.shelter_name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  };
  // Handle filter change
  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  // Handle search input change
  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  if (loading) {
    return <h1 style={{ color: "black" }}>Loading...</h1>;
  }

  // Apply filters
  const filteredShelter = applyFilters(shelters);
  return (
    <>
      <div className="account-table-container">
        <div className="account-table-action ">
          <div className="account-table-action-left">
            <Tooltip title="Search">
              <IconButton>
                <SearchTwoToneIcon sx={{ fill: "black" }} />
              </IconButton>
            </Tooltip>
            <input
              type="text"
              placeholder="Search shelter..."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </div>
          <div className="account-table-action-right">
            <ShelterTableFilter onFilterChange={handleFilterChange} />
            <ShelterTableAddButton />
          </div>
        </div>

        <div className="account-table-main">
          <table className="admin-account-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                {columns.map((column) => (
                  <th>
                    <span>{column}</span>
                  </th>
                ))}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredShelter.map((shelter) => (
                <tr key={shelter.shelter_id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <Link to="#">{shelter.shelter_name}</Link>
                  </td>
                  <td className="account-table-status-column">
                    <span className={shelter.status.toLowerCase() + "-status"}>
                      {shelter.status}
                    </span>
                  </td>
                  <td className="account-table-status-column">
                    <span className={shelter.status.toLowerCase() + "-status"}>
                      {shelter.shelterStatus}
                    </span>
                  </td>

                  <td>
                    <Tooltip title="Edit/Delete">
                      <IconButton>
                        <MoreHorizIcon sx={{ fill: "black" }} />
                      </IconButton>
                    </Tooltip>
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
            count={shelters.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
    </>
  );
};

export default ShelterTable;
