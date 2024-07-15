import React, { useState, useEffect } from 'react';
import '../../AdminAccountManagement/AccountTable/account-table.css';
import { Link } from 'react-router-dom';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { IconButton, TablePagination, Tooltip } from '@mui/material';
import PetTableAddButton from './pet-table-add-button';
import PetTableFilter from './Filter/pet-table-filter';
import api from '../../../../../service/apiService';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const PetTable: React.FC = () => {
    const [columns] = useState<string[]>([
        "Name",
        "Gender",
        "Species",
        "Breed",
        "Owner",
        "Status",
    ]);

    const [pets, setPets] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // State for filters
    const [filters, setFilters] = useState({
        gender: [] as string[],
        species: [] as string[],
        status: [] as string[],
    });

    // State for search query
    const [searchQuery, setSearchQuery] = useState('');

    const fetchPetData = async () => {
        try {
            const response = await api.get(`/pet/viewListPet`);
            setPets(response.data.data);
        } catch (error) {
            console.error("Error fetching pet data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPetData();
    }, []);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const applyFilters = (data: any[]) => {
        return data.filter((pet) => {
            if (filters.gender.length > 0 && !filters.gender.includes(pet.gender)) {
                return false;
            }
            if (filters.species.length > 0 && !filters.species.includes(pet.species)) {
                return false;
            }
            if (filters.status.length > 0 && !filters.status.includes(pet.status)) {
                return false;
            }
            if (searchQuery &&
                !pet.pet_name.toLowerCase().includes(searchQuery.toLowerCase()) &&
                !pet.owner.fullName.toLowerCase().includes(searchQuery.toLowerCase())) {
                return false;
            }
            return true;
        });
    };

    const handleFilterChange = (newFilters: any) => {
        setFilters(newFilters);
    };

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    if (loading) {
        return <h1 style={{ color: 'black' }}>LOADING</h1>;
    }

    const filteredPets = applyFilters(pets);

    return (
        <>
            <div className="account-table-container">
                <div className="account-table-action">
                    <div className="account-table-action-left">
                        <Tooltip title="Search">
                            <IconButton>
                                <SearchTwoToneIcon sx={{ fill: 'black' }} />
                            </IconButton>
                        </Tooltip>
                        <input
                            type='text'
                            placeholder='Search for pet...'
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                        />
                    </div>
                    <div className="account-table-action-right">
                        <PetTableFilter onFilterChange={handleFilterChange} />
                        {/* <PetTableAddButton /> */}
                    </div>
                </div>

                <div className="account-table-main">
                    <table className='admin-account-table'>
                        <thead>
                            <tr>
                                <th>
                                    <input type='checkbox' />
                                </th>
                                {columns.map((column) => (
                                    <th key={column}>
                                        <span>{column}</span>
                                    </th>
                                ))}
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((pet) => (
                                    <tr key={pet.pet_id}>
                                        <td>
                                            <input type='checkbox' />
                                        </td>
                                        <td>
                                            <a href="#">
                                                {pet.pet_name}
                                            </a>
                                        </td>
                                        <td>
                                            {pet.gender}
                                        </td>
                                        <td>
                                            {pet.species}
                                        </td>
                                        <td>
                                            {pet.type_of_species}
                                        </td>
                                        <td>
                                            <Link to='#'>
                                                {pet.owner.fullName}
                                            </Link>
                                        </td>
                                        <td className='account-table-status-column'>
                                            <span className={pet.status.toLowerCase() + '-status'}>{pet.status}</span>
                                        </td>
                                        <td>
                                            <Tooltip title='Edit/Delete'>
                                                <IconButton>
                                                    <MoreHorizIcon sx={{ fill: 'black' }} />
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
                        count={filteredPets.length}
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

export default PetTable;
