import { ThemeProvider } from '@emotion/react';
import { Stack, Button, createTheme } from '@mui/material';
import MUIDataTable from 'mui-datatables';
import React, { useEffect, useState } from 'react'

const PetList = () => {
    const [users, setUsers] = useState([]);

    const columns = [
        {
            name: "id",
            label: "S.No",
        },

        {
            name: "image",
            label: 'Profile',
            options: {
                customBodyRender: (value: string) => (
                    <img src={value} alt='pic' className='w-12 h-12 rounded-full p-3 bg-slate-700'></img>
                ),
                filter: false,
            }
        },

        {
            name: "name",
            label: "Name",
        },

        {
            name: "age",
            label: "Age",
        },

        {
            name: "gender",
            label: "Gender",
            options: {

                customBodyRender: (value: string) => (
                    <p
                        className={`capitalize px-3 py-1 inline-block rounded-full ${value.toLowerCase() === "male" ? "bg-blue-500" : "bg-pink-500"
                            }`}
                    >
                        {value}
                    </p>
                ),
            }
        },

        {
            name: "allergies",
            label: "Allergies",
        },

        {
            name: "detail",
            label: "Detail",
            options: {
                customBodyRender: (value: string) => (<a href='/form' className="button">
                    <Stack spacing={2} direction="row">
                        <Button variant="outlined" >Detail</Button>
                    </Stack>
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

    const options = {
        selectableRows: false,
        elevation: 0,
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
                        color: "e2e8f0",
                    },
                },
            },
        },
    })

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
    )
}

export default PetList
