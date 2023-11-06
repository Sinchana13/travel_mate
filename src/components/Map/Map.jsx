import React from 'react'
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon  from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';
import useStyles from './styles';

const Map=({setCoords,setBounds,coordinates,places})=> {
  const classes=useStyles();
  const isMobile=useMediaQuery('(min-width:600px)')
  

  return (
    <div className={classes.mapContainer}>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key:'AIzaSyA-ePvGNYMhQCJGjnW3ozbcDVyd_pcRpak'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}  //50 on top left right bottom
        options={''}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={''}    
      >
      {places.length && places.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >

      </GoogleMapReact> */}
      <img src='https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg'></img>
      </div>
  )  
}

export default Map;