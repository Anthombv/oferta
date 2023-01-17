/* eslint-disable @next/next/no-html-link-for-pages */
import axios from "axios";
import Link from "next/link";
import React from "react";

export const getServerSideProps = async () => {
  const { data: lotesEJ } = await axios.get("http://localhost:3000/api/jardin");
  return {
    props: {
      lotesEJ,
    },
  };
};

const OfertEJ = ({ lotesEJ }) => {
  return (
    <>
      <div className="bg-yellow-50 sm:bg-yellow-50 md:bg-yellow-50 lg:bg-yellow-50 xl:bg-yellow-50 xl:h-full">
        <h2 className="text-center text-5xl leading-normal mb-5 font-semibold text-green-500">
          LOTES DISPONIBLES - EL JARDIN
        </h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-1/2 mx-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Codigo
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre Proyecto
                </th>
                <th scope="col" className="px-6 py-3">
                  Precio
                </th>
                <th scope="col" className="px-6 py-3">
                  Area
                </th>
                <th scope="col" className="px-6 py-3">
                  Disponibilidad
                </th>
                <th scope="col" className="px-6 py-3">
                  Lista
                </th>
                <th scope="col" className="px-6 py-3">
                  Oferta
                </th>
              </tr>
            </thead>
            <tbody>
              {lotesEJ.data.map((ofertEJ, index) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={index}
                  >
                    <td className="px-6 py-4">{ofertEJ.mae_codinv}</td>
                    <td className="px-6 py-4">{ofertEJ.mae_desinv}</td>
                    <td className="px-6 py-4">
                      {ofertEJ.mae_preact.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td className="px-6 py-4">{ofertEJ.mae_prevt4} m2</td>
                    <td className="px-6 py-3">{ofertEJ.mae_codmar}</td>
                    <td className="px-6 py-4">
                      <Link
                        href={`/jardin/lotes/${ofertEJ.mae_codinv}`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Oferta
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="/oferts/new"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Oferta
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <br />
      </div>
    </>
  );
};
export default OfertEJ;
