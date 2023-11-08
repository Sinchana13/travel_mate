import axios from 'axios'



const URL="https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"
// const options = {
//   params: {
//     bl_latitude: '11.847676',
//     tr_latitude: '12.838442',
//     bl_longitude: '109.095887',
//     tr_longitude: '109.149359',
    
//   },
//   headers: {
//     'X-RapidAPI-Key': '00eef6d8f0msh55416aefb718b53p16ee66jsne4cd9436e22a',
//     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//   }
// };



// export const getPlacesData=async(sw,ne)=>{
//     try{
//         const {data:{data}}=await axios.get(URL, {
//           // params: {
//           //   bl_latitude: 'sw.lat',
//           //   tr_latitude: 'ne.lat',
//           //   bl_longitude: 'sw.lng',
//           //   tr_longitude: 'ne.lng',
            
//           // },
//           params: {
//             bl_latitude: '12.95',
//             tr_latitude: '13.0',
//             bl_longitude: '77.55',
//             tr_longitude: '77.64',
            
//           },
          // headers: {
          //   'X-RapidAPI-Key': '00eef6d8f0msh55416aefb718b53p16ee66jsne4cd9436e22a',
          //   'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          // }

//         });
//         return data;
//     }catch(error){
//         console.log(error)
//     }
// }


export const getPlacesData = async (lat, lng, radius = 0.1) => {
  try {
    const bl_latitude = lat - radius / 2;
    const tr_latitude = lat + radius / 2;
    const bl_longitude = lng - radius / 2;
    const tr_longitude = lng + radius / 2;

    const { data: { data } } = await axios.get(URL, {
      params: {
        bl_latitude: bl_latitude,
        tr_latitude: tr_latitude,
        bl_longitude: bl_longitude,
        tr_longitude: tr_longitude,
      },
      headers: {
        'X-RapidAPI-Key': '00eef6d8f0msh55416aefb718b53p16ee66jsne4cd9436e22a',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
