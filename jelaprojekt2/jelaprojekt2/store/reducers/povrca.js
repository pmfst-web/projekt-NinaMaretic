import { POVRCA } from '../../data/test-podaci1';
import { PROMJENA_FAVORITA } from '../actions/povrca';

const pocetnoStanje = {
  povrca: POVRCA,
  filterPovrca: POVRCA,
  favoritPovrca: [],
};

const povrceReducer = (state = pocetnoStanje, action) => {
  switch (action.type) {
    case PROMJENA_FAVORITA: {
      const odabran_1 = state.favoritPovrca.findIndex(
        (povrce)=> povrce.id_1 === action.idPovrca
      );
      if (odabran_1 >= 0) {
        const noviFavoriti = [...state.favoritPovrca]
        noviFavoriti.splice(odabran_1, 1)
        return {...state, favoritPovrca: noviFavoriti}
      } else {
        const povrce = state.povrca.find(povrce => povrce.id_1 === action.idPovrca)
        return {...state, favoritPovrca: state.favoritPovrca.concat(povrce)}
      } 
    }
    default:
      return state;
  }
};
export default povrceReducer;