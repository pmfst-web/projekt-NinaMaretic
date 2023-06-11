import { JELA } from '../../data/test-podaci';
import { PROMJENA_FAVORITA } from '../actions/jela';

const pocetnoStanje = {
  jela: JELA,
  filterJela: JELA,
  favoritJela: [],
};

const jeloReducer = (state = pocetnoStanje, action) => {
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
        const jelo = state.jela.find(jelo => jelo.id === action.idJela)
        return {...state, favoritJela: state.favoritJela.concat(jelo)}
      } 
    }
    default:
      return state;
  }
};
export default jeloReducer;