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
import api from '../../../../../service/apiService';

const ServiceTable: React.FC = () => {

    const [columns] = useState<string[]>([
        "Serivce",
        "Type",
        "Price (vnd)",
        "Status",
    ]);

    const [services, setServices] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // State for filters
    const [filters, setFilters] = useState({
        type: [] as string[],
        minPrice: '',
        maxPrice: '',
    });

    // State for search query
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const fetchAccountData = async () => {
        try {
            const response = await api.get(`/service/getAll`);
            setServices(response.data);
        } catch (error) {
            console.error("Error fetching account data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAccountData();
    }, []);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };



    if (loading) {
        return <h1 style={{ color: 'black' }}>Loading...</h1>;
    }

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
                            {services.map((service) => (
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
                                        {formatNumber(service.price)}
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
                        count={services.length}
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