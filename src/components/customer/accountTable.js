import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    width: '40%'
  },
  heading: {
    fontWeight: 'bold'
  },
  headingRow: {
    display: 'flex', 
    justifyContent:'center',
    alignItems:'center',
    marginBottom: '5rem',
  }
});

function createData(name, value) {
  return { name, value };
}

export default function AccountTable(props) {
  const classes = useStyles();
  const rows = [
    createData("Name ", "Taimur"),
    createData("Phone No. ", "xxxxxx1234"),
    createData("Email ", "abcd@gmail.com"),
    createData("Address ", "1/random addr/city. PIN- xxxxxx")
  ];

  return (
    <TableContainer className={classes.headingRow}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}