/* eslint-disable @next/next/no-img-element */
import React from "react";
import FormatedDate from "../../../lib/utils/date";
import { useState } from "react";
import { Pendiente } from "../../../lib/utils/constans";
import Router from "next/router";
import axios from "axios";

export const getServerSideProps = async (context) => {
  const { data: oneOfert } = await axios.get(
    "https://oferta.grupoancon.com/api/newOferts/" + context.query.id
  );
  return {
    props: {
      oneOfert,
      ofertID: context.query.id,
    },
  };
};

const CrearEncuesta = ({ ofertID, oneOfert }) => {
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
    soliciter: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setOfert({ ...ofert, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put("/api/newOferts/" + ofertID, ofert);
    Router.back();
  };
  return (
    <>
      <title>Crear Encuesta</title>
      <div className="encuesta">
        <div className="tabla-encuesta container mx-auto bg-white xl:w-3/5 w-11/12 mt-20 mb-8 rounded-2xl">
          <img
            className="icon-login pt-10 mb-4"
            src="http://grupoancon.com/wp-content/uploads/2023/06/icon-app-oferta-2.svg"
            alt="logo"
          />
          <h2 className="title w-full text-center text-3xl font-light mt-2 mb-6">
            FORMULARIO DE ENCUESTA
          </h2>
          {(oneOfert.data ?? []).map((item, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-3  xl:mx-8 border border-gray-300 rounded-lg bg-gray-100 mb-6"
              >
                <p className="my-1 text-center">
                  <strong>Cliente:</strong> {item.cli_name}
                </p>
                <p className="my-1 text-center">
                  <strong>Fecha:</strong> {item.fechaCreacion}
                </p>
                <p className="my-1 text-center">
                  <strong># de Lote:</strong> {item.mae_codinv}
                </p>
              </div>
            );
          })}
          <h2 className="bg-orange-500 w-full py-4 text-center text-white text-2xl font-bold my-2">
            ¡Felicitaciones por la Adquisición de su Terreno!
          </h2>
          <h2 className="bg-green-300 xl:w-3/5 w-12/12 mx-auto text-center xl:text-xl text-lg font-light mt-1 rounded-lg">
            Aquí comienza a dar vida su Sueño...
          </h2>
          <p className="my-3 xl:mx-10 text-justify">
            La comunicación para nosotros es lo más importante y queremos
            mejorar cada día, por favor su información que nos proporcione a
            continuación será muy valiosa
          </p>
          <form onSubmit={handleSubmit} className="m-2 text-lg">
            <label className="font-bold">
              ¿Por qué medio se enteró de nosotros?
            </label>
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
                <option value="STAND EL PORTAL">STAND EL PORTAL</option>
                <option value="STAND SAN LUIS">STAND SAN LUIS</option>
              </optgroup>
              <optgroup label="FERIAS">
                <option value="FERIA CLAVE">FERIA CLAVE</option>
                <option value="FERIA CLAVE CUMBAYA">FERIA CLAVE CUMBAYA</option>
                <option value="FERIA BIESS">FERIA BIESS</option>
                <option value="FERIA EXPOVIVIENDA">FERIA EXPOVIVIENDA</option>
                <option value="FERIA OTROS">FERIA OTROS</option>
              </optgroup>
              <optgroup label="FACEBOOK">
                <option value="FACEBOOK PERSONAL">FACEBOOK PERSONAL</option>
                <option value="FACEBOOK EMPRESA">FACEBOOK EMPRESA</option>
              </optgroup>
            </select>
            <label className="font-bold">
              Antes de tomar la desicion de compra usted nos visito en
              nuestra/o:
            </label>
            <select
              name="encuesta_pr2"
              id="encuesta_pr2"
              value={ofert.encuesta_pr2}
              onChange={handleChange}
              //required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3"
            >
              <option>Seleccione en donde nos visito</option>
              <option value="Pagina Web">Página Web</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="TikTok">TikTok</option>
              <option value="Otros">Otros</option>
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
            onClick={() => Router.back()}
          >
            Volver
          </button>
        </div>
      </div>
    </>
  );
};

export default CrearEncuesta;
