import React, { Component } from 'react'
import 'boxicons';
import './TopAll.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class TopAll extends Component {
    render() {
        return (
            <div className='topAll'>
                <div className='title'>
                    <h3>{this.props.value}</h3>
                </div>
                <div className='profile'>
                    <box-icon   name='notification'  ></box-icon>
                    <h4>{this.props.name}</h4>
                    <box-icon  className='imgIcon' name='image-alt' type='solid' ></box-icon>
                </div>

            </div>
        )
    }
}
