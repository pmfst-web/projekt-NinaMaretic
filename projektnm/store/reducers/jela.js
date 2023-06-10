import { JELA } from '../../data/test-podaci';
import { PROMJENA_FAVORITA } from '../actions/jela';

const pocetnoStanje = {
  jela: JELA,
  filterJelai: JELA,
  favoritJela: [],
};

const radReducer = (state = pocetnoStanje, action) => {
  switch (action.type) {
    case PROMJENA_FAVORITA: {
      const odabran = state.favoritJela.findIndex(
        (jelo) => jelo.id === action.idJela
      );
      if (odabran >= 0) {
        const noviFavoriti = [...state.favoritJela]
        noviFavoriti.splice(odabran, 1)
        return {...state, favoritJela: noviFavoriti}
      } else {
        const rad = state.jela.find(rad => rad.id === action.idJela)
        return {...state, favoritJela: state.favoritJela.concat(jelo)}
      }
    }
    default:
      return state;
  }
};
export default radReducer;