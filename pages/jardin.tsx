/* eslint-disable @next/next/no-html-link-for-pages */
import axios from "axios";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

export const getServerSideProps = async () => {
  const { data: lotesEJ } = await axios.get("https://oferta.grupoancon.com/api/jardin");
  return {
    props: {
      lotesEJ,
    },
  };
};

const OfertEJ = ({ lotesEJ }) => {
  return (
    <>
      <div className={styles.limiterJardin}>
        <h2 className="text-center text-5xl leading-normal mb-5 font-semibold text-black">
          LOTES DISPONIBLES - EL JARDIN
        </h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-1/2 mx-auto">
          <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-700">
              <tr className="text-center">
                <th scope="col" className="px-6 py-3">
                  Lote
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
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center"
                    key={index}
                  >
                    <td className="px-6 py-4">{ofertEJ.mae_codinv}</td>
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
                        Ofertas
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="/oferts/new"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Crear Oferta
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
