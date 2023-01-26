/* eslint-disable @next/next/no-html-link-for-pages */
import axios from "axios";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

export const getServerSideProps = async () => {
  try {
    const response = await axios.get(
      "https://oferta.grupoancon.com/api/manantial"
    );
    return {
      props: {
        lotesEM: response.data ? response.data.data : [],
      },
    };
  } catch (e) {
    return {
      props: {
        lotesEM: [],
      },
    };
  }
};

const OfertEM = ({ lotesEM }) => {
  return (
    <>
      <div className={styles.limiterManantial}>
        <h2 className="text-center text-5xl leading-normal mb-5 font-semibold text-white">
          LOTES DISPONIBLES - EL MANANTIAL
        </h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-1/2 mx-auto">
          <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
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
              {lotesEM.map((ofertEM, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <td className="px-6 py-4">{ofertEM.mae_codinv}</td>
                  <td className="px-6 py-4">
                    {ofertEM.mae_preact.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </td>
                  <td className="px-6 py-4">{ofertEM.mae_prevt4} m2</td>
                  <td className="px-6 py-3">{ofertEM.mae_codmar}</td>
                  <td className="px-6 py-4">
                    <Link
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      href={`/manantial/lotes/${ofertEM.mae_codinv}`}
                    >
                      Ofertas
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href={`/oferts/new/${ofertEM.mae_codinv}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Crear Oferta
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
      </div>
    </>
  );
};
export default OfertEM;
