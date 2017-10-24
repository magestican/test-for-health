export const GET_WEATHER = "GETTING_WEATHER";
export const GOT_WEATHER = "GOT_WEATHER";
export const GOT_NEW_WEATHER = "GOT_NEW_WEATHER";


export let getWeather = (latitude,longitude,id)=>{
    return (dispatch) => {
      fetch('https://localhost/weather-data',{method : 'POST', body: JSON.stringify({latitude, longitude})}).then((res)=>{
        return res.json().then(data => {
          return dispatch({ type: GOT_WEATHER, data : {response : data, id : id} });
        })
      })
    }
}
export let addClimateLocation = (newClimateLocation)=>{
    return (dispatch) => {
      fetch('https://localhost/weather-data',{method : 'POST', body: JSON.stringify({'latitude' : newClimateLocation.latitude, 'longitude' : newClimateLocation.longitude})}).then((res)=>{
        return res.json().then(data => {
          newClimateLocation.weatherData = data;
          return dispatch({ type: GOT_NEW_WEATHER, data : newClimateLocation });
        })
      })
    }
}
