import Link from "next/link";
import Image from "next/legacy/image";
import React from "react";
import LoginImage from "../assets/login.png";

type Props = {};

export default function Login({}: Props) {
	// const handleSubmit = () => {
	// 	event.preventDefault();
	// };
	return (
		<div className='flex flex-row mt-20'>
			<div className='hidden md:block md:basis-1/2 justify-center items-center'>
				<Image src={LoginImage} alt='Imagen login' />
			</div>
			<div className='basis-1/2 items-center max-w-md mx-auto'>
				<h4 className='text-center mb-4'>¡Bienvenido Proveedor!</h4>
				<h5 className='text-center mb-4'>Ingrese sus Datos para Acceder al Portal</h5>
				<form
				// onSubmit={handleSubmit}
				>
					<div className=''>
						<label htmlFor='username' className='form-label'>
							Usuario:
						</label>
						<input
							type='text'
							className='input input-bordered input-success w-full max-w-xs'
							id='username'
							maxLength={50}
							// value={username}
							// onChange={handleUsernameChange}
							required
						/>

						{/* <div className='invalid-feedback'>Por favor, ingrese un correo electrónico válido.</div> */}
					</div>
					<div className='mb-3'>
						<label htmlFor='password' className='form-label'>
							Contraseña:
						</label>
						<input
							type='password'
							className='form-control'
							id='password'
							// minLength='3'
							// maxLength='50'
							// value={password}
							// onChange={handlePasswordChange}
							// required
						/>
						{/* <div className='invalid-feedback'>La contraseña debe tener al menos 3 caracteres.</div> */}
					</div>
					<div className='mb-3 text-center'>
						<button
							type='button'
							className='btn btn-success me-2'
							//    onClick={handleLogin}
						>
							Ingresar
						</button>
						<Link href='/' className='btn btn-dark shadow'>
							Cancelar
						</Link>
						<Link href='/recupera-password' className='btn btn-link'>
							¿Olvidaste tu contraseña?
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
