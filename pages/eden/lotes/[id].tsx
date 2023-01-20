/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import React from "react";
import styles from "../../../styles/Home.module.css";

export const getServerSideProps = async (context) => {
  const { data: oneLotED } = await axios.get(
    "http://localhost:3000/api/eden/" + context.query.id
  );

  return {
    props: {
      oneLotED,
    },
  };
};

const ED = ({ oneLotED }) => {
  return (
    <>
      <div className={styles.limiteOfert}>
        <h1 className="text-center text-white font-bold text-4xl my-5 mx-3">
          OFERTAS DEL LOTE {oneLotED.data.mae_codinv}
        </h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-4/5 mx-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-black dark:bg-white dark:text-black">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Cliente
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha
                </th>
                <th scope="col" className="px-6 py-3">
                  Estado
                </th>
                <th scope="col" className="px-6 py-3">
                  Reporte
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">
                  <a
                    href="/eden/reporteOferta/"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Reporte
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ED;
