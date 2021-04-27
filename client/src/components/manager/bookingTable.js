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

export default function BookingTable(props) {

  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.headingRow}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow  key={0}>
            <TableCell className={classes.heading}>Name of the Student</TableCell>
            <TableCell align="right" className={classes.heading}>Booking Date</TableCell>
            <TableCell align="right" className={classes.heading}>Subscription Start Date</TableCell>
            <TableCell align="right" className={classes.heading}>Subscription End Date</TableCell>
            <TableCell align="right" className={classes.heading}>Total Price</TableCell>
            <TableCell align="right" className={classes.heading}>Dues left</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.hos!=null && props.hos.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.bookingDate}</TableCell>
              <TableCell align="right">{row.startDate}</TableCell>
              <TableCell align="right">{row.endDate}</TableCell>
              <TableCell align="right">Rs. {row.totalPayment}</TableCell>
              <TableCell align="right">Rs. {row.dues}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}   