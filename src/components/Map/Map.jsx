// import React from 'react'
// import GoogleMapReact from 'google-map-react';
// import {Paper, Typography, useMediaQuery, Grid} from '@material-ui/core';
// import LocationOnOutlinedIcon  from '@material-ui/icons/LocationOnOutlined';
// import Rating from '@material-ui/lab';
// import useStyles from './styles';

// const Map=({setCoords,setBounds,coordinates,places,setChildClicked})=> {
//   const classes=useStyles();
//   const isDesktop=useMediaQuery('(min-width:600px)')

  
  
//   const getRandomPosition = () => ({
//     top: `${Math.random() * 80}%`, // Adjust the percentage as needed
//     left: `${Math.random() * 80}%`, // Adjust the percentage as needed
//   });
  
//   const handleMarkerClick = (place) => {
    
//     setChildClicked(place);
//   };

//   return (
//     <Grid item xs={12} md={12} style={{ position: 'relative', height: '100%' ,backgroundImage:'url("https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg")', backgroundSize: 'cover',backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
//     <div className={classes.mapContainer} style={{ position: 'relative', height: '100%' }} >
//       {/* <GoogleMapReact
//         bootstrapURLKeys={{ key:'AIzaSyA-ePvGNYMhQCJGjnW3ozbcDVyd_pcRpak'}}
//         defaultCenter={coordinates}
//         center={coordinates}
//         defaultZoom={14}
//         margin={[50, 50, 50, 50]}  //50 on top left right bottom
//         options={''}
//         onChange={(e) => {
//           setCoords({ lat: e.center.lat, lng: e.center.lng });
//           setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
//         }}
//         onChildClick={''}    
//       >
//       {places.length && places.map((place, i) => (
//           <div
//             className={classes.markerContainer}
//             lat={Number(place.latitude)}
//             lng={Number(place.longitude)}
//             key={i}
//           >
//           {
//             !isDesktop?(
//               <LocationOnOutlinedIcon color="primary" fontSize="large"/>

//             ):(
//               <Paper elevation={3} className={classes.paper}>
//               <Typography className={classes.typography} variant="subtitle2" gutterbottom>
//                   {place.name}
//               </Typography>
//               <img className={classes.pointer}
//               src={place.photo ? place.photo.images.large.url : 'https://b.zmtcdn.com/data/collections/2e5c28a5fbcb2b35d84c0a498b0e1ba2_1674823998.jpg?fit=around|562.5:360&crop=562.5:360;*,*'}
//               alt="place.name"
//             )
//           }

//       </GoogleMapReact> */}
//       {/* <img
//           src='https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg'
//           alt='Map'
//         /> */}
        

//         {places.length && places.map((place, i) => (
//           <div
//             className={classes.markerContainer}
//             // lat={Number(place.latitude)}
//             // lng={Number(place.longitude)}
//             style={{
//               position: 'absolute',
//               // width: '24px', // Set the width of the marker image
//               // height: '24px', // Set the height of the marker image
//               ...getRandomPosition(), 
//             }}
//             key={i}
//             onClick={() => handleMarkerClick(place)}
//           >
//             {
//               !isDesktop ? (
//                 <LocationOnOutlinedIcon color="primary" fontSize="large"/>
//               ) : (
//                 <Paper elevation={3} className={classes.paper} style={{ width: '80px', height: '80px' }} >
//                   <Typography className={classes.typography} variant="subtitle2" gutterbottom >
//                     {place.name}
//                   </Typography>
//                   <img
//                     className={classes.pointer}
//                     src={place.photo ? place.photo.images.large.url : 'https://b.zmtcdn.com/data/collections/2e5c28a5fbcb2b35d84c0a498b0e1ba2_1674823998.jpg?fit=around|562.5:360&crop=562.5:360;*,*'}
//                     alt={place.name}
//                     style={{ width: '100%', height: 'auto' }}
                    
//                   />
//                 </Paper>
//               )
//             }
//           </div>
//         ))}

//       </div>
//       </Grid>
//   )  
// }

// export default Map;



import React, { useState, useEffect ,createRef} from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery, Grid } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';
import useStyles from './styles';

const Map = ({ setCoords, setBounds, coordinates, places, setChildClicked }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:600px)');

  const [fixedPositions, setFixedPositions] = useState([]);
  

  useEffect(() => {
    if (places.length) {
      const initialFixedPositions = places.map(() => ({
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 80}%`,
      }));
      setFixedPositions(initialFixedPositions);
    }

    
  }, [places]);

  const handleMarkerClick = (place, i) => {
    if (fixedPositions[i]) {
      // Update fixedPositions to make all card positions fixed
      setFixedPositions((prevPositions) =>
        prevPositions.map((pos, index) => (index === i ? { ...pos } : pos))
      );
    }
    setChildClicked(place);
  };

  return (
    <Grid item xs={12} md={12} style={{ position: 'relative', height: '100%', backgroundImage:'url("https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg")', backgroundSize: 'cover' }}>
      <div className={classes.mapContainer} style={{ position: 'relative', height: '100%' }}>
        {places.length && places.map((place, i) => (
          <div
            className={classes.markerContainer}
            style={{
              position: 'absolute',
              top: fixedPositions[i]?.top || '0',
              left: fixedPositions[i]?.left || '0',
            }}
            key={i}
            onClick={() => handleMarkerClick(place, i)}
          >
            {!isDesktop ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} className={classes.paper} style={{ width: '80px', height: '80px' }}>
                <Typography className={classes.typography} variant="subtitle2" gutterbottom>
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={place.photo ? place.photo.images.large.url : 'https://b.zmtcdn.com/data/collections/2e5c28a5fbcb2b35d84c0a498b0e1ba2_1674823998.jpg?fit=around|562.5:360&crop=562.5:360;*,*'}
                  alt={place.name}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Paper>
            )}
          </div>
        ))}
      </div>
    </Grid>
  );
};

export default Map;
