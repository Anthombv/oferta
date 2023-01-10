
import { Oferta } from "../components/interface/oferta";
import { dataBase } from "./db";

export const getOfertsEJ = async() => {
  try {
    return(await new Promise((resolve, reject) => {
      dataBase.query(
        "SELECT * FROM invmae WHERE invmae.mae_regsan = '41' && invmae.mae_codmar = '3.- LIBRE'",
        (err, data) => (err ? reject(err) : resolve(data)),
      );
    })) as Oferta; 
  } catch (error: any) {
    console.log(error.message)
    return[];
  }  
}