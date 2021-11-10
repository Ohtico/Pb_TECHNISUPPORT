import React, { useEffect, useState } from "react";
import { useForm } from "../formulario/useForm";
import { useDispatch, useSelector } from "react-redux";
import { Add, editCand, Mostrar } from "../action/ActionCliente";

export const Home = () => {
  const [values, handleInputChange, reset, setValues] = useForm({
    nombre: "",
    apellido: "",
    telefono: "",
    direccion: "",
  });
  const { nombre, apellido, telefono, direccion } = values;
  let titulo1 = "Registrar";
  let titulo2 = "Editar";
  const [titel, setTitel] = useState(titulo1);
  const [editarTk, setEditarTk] = useState(false);
  const EditCan = useSelector((store) => store.cliente.EditCan);
  const dispatch = useDispatch();
  const hanldeSubmit = async (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    dispatch(Mostrar())
  },[])


  useEffect(() => {
    if (EditCan.length === undefined) {
      setEditarTk(true);
      setTitel(titulo2);
      setValues(EditCan);
    } else {
      setEditarTk(false);
      setTitel(titulo1);
      setValues("");
    }
  }, [EditCan]);

  const handleAdd = () => {
    dispatch(Add(values));
    reset();
    setEditarTk(false);
    setTitel(titulo1);
  };
  const handleEdt = async () => {
    dispatch(editCand(values,));
    reset();
    setEditarTk(false);
    setTitel(titulo1);
  };


  return (
    <>
      <h4 className=" d-flex justify-content-center">{titel} al Visitante</h4>
      <form
        className="container"
         onSubmit={hanldeSubmit}
      >
        <div className="input-group mb-3 container">
          <span className="input-group-text" id="basic-addon1">
            <i className="material-icons " >
              badge
            </i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-3 container">
          <span className="input-group-text" id="basic-addon1">
            <i className="material-icons " >
              badge
            </i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Apellido"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="apellido"
            value={apellido}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-3 container">
          <input
            type="text"
            className="form-control"
            placeholder="Teléfono"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="telefono"
            value={telefono}
            onChange={handleInputChange}
          />
          <span className="input-group-text" id="basic-addon1">
            <i className="material-icons " >
            phone_enabled
            </i>
          </span>
        </div>
        <div className="input-group mb-3 container">
          <span className="input-group-text" id="basic-addon1">
            <i className="material-icons " >
            location_on
            </i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Dirección"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="direccion"
            value={direccion}
            onChange={handleInputChange}
          />
        </div>
        <div className="d-grid gap-2 container ">
          {!editarTk ? (
            <button
              className="btn btn-info"
              onClick={handleAdd}
              type="submit"
            >
              Registrar
            </button>
          ) : (
            <button
              className="btn btn-info"
              type="submit"
              onClick={handleEdt}
            >
              Editar
            </button>
          )}
        </div>
      </form>
    </>
  );
};
