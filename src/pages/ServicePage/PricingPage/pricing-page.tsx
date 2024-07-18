import React, { useEffect, useState } from "react";
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
import api from "../../../service/apiService";
import formatNumber from "../../../utils/formatPrice";

interface PriceTablePropItem {
  name: string;
  type: string;
  price: number;
}


const PriceTable: React.FC = () => {
  const [columns] = useState<string[]>(["Service", "Type", "Price (vnd)"]);
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
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

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
      <div className="account-table-main">
        <table className="admin-account-table">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>
                  <span>{column}</span>
                </th>
              ))}
              <th></th>
            </tr>
          </thead>

          <tbody>
            {services?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((service) => (
                <tr key={service.serviceId}>
                  <td>
                    <a>{service.serviceName}</a>
                  </td>
                  <td>{service.typeOfService[0]?.typeName}</td>
                  <td>{formatNumber(service.price)}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={services.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <div className="pricing-page-service-detail-right">
          <Link to="/booking">Book now</Link>
        </div>
      </div>
    </>
  );
};
export default PriceTable;
