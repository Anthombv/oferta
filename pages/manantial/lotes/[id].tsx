import axios from "axios";
import Link from "next/link";
import Router from "next/router";
import React from "react";
import { toast } from "react-toastify";
import NavBar from "../../../lib/components/navBar";
import { useAuth } from "../../../lib/hooks/use_auth";
import { CheckPermissions } from "../../../lib/utils/check_permissions";
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
  const { auth } = useAuth();
  return (
    <>
      <title>Ofertas | EL MANANTIAL</title>
      <link
        rel="icon"
        href="https://www.grupoancon.com/wp-content/uploads/2020/07/logo.svg"
        sizes="32x32"
      />
      <div className={styles.limiteOfert}>
        <NavBar />
        <h1 className="text-center xl:text-4xl md:text-3xl text-2xl leading-normal font-semibold text-black my-4">
          OFERTAS DEL LOTE {loteID}
        </h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-11/12 xl:w-1/2 mx-auto">
          <table className="w-full text-xs xl:text-sm md:text-sm text-center text-gray-500 dark:text-gray-400 [&>tbody>*:nth-child(odd)]:bg-white [&>tbody>*:nth-child(even)]:bg-gray-100">
            <thead className="text-xs text-white text-center uppercase bg-black dark:bg-white dark:text-black">
              <tr className="text-center">
                <th className="xl:px-6 xl:py-3 px-3 py-1">#</th>
                <th className="xl:px-6 xl:py-3 px-3 py-1">Cliente</th>
                <th className="xl:px-6 xl:py-3 px-3 py-1">Fecha</th>
                <th className="xl:px-6 xl:py-3 px-3 py-1">Estado</th>
                <th className="xl:px-6 xl:py-3 px-3 py-1">Editar</th>
                <th className="xl:px-6 xl:py-3 px-3 py-1">Reporte</th>
                <th className="xl:px-6 xl:py-3 px-3 py-1">Encuesta</th>
              </tr>
            </thead>
            <tbody>
              {oneLotEM.data.map((item, index) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-center"
                    key={index}
                  >
                    <td className="xl:px-6 xl:py-3 px-3 py-1">{item.id}</td>
                    <td className="xl:px-6 xl:py-3 px-3 py-1">
                      {item.cli_name}
                    </td>
                    <td className="xl:px-6 xl:py-3 px-3 py-1">
                      {item.fechaCreacion}
                    </td>
                    <td className="xl:px-6 xl:py-3 px-3 py-1">
                      {item.cli_state}
                    </td>
                    <td className="xl:px-6 xl:py-3 px-3 py-1">
                      <button
                        onClick={() =>
                          CheckPermissions(auth, [0, 2])
                            ? Router.push({
                                pathname: `/oferts/edit/${item.id}`,
                              })
                            : toast.warning(
                                "No tienes permiso para editar la Oferta"
                              )
                        }
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
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </button>
                    </td>
                    <td className="xl:px-6 xl:py-3 px-3 py-1">
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
                    <td className="xl:px-6 xl:py-3 px-3 py-1">
                      <button
                        disabled={CheckPermissions(auth, [1])}
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

export default EM;
