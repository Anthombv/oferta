import axios from "axios";
import Link from "next/link";
import Router from "next/router";
import React from "react";
import { toast } from "react-toastify";
import styles from "../../../styles/Home.module.css";

export const getServerSideProps = async (context) => {
  const { data: oneLotML } = await axios.get(
    "https://oferta.grupoancon.com/api/mirador/" + context.query.id
  );

  return {
    props: {
      oneLotML,
      loteID: context.query.id,
    },
  };
};

const ML = ({ oneLotML, loteID }) => {
  return (
    <>
      <div className={styles.limiteOfert}>
        <h1 className="text-center text-black font-bold text-4xl my-5 mx-3">
          OFERTAS DEL LOTE {loteID}
        </h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-4/5 mx-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-black dark:bg-white dark:text-black text-center">
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
                <th scope="col" className="px-6 py-3">
                  Encuesta
                </th>
              </tr>
            </thead>
            <tbody>
              {oneLotML.data.map((item, index) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-center"
                    key={index}
                  >
                    <td className="px-6 py-3">{item.cli_name}</td>
                    <td className="px-6 py-3">{item.fechaCreacion}</td>
                    <td className="px-6 py-3">{item.cli_state}</td>
                    <td className="px-6 py-3">
                      <Link
                        href={`/reporteOferta/${item.id}`}
                        className="text-blue-600 dark:text-blue-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="mx-auto"
                          width="2.25em"
                          height="1.50em"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>
                      </Link>
                    </td>
                    <td className="px-6 py-3">
                      <button
                        onClick={() =>
                          item.encuesta_pr1 === ""
                            ? Router.push({
                                pathname: `/encuesta/new/${item.id}`,
                              })
                            : Router.push({
                                pathname: `/reporteEncuesta/${item.id}`,
                              })
                        }
                        className="text-blue-600 dark:text-blue-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          width="2.25em"
                          height="1.50em"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>
                      </button>
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

export default ML;
