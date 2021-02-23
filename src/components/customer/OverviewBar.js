import React, { Component } from 'react'
import OverviewBarTile from "./OverviewBarTile";
import './OverviewBar.css';
export default class OverviewBar extends Component {
    render() {
        return (
            <div className='OverviewBar'>
                <OverviewBarTile title='Credit' value='600'/>
                <OverviewBarTile title='Days Left' value='16'/>
                <OverviewBarTile title='Current Hostel' value="Sharma's"/>
                <OverviewBarTile title='Tiffin Service' value="Singh's"/>

            </div>
        )
    }
}
