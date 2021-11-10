import { types } from "../type/types";
import axios from "axios";
import Swal from "sweetalert2";

export const Mostrar = () => {
  return async (dispatch) => {
    let candidatoDb = [];
    // const url = "https://618aac0d34b4f400177c480e.mockapi.io/api/v1/contactos";
    try {
      const rest = await axios.get(
        "https://618aac0d34b4f400177c480e.mockapi.io/api/v1/contactos"
      );
      candidatoDb = rest.data;
    } catch (error) {
      console.error(error);
    }
    dispatch(setCandidato(candidatoDb));
    dispatch(activeCandidato(candidatoDb));
  };
};

export const Add = (candidato) => {
  return async (dispatch) => {
    const New = {
      nombre: candidato.nombre,
      apellido: candidato.apellido,
      telefono: candidato.telefono,
      direccion: candidato.direccion,
    };
    axios
      .post("https://618aac0d34b4f400177c480e.mockapi.io/api/v1/contactos", New)
      .then(function (response) {
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    dispatch(addNewCandidato(New));
    Swal.fire({
      title: 'Registrado',
      text: 'Registrado con exito',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false
    })
  };
};

export const DeleteCand = (id) => {
  return async (dispatch) => {
    await axios.delete(`https://618aac0d34b4f400177c480e.mockapi.io/api/v1/contactos/${id}`)  
    dispatch(Mostrar());
  };
};
export const editCand = (candidato) => {
  return async (dispatch, getSate) => {

    const id = getSate().cliente.EditCan.id
    const Editar = {
      nombre: candidato.nombre,
      apellido: candidato.apellido,
      telefono: candidato.telefono,
      direccion: candidato.direccion,
    };
    await axios.put(`https://618aac0d34b4f400177c480e.mockapi.io/api/v1/contactos/${id}`, Editar)
        
    dispatch(Mostrar());
  };
};


export const setCandidato = (candidatoDb) => ({
  type: types.candidatoLoad,
  payload: candidatoDb,
});

export const activeCandidato = (candidatoDb) => {
  return {
    type: types.candidatoActive,
    payload: candidatoDb,
  };
};
export const addNewCandidato = (candidato) => ({
  type: types.CandidatoAddNew,
  payload: {
    ...candidato,
  },
});
