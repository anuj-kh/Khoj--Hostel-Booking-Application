import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

export default function Drops(props) {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <Button
                aria-controls='simple-menu'
                aria-haspopup='true'
                onClick={handleClick}
                variant='contained'
                color='default'>
                {props.title}
            </Button>
            <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                {props.names.map((name) => (
                    <MenuItem onClick={handleClose} key={name}>
                        {name}'s
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}
