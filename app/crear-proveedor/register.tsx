const ENDPOINT = "http://127.0.0.1:8080/api/";

interface User {
	nombre: string;
	apellido: string;
}

export default async function Register({ nombre, apellido }: User) {
	const res = await fetch(`${ENDPOINT}/register`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ nombre, apellido }),
	});
	if (!res.ok) throw new Error("Response is NOT ok");
	return true;
}
