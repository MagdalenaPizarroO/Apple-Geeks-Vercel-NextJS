import React from "react";
import { Formik } from "formik";
import Register from "./register";

type Props = {};

interface FormValues {
	rut: string;
	nombre: string;
	apellido: string;
	region: string;
	comuna: string;
	direccion: string;
	telefono: string;
	red_social?: string;
	correo: string;
	contrasena: string;
}

const CrearProveedor = (props: Props) => {
	return (
		<>
			<Formik
				initialValues={{
					nombre: "",
					apellido: "",
				}}
				onSubmit={(values) => {
					Register(values);
				}}
			>
				{() => (
					<form>
						<input type='text' />
						<input type='text' />
						<button>Registrarse</button>
					</form>
				)}
			</Formik>
		</>
	);
};

export default CrearProveedor;
