/* eslint-disable @next/next/no-html-link-for-pages */
import { GetServerSideProps } from "next";
import React from "react";
import { Oferta } from "../lib/components/interface/oferta";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/oferts/jardin");
  const { data } = await res.json();
  return {
    props: {
      data,
    },
  };
};

type Props = {
  data: Oferta[];
};

const OfertEJ = ({ data }: Props) => {
  return (
    <>
      <div className="bg-yellow-50 sm:bg-yellow-50 md:bg-yellow-50 lg:bg-yellow-50 xl:bg-yellow-50 xl:h-full">
        <h2 className="text-center text-5xl font-normal leading-normal mb-5 font-semibold text-green-500">
          LOTES DISPONIBLES - EL JARDIN
        </h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-1/2 mx-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Codigo
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre Proyecto
                </th>
                <th scope="col" className="px-6 py-3">
                  Precio
                </th>
                <th scope="col" className="px-6 py-3">
                  Area
                </th>
                <th scope="col" className="px-6 py-3">
                  Oferta
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((ofertED, index) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={index}
                  >
                    <td className="px-6 py-4">{ofertED.mae_codinv}</td>
                    <td className="px-6 py-4">{ofertED.mae_desinv}</td>
                    <td className="px-6 py-4">
                      {ofertED.mae_preact.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td className="px-6 py-4">{ofertED.mae_prevt4} m2</td>
                    <td className="px-6 py-4">
                      <a
                        href="/oferts/new"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Oferta
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
export default OfertEJ;
