import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {getWeather,addClimateLocation} from '../actions/weather'
import { connect } from 'react-redux'

@connect(mapStateToProps)
export default class App extends Component {
  constructor(){
    super();
  }


  addClimateLocation = () =>{
    let newClimateLocation = {
      id: this.props.climateLocations.length + 1,
      latitude : this.latitudeElement.value,
      longitude : this.longitudeElement.value,
      name: this.locationNameElement.value
    }
    this.props.dispatch(addClimateLocation(newClimateLocation));
  }

  componentWillMount(){
    this.props.climateLocations.forEach((o)=>{
      this.props.dispatch(getWeather(o.latitude,o.longitude,o.id)); //it would make sense to make an API endpoint that takes an array, but then we should track locations by id,etc.
    })
  }


  getRandomColor(index){

    let randomColors =  ['#4ECDC4','#FF6B6B','#C7F464','#64ac8f'];

    if(index < randomColors.length - 1) {
      return randomColors[index];
    } else {
      return randomColors[0];
    }

  }

  render(){

    let itemWidth = ((100 / this.props.climateLocations.length)) + '%';

    let weatherForm = (<div className="form">
        <input ref={(input) => {
          this.latitudeElement = input;
        }} placeholder="Latitude" type="text"/>
        <input ref={(input) => {
          this.longitudeElement = input;
        }} placeholder="Longitude"  type="text"/>
        <input ref={(input) => {
          this.locationNameElement = input;
        }} placeholder="Location Name"  type="text"/>

        <button onClick={this.addClimateLocation}>Add</button>
      </div>);

    let weatherItems = (this.props.climateLocations.map((o,i)=>{
      return <div style={{"width" : itemWidth,'backgroundColor' : this.getRandomColor(i)}} className="weather-item fade-in" key={o.id}>
        <div className="content">
          <h4>{o.name}</h4>
          <p>
          { o.weatherData ? 'Temperature :' + o.weatherData.currently.temperature : ''}
          </p>
          <p>
          { o.weatherData ? 'Pressure : ' + o.weatherData.currently.pressure : ''}
          </p>
          <p>
          { o.weatherData ? 'Humidty : ' + o.weatherData.currently.humidity : ''}
          </p>
        </div>
      </div>
    }))

    return <div className="weather">
      {weatherItems}
    <div className="new-weather weather-item">
      <h4> New Weather System</h4>
      {weatherForm}
    </div>
    </div>
  }
}


function mapStateToProps(state){
  return {
    climateLocations: state.weatherReducer.climateLocations
  }
}
