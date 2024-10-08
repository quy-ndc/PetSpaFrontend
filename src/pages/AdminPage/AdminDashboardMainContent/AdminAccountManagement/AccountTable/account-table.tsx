import React, { useState, useEffect } from 'react';
import './account-table.css';
import { Link } from 'react-router-dom';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { IconButton, Tooltip, TablePagination } from '@mui/material';
import AccountTableAddButton from './CreateForm/account-table-add-button';
import AccountTableFilter from './Filter/account-table-filter';
import api from '../../../../../service/apiService';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccountTableEditButton from './CreateForm/account-table-update-button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AccountTable: React.FC = () => {
    const [columns] = useState<string[]>([
        "Full name",
        "Gender",
        "Email",
        "Phone",
        "Address",
        "Role",
        "Status",
    ]);

    const [accounts, setAccounts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // State for filters
    const [filters, setFilters] = useState({
        gender: [] as string[],
        minAge: '',
        maxAge: '',
        roles: [] as string[],
        status: [] as string[]
    });

    // State for search query
    const [searchQuery, setSearchQuery] = useState('');

    const fetchAccountData = async () => {
        try {
            const response = await api.get(`/user/getAllUser`);
            setAccounts(response.data);
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

    // Function to apply filters
    const applyFilters = (data: any[]) => {
        return data.filter((account) => {
            // Gender filter
            if (filters.gender.length > 0 && !filters.gender.includes(account.gender)) {
                return false;
            }
            // Age filter
            if (filters.minAge && parseInt(account.age, 10) < parseInt(filters.minAge, 10)) {
                return false;
            }
            if (filters.maxAge && parseInt(account.age, 10) > parseInt(filters.maxAge, 10)) {
                return false;
            }
            // Role filter
            if (filters.roles.length > 0 && !filters.roles.includes(account.role.roleName)) {
                return false;
            }
            // Status filter
            if (filters.status.length > 0 && !filters.status.includes(account.status)) {
                return false;
            }
            // Search filter
            if (searchQuery &&
                !account.fullName.toLowerCase().includes(searchQuery.toLowerCase()) &&
                !account.email.toLowerCase().includes(searchQuery.toLowerCase())) {
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
    const filteredAccounts = applyFilters(accounts);

    const handleDeleteAccount = async (userId: string) => {
        try {
            const response = await api.delete(`/user/delete/${userId}`);
            toast.success('Delete account successful!');
            setTimeout(() => {
                window.location.reload;
            }, 1000)
        } catch (err) {
            console.error('Delete pet error:', err);
        }
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
                            placeholder='Search accounts...'
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                        />
                    </div>
                    <div className="account-table-action-right">
                        <AccountTableFilter onFilterChange={handleFilterChange} />
                        <AccountTableAddButton />
                    </div>
                </div>

                <div className="account-table-main">
                    <table className='admin-account-table'>
                        <thead>
                            <tr>
                                {columns.map((column) => (
                                    <th key={column}>
                                        <span>{column}</span>
                                    </th>
                                ))}
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredAccounts?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((account) => (
                                    <tr key={account.userId}>
                                        <td>
                                            <a>
                                                {account.fullName}
                                            </a>
                                        </td>
                                        <td>
                                            {account.gender}
                                        </td>
                                        <td>
                                            {account.email}
                                        </td>
                                        <td>
                                            {account.phone}
                                        </td>
                                        <td>
                                            {account.address}
                                        </td>
                                        <td>
                                            {account.role.roleName}
                                        </td>
                                        <td className='account-table-status-column'>
                                            <span className={account.status.toLowerCase() + '-status'}>{account.status}</span>
                                        </td>
                                        <td style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                                            <AccountTableEditButton
                                                userId={account.userId}
                                                fullName={account.fullName}
                                                userName={account.userName}
                                                email={account.email}
                                                gender={account.gender}
                                                address={account.address}
                                                age={account.age}
                                                phone={account.phone}
                                                role={account.role.roleName}
                                            />
                                            <button
                                                onClick={() => handleDeleteAccount(account.userId)}
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
                        count={filteredAccounts.length}
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

export default AccountTable;
