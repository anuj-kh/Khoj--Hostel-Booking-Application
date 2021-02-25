import React, { Component } from 'react';
import './OverviewBarTile.css';

export default class OverviewBarTile extends Component {
    render() {
        return (
            <div className='OverviewBarTile'>
                <p>{this.props.title}</p>
                <h1>{this.props.value}</h1>
            </div>
        )
    }
}
