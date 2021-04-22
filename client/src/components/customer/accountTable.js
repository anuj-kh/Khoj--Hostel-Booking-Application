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

export default function AccountTable(props) {
    const [user, setUser] = useState({})

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(
                `/dashboard/account/60810ee6b12b745b2006780b`,
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
