import React from "react";

type pageProps = {};

interface User {
  id: number;
  nombre: string;
  correo: string;
}

const page: React.FC<pageProps> = async () => {
  const res = await fetch("http://127.0.0.1:8080/api/poblar_db", { cache: "no-store" });
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.nombre}</td>
              <td>{user.correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default page;
