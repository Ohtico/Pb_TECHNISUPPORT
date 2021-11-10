import { types } from "../type/types";

const initialState = {
  candidatos: [],
  EditCan: {
    nombre: "",
    apellido: "",
    telefono: "",
    direccion: "",
  }
};

export const Cliente = (state = initialState, action) => {
  switch (action.type) {
    case types.CandidatoAddNew:
      return {
        ...state,
        candidatos: [action.payload, ...state.candidatos],
      };

    case types.candidatoLoad:
      return {
        ...state,
        candidatos: [...action.payload],
      };
    case types.candidatoDelete:
      return {
        ...state,
      };
    case types.candidatoActive:
      return {
        ...state,
        EditCan: action.payload,
      };
    default:
      return state;
  }
};