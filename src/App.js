import React,{useState} from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import {getPlacesData} from'./api/index';
import { useEffect } from 'react';


const App=() =>{
  const [places,setPlaces]=useState([])
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
      
    });
  }, []);

  useEffect(()=>{
    if (coords.lat && coords.lng) {
      getPlacesData(bounds.sw,bounds.ne)
        .then((data)=>{
            console.log(data);
            setPlaces(data);
        })
      } 
  },[coords,bounds])
  return (
    <>
      <CssBaseline/>
      <Header/>
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={5}>
            <List places={places}/>
        </Grid>
        <Grid item xs={12} md={7}>
          <Map
              // setChildClicked={setChildClicked}
              setBounds={setBounds}
              setCoords={setCoords}
              coords={coords}
              places={places}
              // weatherData={weatherData}
            />
        </Grid>
      </Grid>
    </>
  )
}

export default App