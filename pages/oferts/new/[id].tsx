import React from "react";
import OfertForm from "../../../lib/components/form/ofertForm";

export const getServerSideProps = async (context) => {
  return {
    props: {
      loteID: context.query.id,
    },
  };
};

const NewOfert = ({ loteID }) => {
  return (
    <>
      <title>Crear Oferta</title>
      <div className="limiterOferts">
        <div className="oferta mx-auto px-5 w-4/5 mt-16 mb-16 rounded-2xl">
          <OfertForm loteID={loteID} />
          <br />
        </div>
      </div>
    </>
  );
};

export default NewOfert;
