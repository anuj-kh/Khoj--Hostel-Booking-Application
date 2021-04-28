import React, { useState, useEffect } from 'react'
import OverviewBarTile from './OverviewBarTile'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        '& > *': {
            margin: theme.spacing(5),
            width: theme.spacing(32),
            height: theme.spacing(16),
        },
    },
}))

const OverviewBar = () => {
    const classes = useStyles()
    const localStoragee = JSON.parse(localStorage.getItem('profile')).result
    const curHostel = localStoragee.currentHostel? localStoragee.currentHostel[0].hostel.name : 'Not registered'
    const dues = localStoragee.currentHostel ? localStoragee.currentHostel[0].dues : 0

    return (
        <div className={classes.root}>
            <OverviewBarTile
                title='Credit'
                value={`Rs. ${localStoragee.credit}`}
            />
            <OverviewBarTile title='Current Hostel' value={curHostel} />
            <OverviewBarTile
                title='Days Left'
                value={`${localStoragee.daysLeft}`}
            />
            <OverviewBarTile title='Dues' value={`Rs. ${localStoragee.dues}`} />
        </div>
    )
}
export default OverviewBar
