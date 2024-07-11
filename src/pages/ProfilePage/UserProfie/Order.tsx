import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MUIDataTableOptions } from 'mui-datatables';
import FormDialog from '../../../components/Button/FormDialog';

const Order = () => {
    const [users, setUsers] = useState([]);

    const columns = [
        {
            name: "id",
            label: "S.No",
        },
        {
            name: "date",
            label: "Date",
        },
        {
            name: "time",
            label: "Time",
        },
        {
            name: "services",
            label: "Services",
        },
        {
            name: "status",
            label: "Status",
            options: {
                customBodyRender: (value: string) => (
                    <p
                        className={`capitalize px-3 py-1 inline-block rounded-full ${value.toLowerCase() === "Finish" ? "bg-blue-500" : "bg-pink-500"}`}
                    >
                        {value}
                    </p>
                ),
            }
        },
        {
            name: "detail",
            label: "Detail",
            options: {
                customBodyRender: (value: string) => (
                    <a href='/form' className="button">
                        <FormDialog></FormDialog>
                    </a>
                ),
                filter: false,
            }
        }
    ];

    useEffect(() => {
        fetch("https://dummyjson.com/user")
            .then((res) => res.json())
            .then((data) => {
                console.log(data?.users);
                setUsers(data?.users);
            });
    }, []);

    const options: MUIDataTableOptions = {
        selectableRows: 'none',
        elevation: 0,
        filter: true,
        filterType: 'checkbox',
        rowsPerPageOptions: [5, 10, 20, 30],
    };

    const getMuiTheme = () => createTheme({
        typography: {
            fontFamily: "Roboto",
        },
        components: {
            MuiTableCell: {
                styleOverrides: {
                    head: {
                        padding: "10px 4px",
                    },
                    body: {
                        padding: "7px 15px",
                        color: "#e2e8f0",
                    },
                },
            },
        },
    });

    return (
        <div>
            <ThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                    title={"Order History"}
                    data={users}
                    columns={columns}
                    options={options}
                />
            </ThemeProvider>
        </div>
    );
}

export default Order;
