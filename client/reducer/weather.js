import {GOT_WEATHER,GOT_NEW_WEATHER} from '../actions/weather';
import objectAssign from 'object-assign';

import {clone} from './helper';

import {weatherReducerInitialState} from './initialState';
export default function cvReducer(state = weatherReducerInitialState, action) {
  let clonedLocations = '';
  switch (action.type) {
    case GOT_WEATHER :
      clonedLocations = clone(state.climateLocations);
      let indexOfChangedEntity = clonedLocations.findIndex(x => x.id == action.data.id);
      clonedLocations[indexOfChangedEntity].weatherData = action.data.response;
      return objectAssign({},state,{'climateLocations' : clonedLocations});
    case  GOT_NEW_WEATHER :
      clonedLocations = clone(state.climateLocations);
      clonedLocations.push(action.data);
      return objectAssign({},state,{'climateLocations' : clonedLocations});
    default:
      return state;
  }
}
