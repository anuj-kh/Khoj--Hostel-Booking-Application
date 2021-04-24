import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import axios from 'axios'

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
  // const [hostel,setHostel]=useState()
  //   useEffect(() => {
  //     const fetchHostel = async () => {
  //         const res = await axios.get(
  //             `/hostel/hostel/${props.hos.hostel}`,
  //         )

  //         setHostel(res.data)
  //     }

  //     fetchHostel()
  // })

  // props.hos.map((row) => (
  //   async () => {
  //     const res = await axios.get(
  //         `/hostel/hostel/${row.hostel}`,
  //     )
  //     setHostel(res.data)
  //   }
  // ))

  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.headingRow}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow  >
            <TableCell className={classes.heading}>Name of the hostel</TableCell>
            <TableCell align="right" className={classes.heading}>Booking Date</TableCell>
            <TableCell align="right" className={classes.heading}>Subscription Start Date</TableCell>
            <TableCell align="right" className={classes.heading}>Subscription End Date</TableCell>
            <TableCell align="right" className={classes.heading}>Price(Monthly)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.hos.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {}
              </TableCell>
              <TableCell align="right">{row.bookingDate.toDateString()}</TableCell>
              <TableCell align="right">{row.startDate.toDateString()}</TableCell>
              <TableCell align="right">{row.endDate.toDateString()}</TableCell>
              <TableCell align="right">{}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}