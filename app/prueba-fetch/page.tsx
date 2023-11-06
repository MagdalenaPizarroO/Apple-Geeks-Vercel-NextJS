import React from "react";
import { sql } from "@vercel/postgres";

type pageProps = {};

interface Usuario {
	id: number;
	nombre: string;
	correo: string;
	apellido: string;
}

const page: React.FC<pageProps> = async () => {
	const { rows } = await sql`SELECT * from Usuario`;

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
					{rows.map((user) => (
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
