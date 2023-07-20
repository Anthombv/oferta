import { NextApiRequest, NextApiResponse } from "next";
import { dataBase } from "../../../../lib/config/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET":
        return await getEditOfertEDOn(req, res);
      case "PUT":
        return await EditOfert(req, res);
      default:
        break;
    }
  } catch (error) {
    error;
    return res.status(500).json({
      message: new Error(error).message,
      success: false,
    });
  }
}

const getEditOfertEDOn = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  dataBase.query(
    "SELECT * FROM ofertas, invmae WHERE ofertas.id = ? && invmae.mae_codinv = ofertas.mae_codinv",
    [id],
    function (error, rows, fields) {
      return res.status(200).json({
        message: "Oferta con id " + id,
        data: rows[0],
        success: true,
      });
    }
  );
};

const EditOfert = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const {
    cli_name,
    cli_representante,
    cli_estadoCivil,
    cli_id,
    cli_sexo,
    cli_fecNac,
    cli_telef,
    cli_cell,
    cli_mail,
    cli_trabajo,
    cli_cargoT,
    cli_direccT,
    cli_telefT,
    cli_conyuName,
    cli_conyuID,
    cli_conyuCell,
    cli_conyuTrab,
    cli_conyuDireccT,
    cli_conyuTelT,
    cli_porcentaje,
    cli_descuento,
    cli_descuentoAdd,
    cli_totalOferta,
    cli_state,
  } = req.body;
  dataBase.query(
    "UPDATE ofertas SET cli_name = ?, cli_representante = ?, cli_estadoCivil = ?, cli_id = ?, cli_sexo = ?, cli_fecNac = ?, cli_telef = ?, cli_cell = ?, cli_mail = ?, cli_trabajo = ?, cli_cargoT = ?, cli_direccT = ?, cli_telefT = ?, cli_conyuName = ?, cli_conyuID = ?, cli_conyuCell = ?, cli_conyuTrab = ?, cli_conyuDireccT = ?, cli_conyuTelT = ?, cli_porcentaje = ?, cli_descuento = ?, cli_descuentoAdd = ?, cli_totalOferta = ?, cli_state = ? WHERE id = ?",
    [
      cli_name,
      cli_representante,
      cli_estadoCivil,
      cli_id,
      cli_sexo,
      cli_fecNac,
      cli_telef,
      cli_cell,
      cli_mail,
      cli_trabajo,
      cli_cargoT,
      cli_direccT,
      cli_telefT,
      cli_conyuName,
      cli_conyuID,
      cli_conyuCell,
      cli_conyuTrab,
      cli_conyuDireccT,
      cli_conyuTelT,
      cli_porcentaje,
      cli_descuento,
      cli_descuentoAdd,
      cli_totalOferta,
      cli_state,
      id,
    ]
  );
  return res.status(200).json({
    cli_name,
    cli_representante,
    cli_estadoCivil,
    cli_id,
    cli_sexo,
    cli_fecNac,
    cli_telef,
    cli_cell,
    cli_mail,
    cli_trabajo,
    cli_cargoT,
    cli_direccT,
    cli_telefT,
    cli_conyuName,
    cli_conyuID,
    cli_conyuCell,
    cli_conyuTrab,
    cli_conyuDireccT,
    cli_conyuTelT,
    cli_porcentaje,
    cli_descuento,
    cli_descuentoAdd,
    cli_totalOferta,
    cli_state,
    id,
  });
};

export const config = {
  api: {
    externalResolver: true,
  },
};
