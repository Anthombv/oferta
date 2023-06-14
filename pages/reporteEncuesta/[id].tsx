/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import axios from "axios";
import Router from "next/router";

export const getServerSideProps = async (context) => {
  const { data: oneOfertED } = await axios.get(
    "https://oferta.grupoancon.com/api/newOferts/" + context.query.id
  );
  return {
    props: {
      oneOfertED,
      ofertID: context.query.id,
    },
  };
};

const ReporteEncuesta = ({ oneOfertED }) => {
  return (
    <>
      <title>Informe de Encuesta</title>
      
      <div className="encuesta">
        {oneOfertED.data.map((item, index) => {
          return (
            <div
              className="tabla-encuesta container mx-auto bg-white xl:w-3/5 w-11/12 mt-20 mb-8 rounded-2xl"
              key={index}
            >
              <img className="icon-login pt-10 mb-4" src="http://grupoancon.com/wp-content/uploads/2023/06/icon-app-oferta-2.svg" alt="logo" />
              <h2 className="title w-full text-center text-3xl font-light mt-2 mb-6">
                Informe de Encuesta
              </h2>
              <div className="grid grid-cols-3  xl:mx-8 border border-gray-300 rounded-lg bg-gray-100 mb-6">
                <p className="my-1 text-center">
                  <strong>Cliente:</strong> {item.cli_name}
                </p>
                <p className="my-1 text-center">
                  <strong>Fecha:</strong> {item.fechaCreacion}
                </p>
                <p className="my-1 text-center">
                  <strong># de Lote:</strong> {item.mae_codinv}
                </p>
              </div>
              <h2 className="bg-orange-500 w-full py-4 text-center text-white text-2xl font-bold my-2">
                ¡Felicitaciones por la Adquisición de su Terreno!
              </h2>
              <h2 className="bg-green-300 xl:w-3/5 w-12/12 mx-auto text-center xl:text-xl text-lg font-light mt-1 rounded-lg">
                Aquí comienza a dar vida su Sueño...
              </h2>
              <p className="my-3 xl:mx-10 text-justify">
                La comunicación para nosotros es lo más importante y queremos
                mejorar cada día, por favor su información que nos proporcione a
                continuación será muy valiosa
              </p>
              <div className="mb-2">
                <ul className="space-y-4 list-decimal list-inside xl:mx-10">
                  <li>
                    <strong>
                    ¿Por qué medio se enteró de nosotros?
                    </strong>
                  </li>
                  <ol className="pl-5 mt-2 space-y-1 list-disc list-inside">
                    <li>{item.encuesta_pr1}</li>
                  </ol>
                  <li>
                    <strong>
                    Antes de tomar la desicion de compra usted nos visito en nuestra/o:
                    </strong>
                  </li>
                  <ol className="pl-5 mt-2 space-y-1 list-disc list-inside">
                    <li>{item.encuesta_pr2.toUpperCase()}</li>
                  </ol>
                </ul>
              </div>
              <div className="text-center">
              <button
                onClick={() =>
                  Router.push({ pathname: "javascript:history.back()" })
                }
                className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm w-full sm:w-auto px-12 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 mt-2 mb-8"
              >
                Atrás
              </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ReporteEncuesta;
