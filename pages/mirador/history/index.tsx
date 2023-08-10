/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Link from "next/link";
import Router from "next/router";
import Navbar from "../../../lib/components/navBar";
import RoleLayout from "../../../lib/layouts/role_layout";
import { useAuth } from "../../../lib/hooks/use_auth";
import { useState } from "react";

export const getServerSideProps = async () => {
  try {
    const response = await axios.get(
      "https://oferta.grupoancon.com/api/histories/mirador"
    );
    return {
      props: {
        lotesML: response.data ? response.data.data : [],
      },
    };
  } catch (e) {
    return {
      props: {
        lotesML: [],
      },
    };
  }
};

const LotesVendidosED = ({ lotesML }) => {
  const { auth } = useAuth();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(lotesML);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filteredItems = lotesML.filter((ofertML) =>
      ofertML.cli_asesor.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filteredItems);
  };
  return (
    <>
      <RoleLayout permissions={[0, 2]}>
        <title>Lotes Vendidos | MIRADOR DEL LAGO</title>
        <Navbar />
        <div className="historial Mirador w-full min-h-screen m-auto absolute Back">
          <p className="title-projects text-center xl:text-4xl md:text-3xl text-2xl leading-normal font-semibold my-4">
            Lotes <strong>Vendidos</strong>
            <img
              className="mx-auto w-16"
              src="http://grupoancon.com/wp-content/uploads/2020/07/icon-mirador-1.1-min.png"
            />
          </p>
          <button
            className="backboton mb-4 inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => Router.back()}
          >
            Volver Atrás
          </button>
          <div className="relative overflow-x-auto sm:rounded-lg w-11/12 xl:w-5/6 mx-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Buscar por asesor..."
              className="my-2 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <table className="w-full whitespace-nowrap text-xs xl:text-sm md:text-sm text-center text-gray-500 dark:text-gray-400 [&>tbody>*:nth-child(odd)]:bg-white [&>tbody>*:nth-child(even)]:bg-gray-100">
              <thead className="text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-700 w-full">
                <tr className="text-center">
                  <th className="xl:px-6 xl:py-3 px-3 py-1">Numero</th>
                  <th className="xl:px-6 xl:py-3 px-3 py-1">Cliente</th>
                  <th className="xl:px-6 xl:py-3 px-3 py-1">Asesor</th>
                  <th className="xl:px-6 xl:py-3 px-2 py-1">Lote</th>
                  <th className="xl:px-6 xl:py-3 px-2 py-1">Precio</th>
                  <th className="xl:px-6 xl:py-3 px-2 py-1">Estado</th>
                  <th className="xl:px-6 xl:py-3 px-2 py-1">Editar</th>
                  <th className="xl:px-6 xl:py-3 px-2 py-1">Reporte</th>
                  <th className="xl:px-6 xl:py-3 px-2 py-1">Licitud</th>
                  <th className="xl:px-6 xl:py-3 px-2 py-1">Encuesta</th>
                  <th className="xl:px-6 xl:py-3 px-2 py-1">Convenio</th>
                </tr>
              </thead>
              <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                {filteredData.map((ofertML, index) => {
                  return (
                    <tr className="text-center" key={index}>
                      <td className="xl:px-6 xl:py-3 px-3 py-1">
                        {ofertML.id}
                      </td>
                      <td className="xl:px-6 xl:py-3 px-3 py-1">
                        {ofertML.cli_name}
                      </td>
                      <td className="xl:px-6 xl:py-3 px-3 py-1">
                        {ofertML.cli_asesor}
                      </td>
                      <td className="xl:px-6 xl:py-3 px-2 py-1">
                        {ofertML.mae_codinv}
                      </td>
                      <td className="xl:px-6 xl:py-3 px-2 py-1">
                        {ofertML.cli_totalOferta.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                      <td className="xl:px-6 xl:py-3 px-2 py-1">
                        {ofertML.cli_state}
                      </td>
                      <td className="xl:px-6 xl:py-3 px-2 py-1">
                        <Link
                          href={`/oferts/edit/${ofertML.id}`}
                          className="text-sky-700 dark:text-sky-800 hover:text-orange-600"
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
                        </Link>
                      </td>
                      <td className="xl:px-6 xl:py-3 px-3 py-1">
                        <Link
                          href={`/reporteOferta/${ofertML.id}`}
                          className="text-sky-700 dark:text-sky-800 hover:text-orange-600"
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
                        <Link
                          href={`/reporteLicitud/${ofertML.id}`}
                          className="text-sky-700 dark:text-sky-800 hover:text-orange-600"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                            />
                          </svg>
                        </Link>
                      </td>
                      <td className="xl:px-6 xl:py-3 px-2 py-1">
                        <button
                          onClick={() =>
                            Router.push({
                              pathname: `/reporteEncuesta/${ofertML.id}`,
                            })
                          }
                          className="text-sky-700 dark:text-sky-800 hover:text-orange-600"
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
                      <td className="xl:px-6 xl:py-3 px-2 py-1">
                        <button
                          onClick={() =>
                            Router.push({
                              pathname: `/mirador/convenio/${ofertML.id}`,
                            })
                          }
                          className="text-sky-700 dark:text-sky-800 hover:text-orange-600"
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
                              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
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
      </RoleLayout>
    </>
  );
};

export default LotesVendidosED;
