/* eslint-disable @next/next/no-html-link-for-pages */
import axios from "axios";
import Link from "next/link";
import React from "react";
import styles from "../../../styles/Home.module.css";

export const getServerSideProps = async (context) => {
  const { data: oneLotEM } = await axios.get(
    "https://oferta.grupoancon.com/api/manantial/" + context.query.id
  );
  return {
    props: {
      oneLotEM,
      loteID: context.query.id,
    },
  };
};

const EM = ({ oneLotEM, loteID }) => {
  return (
    <>
      <div className={styles.limiteOfert}>
        <h1 className="text-center text-black font-bold text-4xl my-5 mx-3">
          OFERTAS DEL LOTE {loteID}
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
              {oneLotEM.data.map((item, index) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    key={index}
                  >
                    <td className="px-6 py-4">{item.cli_name}</td>
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4">
                      <Link
                        href={`/reporteOferta/${item.id}`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Reporte
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};  

export default EM;
