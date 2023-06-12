export const PROMJENA_FAVORITA = 'PROMJENA_FAVORITA';

export const promjenaFavorita = (id_1) => {
  return {
    type: PROMJENA_FAVORITA,
    idPovrca : id_1
  };
};
