import React from "react";
import EncuestaForm from "../../../lib/components/formEncuesta/encuestaForm";

export const getServerSideProps = async (context) => {
  return {
    props: {
      ofertID: context.query.id,
    },
  };
};
const CrearEncuesta = ({ ofertID }) => {
  return (
    <>
      <title>Crear Encuesta</title>
      <link
        rel="icon"
        href="https://www.grupoancon.com/wp-content/uploads/2020/07/logo.svg"
        sizes="32x32"
      />
      <div className="container mx-auto px-5 bg-white xl:w-3/5 w-11/12 mt-5 mb-5 border rounded-lg">
        <EncuestaForm ofertID={ofertID} />
      </div>
    </>
  );
};

export default CrearEncuesta;
