import React from "react";

type pageProps = {};

interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  apellido: string;
}

const page: React.FC<pageProps> = async () => {
  const res = await fetch("http://127.0.0.1:8080/api/ver_db", { cache: "no-store" });
  const users: Usuario[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <table className='table table-zebra'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Apellido</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.nombre}</td>
              <td>{user.correo}</td>
              <td>{user.apellido}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default page;
