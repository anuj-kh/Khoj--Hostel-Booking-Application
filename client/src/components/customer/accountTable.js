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
    const [user, setUser] = useState({})
    const localStorageId = JSON.parse(localStorage.getItem('profile')).result._id
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(
                `/dashboard/account/${localStorageId}`,
            )

            setUser(res.data)
        }

        fetchUser()
    })

    const classes = useStyles()
    const rows = [
        createData('Name ', `${user.name}`),
        createData('Phone No. ', `${user.phone}`),
        createData('Email ', `${user.email}`),
        createData('Address ', '1/random addr/city. PIN- xxxxxx'),
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
