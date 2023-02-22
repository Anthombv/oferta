/* eslint-disable react/jsx-key */
import axios from "axios";
import Router from "next/router";
import router from "next/router";
import { useEffect, useState } from "react";
import { Pendiente } from "../../utils/constans";
import FormatedDate from "../../utils/date";

const EncuestaForm = ({ ofertID }: { ofertID: string }) => {
  const [ofert, setOfert] = useState<any>({
    cli_name: "",
    cli_sexo: "",
    cli_tipoInmueble: "",
    cli_estadoCivil: "",
    cli_motivoCompra: "",
    cli_id: "",
    fechaCreacion: FormatedDate(),
    cli_fecNac: "",
    cli_provin: "",
    cli_ciudad: "",
    cli_sector: "",
    cli_direcc: "",
    cli_telef: "",
    cli_cell: "",
    cli_mail: "",
    cli_ingresos: "",
    cli_gastos: "",
    cli_ahorroM: "",
    cli_ahorroA: "",
    cli_trabajo: "",
    cli_cargoT: "",
    cli_direccT: "",
    cli_telefT: "",
    cli_reFami1: "",
    cli_paren1: "",
    cli_telParen1: "",
    cli_cellParen1: "",
    cli_reFami2: "",
    cli_paren2: "",
    cli_telParen2: "",
    cli_cellParen2: "",
    cli_conyuName: "",
    cli_conyuID: "",
    cli_conyuTrab: "",
    cli_conyuDireccT: "",
    cli_conyuCell: "",
    cli_conyuTelT: "",
    cli_refName1: "",
    cli_refTel1: "",
    cli_refName2: "",
    cli_refTel2: "",
    cli_refName3: "",
    cli_refTel3: "",
    cli_asesor: "",
    cli_asesorTelf: "",
    cli_tipoVenta: "",
    cli_contac: "",
    cli_state: Pendiente,
    cli_observation: "",
    cli_ofrecimiento: "",
    encuesta_pr1: "",
    encuesta_pr2: "",
    encuesta_pr3: "",
    encuesta_pr4: "",
    cli_descuento: "",
    cli_totalOferta: "",
    mae_codinv: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setOfert({ ...ofert, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put("/api/newOferts/" + ofertID, ofert);
    router.push("javascript:history.back()");
  };

  return (
    <>
      <div>
        <h2 className="text-center text-xl pt-2 font-bold text-red-900 dark:text-black md:text-4xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r to-blue-900 from-purple-600">
          FORMULARIO DE ENCUESTA
        </h2>
        <form onSubmit={handleSubmit} className="m-2 text-lg">
          <label>¿Por qué medio se enteró de nosotros?</label>
          <select
            name="encuesta_pr1"
            id="encuesta_pr1"
            value={ofert.encuesta_pr1}
            onChange={handleChange}
            //required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3"
          >
            <option>Seleccione como nos contacto</option>
            <option value="TRUEQUE">TRUEQUE</option>
            <option value="CLIENTE ANTIGUO">CLIENTE ANTIGUO</option>
            <option value="OFICINA">OFICINA</option>
            <option value="ROTULO">ROTULO</option>
            <option value="FUNCIONARIO DE LA EMPRESA">
              FUNCIONARIO DE LA EMPRESA
            </option>
            <option value="TIKTOK">TIKTOK</option>
            <option value="CONTACTO PERSONAL">CONTACTO PERSONAL</option>
            <option value="CANJE">CANJE</option>
            <optgroup label="REFERIDOS">
              <option value="REFERIDO EXTERNO">REFERIDO EXTERNO</option>
              <option value="REFERIDO CLIENTE">REFERIDO CLIENTE</option>
              <option value="REFERIDO FAMILIAR ASESOR">
                REFERIDO FAMILIAR ASESOR
              </option>
            </optgroup>
            <optgroup label="STAND">
              <option value="STAND RECREO">STAND RECREO</option>
              <option value="STAND CONDADO">STAND CONDADO</option>
              <option value="STAND QUICENTRO SUR">STAND QUICENTRO SUR</option>
            </optgroup>
            <optgroup label="FACEBOOK">
              <option value="FACEBOOK PERSONAL">FACEBOOK PERSONAL</option>
              <option value="FACEBOOK EMPRESA">FACEBOOK EMPRESA</option>
            </optgroup>
          </select>
          <label>
            Antes de tomar la desicion de compra usted nos visito en nuestra/o:
          </label>
          <select
            name="encuesta_pr2"
            id="encuesta_pr1"
            value={ofert.encuesta_pr1}
            onChange={handleChange}
            //required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3"
          >
            <option>Seleccione en donde nos visito</option>
            <option value="Pagina Web">Página Web</option>
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="TikTok">TikTok</option>
          </select>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
          >
            Crear Encuesta
          </button>
        </form>
        <button
          className="text-white m-2 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 mb-4"
          onClick={() => Router.push({ pathname: "javascript:history.back()" })}
        >
          Volver
        </button>
      </div>
    </>
  );
};
export default EncuestaForm;
