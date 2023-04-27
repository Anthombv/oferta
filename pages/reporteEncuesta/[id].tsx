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
      
      <div className="m-4">
        {oneOfertED.data.map((item, index) => {
          return (
            <div
              className="container mx-auto px-5 bg-white xl:w-3/5 w-11/12 mt-5 mb-5 border rounded-lg"
              key={index}
            >
              <h2 className="text-center text-xl font-bold mt-2">
                Informe de Encuesta
              </h2>
              <div className="xl:mx-5">
                <p className="xl:mb-1">
                  <strong>Cliente:</strong> {item.cli_name}
                </p>
                <p className="mb-1">
                  <strong>Fecha:</strong> {item.fechaCreacion}
                </p>
                <p className="mb-1">
                  <strong># de Lote:</strong> {item.mae_codinv}
                </p>
              </div>
              <h2 className="bg-orange-400 xl:w-3/5 w-12/12 mx-auto text-center xl:text-xl text-lg font-bold my-2">
                ¡Felicitaciones por la Adquisición de su Terreno!
              </h2>
              <h2 className="bg-orange-400 xl:w-3/5 w-12/12 mx-auto text-center xl:text-xl text-lg font-bold mt-1">
                Aquí comienza a dar vida su Sueño...
              </h2>
              <p className="my-3 xl:mx-10 text-justify">
                La comunicación para nosotros es lo más importante y queremos
                mejorar cada día, por favor su información que nos proporcione a
                continuación será muy valiosa
              </p>
              <div className="mb-10">
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
              <button
                onClick={() =>
                  Router.push({ pathname: "javascript:history.back()" })
                }
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 inline-flex items-center border border-blue-500 hover:border-transparent rounded mx-2 my-3"
              >
                Atrás
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ReporteEncuesta;
