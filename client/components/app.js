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
    debugger
    let newClimateLocation = {
      id: this.props.climateLocations.length,
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


  render(){

    let randomColors =  ['#4ECDC4','#FF6B6B','#C7F464','#64ac8f'];

    let getRandomColor = (index)=>{
      if(index < randomColors.length - 1) {
        return randomColors[index];
      } else {
        return randomColors[0];
      }
    }
    let itemWidth = ((100 / this.props.climateLocations.length)) + '%';
    return <div className="weather">
      { this.props.climateLocations.map((o,i)=>{
        return <div style={{"width" : itemWidth,'backgroundColor' : getRandomColor(i) }} className="weather-item" key={o.id}>

        <div className="content">
          {o.name}
          <p>{ o.weatherData ? 'Temperature :' + o.weatherData.currently.temperature : ''}</p>
          <p>{ o.weatherData ? 'Pressure : ' + o.weatherData.currently.pressure : ''}</p>
          <p>
          { o.weatherData ? 'Humidty : ' + o.weatherData.currently.humidity : ''}
          </p>

        </div></div>
    })}
    <div className="new-weather weather-item">
      New Weather System :

      <div className="form">
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
      </div>
    </div>
    </div>
  }
}


function mapStateToProps(state){
  return {
    climateLocations: state.weatherReducer.climateLocations
  }
}
