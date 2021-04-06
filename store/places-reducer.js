import { v4 as uuidv4 } from 'uuid';

import { ADD_PLACE } from './places-actions';
import Place from '../models/place';

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = new Place(uuidv4(), action.placeData.title);

      return {
        places: state.places.concat(newPlace),
      };

    default:
      return state;
  }
};
