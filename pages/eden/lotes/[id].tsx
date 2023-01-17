import axios from "axios";
import React from "react";

export const getServerSideProps = async (context) => {
  const { data: oneLotED } = await axios.get(
    "http://localhost:3000/api/eden/" + context.query.id
  );

  return {
    props: {
      oneLotED,
    },
  };
};

const ED = ({ oneLotED }) => {
  return (
    <>
      <div>
        <h1>{oneLotED.data.mae_codinv}</h1>
      </div>
    </>
  );
};

export default ED;
