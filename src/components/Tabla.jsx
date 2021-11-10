import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { activeCandidato, DeleteCand } from "../action/ActionCliente";

export const Tabla = () => {
  const { candidatos } = useSelector((store) => store.cliente);
  const [allCan, setAllCan] = useState(candidatos);
  const dispatch = useDispatch();
  useEffect(() => {
    setAllCan(candidatos);
  }, [candidatos]);

  const handleEdit = (data) => {
    dispatch(activeCandidato(data));
  };
  const handleDelete = (id) => {
    dispatch(DeleteCand(id));
  };
  
  return (
    <div>
      <h4 className="d-flex justify-content-center">Visitantes Registrados</h4>
      <div className=" table-responsive">
        <table className="table table-info align-middle">
          <thead>
            <tr>
              <th scope="row">Nombre</th>
              <th> Apellido</th>
              <th>Teléfono</th>
              <th>Dirección</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {allCan.length ? (
              <>
                {" "}
                {allCan.map((item, index) => (
                  <tr key={item.id}>
                    <th scope="row">{item.nombre}</th>
                    <td>{item.apellido}</td>
                    <td className="text-truncate">{item.telefono}</td>
                    <td className="text-truncate">{item.direccion}</td>
                    <td className="text-truncate">
                      <i
                        className="material-icons ms-2"
                        id="car"
                        onClick={() => handleEdit(item)}
                      >
                        edit
                      </i>{" "}
                      <i
                        className="material-icons ms-2"
                        id="car"
                        onClick={() => handleDelete(item.id)}
                      >
                        backspace
                      </i>
                    </td>
                  </tr>
                ))}{" "}
              </>
            ) : (
              <>
                <h4 className="d-flex justify-content-center m-3">
                  Registre un Visitante
                </h4>
              </>
            )}
          </tbody>
        </table>
      </div>
      <div className="float-end text-muted">
        <p className="d-flex align-items-center">
          Para corregir un registro utiliza la siguiente opción{" "}
          <span>
            <i className="material-icons ms-2">edit</i>
          </span>{" "}
        </p>
        <p className="d-flex align-items-center">
          Para eliminar un registro utiliza la siguiente opción{" "}
          <span>
            <i className="material-icons ms-2">backspace</i>
          </span>{" "}
        </p>
      </div>
    </div>
  );
};
