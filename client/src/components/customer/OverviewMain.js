import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import Drops from './Drops.js'
import './OverviewMain.css'

class OverviewMain extends Component {
    render() {
        const style = {
            width: '100%',
            height: '350px',
            borderRadius: '5px',
        }

        const containerStyle = {
            position: 'relative',

            width: 'auto',
            height: 'auto',
        }
        return (
            <div className='OverviewMain'>
                <Map
                    className='map'
                    google={this.props.google}
                    zoom={15}
                    style={style}
                    containerStyle={containerStyle}
                    initialCenter={{
                        lat: 30.3165,
                        lng: 78.0622,
                    }}>
                    <Marker
                        onClick={this.onMarkerClick}
                        name={'Current location'}
                    />

                    {/* <InfoWindow onClose={this.onInfoWindowClose}>
                        <div></div>
                    </InfoWindow> */}
                </Map>
                <div
                    style={{
                        position: 'relative',
                        display: 'flex',
                        margin: '10px',
                        justifyContent: 'space-around',
                    }}>
                    <Drops names={['Singh', 'Negi', 'Dubey']} title='Hostels' />
                    <Drops
                        names={['Ahuja', 'Arora', 'Gulab']}
                        title='Tiffins'
                    />
                </div>
            </div>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: {GOOGLE_MAPS_API_KEY},
})(OverviewMain)
