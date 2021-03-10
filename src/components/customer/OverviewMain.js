import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import Drops from './Drops.js'
import './OverviewMain.css';

class OverviewMain extends Component {
    render() {
        const style = {
            width: '1188px',
            height: '300px',
            borderRadius:'5px',
          }
          
          const containerStyle  = {
            position: 'relative',  
            
            width: 'auto',
            height: 'auto'
          }
        return (
            <div className='OverviewMain'>
               
                            <Map className="map" 
                                google={this.props.google} 
                                zoom={15} 
                                style={style}
                                containerStyle={containerStyle}
                                initialCenter={{
                                    lat: 30.3165,
                                    lng: 78.0622
                                }}
                            >
            
                                <Marker onClick={this.onMarkerClick}
                                        name={'Current location'} />
                        
                                <InfoWindow onClose={this.onInfoWindowClose}>
                                    
                                </InfoWindow>
                            </Map>
                        
                            <Drops className='drop'  title="Hostels"/>
                            <Drops className='drop2'  title="Tiffins"/>
                            
                        
            </div>
        )
    }   
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyCzpzqgrjadRHloEtZovwaCjV7wqKxg8Qk")
  })(OverviewMain)