import React, { useState, useEffect } from 'react';
import '../../AdminAccountManagement/AccountTable/account-table.css';
import { Link } from 'react-router-dom';
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { IconButton, TablePagination, Tooltip } from '@mui/material';
import { generateExamplePet } from '../../../../../utils/petExample';
import PetTableAddButton from './pet-table-add-button';
import PetTableFilter from './Filter/pet-table-filter';

const PetTable: React.FC = () => {

    const [columns, setColumns] = useState<string[]>([
        "Name",
        "Gender",
        "Species",
        "Breed",
        "Owner",
        "Status",
    ]);
    const [pets] = useState(generateExamplePet(5));

    type Order = 'asc' | 'desc';


    const [order, setOrder] = React.useState<Order>('asc');
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <>
            <div className="account-table-container">
                <div className="account-table-action ">
                    <div className="account-table-action-left">
                        <Tooltip title="Search">
                            <IconButton>
                                <SearchTwoToneIcon sx={{ fill: 'black' }} />
                            </IconButton>
                        </Tooltip>
                        <input
                            type='text'
                            placeholder='Search for pet...'
                        />
                    </div>
                    <div className="account-table-action-right">
                        <PetTableFilter />
                        <PetTableAddButton />
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
                                    <th>
                                        <span>{column}</span>
                                    </th>
                                ))}
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {pets.map((pet) => (
                                <tr>
                                    <td>
                                        <input type='checkbox' />
                                    </td>
                                    <td>
                                        <a>
                                            {pet.name}
                                        </a>
                                    </td>
                                    <td>
                                        {pet.gender}
                                    </td>
                                    <td>
                                        {pet.species}
                                    </td>
                                    <td>
                                        {pet.breed}
                                    </td>
                                    <td>
                                        <Link to='#'>
                                            {pet.owner}
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
                        count={pets.length}
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