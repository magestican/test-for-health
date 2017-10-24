export const GET_WEATHER = "GETTING_WEATHER";
export const GOT_WEATHER = "GOT_WEATHER";


export let getWeather = (latitude,longitude,id)=>{
    return (dispatch) => {
      fetch('https://localhost/weather-data',{method : 'POST', body: JSON.stringify({latitude, longitude})}).then((res)=>{
        return res.json().then(data => {
          return dispatch({ type: GOT_WEATHER, data : {response : data, id : id} });
        })
      })
    }
}
