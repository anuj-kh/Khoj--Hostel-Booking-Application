import React, { Component } from 'react';
import SidebarTile from './SidebarTile';
import SidebarHead from './SidebarHead';

import './Sidebar.css';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        return (
            <div className='Sidebar'>
                <SidebarHead />
                <Link to="/dashboard/overview"><SidebarTile menu="Overview" name='pie-chart-alt-2'/></Link>
                <Link to="/dashboard/profile"><SidebarTile menu="My Profile" name='user'/></Link>
                <Link to="/dashboard/search"><SidebarTile menu="Search" name='search-alt'/></Link>
                <Link to="/dashboard/account"><SidebarTile menu="Account" name='user-account'/></Link>
                <h5 style={line}> </h5>
                <Link to="/dashboard/setting"><SidebarTile menu="Settings" name='pencil'/></Link>



            </div>
        )
    }
}
const line={
    margin:'8px',
    border: 'solid 1px #A4A6B3'
}