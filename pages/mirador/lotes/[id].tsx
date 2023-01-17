import axios from "axios";
import React from "react";

export const getServerSideProps = async (context) => {
  const { data: oneLotML } = await axios.get(
    "http://localhost:3000/api/mirador/" + context.query.id
  );

  return {
    props: {
      oneLotML,
    },
  };
};

const ML = ({ oneLotML }) => {
  return (
    <>
      <div>
        <h1>{oneLotML.data.mae_codinv}</h1>
      </div>
    </>
  );
};

export default ML;
