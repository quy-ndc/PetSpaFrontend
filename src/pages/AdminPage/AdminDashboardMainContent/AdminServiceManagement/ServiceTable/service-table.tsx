import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../AdminAccountManagement/AccountTable/account-table.css"
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { Icon, IconButton, TablePagination, Tooltip } from '@mui/material';
import { generateExampleServices } from '../../../../../utils/serviceExample';
import formatNumber from '../../../../../utils/formatPrice';
import ServiceTableAddButton from './CreateForm/service-table-add-button';
import ServiceTableFilter from './Filter/service-table-filter';

const ServiceTable: React.FC = () => {

    const [columns, setColumns] = useState<string[]>([
        "Serivce",
        "Type",
        "Price (vnd)",
        "Discount",
        "Rating",
        "Status",
    ]);
    const [servies] = useState(generateExampleServices(5));

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
                            placeholder='Search services...'
                        />
                    </div>
                    <div className="account-table-action-right">
                        <ServiceTableFilter />
                        <ServiceTableAddButton />
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
                            {servies.map((service) => (
                                <tr>
                                    <td>
                                        <input type='checkbox' />
                                    </td>
                                    <td>
                                        <Link to='#'>
                                            {service.serviceName}
                                        </Link>
                                    </td>
                                    <td>
                                        {service.type}
                                    </td>
                                    <td>
                                        {formatNumber(service.minPrice)} - {formatNumber(service.maxPrice)}
                                    </td>
                                    <td>
                                        {service.discount}%
                                    </td>
                                    <td>
                                        {service.rating}/5★
                                    </td>
                                    <td className='account-table-status-column'>
                                        <span className={service.status.toLowerCase() + '-status'}>{service.status}</span>
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
                        count={servies.length}
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


export default ServiceTable;