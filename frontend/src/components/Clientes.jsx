import { useEffect, useState } from 'react';

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/clientes')
      .then(res => res.json())
      .then(data => {
        setClientes(data);
        setCargando(false);
      })
      .catch(error => {
        console.error('Error al obtener los clientes:', error);
        setCargando(false);
      });
  }, []);

  return (
    <div>
      <h2>Clientes</h2>

      {cargando ? (
        <p>Cargando clientes...</p>
      ) : clientes.length === 0 ? (
        <p>No hay clientes registrados.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Documento</th>
              <th>Email</th>
              <th>Fecha de Registro</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.documento}</td>
                <td>{cliente.email}</td>
                <td>{new Date(cliente.fechaRegistro).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Clientes;
