/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import axios from "axios";
import Link from "next/link";
import Router from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import NavBar from "../lib/components/navBar";
import { useAuth } from "../lib/hooks/use_auth";
import { CheckPermissions } from "../lib/utils/check_permissions";
import router from "next/router";

export const getServerSideProps = async () => {
  const apiUrl = process.env.API_URL_MANANTIAL;

  try {
    const response = await axios.get(apiUrl);
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
  const { auth } = useAuth();

  const handleGoBack = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    router.back();
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(lotesEM);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filteredItems = lotesEM.filter((ofertEM) =>
      ofertEM.mae_codinv.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filteredItems);
  };
  return (
    <>
      <title>Lotes | EL MANANTIAL</title>

      <div className="limiterProjects Manantial Back">
        <NavBar />
        <h2 className="title-projects text-center xl:text-4xl md:text-4xl text-2xl leading-normal my-4">
          Lotes Disponibles - <strong>EL MANANTIAL</strong>
          <img
            className="mx-auto w-14"
            src="http://grupoancon.com/wp-content/uploads/2020/07/icon-manantial-project-1-min.png"
          />
        </h2>
        <a
          className="backboton mb-4 inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
          href="#"
          onClick={handleGoBack}
        >
          Volver Atrás
        </a>
        <div className="history-button relative overflow-x-auto shadow-md sm:rounded-lg w-11/12 xl:w-1/2 mx-auto">
          <button
            onClick={() =>
              CheckPermissions(auth, [0, 2])
                ? Router.push({ pathname: "/manantial/history" })
                : toast.warning("No tiene permiso para ver el Historial")
            }
            type="button"
            className="boton mb-4 inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
          >
            Historial Lotes Vendidos
          </button>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Buscar por lote..."
            className="my-2 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <table className="w-full text-xs xl:text-sm md:text-sm text-center text-gray-500 dark:text-gray-400 [&>tbody>*:nth-child(odd)]:bg-white [&>tbody>*:nth-child(even)]:bg-gray-100">
            <thead className="text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-700">
              <tr>
                <th className="xl:px-6 xl:py-3 px-3 py-1">Lote</th>
                <th className="xl:px-6 xl:py-3 px-2 py-1">Precio</th>
                <th className="xl:px-6 xl:py-3 px-2 py-1">Area</th>
                <th className="xl:px-6 xl:py-3 px-2 py-1">Estado</th>
                <th className="xl:px-6 xl:py-3 px-2 py-1">Lista</th>
                <th className="xl:px-6 xl:py-3 px-2 py-1">Oferta</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((ofertEM, index) => (
                <tr
                  className="fill-manantial bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <td className="xl:px-6 xl:py-3 px-2 py-1">
                    {ofertEM.mae_codinv}
                  </td>
                  <td className="xl:px-6 xl:py-3 px-2 py-1">
                    {ofertEM.mae_preact.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </td>
                  <td className="xl:px-6 xl:py-3 px-2 py-1">
                    {ofertEM.mae_prevt4} m2
                  </td>
                  <td className="xl:px-6 xl:py-3 px-2 py-1">
                    {ofertEM.mae_codmar}
                  </td>
                  <td className="xl:px-6 xl:py-3 px-2 py-1">
                    <Link
                      className="hover-icons font-medium text-green-500 dark:text-green-600 hover:text-orange-600"
                      href={`/manantial/lotes/${ofertEM.mae_codinv}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 mx-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                        />
                      </svg>
                    </Link>
                  </td>
                  <td className="xl:px-6 xl:py-3 px-2 py-1">
                    <Link
                      href={`/oferts/new/${ofertEM.mae_codinv}`}
                      className="hover-icons font-medium text-green-500 dark:text-green-600 hover:text-orange-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 mx-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>
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
