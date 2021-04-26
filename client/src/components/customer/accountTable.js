import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from '@material-ui/core'

const useStyles = makeStyles({
    table: {
        width: '40%',
    },
    heading: {
        fontWeight: 'bold',
    },
    headingRow: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '5rem',
    },
})

function createData(name, value) {
    return { name, value }
}

export default function AccountTable() {
    const localStoragee = JSON.parse(localStorage.getItem('profile')).result

    const classes = useStyles()
    const rows = [
        createData('Name ', `${localStoragee.name}`),
        createData('Phone No. ', `${localStoragee.phone}`),
        createData('Email ', `${localStoragee.email}`),
        createData('Address ', `${localStoragee.address}`),
    ]

    return (
        <TableContainer className={classes.headingRow}>
            <Table className={classes.table} aria-label='simple table'>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component='th' scope='row'>
                                {row.name}
                            </TableCell>
                            <TableCell align='right'>{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
