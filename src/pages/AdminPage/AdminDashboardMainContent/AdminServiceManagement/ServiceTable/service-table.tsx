import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../AdminAccountManagement/AccountTable/account-table.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { IconButton, TablePagination, Tooltip } from '@mui/material';
import formatNumber from '../../../../../utils/formatPrice';
import ServiceTableAddButton from './CreateForm/service-table-add-button';
import ServiceTableFilter from './Filter/service-table-filter';
import api from '../../../../../service/apiService';
import AccountTableEditButton from './CreateForm/service-table-edit-button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ServiceTable: React.FC = () => {
    const [columns] = useState<string[]>([
        "Service",
        "Type",
        "Description",
        "Price (vnd)",
        "Discount",
        "Status",
    ]);
    const [services, setServices] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // State for filters
    const [filters, setFilters] = useState({
        status: [] as string[]
    });

    // State for search query
    const [searchQuery, setSearchQuery] = useState('');

    const fetchServiceData = async () => {
        try {
            const response = await api.get(`/service/getAll`);
            setServices(response.data);
        } catch (error) {
            console.error("Error fetching service data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchServiceData();
    }, []);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Function to apply filters
    const applyFilters = (data: any[]) => {
        return data.filter((service) => {
            // Status filter
            if (filters.status.length > 0 && !filters.status.includes(service.status)) {
                return false;
            }
            // Search filter
            if (searchQuery &&
                !service.serviceName.toLowerCase().includes(searchQuery.toLowerCase())) {
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
    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    if (loading) {
        return <h1 style={{ color: 'black' }}>Loading...</h1>;
    }

    // Apply filters
    const filteredServices = applyFilters(services);

    const handleDeleteService = async (serviceId: string) => {
        try {
            const response = await api.delete(`/service/delete/${serviceId}`);
            if (response.status == 200) {
                toast.success('Delete account successful!');
            }
            setTimeout(() => {
                window.location.reload();
            }, 1000)
        } catch (err) {
            console.error('Delete pet error:', err);
        }
    };

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
                            placeholder='Search services...'
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                        />
                    </div>
                    <div className="account-table-action-right">
                        <ServiceTableFilter onFilterChange={handleFilterChange} />
                        <ServiceTableAddButton />
                    </div>
                </div>

                <div className="account-table-main">
                    <table className='admin-account-table'>
                        <thead>
                            <tr>
                                {columns.map((column, index) => (
                                    <th key={index}><span>{column}</span></th>
                                ))}
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredServices?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((service) => (
                                    <tr key={service.serviceId}>
                                        <td>
                                            <a>{service.serviceName}</a>
                                        </td>
                                        <td>{service.typeOfService[0]?.typeName}</td>
                                        <td>{service.description}</td>
                                        <td>{formatNumber(service.price)}</td>
                                        <td>{service.discountPercent}</td>
                                        <td className='account-table-status-column'>
                                            <span className={service.status.toLowerCase() + '-status'}>{service.status}</span>
                                        </td>
                                        <td style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                                            <AccountTableEditButton
                                                serviceId={service.serviceId}
                                                name={service.serviceName}
                                                type={service.typeOfService.serviceTypeId}
                                                description={service.description}
                                                price={service.price}
                                                discount={service.discountPercent}
                                            />
                                            <button
                                                onClick={() => handleDeleteService(service.serviceId)}
                                                className='account-table-delete-button'
                                            >
                                                Delete
                                            </button>
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
                        count={filteredServices.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default ServiceTable;
