import axios from "axios";
import React from "react";

export const getServerSideProps = async (context) => {
  const { data: oneLotEJ } = await axios.get(
    "http://localhost:3000/api/jardin/" + context.query.id
  );
  return {
    props: {
      oneLotEJ,
    },
  };
};

const EJ = ({ oneLotEJ }) => {
  return (
    <>
      <div>
        <h1>{oneLotEJ.data.mae_codinv}</h1>
      </div>
    </>
  );
};

export default EJ;
