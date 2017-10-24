
function geoLocation (latitude,longitude,name,id){
  this.latitude = latitude;
  this.longitude = longitude;
  this.name = name;
  this.id = id;
}
const sydney = new geoLocation('-33.8700308', '151.2116687','Sydney',1);
const newYork = new geoLocation('40.705311', '-74.2581855','New York',2);
const london = new geoLocation('51.5285582', '-0.2416806','London',3);

 let climateLocations = [
  sydney,
  newYork,
  london
]

export  let weatherReducerInitialState = {
  climateLocations : climateLocations
}

export let initialState = { weatherReducer : weatherReducerInitialState }
