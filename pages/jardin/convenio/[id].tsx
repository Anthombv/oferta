/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";
import ConvenioContado from "../convenioContado/[id]";
import ConvenioContadoREP from "../convenioContadoRep/[id]";
import axios from "axios";
import Navbar from "../../../lib/components/navBar";
import ConvenioBiess from "../convenioBiess/[id]";
import ConvenioBiessREP from "../convenioBiessRep/[id]";
import ConvenioDirecto from "../convenioDirecto/[id]";
import ConvenioDirectoREP from "../convenioDirectoRep/[id]";

export const getServerSideProps = async (context) => {
  const { data: oneOfert } = await axios.get(
    "https://oferta.grupoancon.com/api/newOferts/" + context.query.id
  );
  return {
    props: {
      oneOfert,
      ofertID: context.query.id,
    },
  };
};

const Convenio = ({ oneOfert, ofertID }) => {
  return (
    <>
      <Navbar />
      <div className="historial Jardin w-full min-h-screen m-auto absolute Back">
        <p className="title-projects text-center xl:text-4xl md:text-3xl text-2xl leading-normal font-semibold my-4">
          CONVENIO
          <img
            className="mx-auto w-12"
            src="http://grupoancon.com/wp-content/uploads/2020/07/icon-jardin-1-min.png"
          />
        </p>
        <div className="relative overflow-x-auto sm:rounded-lg w-11/12 xl:w-1/2 mx-auto bg-gray-100">
          <p className="text-center text-2xl">CONTADO</p>
          <hr />
          <div className="grid grid-cols-2 text-center">
            <div className="mb-4 mt-4 mx-auto inline-block w-3/4 px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
              <ConvenioContado oneOfert={oneOfert} ofertID={ofertID} />
            </div>
            <div className="mb-4 mt-4 mx-auto inline-block w-3/4 px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
              <ConvenioContadoREP oneOfert={oneOfert} ofertID={ofertID} />
            </div>
          </div>
          <hr />
          <p className="text-center text-2xl">BIESS</p>
          <hr />
          <div className="grid grid-cols-2 text-center">
            <div className="mb-4 mt-4 mx-auto inline-block w-3/4 px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
              <ConvenioBiess oneOfert={oneOfert} ofertID={ofertID} />
            </div>
            <div className="mb-4 mt-4 mx-auto inline-block w-3/4 px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
              <ConvenioBiessREP oneOfert={oneOfert} ofertID={ofertID} />
            </div>
          </div>
          <hr />
          <p className="text-center text-2xl">DIRECTO</p>
          <hr />
          <div className="grid grid-cols-2 text-center">
            <div className="mb-4 mt-4 mx-auto inline-block w-3/4 px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
              <ConvenioDirecto oneOfert={oneOfert} ofertID={ofertID} />
            </div>
            <div className="mb-4 mt-4 mx-auto inline-block w-3/4 px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
              <ConvenioDirectoREP oneOfert={oneOfert} ofertID={ofertID} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Convenio;
