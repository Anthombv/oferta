/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useAuth } from "../../lib/hooks/use_auth";
import HttpClient from "../../lib/utils/http_client";
import Navbar from "../../lib/components/navBar";
import Router from "next/router";

const MisVentas = () => {
  const { auth } = useAuth();
  const [ventas, setVentas] = useState([]);

  const loadData = async () => {
    try {
      const response = await HttpClient(
        `/api/listOfOne/${auth.userName}`,
        "GET",
        auth.userName,
        auth.role
      );
      const todasVentas = response.data ?? [];
      setVentas(todasVentas);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(ventas);
  return (
    <>
      <div className="limiteOfert Back">
        <Navbar />
        <h1 className="title-projects text-center xl:text-4xl md:text-3xl text-2xl leading-normal font-semibold my-4">
          VENTAS DE: <strong>{auth?.name}</strong>
        </h1>
        <button
          className="backboton mb-4 inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => Router.back()}
        >
          Volver Atrás
        </button>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-11/12 xl:w-1/2 mx-auto">
          <table className="w-full text-xs xl:text-sm md:text-sm text-center text-gray-500 dark:text-gray-400 [&>tbody>*:nth-child(odd)]:bg-white [&>tbody>*:nth-child(even)]:bg-gray-100">
            <thead className="text-xs text-white text-center uppercase bg-gray-700 dark:bg-gray-700 dark:text-black">
              <tr className="text-center">
                <th className="xl:px-6 xl:py-3 px-3 py-1">#</th>
                <th className="xl:px-6 xl:py-3 px-2 py-1">Cliente</th>
                <th className="xl:px-6 xl:py-3 px-2 py-1">Fecha</th>
                <th className="xl:px-6 xl:py-3 px-2 py-1">Estado</th>
              </tr>
            </thead>
            <tbody>
              {ventas.map((item, index) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-center"
                    key={index}
                  >
                    <td className="xl:px-6 xl:py-3 px-3 py-1">{item.id}</td>
                    <td className="xl:px-6 xl:py-3 px-2 py-1">
                      {item.cli_name}
                    </td>
                    <td className="xl:px-6 xl:py-3 px-2 py-1">
                      {item.fechaCreacion}
                    </td>
                    <td className="xl:px-6 xl:py-3 px-2 py-1">
                      {item.cli_state}
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
export default MisVentas;
