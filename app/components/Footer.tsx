import React from "react";
import Logo from "./../assets/logo.png";
import Image from "next/legacy/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className='grid w-full grid-flow-col place-items-start gap-x-4 gap-y-10 x-text-sm leading-5 bg-base-200 p-5'>
      <div className='w-full flex-1 max-w-xs text-center'>
        <Image src={Logo} className='mx-auto mb-3' width={150} height={60} alt='logo Apple Geeks' />
        <div>
          <p className=''>
            Sumérgete en el universo Apple con nosotros, donde la elegancia y la innovación convergen y será tu conexión
            directa con los mejores especialistas Apple.
          </p>
        </div>
      </div>
      <div className='w-full flex-1 max-w-xs justify-center'>
        <header className='footer-title text-center'>Legal</header>
        <a className='link link-hover'>Términos y Condiciones</a>
        <a className='link link-hover'>Registro y Cuenta</a>
        <a className='link link-hover'>Responsabilidad</a>
      </div>
      <div className='w-full flex-1 max-w-xs justify-center'>
        <header className='footer-title text-center'>Contacto</header>
        <p className=''>Dirección: Av. Manquehue Sur 350, Oficina 110</p>
        <p className=''>Teléfono: (+56) 9 7284 8039</p>
        <a className='link link-hover'>info@applegeeks.com</a>
        <button className='btn btn-success'>Whatsapp</button>
      </div>
    </footer>
  );
};

export default Footer;
