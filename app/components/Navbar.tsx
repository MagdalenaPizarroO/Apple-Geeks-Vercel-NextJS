import Link from "next/link";
import React from "react";
import Logo from "../assets/logo.png";
import Image from "next/image";

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
        <Link href='/'>
          <Image
            src={Logo}
            style={{ width: "150px", height: "60px", marginLeft: "80px", marginRight: "120px" }}
            alt='logo Apple Geeks'
          />
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
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
        <Link href='login' className='btn btn-outline btn-success'>
          Ingreso Proveedor
        </Link>
        <Link href='sign-up' className='btn btn-outline btn-success btn-xs'>
          Registro Proveedor
        </Link>
      </div>
    </div>
  );
}
