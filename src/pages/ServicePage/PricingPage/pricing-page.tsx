import React, { useState } from "react";
import "./pricing-page.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { Link } from "react-router-dom";

interface PriceTablePropItem {
  name: string;
  type: string;
  price: number;
}

const fakeData: PriceTablePropItem[] = [
  { name: "Service 1", type: "Basic", price: 100 },
  { name: "Service 2", type: "Premium", price: 200 },
  { name: "Service 3", type: "Basic", price: 150 },
  { name: "Service 4", type: "Premium", price: 250 },
  { name: "Service 5", type: "Basic", price: 100 },
  { name: "Service 6", type: "Premium", price: 200 },
  { name: "Service 7", type: "Basic", price: 150 },
  { name: "Service 8", type: "Premium", price: 250 },
  { name: "Service 9", type: "Basic", price: 100 },
  { name: "Service 10", type: "Premium", price: 200 },
  { name: "Service 11", type: "Basic", price: 150 },
  { name: "Service 12", type: "Premium", price: 250 },
];

export default function PriceTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, fakeData.length - page * rowsPerPage);

  return (
    <>
      <div className="pricing-page-service-detail">
        <div className="img-left">
          <img
            src="https://anticruelty.org/sites/default/files/images/ACS-Images/Clinic/postadoptservices_hero2.jpg"
            alt="Service"
          />
        </div>
        <div className="content-right">
          <h1>PRICING</h1>
          <p>
            We believe in being upfront with our pet parents. Being upfront
            means we’ll always take the time to talk through your pet’s
            condition, all the options for their treatment and the likely
            results of each option. And being upfront also includes talking
            about the cost of each option.
          </p>
        </div>
      </div>

      <TableContainer
        component={Paper}
        style={{ margin: "auto", maxWidth: "75%" }}
      >
        <Table className="price-table" aria-label="price table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Name
              </TableCell>
              <TableCell style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Type
              </TableCell>
              <TableCell style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Price (VND)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fakeData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.price}</TableCell>
                </TableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={3} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={fakeData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <div className="pricing-page-service-detail-right">
        <Link to="/booking">Book now</Link>
      </div>
    </>
  );
}
