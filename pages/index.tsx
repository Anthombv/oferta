/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React from "react";
import Navbar from "../lib/components/navBar";

const Home = () => {
  return (
    <>
      <title>Inicio</title>
      <link rel="icon" href="https://www.grupoancon.com/wp-content/uploads/2020/07/logo.svg" sizes="32x32" type="image/svg+xml"/>
      <div className="main-side w-full mx-auto min-h-screen">
        <Navbar />
        <h2 className="title-main text-center text-4xl leading-normal">
        ¿En donde quieres la oferta?
        </h2>
        <p className="subtitle-main text-center text-lg mt-2 pb-5">
          Seleccione un proyecto
        </p>
        <div className="option-box px-20 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-5">
          {/* Jardin */}
          <div className="box h-full cursor-pointer rounded-xl overflow-hidden transform mb-3">
            <Link href="/jardin">
              <div className="gradient-box flex absolute items-center justify-items-center justify-center text-center top-0 left-0 h-full w-full">
                <div className="px-2">
                  <img
                    className="mx-auto w-48"
                    src="http://grupoancon.com/wp-content/uploads/2023/05/logo-jardin-app-2-min.png"
                    alt=""
                  />
                  <p className="label new">Nuevo</p>
                  <div className="image-project jardin"></div>
                  <p className="info text-sm text-center">Una experiencia única con la naturaleza le aguarda en este nuevo y magíco lugar.</p>
                  <div className="boton">INGRESAR</div>
                </div>
              </div>
            </Link>
          </div>
          {/* Eden */}
          <div className="box h-full cursor-pointer rounded-xl overflow-hidden transform mb-3">
            <Link href="/eden">
              <div className="gradient-box flex absolute items-center justify-items-center justify-center text-center top-0 left-0 h-full w-full">
                <div className="px-2">
                  <img
                    className="mx-auto w-48"
                    src="http://grupoancon.com/wp-content/uploads/2023/05/logo-eden-app-2-min.png"
                    alt=""
                  />
                  <p className="label last">Ultimos Lotes</p>
                  <div className="image-project eden"></div>
                  <p className="info text-sm text-center">La hermosa naturaleza, el clima cálido, la ubicación geográfica y sus maravillosas áreas comunales.</p>
                  <div className="boton">INGRESAR</div>
                </div>
              </div>
            </Link>
          </div>
          {/* Mirador del lago */}
          <div className="box h-full cursor-pointer rounded-xl overflow-hidden transform mb-3">
            <Link href="/mirador">
              <div className="gradient-box flex absolute items-center justify-items-center justify-center text-center top-0 left-0 h-full w-full">
                <div className="px-2">
                  <img
                    className="mx-auto w-48"
                    src="http://grupoancon.com/wp-content/uploads/2023/05/logo-mirador-app-2-min.png"
                    alt=""
                  />
                  <p className="label exclu">Lotes Exclusivos</p>
                  <div className="image-project mirador"></div>
                  <p className="info text-sm text-center">Un verdadero paraíso terrenal, con vista al lago San Pablo, ubicado en el hermoso pueblo de Otavalo.</p>
                  <div className="boton">INGRESAR</div>
                </div>
              </div>
            </Link>
          </div>
          {/* Manantial */}
          <div className="box h-full cursor-pointer rounded-xl overflow-hidden transform mb-3">
            <Link href="/manantial">
              <div className="gradient-box flex absolute items-center justify-items-center justify-center text-center top-0 left-0 h-full w-full">
                <div className="px-2">
                  <img
                    className="mx-auto w-48"
                    src="http://grupoancon.com/wp-content/uploads/2023/05/logo-manantial-app-2-min.png"
                    alt=""
                  />
                  <p className="label last">Ultimos Lotes</p>
                  <div className="image-project manantial"></div>
                  <p className="info text-sm text-center">Diversión y Libertad es lo que usted encontrará en nuestra urbanización a sólo 2 horas de Quito.</p>
                  <div className="boton">INGRESAR</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};
export default Home;
