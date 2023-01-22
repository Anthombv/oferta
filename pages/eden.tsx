/* eslint-disable @next/next/no-html-link-for-pages */
import axios from "axios";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

export const getServerSideProps = async () => {
  const { data: lotesED } = await axios.get("http://localhost:3000/api/eden");
  return {
    props: {
      lotesED,
    },
  };
};

const OfertED = ({ lotesED }) => {
  return (
    <>
      <div className={styles.limiterEden}>
        <h2 className="text-center text-4xl leading-normal font-semibold text-black my-4">
          LOTES DISPONIBLES - EL EDEN
        </h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-1/2 mx-auto">
          <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 [&>tbody>*:nth-child(odd)]:bg-white [&>tbody>*:nth-child(even)]:bg-gray-100">
            <thead className="text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-700 w-full">
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
            <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 w-full">
              {lotesED.data.map((ofertED, index) => (
                <tr className="text-center" key={index}>
                  <td className="px-6 py-3">{ofertED.mae_codinv}</td>
                  <td className="px-6 py-3">
                    {ofertED.mae_preact.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </td>
                  <td className="px-6 py-3">{ofertED.mae_prevt4} m2</td>
                  <td className="px-6 py-3">{ofertED.mae_codmar}</td>
                  <td className="px-6 py-3">
                    <Link
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      href={`/eden/lotes/${ofertED.mae_codinv}`}
                    >
                      Ofertas
                    </Link>
                  </td>
                  <td className="px-6 py-3">
                    <a
                      href={`/oferts/new/${ofertED.mae_codinv}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Crear oferta
                    </a>
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
export default OfertED;
