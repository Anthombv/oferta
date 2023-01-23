import { NextApiRequest, NextApiResponse } from "next";
import { dataBase } from "../../../lib/config/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET":
        return await getOfert(req, res);
      case "POST":
        return await saveOfert(req, res);
      default:
        throw new Error("Metodo invalido");
    }
  } catch (error) {
    error;
    return res.status(500).json({
      message: new Error(error).message,
      success: false,
    });
  }
}

const getOfert = async (req: NextApiRequest, res: NextApiResponse) => {
  dataBase.query("SELECT * FROM oferta", function (err, rows, fields) {
    return res.status(200).json({
      message: "Todas las ofertas",
      data: rows,
      success: true,
    });
  });
};

const saveOfert = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    cli_name,
    cli_tipoInmueble,
    cli_estadoCivil,
    cli_motivoCompra,
    cli_id,
    fechaCreacion,
    cli_sexo,
    cli_fecNac,
    cli_provin,
    cli_ciudad,
    cli_sector,
    cli_direcc,
    cli_telef,
    cli_cell,
    cli_mail,
    cli_ingresos,
    cli_gastos,
    cli_ahorroM,
    cli_ahorroA,
    cli_trabajo,
    cli_cargoT,
    cli_direccT,
    cli_telefT,
    cli_reFami1,
    cli_paren1,
    cli_telParen1,
    cli_cellParen1,
    cli_reFami2,
    cli_paren2,
    cli_telParen2,
    cli_cellParen2,
    cli_conyuName,
    cli_conyuID,
    cli_conyuCell,
    cli_conyuTrab,
    cli_conyuDireccT,
    cli_conyuTelT,
    cli_refName1,
    cli_refTel1,
    cli_refName2,
    cli_refTel2,
    cli_refName3,
    cli_refTel3,
    cli_asesor,
    cli_asesorTelf,
    cli_tipoVenta,
    cli_contac,
    cli_state,
    cli_observation,
    mae_codinv,
  } = req.body;

  dataBase.query("INSERT INTO oferta SET ?", {
    cli_name,
    cli_tipoInmueble,
    cli_estadoCivil,
    cli_motivoCompra,
    cli_id,
    fechaCreacion,
    cli_sexo,
    cli_fecNac,
    cli_provin,
    cli_ciudad,
    cli_sector,
    cli_direcc,
    cli_telef,
    cli_cell,
    cli_mail,
    cli_ingresos,
    cli_gastos,
    cli_ahorroM,
    cli_ahorroA,
    cli_trabajo,
    cli_cargoT,
    cli_direccT,
    cli_telefT,
    cli_reFami1,
    cli_paren1,
    cli_telParen1,
    cli_cellParen1,
    cli_reFami2,
    cli_paren2,
    cli_telParen2,
    cli_cellParen2,
    cli_conyuName,
    cli_conyuID,
    cli_conyuCell,
    cli_conyuTrab,
    cli_conyuDireccT,
    cli_conyuTelT,
    cli_refName1,
    cli_refTel1,
    cli_refName2,
    cli_refTel2,
    cli_refName3,
    cli_refTel3,
    cli_asesor,
    cli_asesorTelf,
    cli_tipoVenta,
    cli_contac,
    cli_state,
    cli_observation,
    mae_codinv,
  });
  return res.status(200).json({
    cli_name,
    cli_tipoInmueble,
    cli_estadoCivil,
    cli_motivoCompra,
    cli_id,
    fechaCreacion,
    cli_sexo,
    cli_fecNac,
    cli_provin,
    cli_ciudad,
    cli_sector,
    cli_direcc,
    cli_telef,
    cli_cell,
    cli_mail,
    cli_ingresos,
    cli_gastos,
    cli_ahorroM,
    cli_ahorroA,
    cli_trabajo,
    cli_cargoT,
    cli_direccT,
    cli_telefT,
    cli_reFami1,
    cli_paren1,
    cli_telParen1,
    cli_cellParen1,
    cli_reFami2,
    cli_paren2,
    cli_telParen2,
    cli_cellParen2,
    cli_conyuName,
    cli_conyuID,
    cli_conyuCell,
    cli_conyuTrab,
    cli_conyuDireccT,
    cli_conyuTelT,
    cli_refName1,
    cli_refTel1,
    cli_refName2,
    cli_refTel2,
    cli_refName3,
    cli_refTel3,
    cli_asesor,
    cli_asesorTelf,
    cli_tipoVenta,
    cli_contac,
    cli_state,
    cli_observation,
    mae_codinv,
  });
};

export const config = {
  api: {
    externalResolver: true,
  },
};
