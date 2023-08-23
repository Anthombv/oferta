/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Router from "next/router";
import styles from "../../styles/ReporteOferta.module.css";
import { useAuth } from "../../lib/hooks/use_auth";

export const getServerSideProps = async (context) => {
  const { data: oneOfertED } = await axios.get(
    "https://oferta.grupoancon.com/api/newOferts/" + context.query.id
  );
  return {
    props: {
      oneOfertED,
      ofertID: context.query.id,
    },
  };
};

const Licitud = ({ oneOfertED, ofertID }) => {
  const { auth } = useAuth();
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <title>Licitud de Fondos</title>
      <div className="print-oferta">
        <div className="menu-print w-full text-center py-2">
          <img
            className="logo-print mx-5 my-2"
            src="http://grupoancon.com/wp-content/uploads/2020/07/logo-empresa-slide-1-min.png"
            alt="logo"
          />
          <button
            onClick={handlePrint}
            className="inline-flex items-center boton-print mx-5 text-white px-20 py-2 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
              />
            </svg>
            <span>Imprimir Licitud</span>
          </button>
          <button
            onClick={() => Router.back()}
            className="boton-cerrar text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-xl text-sm w-full sm:w-auto mx-5 px-12 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Atrás
          </button>
        </div>
        <div className="tabla-oferta container mx-auto block xl:mx-auto bg-white w-min mt-20 mb-3">
          <div className={styles.hojaLicitud}>
            {(oneOfertED.data ?? []).map((item, index) => {
              return (
                <div
                  key={index}
                  ref={componentRef}
                  className="text-sm text-gray-800"
                >
                  <div style={{ height: "290mm", position: "relative" }}>
                    <div className="mx-10 mt-6" style={{ fontSize: "10px" }}>
                      <table
                        className="w-full"
                        style={{
                          margin: "0",
                          borderSpacing: "0",
                          lineHeight: "1",
                        }}
                      >
                        <colgroup>
                          <col style={{ width: "14.2857%" }} />
                          <col style={{ width: "14.2857%" }} />
                          <col style={{ width: "14.2857%" }} />
                          <col style={{ width: "14.2857%" }} />
                          <col style={{ width: "14.2857%" }} />
                          <col style={{ width: "14.2857%" }} />
                          <col style={{ width: "14.2857%" }} />
                        </colgroup>
                        <thead>
                          <tr>
                            <th className="border border-black">
                              <img
                                src="/logoIC.jpg"
                                alt=""
                                style={{
                                  width: "80px",
                                  height: "39.5px",
                                }}
                                className="block mx-auto"
                              />
                            </th>
                            <th
                              colSpan={5}
                              className="border border-black bg-gray-200 whitespace-nowrap"
                              style={{ fontSize: "11px" }}
                            >
                              FORMULARIO DE REGISTRO DEL CLIENTE Y DECLARACION
                              DE ORIGEN LICITO DE RECURSOS <br /> (PERSONA
                              NATURAL)
                            </th>
                            <th className="border border-black align-top w-24">
                              FECHA <br />
                              {item.fechaCreacion}
                            </th>
                          </tr>
                          <tr>
                            <th
                              className="border border-black bg-gray-200"
                              colSpan={7}
                              style={{ fontSize: "11px" }}
                            >
                              1.- IDENTIDAD DEL TITULAR / BENEFICIARIO DE LA
                              TRANSACCIÓN (CUANDO ES EL CLIENTE QUIEN LA
                              REALIZA)
                            </th>
                          </tr>
                          <tr>
                            <td className="border border-black font-semibold">
                              Nombre y Apellidos:
                            </td>
                            <td colSpan={6} className="border border-black uppercase">
                              {item.cli_name}
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-black font-semibold">
                              N° C.C / Otros:
                            </td>
                            <td colSpan={2} className="border border-black">
                              {item.cli_id}
                            </td>
                            <td className="border border-black font-semibold">
                              Nacionalidad:
                            </td>
                            <td className="border border-black uppercase">
                              {item.cli_nacionalidad}
                            </td>
                            <td className="border border-black font-semibold">
                              Estado civil:
                            </td>
                            <td className="border border-black">
                              {item.cli_estadoCivil}
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="border border-black font-semibold"
                              rowSpan={2}
                            >
                              Dirección Domicilio
                            </td>
                            <td className="border border-black font-semibold">
                              Calle:
                            </td>
                            <td className="border border-black uppercase" colSpan={5}>
                              {item.cli_direcc}
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-black font-semibold">
                              Sector:
                            </td>
                            <td className="border border-black uppercase">
                              {item.cli_sector}
                            </td>
                            <td className="border border-black font-semibold">
                              Ciudad:
                            </td>
                            <td className="border border-black uppercase">
                              {item.cli_ciudad}
                            </td>
                            <td className="border border-black font-semibold">
                              Telefono:
                            </td>
                            <td className="border border-black">
                              {item.cli_cell}
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-black font-semibold whitespace-nowrap">
                              Nombre lugar trabajo
                            </td>
                            <td
                              colSpan={3}
                              className="border border-black uppercase"
                            >
                              {item.cli_trabajo}
                            </td>
                            <td className="border border-black font-semibold">
                              Actividad laboral:
                            </td>
                            <td colSpan={2} className="border border-black uppercase">
                              {item.cli_cargoT}
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="border border-black font-semibold"
                              rowSpan={2}
                            >
                              Dirección Trabajo
                            </td>
                            <td className="border border-black font-semibold">
                              Calle:
                            </td>
                            <td className="border border-black uppercase" colSpan={5}>
                              {item.cli_direccT}
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-black font-semibold">
                              Sector:
                            </td>
                            <td className="border border-black uppercase">
                              {item.cli_sectorT}
                            </td>
                            <td className="border border-black font-semibold">
                              Ciudad:
                            </td>
                            <td className="border border-black uppercase">
                              {item.cli_ciudadT}
                            </td>
                            <td className="border border-black font-semibold">
                              Telefono:
                            </td>
                            <td className="border border-black">
                              {item.cli_telefT}
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={5}
                              className="border border-black uppercase font-semibold"
                            >
                              ¿Tiene relacion con algun funcionaio o entidad de
                              gobierno?
                            </td>
                            <td className="border border-black font-semibold">
                              Respuesta:
                            </td>
                            <td className="border border-black uppercase">
                              {item.relacion1}
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={2}
                              className="border border-black w-28 font-semibold h-8"
                            >
                              Si es afirmativo, favor coloque nombre y relación
                            </td>
                            <td colSpan={5} className="border border-black uppercase">
                              {item.detalleRelacion1}
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={5}
                              className="border border-black uppercase font-semibold"
                            >
                              ¿Realiza trabajos para alguna entidad del sector
                              publico?
                            </td>
                            <td className="border border-black font-semibold">
                              Respuesta:
                            </td>
                            <td className="border border-black uppercase">
                              {item.relacion2}
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={2}
                              className="border border-black w-28 font-semibold"
                            >
                              Si es afirmativo, favor indiquela:
                            </td>
                            <td colSpan={5} className="border border-black uppercase">
                              {item.detalleRelacion2}
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={5}
                              className="border border-black uppercase font-semibold"
                            >
                              ¿Es o ha sido funcionario o electo en algun cargo
                              gubernamental?
                            </td>
                            <td className="border border-black font-semibold">
                              Respuesta:
                            </td>
                            <td className="border border-black uppercase">
                              {item.relacion3}
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={2}
                              className="border border-black w-28 font-semibold h-8"
                            >
                              Si es afirmativo, favor indique fecha, cargo y
                              pais:
                            </td>
                            <td colSpan={5} className="border border-black uppercase">
                              {item.detalleRelacion3}
                            </td>
                          </tr>
                          <tr>
                            <th
                              className="border border-black bg-gray-200"
                              colSpan={7}
                              style={{ fontSize: "11px" }}
                            >
                              2.- IDENTIDAD DE LA PERSONA QUE EFECTÚA LA
                              TRANSACCIÓN (CUANDO NO ES EL CLIENTE QUIEN LA
                              REALIZA)
                            </th>
                          </tr>
                          <tr>
                            <td className="border border-black font-semibold">
                              Nombre y Apellidos:
                            </td>
                            <td colSpan={6} className="border border-black uppercase">
                              {item.cli_representante}
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-black font-semibold">
                              N° C.C / Otros:
                            </td>
                            <td colSpan={2} className="border border-black">
                              {item.cli_representanteID}
                            </td>
                            <td className="border border-black font-semibold">
                              Nacionalidad:
                            </td>
                            <td className="border border-black uppercase">
                              {item.cli_nacionalidadR}
                            </td>
                            <td className="border border-black font-semibold">
                              Estado civil:
                            </td>
                            <td className="border border-black uppercase">
                              {item.cli_estadoCivilR}
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="border border-black font-semibold"
                              rowSpan={2}
                            >
                              Dirección Domicilio
                            </td>
                            <td className="border border-black font-semibold">
                              Calle:
                            </td>
                            <td className="border border-black uppercase" colSpan={5}>
                              {item.cli_direccR}
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-black font-semibold">
                              Sector:
                            </td>
                            <td className="border border-black uppercase">
                              {item.cli_sectorR}
                            </td>
                            <td className="border border-black font-semibold">
                              Ciudad:
                            </td>
                            <td className="border border-black uppercase">
                              {item.cli_ciudadR}
                            </td>
                            <td className="border border-black font-semibold">
                              Telefono:
                            </td>
                            <td className="border border-black">
                              {item.cli_telefR}
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-black font-semibold whitespace-nowrap">
                              Nombre lugar trabajo
                            </td>
                            <td
                              colSpan={3}
                              className="border border-black font-semibold uppercase"
                            >
                              {item.cli_trabajoR}
                            </td>
                            <td className="border border-black font-semibold">
                              Actividad laboral:
                            </td>
                            <td colSpan={2} className="border border-black uppercase">
                              {item.cli_cargoR}
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="border border-black font-semibold"
                              rowSpan={2}
                            >
                              Dirección Trabajo
                            </td>
                            <td className="border border-black font-semibold">
                              Calle:
                            </td>
                            <td className="border border-black uppercase" colSpan={5}>
                              {item.cli_direccTR}
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-black font-semibold">
                              Sector:
                            </td>
                            <td className="border border-black uppercase">
                              {item.cli_sectorTR}
                            </td>
                            <td className="border border-black font-semibold">
                              Ciudad:
                            </td>
                            <td className="border border-black uppercase">
                              {item.cli_ciudadTR}
                            </td>
                            <td className="border border-black font-semibold">
                              Telefono:
                            </td>
                            <td className="border border-black uppercase">
                              {item.cli_telefTR}
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={5}
                              className="border border-black uppercase font-semibold"
                            >
                              ¿Actúa usted como intermediario del verdadero
                              dueño de los fondos?
                            </td>
                            <td className="border border-black font-semibold">
                              Respuesta:
                            </td>
                            <td className="border border-black uppercase">
                              {item.intermediarioR1}
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={2}
                              rowSpan={2}
                              className="border border-black w-28 font-semibold h-8"
                            >
                              Si es afirmativo, favor indique los datos del
                              verdadero dueño
                            </td>
                            <td colSpan={1} className="border border-black">
                              Nombre Completo
                            </td>
                            <td colSpan={4} className="border border-black uppercase">
                              {item.intermediario_nameR}
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={1} className="border border-black">
                              N° de Identificación
                            </td>
                            <td colSpan={4} className="border border-black">
                              {item.intermediario_idR}
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={7}
                              className="border border-black align-top uppercase h-10"
                            >
                              <strong>
                                ¿Cuál es su relación con el verdadero dueño de
                                los fondos?
                              </strong>{" "}
                              {item.intermediarioR2}
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th
                              className="border border-black bg-gray-200"
                              colSpan={7}
                              style={{ fontSize: "11px" }}
                            >
                              3.- INFORMACIÓN FINANCIERA
                            </th>
                          </tr>
                          <tr>
                            <td
                              colSpan={2}
                              className="border border-black font-semibold"
                            >
                              Ingreso anual aproxima:
                            </td>
                            <td colSpan={1} className="border border-black">
                              {item.ingresoAnual}
                            </td>
                            <td
                              colSpan={2}
                              className="border border-black font-semibold"
                            >
                              Fuente de los ingresos:
                            </td>
                            <td colSpan={2} className="border border-black uppercase">
                              {item.fuenteIngresos}
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={2}
                              className="border border-black font-semibold"
                            >
                              Patrimonio aproximado:
                            </td>
                            <td colSpan={1} className="border border-black">
                              {item.patrimonio}
                            </td>
                            <td
                              colSpan={2}
                              className="border border-black font-semibold"
                            >
                              Fuente del Patrimonio:
                            </td>
                            <td colSpan={2} className="border border-black uppercase">
                              {item.fuentePatrimonio}
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={2}
                              className="border border-black font-semibold"
                            >
                              Otros ingresos (Especifique):
                            </td>
                            <td
                              colSpan={5}
                              className="border border-black"
                            ></td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        className="w-full"
                        style={{
                          margin: "0",
                          borderSpacing: "0",
                          lineHeight: "1",
                        }}
                      >
                        <colgroup>
                          <col style={{ width: "12.5%" }} />
                          <col style={{ width: "12.5%" }} />
                          <col style={{ width: "12.5%" }} />
                          <col style={{ width: "12.5%" }} />
                          <col style={{ width: "12.5%" }} />
                          <col style={{ width: "12.5%" }} />
                          <col style={{ width: "12.5%" }} />
                          <col style={{ width: "12.5%" }} />
                        </colgroup>
                        <thead>
                          <tr className="text-center">
                            <td
                              colSpan={4}
                              className="border-t-0 border-b border-l border-r border-black font-semibold"
                            >
                              Referencias bancarias
                            </td>
                            <td
                              colSpan={4}
                              className="border-t-0 border-b border-l border-r border-black font-semibold"
                            >
                              Referencias comerciales
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="border border-black font-semibold"
                              colSpan={3}
                            >
                              Institución Financiera
                            </td>
                            <td
                              className="border border-black font-semibold"
                              colSpan={1}
                            >
                              N° Cuenta
                            </td>
                            <td
                              className="border border-black font-semibold"
                              colSpan={4}
                            >
                              Institución
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-black uppercase" colSpan={3}>
                              {item.banco1}
                            </td>
                            <td className="border border-black" colSpan={1}>
                              {item.cuenta1}
                            </td>
                            <td className="border border-black uppercase" colSpan={4}>
                              {item.refComercial1}
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-black uppercase" colSpan={3}>
                              {item.banco2}
                            </td>
                            <td className="border border-black" colSpan={1}>
                              {item.cuenta2}
                            </td>
                            <td className="border border-black uppercase" colSpan={4}>
                              {item.refComercial2}
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th
                              className="border border-black bg-gray-200"
                              colSpan={8}
                              style={{ fontSize: "11px" }}
                            >
                              4. IDENTIFICACIÓN DE LA TRANSACCION
                            </th>
                          </tr>
                          <tr>
                            <td
                              colSpan={3}
                              className="border border-black font-semibold"
                            >
                              Monto
                            </td>
                            <td
                              colSpan={1}
                              className="border border-black font-semibold"
                            >
                              Tipo Transacción
                            </td>
                            <td
                              colSpan={4}
                              className="border border-black font-semibold"
                            >
                              Numero y Tipo de Cuenta la que se realiza el
                              deposito
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-black" colSpan={3}>
                              {item.monto1}
                            </td>
                            <td className="border border-black uppercase" colSpan={1}>
                              {item.tipo_transacc1}
                            </td>
                            <td className="border border-black uppercase" colSpan={4}>
                              {item.transacc_cuenta1}
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-black" colSpan={3}>
                              {item.monto2}
                            </td>
                            <td className="border border-black uppercase" colSpan={1}>
                              {item.tipo_transacc2}
                            </td>
                            <td className="border border-black uppercase" colSpan={4}>
                              {item.transacc_cuenta2}
                            </td>
                          </tr>
                          <tr>
                            <th
                              className="border border-black bg-gray-200"
                              colSpan={8}
                              style={{ fontSize: "11px" }}
                            >
                              5. DECLARACIÓN DE FONDOS
                            </th>
                          </tr>
                          <tr>
                            <td
                              className="border border-black h-12 align-top"
                              colSpan={8}
                            >
                              LOS FONDOS, BIENES MUEBLES E INMUELES DE ESTA
                              TRANSACCION PROVIENE DE: {item.declaracionFondos1.toUpperCase()}
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="border border-black h-12 align-top"
                              colSpan={8}
                            >
                              LOS FONDOS, BIENES MUEBLES E INMUELES DE ESTA
                              TRANSACCION SERAN UTILIZADOS PARA:{" "}
                              {(item.declaracionFondos2).toUpperCase()}
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="border border-black h-12 align-middle"
                              colSpan={7}
                              style={{ fontSize: "9px" }}
                            >
                              <strong>ENTREGA DE ACTIVOS:</strong> CONOCEDOR (A)
                              DE LAS PENAS DE PERJURIO, DECLARO BAJO JURAMENTO
                              QUE LOS FONDOS, BIENES MUEBLES E INMUEBLES
                              ENTREGADOS A INMOCONSTRUCCIONES CIA. LTDA. ES
                              LICITO
                            </td>
                            <td className="border border-black h-12 align-middle text-center">
                              <div className="w-4 h-4 mx-auto border border-black">
                                <div className="flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="green"
                                    className="h-4 w-4"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="border border-black h-12 align-middle"
                              colSpan={7}
                              style={{ fontSize: "9px" }}
                            >
                              <strong>RECEPCIÓN DE ACTIVOS:</strong> CONOCEDOR
                              (A) DE LAS PENAS DE PERJURIO, DECLARO BAJO
                              JURAMENTO QUE LOS FONDOS, BIENES MUEBLES E
                              INMUEBLES RECIBIDOS DE INMOCONSTRUCCIONES CIA.
                              LTDA. NO SERAN DESTINADO A TRANSACCIONES ILICITAS
                            </td>
                            <td className="border border-black h-12 align-middle text-center">
                              <div className="w-4 h-4 mx-auto border border-black">
                                <div className="flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="green"
                                    className="h-4 w-4"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="border border-black h-20"
                              colSpan={8}
                              style={{ fontSize: "9px" }}
                            >
                              CONOCEDOR (A) DE LAS DISPOSICIONES DE LA LEY PARA
                              REPRIMIR EL LAVADO DE ACTIVOS, CERTIFICO QUE LA
                              INFORMACIÓN ARRIBA INDICADA ES CORRECTA Y
                              VERDADERA, ENTIENDO QUE ESTA INFORMACION SERA
                              LEIDA Y REVISADA POR LAS AUTORIDADES QUIENES LA
                              PODRAN CONSIDERAR PARA TODOS LOS EFECTOS LEGALES
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="border border-black h-20 align-bottom text-center uppercase"
                              colSpan={8}
                              style={{ fontSize: "9px" }}
                            >
                              <hr className="mb-1 border-t-2 border-gray-600 w-3/6 mx-auto" />
                              {item.cli_name} <br /> CI: {item.cli_id}
                            </td>
                          </tr>
                          <tr>
                            <th
                              className="border border-black bg-gray-200"
                              colSpan={8}
                              style={{ fontSize: "11px" }}
                            >
                              ESPACIO A SER LLENADO POR EL ASESOR:
                            </th>
                          </tr>
                          <tr>
                            <td
                              className="border border-black"
                              colSpan={8}
                              style={{ fontSize: "9px" }}
                            >
                              POR LA PRESENTE CERTIFICO, SEGUN MI LEAL SABER Y
                              ENTENDER, QUE EN BASE A MI INVESTIGACION
                              RAZONABLE, LA INFORMACIÓN DETALLADA ES CORRECTA Y
                              VERDADERA, CERTIFICO ADEMÁS, HABER VALIDADO Y
                              VERIFICADO LA IDENTIFICACIÓN, DOCUMENTACIÓN E
                              INFORMACIÓN PROPORCIONADA
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="border border-black h-16 align-bottom text-center uppercase"
                              colSpan={8}
                              style={{ fontSize: "9px" }}
                            >
                              <hr className="mb-1 border-t-2 border-gray-600 w-3/6 mx-auto" />
                              {item.cli_asesor} - ASESOR DE VENTAS
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Licitud;
