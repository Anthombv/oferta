import axios from "axios";
import React from "react";

export const getServerSideProps = async (context) => {
  const { data: oneLotEM } = await axios.get(
    "http://localhost:3000/api/manantial/" + context.query.id
  );
  console.log(context.query.id)
  return {
    props: {
      oneLotEM,
    },
  };
};

const EM = ({ oneLotEM }) => {
  console.log({oneLotEM});
  return (
    <>
      <div>
        <h1>hola</h1>
      </div>
    </>
  );
};

export default EM;