import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    width: '50%'
  },
  heading: {
    fontWeight: 'bold'
  },
  headingRow: {
    display: 'flex', 
    justifyContent:'center',
    alignItems:'center'
  }
});

function createData(name, category, bookedOn, startOn, leftOn, price) {
  return { name, category, bookedOn, startOn, leftOn, price };
}

export default function BookingTable(props) {
  const classes = useStyles();
//   const rows = [{props}];
  const rows = [
    createData(props.nameA, props.catA, props.bookA, props.startA, props.endA, props.priceA),
    createData(props.nameB, props.catB, props.bookB, props.startB, props.endB, props.priceB)
  ];

  return (
    <TableContainer component={Paper} className={classes.headingRow}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow  >
            <TableCell className={classes.heading}>Name of the service</TableCell>
            <TableCell align="right" className={classes.heading}>Category</TableCell>
            <TableCell align="right" className={classes.heading}>Booking Date</TableCell>
            <TableCell align="right" className={classes.heading}>Subscription Start Date</TableCell>
            <TableCell align="right" className={classes.heading}>Subscription End Date</TableCell>
            <TableCell align="right" className={classes.heading}>Price(Monthly)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.bookedOn}</TableCell>
              <TableCell align="right">{row.startOn}</TableCell>
              <TableCell align="right">{row.leftOn}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}