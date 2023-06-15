import {FOODS} from '../../data/Foods'
import {CHANGE_FAVORITE} from '../actions/foods'

const initialState = {
  foods:FOODS,
  favorites: []
}

const foodReducer = (state = initialState, action) => {
  const selected = state.favorites.findIndex((food) => food.id === action.id);
  switch (action.type) {
    case CHANGE_FAVORITE:
      if (selected > -1) {
        const newFavorites = [...state.favorites]; 
        newFavorites.splice(selected,1); 
        return { ...state, favorites: newFavorites }; 
      }
      else {
        const food = state.foods.find((food) => food.id === action.id);
        return { ...state, favorites: state.favorites.concat(food),
      };
    }
    default:
      return state;
  }
}

export default foodReducer