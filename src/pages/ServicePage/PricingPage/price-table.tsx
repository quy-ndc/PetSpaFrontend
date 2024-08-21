import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface PriceTablePropItem {
  name: string;
  type: string;
  price: number;
}

interface PriceTablePropItems extends Array<PriceTablePropItem> { }

export default function PriceTable({
  priceData,
}: {
  priceData: PriceTablePropItems;
}) {
  return (
    <TableContainer component={Paper}>
      <Table className="price-table" aria-label="price table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Price (VND)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {priceData.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

