import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {getWeather} from '../actions/weather'
import { connect } from 'react-redux'

@connect(mapStateToProps)
export default class App extends Component {
  constructor(){
    super();
  }

  componentWillMount(){
    this.props.climateLocations.forEach((o)=>{
      this.props.dispatch(getWeather(o.latitude,o.longitude,o.id)); //it would make sense to make an API endpoint that takes an array, but then we should track locations by id,etc.
    })
  }


  render(){
    return this.props.climateLocations.map((o)=>{
      console.log(o);
      return <div key={o.id}>{o.latitude} ,{o.longitude}, {o.name} { o.weatherData ? o.weatherData.currently.temperature : ''}</div>
    })
  }
}


function mapStateToProps(state){
  return {
    climateLocations: state.weatherReducer.climateLocations
  }
}
