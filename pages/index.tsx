/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Router from "next/router";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-red-500 sm:bg-red-500 md:bg-red-500 lg:bg-red-500 xl:bg-red-500 xl:h-screen md:h-full">
        <h2 className="text-center text-6xl font-normal leading-normal mt-0 text-white">
          Nuestros Proyectos
        </h2>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
          <div className="cursor-pointer rounded overflow-hidden shadow-lg transform inset-0 bg-white transition duration-500 hover:scale-110 hover:bg-lime-100">
            <img
              className="mx-auto w-48 h-48"
              src="https://www.grupoancon.com/wp-content/uploads/2020/07/logo-eden-1.svg"
              alt="Mountain"
            />
            <div className="px-3 py-2">
              <div className="font-bold text-xl mb-2">EL EDEN</div>
              <hr />
              <p className="text-gray-700 text-base mb-2 text-justify">
                La hermosa naturaleza, el clima cálido, la ubicación geográfica
                y sus maravillosas áreas comunales, convierten a nuestra
                urbanización El Edén en el lugar perfecto para desestresarse,
                adoptar hábitos saludables y compartir tiempo en familia.
              </p>
              <hr />
              <div>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded mt-4 mb-2"
                  onClick={() => Router.push({ pathname: "/eden" })}
                >
                  Lotes disponibles
                </button>
              </div>
            </div>
          </div>

          <div className="cursor-pointer rounded overflow-hidden shadow-lg bg-white transform inset-0 transition duration-500 hover:scale-110 hover:bg-orange-100">
            <img
              className="mx-auto w-48 h-48"
              src="https://www.grupoancon.com/wp-content/uploads/2021/07/logo-mirador.svg"
              alt="Mountain"
            />
            <div className="px-3 py-2">
              <div className="font-bold text-xl mb-2">MIRADOR DEL LAGO</div>
              <hr />
              <p className="text-gray-700 text-base mb-5">
                “El Mirador del lago” es un verdadero paraíso terrenal, donde
                usted y sus seres queridos tendrán el placer de sentir paz,
                tranquilidad y armonía.
              </p>
              <hr />
              <div>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded mt-4 mb-2"
                  onClick={() => Router.push({ pathname: "/mirador" })}
                >
                  Lotes disponibles
                </button>
              </div>
            </div>
          </div>

          <div className="cursor-pointer rounded overflow-hidden shadow-lg bg-white transform inset-0 transition duration-500 hover:scale-110 hover:bg-violet-100">
            <img
              className="mx-auto w-48 h-48"
              src="https://www.grupoancon.com/wp-content/uploads/2020/07/manantial-1.png"
              alt="Mountain"
            />
            <div className="px-3 py-2">
              <div className="font-bold text-xl mb-2">EL MANANTIAL</div>
              <hr />
              <p className="text-gray-700 text-base mb-2">
                Diversión y Libertad es lo que usted encontrará en nuestra
                urbanización El Manantial ubicada en el km 135 de la vía La
                Independencia - Calacalí.
              </p>
              <hr />
              <div>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded mt-4 mb-2"
                  onClick={() => Router.push({ pathname: "/manantial" })}
                >
                  Lotes disponibles
                </button>
              </div>
            </div>
          </div>

          <div className="cursor-pointer rounded overflow-hidden shadow-lg bg-white transform inset-0 transition duration-500 hover:scale-110 hover:bg-blue-100">
            <img
              className="mx-auto w-48 h-48"
              src="https://www.grupoancon.com/wp-content/uploads/2021/07/logo_el_jardin-sf.png"
              alt="Mountain"
            />
            <div className="px-3 py-2">
              <div className="font-bold text-xl mb-2">EL JARDIN</div>
              <hr />
              <p className="text-gray-700 text-base mb-5">Lorem ipsum</p>
              <hr />
              <div>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded mt-4 mb-2"
                  onClick={() => Router.push({ pathname: "/jardin" })}
                >
                  Lotes disponibles
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
