import React,{useState} from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import {getPlacesData} from'./api/index';
import { useEffect } from 'react';
// import Map1 from './components/Map/Map1'; 

const App=() =>{
  const [places,setPlaces]=useState([])
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked,setChildClicked]=useState(null)
  const [isLoading,setIsLoading]=useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
      
    });
  }, []);

  useEffect(()=>{
    setIsLoading(true)
    if (coords.lat && coords.lng) {
      getPlacesData(coords.lat,coords.lng)
        .then((data)=>{
            console.log(data);
            setPlaces(data);
            setIsLoading(false);
        })
      } 
  },[coords,bounds])
  return (
    <>
      <CssBaseline/>
      <Header/>
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={6}>
            <List 
              places={places}
              childClicked={childClicked}
              isLoading={isLoading}
            />
        </Grid>
        <Grid item xs={12} md={6}>
          <Map
              // setChildClicked={setChildClicked}
              setBounds={setBounds}
              setCoords={setCoords}
              coords={coords}
              places={places}
              setChildClicked={setChildClicked}
              // weatherData={weatherData}
            />
          {/* <Map1 places={places}/> */}
        </Grid>
      </Grid>
    </>
  )
}

export default App