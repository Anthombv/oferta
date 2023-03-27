import React from "react";
import OfertForm from "../../../lib/components/form/ofertForm";
import styles from "../../../styles/Home.module.css";

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
      <link
        rel="icon"
        href="https://www.grupoancon.com/wp-content/uploads/2020/07/logo.svg"
        sizes="32x32"
      />
      <div
        className={styles.limiterOferts}
      >
        <div className="mx-auto px-5 bg-white w-4/5 mt-5 mb-5 border rounded-lg">
          <OfertForm loteID={loteID} />
          <br />
        </div>
      </div>
    </>
  );
};

export default NewOfert;
