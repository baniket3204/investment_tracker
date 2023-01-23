import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "@mui/material";
import { lightGreen } from "@material-ui/core/colors";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#52b202",
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "State Bank Of India",
    "Fixed Deposit",
    <Link
      target="_blank"
      href="https://sbi.co.in/web/personal-banking/investments-deposits/deposits/fixed-deposit"
    >
      Click Here
    </Link>
  ),
  createData(
    "State Bank Of India",
    "Recurring Deposit",
    <Link
      target="_blank"
      href="https://sbi.co.in/web/personal-banking/investments-deposits/deposits/recurring-deposit"
    >
      Click Here
    </Link>
  ),
  createData(
    "HDFC",
    "Fixed Deposit",
    <Link
      target="_blank"
      href="https://www.hdfcbank.com/personal/save/deposits/fixed-deposit"
    >
      Click Here
    </Link>
  ),
  createData(
    "HDFC",
    "Recurring Deposit",
    <Link
      target="_blank"
      href="https://www.hdfcbank.com/personal/save/deposits/recurring-deposit"
    >
      Click Here
    </Link>
  ),
  createData(
    "ICICI",
    "Fixed Deposit",
    <Link
      target="_blank"
      href="https://www.icicibank.com/Personal-Banking/account-deposit/fixed-deposit/index.page"
    >
      Click Here
    </Link>
  ),
  createData(
    "ICICI",
    "Recurring Deposit",
    <Link
      target="_blank"
      href="https://www.icicibank.com/Personal-Banking/account-deposit/recurring-deposits/index.page"
    >
      Click Here
    </Link>
  )
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>BANK NAME</StyledTableCell>
            <StyledTableCell>DEPOSIT TYPE</StyledTableCell>
            <StyledTableCell>DETAILS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.calories}</StyledTableCell>
              <StyledTableCell>{row.fat}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
