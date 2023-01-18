import axios from "axios";
import React from "react";

export const getServerSideProps = async () => {
  const { data: oferts } = await axios.get(
    "http://localhost:3000/api/newOferts"
  );
  return {
    props: {
      oferts,
    },
  };
};

const OfertasEden = ({ oferts }) => {
  return (
    <>
      <div>
        {oferts.data.map((ofert: any) => {
          return (
            <div key={ofert.id}>
              <h1 className="text-center text-red-700">{ofert.cli_name}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OfertasEden;
