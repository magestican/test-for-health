import {GOT_WEATHER} from '../actions/weather';
import objectAssign from 'object-assign';

import {clone} from './helper';

import {weatherReducerInitialState} from './initialState';
export default function cvReducer(state = weatherReducerInitialState, action) {

  switch (action.type) {
    case GOT_WEATHER :
      let clonedLocations = clone(state.climateLocations);
      let indexOfChangedEntity = clonedLocations.findIndex(x => x.id == action.data.id);
      clonedLocations[indexOfChangedEntity].weatherData = action.data.response;
      return objectAssign({},state,{'climateLocations' : clonedLocations});
    default:
      return state;
  }
}
