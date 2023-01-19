/* eslint-disable @next/next/no-html-link-for-pages */
import axios from "axios";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

export const getServerSideProps = async () => {
  const { data: lotesML } = await axios.get(
    "http://localhost:3000/api/mirador"
  );
  return {
    props: {
      lotesML,
    },
  };
};

const OfertML = ({ lotesML }) => {
  return (
    <>
      <div className={styles.limiterMirador}>
        <h2 className="text-center text-5xl font-semibold leading-normal mb-5 text-black">
          LOTES DISPONIBLES - MIRADOR DEL LAGO
        </h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-1/2 mx-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-700">
              <tr>
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
                  Lista
                </th>
                <th scope="col" className="px-6 py-3">
                  Oferta
                </th>
              </tr>
            </thead>
            <tbody>
              {lotesML.data.map((ofertML, index) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={index}
                  >
                    <td className="px-6 py-4">{ofertML.mae_codinv}</td>
                    <td className="px-6 py-4">
                      {ofertML.mae_preact.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td className="px-6 py-4">{ofertML.mae_prevt4} m2</td>
                    <td className="px-6 py-3">
                      <Link
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        href={`/mirador/lotes/${ofertML.mae_codinv}`}
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
export default OfertML;
