import React from "react";
import EncuestaForm from "../../../lib/components/formEncuesta/encuestaForm";

export const getServerSideProps = async (context) => {
  return {
    props: {
      ofertID: context.query.id,
    },
  };
};
const CrearEncuesta = ({ofertID}) => {
  return (
    <div className="container mx-auto px-5 bg-white w-2/5 mt-5 mb-5 border rounded-lg">
      <EncuestaForm ofertID={ofertID} />
    </div>
  );
};

export default CrearEncuesta;
