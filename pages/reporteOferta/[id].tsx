/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import styles from "../../styles/ReporteOferta.module.css";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import Router from "next/router";

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

const ReportOfertED = ({ oneOfertED, ofertID }) => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <title>Reporte de Oferta</title>
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
            <span>Imprimir Oferta</span>
          </button>
          <button
            onClick={() => Router.back()}
            className="boton-cerrar text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-xl text-sm w-full sm:w-auto mx-5 px-12 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Atrás
          </button>
        </div>
        <div className="tabla-oferta container mx-auto block xl:mx-auto bg-white w-min mt-20 mb-3">
          <div className={styles.hoja}>
            {(oneOfertED.data ?? []).map((item, index) => {
              return (
                <div
                  className="text-sm text-gray-800"
                  ref={componentRef}
                  key={index}
                >
                  <div style={{ height: "290mm", position: "relative" }}>
                    <div className="mx-10 mt-6">
                      <h1 className="text-center pt-6 text-2xl font-normal">
                        OFERTA DE COMPRA <strong>{item.id}</strong>
                      </h1>
                      <p className="mb-3 text-right">
                        <strong>Fecha: </strong>
                        {item.fechaCreacion}
                      </p>
                    </div>
                    <div className="border border-gray-300 rounded-xl mx-8">
                      {/* Datos Inmueble */}
                      <div>
                        <h2
                          className="text-center font-bold rounded-lg py-1 my-2 bg-green-200 mx-auto"
                          style={{ width: "98%" }}
                        >
                          DATOS INMUEBLE
                        </h2>
                        <table
                          align="center"
                          width="98%"
                          className="border text-center mb-3"
                        >
                          <thead className="border border-black">
                            <tr>
                              <th className="border-r border-black">
                                PROYECTO
                              </th>
                              <th className="border-r border-black">
                                NUMERO INMUEBLE
                              </th>
                              <th className="border-r border-black">AREA M2</th>
                              <th className="border-r border-black">
                                VALOR INMUEBLE
                              </th>
                            </tr>
                          </thead>
                          <tbody className="border border-black">
                            <tr>
                              <td className="border-r border-black">
                                {item.mae_desinv}
                              </td>
                              <td className="border-r border-black">
                                {item.mae_codinv}
                              </td>
                              <td className="border-r border-black">
                                {item.mae_prevt4} m2
                              </td>
                              <td className="border-r border-black">
                                {item.cli_valorOferta.toLocaleString("en-US", {
                                  style: "currency",
                                  currency: "USD",
                                })}
                              </td>
                            </tr>
                            <tr>
                              <td className="border-r border-t border-black"></td>
                              <td className="border-r border-t border-black"></td>
                              <th className="border-r border-t border-black">
                                Descuento Add
                              </th>
                              <td className="border-r border-t border-black">
                                -
                                {item.cli_descuentoAdd.toLocaleString("en-US", {
                                  style: "currency",
                                  currency: "USD",
                                })}
                              </td>
                            </tr>
                            <tr>
                              <td className="border-r border-t border-black"></td>
                              <td className="border-r border-t border-black"></td>
                              <th className="border-r border-t border-black">
                                Descuento
                              </th>
                              <td className="border-r border-t border-black">
                                -
                                {item.cli_descuento.toLocaleString("en-US", {
                                  style: "currency",
                                  currency: "USD",
                                })}
                              </td>
                            </tr>
                            <tr>
                              <td className="border-r border-t border-black"></td>
                              <td className="border-r border-t border-black"></td>
                              <th className="border-r border-t border-black">
                                Total
                              </th>
                              <td className="border-r border-t border-black font-bold">
                                {item.cli_totalOferta.toLocaleString("en-US", {
                                  style: "currency",
                                  currency: "USD",
                                })}
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <div className="grid grid-cols-2 mx-4">
                          <div className="relative z-0 w-full">
                            <p className="m-2" style={{ width: "98%" }}>
                              <strong>TIPO DE INMUEBLE: </strong>
                              <span>{item.cli_tipoInmueble}</span>
                            </p>
                          </div>
                          <div className="relative z-0 w-full">
                            <p className="m-2" style={{ width: "98%" }}>
                              <strong>OFRECIMIENTO: </strong>
                              <span>{item.cli_ofrecimiento}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <hr />
                      {/* Datos Personales */}
                      <div className="mt-2 mb-2">
                        <h2
                          className="text-center font-bold rounded-lg py-1 my-2 bg-green-200 mx-auto"
                          style={{ width: "98%" }}
                        >
                          DATOS PERSONALES - CLIENTE
                        </h2>
                        <div className="grid grid-cols-3 mx-4">
                          <div className="relative z-0 col-span-2 mb-3 w-full">
                            <strong>Apellidos y Nombres: </strong>
                            <span>{item.cli_name.toUpperCase()}</span>
                          </div>
                          <div className="relative z-0 mb-3 w-full text-center">
                            <strong>Sexo: </strong>
                            <span>{item.cli_sexo.toUpperCase()}</span>
                          </div>
                          <div className="relative z-0 mb-3 w-full">
                            <strong>C.I o Pasaporte: </strong>
                            <span>{item.cli_id}</span>
                          </div>
                          <div className="relative z-0 mb-3 w-full">
                            <strong>Fecha de Nac.: </strong>
                            <span>{item.cli_fecNac.substr(0, 10)}</span>
                          </div>
                          <div className="relative z-0 mb-3 w-full">
                            <strong>Estado civil: </strong>
                            <span>{item.cli_estadoCivil.toUpperCase()}</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 mx-4">
                          <div className="relative z-0 mb-3 w-full">
                            <strong>Provincia: </strong>
                            <span>{item.cli_provin.toUpperCase()}</span>
                          </div>
                          <div className="relative z-0 mb-3 w-full">
                            <strong>Ciudad: </strong>
                            <span>{item.cli_ciudad.toUpperCase()}</span>
                          </div>
                          <div className="relative z-0 mb-3 w-full">
                            <strong>Sector: </strong>
                            <span>{item.cli_sector.toUpperCase()}</span>
                          </div>
                        </div>
                        <div className="mx-4 mb-3">
                          <strong>Dirección del Hogar: </strong>
                          <span>{item.cli_direcc.toUpperCase()}</span>
                        </div>
                        <div className="grid grid-cols-2 mx-4">
                          <div className="relative z-0 mb-3 w-full">
                            <strong>Teléfono Hogar: </strong>
                            <span>{item.cli_telef}</span>
                          </div>
                          <div className="relative z-0 mb-3 w-full">
                            <strong>Teléfono Celular: </strong>
                            <span>{item.cli_cell}</span>
                          </div>
                        </div>
                        <div className="mx-4 mb-3">
                          <strong>Correo Electrónico: </strong>
                          <span>{item.cli_mail}</span>
                        </div>
                        <div className="grid grid-cols-2 mx-4 text-left">
                          <div className="relative z-0 mb-3 w-full">
                            <strong>Ingresos Mensuales: </strong>
                            <span>{item.cli_ingresos}</span>
                          </div>
                          <div className="relative z-0 mb-3 w-full text-left">
                            <strong>Gastos Mensuales: </strong>
                            <span>{item.cli_gastos}</span>
                          </div>

                          <div className="relative z-0 mb-2 w-full text-left">
                            <strong>Capacidad de Ahorro Mensual: </strong>
                            <span>{item.cli_ahorroM}</span>
                          </div>
                          <div className="relative z-0 mb-2 w-full text-left">
                            <strong>Ahorro Actual: </strong>
                            <span>{item.cli_ahorroA}</span>
                          </div>
                        </div>
                      </div>
                      <hr />
                      {/* Datos Laborales */}
                      <div className="mt-2 mb-2">
                        <h2
                          className="text-center font-bold rounded-lg py-1 my-2 bg-green-200 mx-auto"
                          style={{ width: "98%" }}
                        >
                          DATOS LABORALES - CLIENTE
                        </h2>
                        <div className="grid grid-cols-2 mx-4">
                          <div className="relative z-0 mb-3 w-full">
                            <strong>Empresa donde Trabaja: </strong>
                            <span>{item.cli_trabajo.toUpperCase()}</span>
                          </div>
                          <div className="relative z-0 mb-3 w-full">
                            <strong>Cargo Trabajo: </strong>
                            <span>{item.cli_cargoT.toUpperCase()}</span>
                          </div>
                          <div className="relative z-0 mb-2 w-full">
                            <strong>Dirección Trabajo: </strong>
                            <span>{item.cli_direccT.toUpperCase()}</span>
                          </div>
                          <div className="relative z-0 mb-2 w-full">
                            <strong>Telf. Trabajo: </strong>
                            <span>{item.cli_telefT}</span>
                          </div>
                        </div>
                      </div>
                      <hr />
                      {/* Referencias Familiares */}
                      <div className="mt-2 mb-2">
                        <h2
                          className="text-center font-bold rounded-lg py-1 my-2 bg-green-200 mx-auto"
                          style={{ width: "98%" }}
                        >
                          REFERENCIAS FAMILIARES - CLIENTE
                        </h2>
                        <div className="grid grid-cols-2 mx-4">
                          <div className="relative z-0 mb-3 w-full">
                            <strong>1{")"} Referencia Familiar: </strong>
                            <span>{item.cli_reFami1.toUpperCase()}</span>
                          </div>
                          <div className="relative z-0 mb-3 w-full">
                            <strong>Parentezco: </strong>
                            <span>{item.cli_paren1.toUpperCase()}</span>
                          </div>
                          <div className="relative z-0 mb-3 w-full text-left">
                            <strong>Telf. Fijo: </strong>
                            <span>{item.cli_telParen1}</span>
                          </div>
                          <div className="relative z-0 mb-3 w-full text-left">
                            <strong>Telf. Celular: </strong>
                            <span>{item.cli_cellParen1}</span>
                          </div>
                          <div className="relative z-0 mb-3 w-full">
                            <strong>2{")"} Referencia Familiar: </strong>
                            <span>{item.cli_reFami2.toUpperCase()}</span>
                          </div>
                          <div className="relative z-0 mb-3 w-full">
                            <strong>Parentezco: </strong>
                            <span>{item.cli_paren2.toUpperCase()}</span>
                          </div>
                          <div className="relative z-0 mb-3 w-full text-left">
                            <strong>Telf. Fijo: </strong>
                            <span>{item.cli_telParen2}</span>
                          </div>
                          <div className="relative z-0 mb-3 w-full  text-left">
                            <strong>Telf. Celular: </strong>
                            <span>{item.cli_cellParen2}</span>
                          </div>
                        </div>
                        <div className="mx-4">
                          <strong>¿Qué le motivo la compra?: </strong>
                          <span>{item.cli_motivoCompra.toUpperCase()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Hoja 2 conyuge */}
                  <div
                    style={{
                      paddingTop: "10mm",
                      height: "296.5mm",
                      position: "relative",
                    }}
                  >
                    <div className="border border-gray-300 rounded-xl mx-8">
                      <h2
                        className="text-center font-bold rounded-lg py-1 my-2 mt-2 mb-2 bg-green-200 mx-auto"
                        style={{ width: "98%" }}
                      >
                        DATOS PERSONALES - CÓNYUGE
                      </h2>
                      <div className="mx-4 mb-3">
                        <strong>Apellidos y Nombres: </strong>
                        <span>{item.cli_conyuName.toUpperCase()}</span>
                      </div>
                      <div className="grid grid-cols-2 mx-4">
                        <div className="relative z-0 mb-3 w-full">
                          <strong>C.I o Pasaporte: </strong>
                          <span>{item.cli_conyuID}</span>
                        </div>
                        <div className="relative z-0 mb-3 w-full">
                          <strong>Telf.Celular: </strong>
                          <span>{item.cli_conyuCell}</span>
                        </div>
                      </div>
                      <div className="mx-4 mb-3">
                        <strong>Empresa donde Trabaja: </strong>
                        <span>{item.cli_conyuTrab.toUpperCase()}</span>
                      </div>
                      <div className="grid grid-cols-2 mx-4">
                        <div className="relative z-0 mb-3 w-full">
                          <strong>Dirreción Trabajo Cónyuge: </strong>{" "}
                          <span>{item.cli_conyuDireccT.toUpperCase()}</span>
                        </div>
                        <div className="relative z-0 mb-3 w-full">
                          <strong>Telf. Trabajo:</strong>
                          <span>{item.cli_conyuTelT}</span>
                        </div>
                      </div>
                      <hr />
                      {/* Datos Referidos */}
                      <div>
                        <h2
                          className="text-center font-bold rounded-lg py-1 my-2 mt-2 mb-2 bg-green-200 mx-auto"
                          style={{ width: "98%" }}
                        >
                          DATOS REFERIDOS
                        </h2>
                        <div className="grid grid-cols-3 mx-4">
                          <div className="relative z-0 mb-3 w-full col-span-2">
                            <strong>1{")"} Apellidos y Nombres: </strong>
                            <span>{item.cli_refName1.toUpperCase()}</span>
                          </div>
                          <div className="relative z-0 mb-3 w-full">
                            <strong>Telf. Celular: </strong>
                            <span>{item.cli_refTel1}</span>
                          </div>
                          <div className="relative z-0 mb-3 w-full col-span-2">
                            <strong>2{")"} Apellidos y Nombres: </strong>
                            <span>{item.cli_refName2.toUpperCase()}</span>
                          </div>
                          <div className="relative z-0 mb-3 w-full">
                            <strong>Telf. Celular: </strong>
                            <span>{item.cli_refTel2}</span>
                          </div>
                          <div className="relative z-0 mb-3 w-full col-span-2">
                            <strong>3{")"} Apellidos y Nombres: </strong>
                            <span>{item.cli_refName3.toUpperCase()}</span>
                          </div>
                          <div className="relative z-0 mb-3 w-full">
                            <strong>Telf. Celular: </strong>
                            <span>{item.cli_refTel3}</span>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <h2
                          className="text-center font-bold rounded-lg py-1 my-2 mt-2 mb-2 bg-green-200 mx-auto"
                          style={{ width: "98%" }}
                        >
                          DATOS ASESOR INMOBILIARIO
                        </h2>
                        <div className="grid grid-cols-3 mx-4">
                          <div className="relative z-0 mb-3 w-full col-span-2">
                            <strong>
                              Asesor Final {"("}Cierre de Venta{")"}:{" "}
                            </strong>
                            <span>{item.cli_asesor.toUpperCase()}</span>
                          </div>
                          <div className="relative z-0 mb-3 w-full">
                            <strong>Telf. Celular: </strong>
                            <span>{item.cli_asesorTelf}</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 mx-4">
                          <div className="relative z-0 mb-3 w-full">
                            <strong>Tipo de Venta: </strong>
                            <span>{item.cli_tipoVenta}</span>
                          </div>
                          <div className="relative z-0 mb-3 w-full">
                            <strong>Como nos contacto: </strong>
                            <span>{item.cli_contac.toUpperCase()}</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 mx-4">
                          <div className="relative z-0 mb-3 w-full">
                            <strong>Planificación: </strong>
                            <span>{item.cli_state.toUpperCase()}</span>
                          </div>
                          <div className="relative z-0 mb-3 w-full">
                            <strong>Cliente Referido: </strong>
                            <span>{item.encuesta_pr3.toUpperCase()}</span>
                          </div>
                        </div>

                        <div>
                          <p
                            className="mt-3 mb-3 mx-4"
                            style={{ width: "98%" }}
                          >
                            <strong>Observaciones: </strong>
                            {item.cli_observation}
                          </p>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div
                          className="border border-collapse border-black mx-auto"
                          style={{ width: "98%" }}
                        >
                          <table
                            style={{ width: "98%" }}
                            className="relative mx-auto"
                          >
                            <tbody>
                              <tr>
                                <th style={{ width: "20%" }}>AUTORIZACION</th>
                                <td>
                                  <p className="text-justify text-xs">
                                    Autorizo expresa e indefinidamente a
                                    Inmobiliaria y Construcciones
                                    INMOCONSTRUCCIONES Cia. Ltda. para que
                                    obtenga de cualquier fuente de información,
                                    incluida la Central de Riesgos y Buros de
                                    Información Crediticia autorizados para
                                    operar en el país, mis referencias
                                    personales y/o patrimoniales anteriores o
                                    posteriores a la suscripción de esta
                                    autorización, sea como deudor principal,
                                    codeudor o garante, sobre mi comportamiento
                                    crediticio, manejo de mi(s) cuenta(s), de
                                    ahorro, tarjetas de crédito, etc., y en
                                    general al cumplimiento de mis obligaciones
                                    y demás activos, pasivos, datos que brindan
                                    las Instituciones del Sistema Financiero,
                                    segun corresponda.
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="text-center italic mb-3 mt-3 font-semibold">
                          ¡¡ FELICITACIONES, HA REALIZADO UNA GRAN INVERSIÓN !!
                        </p>
                        <div
                          className="border border-black mx-auto"
                          style={{ width: "98%" }}
                        >
                          <p className="m-1 text-justify text-xs">
                            <strong>NOTA: </strong>Con el valor que usted entrega
                            a la firma de este instrumento, ha reservado su
                            inmueble. En caso de que usted desista de la compra,
                            perderá este primer abono, a menos que a la firma de
                            este documento usted no conozca el bien, lo que
                            podrá realizarlo en los próximos tres dias; nuestros
                            asesores estaran gustosos de atenderle. EL VENDEDOR
                            está comprometido con la información personal de
                            nuestros clientes por lo que le comunicamos que
                            estamos cumpliendo con la Ley Orgánica de Protección
                            de Datos Personales.
                          </p>
                        </div>
                        <p className="text-xs mt-2 mx-2">
                          <strong>
                            * SOLO EL CONVENIO DE RESERVA DEBIDAMENTE FIRMADO
                            GARANTIZA LA ASIGNACIÓN DEL INMUEBLE A SU NOMBRE
                          </strong>
                        </p>
                      </div>
                      <div className="mt-28 grid grid-cols-3 mx-4 text-center">
                        <div className="relative z-0 mb-3 w-full">
                          <hr className="w-52 h-1 mx-auto bg-black border rounded" />
                          CLIENTE
                        </div>
                        <div className="relative z-0 mb-3 w-full">
                          <hr className="w-52 h-1 mx-auto bg-black border rounded" />
                          ASESOR INMOBILIARIO
                        </div>
                        <div className="relative z-0 mb-3 w-full">
                          <hr className="w-52 h-1 mx-auto bg-black border rounded" />
                          PROMOTOR
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full text-center mb-6 py-8 z-20">
          <button
            onClick={handlePrint}
            className="bottom-print inline-flex items-center mx-5 text-white px-20 py-4 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
            <span>Imprimir Oferta</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ReportOfertED;
