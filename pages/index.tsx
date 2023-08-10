/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../lib/components/navBar";
import Router from "next/router";
import { useAuth } from "../lib/hooks/use_auth";
import { CheckPermissions } from "../lib/utils/check_permissions";
import { toast } from "react-toastify";

const Home = () => {
  const { auth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
  };

  const handleVentas = () => {
    Router.push({ pathname: `/misVentas` });
  };

  const handleReporte = () => {
    CheckPermissions(auth, [0, 2])
      ? Router.push({ pathname: `/reporteGeneral` })
      : toast.warning("No tiene permiso para ver el reporte General");
  };
  return (
    <>
      <title>Inicio</title>
      <div className="main-side w-full mx-auto min-h-fit">
        <Navbar />
        <h2 className="title-main text-center text-4xl leading-normal">
          ¿En donde quieres la oferta?
        </h2>

        <p className="subtitle-main text-center text-lg mt-2 pb-5">
          Selecciona un proyecto
        </p>

        <div className="option-box px-20 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-5">
          {/* Jardin */}
          <div>
            <Link href="/jardin">
              <div
                className="box h-full cursor-pointer rounded-xl overflow-hidden transform mb-3"
                onClick={handleClick}
              >
                <div className="gradient-box flex absolute items-center justify-items-center justify-center text-center top-0 left-0 h-full w-full">
                  <div className="px-2">
                    <img
                      className="mx-auto w-48"
                      src="http://grupoancon.com/wp-content/uploads/2023/05/logo-jardin-app-2-min.png"
                      alt=""
                    />
                    <p className="label new">Nuevo</p>
                    <div className="image-project jardin"></div>
                    <p className="info text-sm text-center">
                      Una experiencia única con la naturaleza le aguarda en este
                      nuevo y mágico lugar.
                    </p>
                    <div className="boton">INGRESAR</div>
                  </div>
                </div>
              </div>
            </Link>

            {isLoading && (
              <div className="overlay">
                <div className="loading-container">
                  <img
                    className="loading-gif"
                    src="/loader-colors.gif"
                    alt="loading-gif"
                    width="580"
                    height="435"
                  />
                </div>
              </div>
            )}

            <style jsx>{`
              .overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
              }

              .loading-container {
                text-align: center;
              }
            `}</style>
          </div>
          {/* Eden */}
          <div>
            <div className="box h-full cursor-pointer rounded-xl overflow-hidden transform mb-3">
              <Link href="/eden">
                <div
                  className="gradient-box flex absolute items-center justify-items-center justify-center text-center top-0 left-0 h-full w-full"
                  onClick={handleClick}
                >
                  <div className="px-2">
                    <img
                      className="mx-auto w-48"
                      src="http://grupoancon.com/wp-content/uploads/2023/05/logo-eden-app-2-min.png"
                      alt=""
                    />
                    <p className="label last">Ultimos Lotes</p>
                    <div className="image-project eden"></div>
                    <p className="info text-sm text-center">
                      La hermosa naturaleza, el clima cálido, la ubicación
                      geográfica y sus maravillosas áreas comunales.
                    </p>
                    <div className="boton">INGRESAR</div>
                  </div>
                </div>
              </Link>
            </div>

            {isLoading && (
              <div className="overlay">
                <div className="loading-container">
                  <img
                    className="loading-gif"
                    src="/loader-colors.gif"
                    alt="loading-gif"
                    width="580"
                    height="435"
                  />
                </div>
              </div>
            )}

            <style jsx>{`
              .overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
              }

              .loading-container {
                text-align: center;
              }
            `}</style>
          </div>
          {/* Mirador del lago */}
          <div>
            <div className="box h-full cursor-pointer rounded-xl overflow-hidden transform mb-3">
              <Link href="/mirador">
                <div
                  className="gradient-box flex absolute items-center justify-items-center justify-center text-center top-0 left-0 h-full w-full"
                  onClick={handleClick}
                >
                  <div className="px-2">
                    <img
                      className="mx-auto w-48"
                      src="http://grupoancon.com/wp-content/uploads/2023/05/logo-mirador-app-2-min.png"
                      alt=""
                    />
                    <p className="label exclu">Lotes Exclusivos</p>
                    <div className="image-project mirador"></div>
                    <p className="info text-sm text-center">
                      Un verdadero paraíso terrenal, con vista al lago San
                      Pablo, ubicado en el hermoso pueblo de Otavalo.
                    </p>
                    <div className="boton">INGRESAR</div>
                  </div>
                </div>
              </Link>
            </div>

            {isLoading && (
              <div className="overlay">
                <div className="loading-container">
                  <img
                    className="loading-gif"
                    src="/loader-colors.gif"
                    alt="loading-gif"
                    width="580"
                    height="435"
                  />
                </div>
              </div>
            )}

            <style jsx>{`
              .overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
              }

              .loading-container {
                text-align: center;
              }
            `}</style>
          </div>
          {/* Manantial */}
          <div>
            <div className="box h-full cursor-pointer rounded-xl overflow-hidden transform mb-3">
              <Link href="/manantial">
                <div
                  className="gradient-box flex absolute items-center justify-items-center justify-center text-center top-0 left-0 h-full w-full"
                  onClick={handleClick}
                >
                  <div className="px-2">
                    <img
                      className="mx-auto w-48"
                      src="http://grupoancon.com/wp-content/uploads/2023/05/logo-manantial-app-2-min.png"
                      alt=""
                    />
                    <p className="label last">Ultimos Lotes</p>
                    <div className="image-project manantial"></div>
                    <p className="info text-sm text-center">
                      Diversión y Libertad es lo que usted encontrará en nuestra
                      urbanización a sólo 2 horas de Quito.
                    </p>
                    <div className="boton">INGRESAR</div>
                  </div>
                </div>
              </Link>
            </div>

            {isLoading && (
              <div className="overlay">
                <div className="loading-container">
                  <img
                    className="loading-gif"
                    src="/loader-colors.gif"
                    alt="loading-gif"
                    width="580"
                    height="435"
                  />
                </div>
              </div>
            )}

            <style jsx>{`
              .overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
              }

              .loading-container {
                text-align: center;
              }
            `}</style>
          </div>
        </div>
        <div className="grid md:grid-cols-2 mx-auto gap-4 w-4/12">
          <div>
            <button
              className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-200"
              onClick={handleVentas}
            >
              MIS VENTAS
            </button>
          </div>
          <div>
            <button
              className="bg-orange-500 whitespace-nowrap text-white font-bold py-2 px-4 rounded hover:bg-orange-200"
              onClick={handleReporte}
            >
              REPORTE DE VENTAS
            </button>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};
export default Home;
