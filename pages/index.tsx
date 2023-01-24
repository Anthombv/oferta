/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="relative lg:h-screen xl:h-screen sm:h-full md:h-full sm:relative md:absolute lg:absolute h-full 2xl:h-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
        <h2 className="text-center text-6xl font-bold leading-normal mt-0 text-white">
          Sistema de Oferta de Lotes
        </h2>
        <p className="text-center text-lg mt-2 text-white mb-5">Seleccione un proyecto</p>
        <div className="px-12 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-20 mb-5">
          {/* Eden */}
          <div className="h-full cursor-pointer rounded-xl overflow-hidden shadow-lg transform mb-3">
            <Link href="/eden">
              <img
                src="https://grupoancon.com/wp-content/uploads/2020/07/eden-4.jpg"
                alt=""
                sizes="40"
                className="h-full w-full object-cover sm:h-full sm:w-full md:h-full md:w-full lg:h-full lg:w-full xl:h-full xl:w-full"
              />
              <div className="flex absolute justify-items-center justify-center text-center top-0 left-0 hover:bg-gradient-to-r from-red-500 to-orange-500 h-full hover:opacity-90">
                <div className="px-2">
                  <img
                    className="mx-auto w-28 h-28"
                    src="https://www.grupoancon.com/wp-content/uploads/2020/07/logo-eden-1.svg"
                    alt=""
                  />
                  <h1 className="font-bold text-sm text-white">EL EDEN</h1>
                  <p className="text-white text-sm text-justify">
                    La hermosa naturaleza, el clima cálido, la ubicación
                    geográfica y sus maravillosas áreas comunales.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* Mirador del lago */}
          <div className="h-full cursor-pointer rounded-xl overflow-hidden shadow-lg transform mb-3">
            <a href="/mirador">
              <img
                src="https://grupoancon.com/wp-content/uploads/2021/07/mirador-Q1.jpg"
                alt=""
                className="h-full w-full object-cover sm:h-full sm:w-full md:h-full md:w-full lg:h-full lg:w-full xl:h-full xl:w-full"
              />
              <div className="flex absolute justify-items-center justify-center text-center top-0 left-0 hover:bg-gradient-to-r from-blue-400 to-indigo-600 h-full hover:opacity-90">
                <div className="px-2">
                  <img
                    className="mx-auto w-28 h-28"
                    src="https://www.grupoancon.com/wp-content/uploads/2021/07/logo-mirador.svg"
                    alt=""
                  />
                  <h1 className="font-bold text-sm text-white">
                    MIRADOR DEL LAGO
                  </h1>
                  <p className="text-sm text-justify text-white">
                    “El Mirador del lago” es un verdadero paraíso terrenal,
                    donde usted y sus seres queridos tendrán el placer de sentir
                    paz, tranquilidad y armonía.
                  </p>
                </div>
              </div>
            </a>
          </div>
          {/* Manantial */}
          <div className="h-full cursor-pointer rounded-xl overflow-hidden shadow-lg transform mb-3">
            <a href="/manantial">
              <img
                src="	https://grupoancon.com/wp-content/uploads/2020/07/manantial-4.jpg"
                alt=""
                className="h-full w-full object-cover sm:h-full sm:w-full md:h-full md:w-full lg:h-full lg:w-full xl:h-full xl:w-full"
              />
              <div className="flex absolute justify-items-center justify-center text-center top-0 left-0 hover:bg-gradient-to-r from-emerald-400 to-green-800 h-full hover:opacity-90">
                <div className="px-2">
                  <img
                    className="mx-auto w-28 h-28"
                    src="https://www.grupoancon.com/wp-content/uploads/2020/07/manantial-1.png"
                    alt=""
                  />
                  <h1 className="text-white font-bold text-sm">EL MANANTIAL</h1>
                  <p className="text-white text-sm text-justify">
                    Diversión y Libertad es lo que usted encontrará en nuestra
                    urbanización El Manantial ubicada en el km 135 de la vía La
                    Independencia - Calacalí.
                  </p>
                </div>
              </div>
            </a>
          </div>
          {/* Jardin */}
          <div className="h-full cursor-pointer rounded-xl overflow-hidden shadow-lg transform mb-3">
            <a href="/jardin">
              <img
                src="https://grupoancon.com/wp-content/uploads/2020/07/manantial-4.jpg"
                alt=""
                className="h-full w-full object-cover sm:h-full sm:w-full md:h-full md:w-full lg:h-full lg:w-full xl:h-full xl:w-full"
              />
              <div className="flex absolute justify-items-center justify-center text-center top-0 left-0 hover:bg-gradient-to-r from-yellow-500 to-lime-400 h-full w-full hover:opacity-90">
                <div className="px-2">
                  <img
                    className="mx-auto w-28 h-28"
                    src="https://www.grupoancon.com/wp-content/uploads/2021/07/logo_el_jardin-sf.png"
                    alt=""
                  />
                  <h1 className="text-white font-bold text-sm">EL JARDIN</h1>
                  <p className="text-white text-sm text-justify">Lorem ipsum</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <br /><br /><br />
      </div>
    </>
  );
};
export default Home;
