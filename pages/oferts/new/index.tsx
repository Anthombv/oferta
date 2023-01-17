import React from "react";
import OfertForm from "../../../lib/components/form/ofertForm";

const NewOfert = () => {
  return (
    <>
       <div className="flex h-full w-full bg-no-repeat bg-cover" style={{backgroundImage: "url(/bgform.jpg)"}} > 
        
        <div className="container mx-auto px-5 bg-white w-4/5 mt-5 mb-5 border rounded-lg">
          <OfertForm />
          <br />
        </div>
      </div>
    </>
  );
};

export default NewOfert;
