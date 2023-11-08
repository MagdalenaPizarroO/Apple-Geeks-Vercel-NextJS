import React, { useState } from "react";
import { ValidaRut } from "./validaRut";

type Props = {};

const CrearProveedor = (props: Props) => {
	const [formValues, setFormValues] = useState({
		rut: "",
		nombre: "",
		apellido: "",
		region: "",
		comuna: "",
		direccion: "",
		telefono: "+569 ",
		red_social: "http://",
		correo: "",
		contrasena: "",
	});

	return (
		<div className='m-10'>
			<h4 className=' text-xl font-semibold'>Creación de Cuenta</h4>
			<h5 className='text-xl '>Datos de Proveedor</h5>
			<form>
				<section className='border'>
					<div className=''>
						<h2 className='bg-base-200 leading-10 px-3'>Datos Personales</h2>
						<div className='p-3'>
							<div className='flex'>
								<div className='m-2'>
									<label htmlFor='rut'>Rut:</label>
									<ValidaRut
										rutInicial={formValues.rut}
										onChange={(formattedRut) => setFormValues({ ...formValues, rut: formattedRut })}
									/>
								</div>
								<div className='m-2'>
									<label htmlFor='nombre'>Nombre:</label>
									<input
										type='text'
										className='input input-bordered input-success w-full max-w-xs block'
										id='nombre'
										minLength={3}
										maxLength={100}
										style={{ width: "300px" }}
										// onChange={handleChange}
									/>
								</div>
								<div className='m-2'>
									<label htmlFor='apellido'>Apellido:</label>
									<input
										type='text'
										className='input input-bordered input-success w-full max-w-xs block'
										id='apellido'
										minLength={3}
										maxLength={100}
										style={{ width: "300px" }}
										// onChange={handleChange}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className='card'>
					<div className='card-header bg-dark-subtle text-black'>Datos de Dirección</div>
					<div className='card-body'>
						<div className='form-group row mx-0'>
							{/* <Direccion_proveedor /> */}
							<div className='form-group'>
								<label htmlFor='direccion'>Dirección:</label>
								<input
									type='text'
									className='form-control'
									id='direccion'
									style={{ width: "600px" }}
									minLength={3}
									maxLength={200}
									// onChange={handleChange}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className='card'>
					<div className='card-header bg-dark-subtle text-black'>Datos de Contacto</div>
					<div className='card-body'>
						<div className='form-group row mx-0'>
							<div className='col'>
								<label htmlFor='telefono'>Teléfono:</label>
								<input
									type='tel'
									className='form-control'
									id='telefono'
									maxLength={50}
									style={{ width: "300px" }}
									// value={formValues.telefono}
									// onChange={handleChange}
								/>
							</div>

							<div className='col'>
								<label htmlFor='red_social'>Red Social:</label>
								<input
									type='text'
									className='form-control'
									id='red_social'
									maxLength={100}
									style={{ width: "600px" }}
									// value={formValues.red_social}
									// onChange={handleChange}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className='card'>
					<div className='card-header bg-dark-subtle text-black'>Datos de Cuenta</div>
					<div className='card-body'>
						<div className='form-group row mx-0'>
							<div className='col'>
								<label htmlFor='correo'>Email:</label>
								<input
									type='email'
									className='form-control'
									id='correo'
									style={{ width: "300px" }}
									minLength={3}
									maxLength={100}
									// onChange={handleChange}
								/>
							</div>
							<div className='col'>
								<label htmlFor='contrasena'>Ingrese Contraseña:</label>
								<input
									type='password'
									className='form-control'
									id='contrasena'
									style={{ width: "300px" }}
									minLength={3}
									maxLength={100}
									// onChange={handleChange}
								/>
							</div>
							<div className='col'>
								<label htmlFor='confirm-password'>Confirmación de Contraseña:</label>
								<input
									type='password'
									className='form-control'
									id='confirm-password'
									style={{ width: "300px" }}
									minLength={3}
									maxLength={20}
									// onChange={handleChange}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className='d-flex justify-content-end mt-3'>
					<button
						className='btn btn-success mx-2'
						// onClick={handleSubmit}
					>
						Crear
					</button>
					<button
						className='btn btn-dark shadow'
						// onClick={handleCancel}
					>
						Cancelar
					</button>
				</div>
			</form>
		</div>
	);
};

export default CrearProveedor;
