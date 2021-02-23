import React, { Component } from 'react';
import './SidebarTile.css';
import 'boxicons';

export default class SidebarTile extends Component {
    render() {
        console.log(this.props.menu);

        return (
            
            <div className='SidebarTile'>
                <box-icon color='rgba(255, 255, 255, 0.863)'  name={this.props.name} type='solid' ></box-icon>
                <p className='TileText'>
                    <span className='space' style={{paddingLeft: '10px'}}>{'    '}</span>
                    {this.props.menu}
                </p>
            </div>
        )
    }
}
