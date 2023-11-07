import Link from "next/link";
import React from "react";
import Logo from "../assets/logo.png";
import Image from "next/legacy/image";
import Avatar from "../assets/avatar-placeholder.png";

type Props = {};

export default function Navbar({}: Props) {
	return (
		<div className='navbar bg-base-200'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<label tabIndex={0} className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
						</svg>
					</label>
					<ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
						<li>
							<Link href='/'>Inicio</Link>
						</li>
						<li>
							<a>Servicios</a>
							<ul className='p-2'>
								<li>
									<Link href='/productos'>Productos</Link>
								</li>
								<li>
									<Link href='servicio-tecnico'>Servicio Técnico</Link>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div className='mx-auto hidden lg:flex'>
					<Link href='/'>
						<Image src={Logo} width={150} height={60} alt='logo Apple Geeks' />
					</Link>
				</div>
			</div>
			<div className='navbar-center'>
				<div className='mx-auto lg:hidden'>
					<Link href='/'>
						<Image src={Logo} width={150} height={60} alt='logo Apple Geeks' />
					</Link>
				</div>
				<ul className='menu menu-horizontal px-1 hidden lg:flex'>
					<li>
						<Link href='/'>Inicio</Link>
					</li>
					<li tabIndex={0}>
						<details>
							<summary>Servicios</summary>
							<ul className='p-2'>
								<li>
									<Link href='/productos'>Productos</Link>
								</li>
								<li>
									<Link href='servicio-tecnico'>Servicio Técnico</Link>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
			<div className='navbar-end'>
				<div className='dropdown dropdown-bottom dropdown-end'>
					<label tabIndex={0} className='btn btn-ghost btn-circle avatar lg:hidden'>
						<div className='w-10 rounded-full'>
							<Image src={Avatar} alt='avatar placeholder' />
						</div>
					</label>
					<ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
						<li>
							<Link href='/login'>Ingreso Proveedor</Link>
						</li>
						<li>
							<Link href='/register'>Registro Proveedor</Link>
						</li>
					</ul>
				</div>
				<div className='hidden lg:flex'>
					<ul className='menu menu-horizontal'>
						<li className='btn btn-outline btn-success mx-1 p-0'>
							<Link href='login'>Ingreso Proveedor</Link>
						</li>
						<li className='btn btn-outline btn-success  p-0'>
							<Link href='crear-proveedor'>Registro Proveedor</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
