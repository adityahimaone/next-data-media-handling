import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function TableDashboard() {
  const createData = (
    no,
    email,
    car,
    start_rent,
    finish_rent,
    price,
    status
  ) => {
    return { no, email, car, start_rent, finish_rent, price, status };
  };

  const rows = [
    createData(
      1,
      "user Email",
      "Car",
      "Start Rent",
      "Finish Rent",
      1000,
      "Status"
    ),
    createData(
      2,
      "user Email",
      "Car",
      "Start Rent",
      "Finish Rent",
      1000,
      "Status"
    ),
    createData(
      3,
      "user Email",
      "Car",
      "Start Rent",
      "Finish Rent",
      1000,
      "Status"
    ),
    createData(
      4,
      "user Email",
      "Car",
      "Start Rent",
      "Finish Rent",
      1000,
      "Status"
    ),
    createData(
      5,
      "user Email",
      "Car",
      "Start Rent",
      "Finish Rent",
      1000,
      "Status"
    ),
  ];

  return (
    <TableContainer>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        className="border rounded-md"
      >
        <TableHead className="bg-blue-200/90 rounded-md">
          <TableRow>
            <TableCell className="font-semibold">No</TableCell>
            <TableCell className="font-semibold">User Email</TableCell>
            <TableCell className="font-semibold">Car</TableCell>
            <TableCell className="font-semibold">Start Rent</TableCell>
            <TableCell className="font-semibold">Finish Rent</TableCell>
            <TableCell className="font-semibold">Price</TableCell>
            <TableCell className="font-semibold">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.no}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.no}
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.car}</TableCell>
              <TableCell>{row.start_rent}</TableCell>
              <TableCell>{row.finish_rent}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableDashboard;
