import React, { Component } from 'react';
import './SidebarHead.css';
import 'boxicons';


export default class SidebarHead extends Component {
    render() {
        return (
            <div className='SidebarHead'>
                <h2>
                    
                    <span className='space' style={{paddingLeft: '5px'}}>{'    '}</span>
                    KHOJ
                    
                </h2>
                <p>A Portal for Aspirants</p>
            </div>
        )
    }
}
