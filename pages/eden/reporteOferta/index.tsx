import React, { Component, useRef } from "react";
import styles from "../../../styles/ReporteOferta.module.css";
import { useReactToPrint } from "react-to-print";

const ReportOfertED = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div className="text-center mt-4">
        <button
          onClick={handlePrint}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 inline-flex items-center border border-blue-500 hover:border-transparent rounded"
        >
          <svg
            className="fill-current w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
            ></path>
          </svg>
          <span>Imprimir Oferta</span>
        </button>
      </div>
      <div className={styles.hoja}>
        <div className="font-sans text-sm" ref={componentRef}>
          <div className="header mx-10">
            <h1 className="text-center my-10 text-2xl font-bold">
              OFERTA DE COMPRA
            </h1>
            <p className="mb-2 pr-52 text-right">Fecha:</p>
          </div>
          <div className="border-2 border-black mx-8">
            {/* Datos Inmueble */}
            <div className="mb-4">
              <h2
                className="text-center font-bold my-4 bg-blue-200 mx-auto"
                style={{ width: "98%" }}
              >
                DATOS INMUEBLE
              </h2>
              <table align="center" width="98%" className="border text-center">
                <thead className="border border-black">
                  <tr>
                    <th className="border-r border-black">PROYECTO</th>
                    <th className="border-r border-black">NUMERO INMUEBLE</th>
                    <th className="border-r border-black">AREA M2</th>
                    <th className="border-r border-black">VALOR INMUEBLE</th>
                  </tr>
                </thead>
                <tbody className="border border-black">
                  <tr>
                    <td className="border-r border-black">Jardin</td>
                    <td className="border-r border-black">EJ-025</td>
                    <td className="border-r border-black">214.58 m2</td>
                    <td className="border-r border-black">28.800,00</td>
                  </tr>
                </tbody>
              </table>
              <p className="m-2" style={{ width: "98%" }}>
                <strong>TIPO DE INMUEBLE: </strong>
                <span className="underline underline-offset-4"></span>Terreno
              </p>
            </div>
            <hr />
            {/* Datos Personales */}
            <div className="mt-4 mb-4">
              <h2
                className="text-center font-bold my-2 bg-blue-200 mx-auto"
                style={{ width: "98%" }}
              >
                DATOS PERSONALES - CLIENTE
              </h2>
              <div className="grid grid-cols-3 mx-4">
                <div className="relative z-0 col-span-2 mb-4 w-full">
                  <strong>Apellidos y Nombres: </strong>
                  <span className="underline underline-offset-4">
                    Marcelo Anthony Barcia Velasco
                  </span>
                </div>
                <div className="relative z-0 mb-4 w-full text-center">
                  <strong>Sexo: </strong>
                  <span className="underline underline-offset-4">
                    Masculino
                  </span>
                </div>
                <div className="relative z-0 mb-4 w-full">
                  <strong>C.I o Pasaporte: </strong>
                  <span className="underline underline-offset-4">
                    0123456789
                  </span>
                </div>
                <div className="relative z-0 mb-4 w-full">
                  <strong>Fecha de Nacimiento: </strong>
                  <span className="underline underline-offset-4">
                    22/02/1998
                  </span>
                </div>
                <div className="relative z-0 mb-4 w-full">
                  <strong>Estado civil: </strong>
                  <span className="underline underline-offset-4">Casado</span>
                </div>
              </div>
              <div className="grid grid-cols-3 mx-4">
                <div className="relative z-0 mb-4 w-full">
                  <strong>Provincia: </strong>
                  <span className="underline underline-offset-4">
                    Pichincha
                  </span>
                </div>
                <div className="relative z-0 mb-4 w-full">
                  <strong>Ciudad: </strong>
                  <span className="underline underline-offset-4">Quito</span>
                </div>
                <div className="relative z-0 mb-4 w-full">
                  <strong>Sector: </strong>
                  <span className="underline underline-offset-4">
                    Comite del Pueblo
                  </span>
                </div>
              </div>
              <div className="mx-4 mb-4">
                <strong>Dirección del Hogar: </strong>
                <span className="underline underline-offset-4">
                  Cesar Endara y Diego Nieto
                </span>
              </div>
              <div className="grid grid-cols-2 mx-4">
                <div className="relative z-0 mb-4 w-full">
                  <strong>Teléfono Hogar: </strong>
                  <span className="underline underline-offset-4">
                    061234567
                  </span>
                </div>
                <div className="relative z-0 mb-4 w-full">
                  <strong>Teléfono Celular: </strong>
                  <span className="underline underline-offset-4">
                    0961234567
                  </span>
                </div>
              </div>
              <div className="mx-4 mb-4">
                <strong>Correo Electrónico: </strong>
                <span className="underline underline-offset-4">
                  mbarcia@grupoancon.com
                </span>
              </div>
              <div className="grid grid-cols-3 mx-4">
                <div className="relative z-0 mb-4 w-full">
                  <strong>Cargas Familiares: </strong>
                  <span className="underline underline-offset-4">N/A</span>
                </div>
                <div className="relative z-0 mb-4 w-full">
                  <strong>Ingresos Mensuales: </strong>
                  <span className="underline underline-offset-4">$ N/A</span>
                </div>
                <div className="relative z-0 mb-4 w-full">
                  <strong>Gastos Mensuales: </strong>
                  <span className="underline underline-offset-4">$ N/A</span>
                </div>
              </div>
              <div className="grid grid-cols-2 mx-4">
                <div className="relative z-0 mb-4 w-full  text-center">
                  <strong>Capacidad de Ahorro Mensual: </strong>
                  <span className="underline underline-offset-4">$ N/A</span>
                </div>
                <div className="relative z-0 mb-4 w-full text-center">
                  <strong>Ahorro Actual: </strong>
                  <span className="underline underline-offset-4">$ N/A</span>
                </div>
              </div>
            </div>
            <hr />
            {/* Datos Laborales */}
            <div className="mt-4 mb-4">
              <h2
                className="text-center font-bold my-2 bg-blue-200 mx-auto"
                style={{ width: "98%" }}
              >
                DATOS LABORALES - CLIENTE
              </h2>
              <div className="grid grid-cols-2 mx-4">
                <div className="relative z-0 mb-4 w-full">
                  <strong>Empresa donde Trabaja: </strong>
                  <span className="underline underline-offset-4">
                    ANCON grupo inmobiliario
                  </span>
                </div>
                <div className="relative z-0 mb-4 w-full">
                  <strong>Cargo Trabajo: </strong>
                  <span className="underline underline-offset-4">
                    Desarrollador de Software
                  </span>
                </div>
                <div className="relative z-0 mb-4 w-full">
                  <strong>Dirección Trabajo: </strong>
                  <span className="underline underline-offset-4">
                    Alemania y Republica
                  </span>
                </div>
                <div className="relative z-0 mb-4 w-full">
                  <strong>Telf. Trabajo: </strong>
                  <span className="underline underline-offset-4">
                    0123456789
                  </span>
                </div>
              </div>
            </div>
            <hr />
            {/* Referencias Familiares */}
            <div className="mt-4 mb-4">
              <h2
                className="text-center font-bold my-2 bg-blue-200 mx-auto"
                style={{ width: "98%" }}
              >
                REFERENCIAS FAMILIARES - CLIENTE
              </h2>
              <div className="grid grid-cols-2 mx-4">
                <div className="relative z-0 mb-4 w-full">
                  <strong>1{")"} Referencia Familiar: </strong>
                  <span className="underline underline-offset-4">N/A</span>
                </div>
                <div className="relative z-0 mb-4 w-full">
                  <strong>Parentezco: </strong>
                  <span className="underline underline-offset-4">N/A</span>
                </div>
                <div className="relative z-0 mb-4 w-full text-center">
                  <strong>Telf. Fijo: </strong>
                  <span className="underline underline-offset-4">N/A</span>
                </div>
                <div className="relative z-0 mb-4 w-full text-center">
                  <strong>Telf. Celular: </strong>
                  <span className="underline underline-offset-4">N/A</span>
                </div>
                <div className="relative z-0 mb-4 w-full">
                  <strong>2{")"} Referencia Familiar: </strong>
                  <span className="underline underline-offset-4">N/A</span>
                </div>
                <div className="relative z-0 mb-4 w-full">
                  <strong>Parentezco: </strong>
                  <span className="underline underline-offset-4">N/A</span>
                </div>
                <div className="relative z-0 mb-4 w-full text-center">
                  <strong>Telf. Fijo: </strong>
                  <span className="underline underline-offset-4">N/A</span>
                </div>
                <div className="relative z-0 mb-4 w-full  text-center">
                  <strong>Telf. Celular: </strong>
                  <span className="underline underline-offset-4">N/A</span>
                </div>
              </div>
              <div className="mx-4">
                <strong>¿Qué le motivo la compra?: </strong>
                <span className="underline underline-offset-4">
                  Terrenos lindos con facilidad de pago y buen personal de la
                  empresa
                </span>
              </div>
            </div>
          </div>
          {/* Hoja 2 conyuge */}
          <div>
            <div className="mt-32 mb-4 py-8">
              <div className="border-2 border-black mx-8 mt-4">
                <h2
                  className="text-center font-bold mt-4 mb-2 bg-blue-200 mx-auto"
                  style={{ width: "98%" }}
                >
                  DATOS PERSONALES - CÓNYUGE
                </h2>
                <div className="mx-4 mb-4">
                  <strong>Apellidos y Nombres: </strong>
                  <span className="underline underline-offset-4">
                    Lidice Giler
                  </span>
                </div>
                <div className="grid grid-cols-2 mx-4">
                  <div className="relative z-0 mb-4 w-full">
                    <strong>C.I o Pasaporte: </strong>
                    <span className="underline underline-offset-4">
                      0123456798
                    </span>
                  </div>
                  <div className="relative z-0 mb-4 w-full">
                    <strong>Telf.Celular: </strong>
                    <span className="underline underline-offset-4">
                      0123456798
                    </span>
                  </div>
                </div>
                <div className="mx-4 mb-4">
                  <strong>Empresa donde Trabaja: </strong>
                  <span className="underline underline-offset-4">Cazu</span>
                </div>
                <div className="grid grid-cols-2 mx-4">
                  <div className="relative z-0 mb-4 w-full">
                    <strong>Dirreción Trabajo Cónyuge: </strong>{" "}
                    <span className="underline underline-offset-4">
                      Carcelen
                    </span>
                  </div>
                  <div className="relative z-0 mb-4 w-full">
                    <strong></strong>Telf. Trabajo:{" "}
                    <span className="underline underline-offset-4">
                      0123456789
                    </span>
                  </div>
                </div>
                <hr />
                {/* Datos Referidos */}
                <div>
                  <h2
                    className="text-center font-bold mt-4 mb-2 bg-blue-200 mx-auto"
                    style={{ width: "98%" }}
                  >
                    DATOS REFERIDOS
                  </h2>
                  <div className="grid grid-cols-3 mx-4">
                    <div className="relative z-0 mb-4 w-full col-span-2">
                      <strong>1{")"} Apellidos y Nombres: </strong>
                      <span className="underline underline-offset-4"> XYZ</span>
                    </div>
                    <div className="relative z-0 mb-4 w-full">
                      <strong>Telf. Celular: </strong>
                      <span className="underline underline-offset-4">
                        0123456789
                      </span>
                    </div>
                    <div className="relative z-0 mb-4 w-full col-span-2">
                      <strong>2{")"} Apellidos y Nombres: </strong>
                      <span className="underline underline-offset-4"> XYZ</span>
                    </div>
                    <div className="relative z-0 mb-4 w-full">
                      <strong>Telf. Celular: </strong>
                      <span className="underline underline-offset-4">
                        0123456789
                      </span>
                    </div>
                    <div className="relative z-0 mb-4 w-full col-span-2">
                      <strong>3{")"} Apellidos y Nombres: </strong>
                      <span className="underline underline-offset-4"> XYZ</span>
                    </div>
                    <div className="relative z-0 mb-4 w-full">
                      <strong>Telf. Celular: </strong>
                      <span className="underline underline-offset-4">
                        0123456789
                      </span>
                    </div>
                  </div>
                </div>
                <hr />
                <div>
                  <h2
                    className="text-center font-bold mt-4 mb-2 bg-blue-200 mx-auto"
                    style={{ width: "98%" }}
                  >
                    DATOS ASESOR INMOBILIARIO
                  </h2>
                  <div className="grid grid-cols-3 mx-4">
                    <div className="relative z-0 mb-4 w-full col-span-2">
                      <strong>
                        Asesor Final {"("}Cierre de Venta{")"}:{" "}
                      </strong>
                      <span className="underline underline-offset-4">
                        Paty Naranjo
                      </span>
                    </div>
                    <div className="relative z-0 mb-4 w-full">
                      <strong>Telf. Celular: </strong>
                      <span className="underline underline-offset-4">
                        0123456789
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 mx-4">
                    <div className="relative z-0 mb-4 w-full">
                      <strong>Tipo de Venta: </strong>
                      <span className="underline underline-offset-4">
                        CONTADO/BIES
                      </span>
                    </div>
                    <div className="relative z-0 mb-4 w-full">
                      <strong>Como nos contacto: </strong>
                      <span className="underline underline-offset-4">
                        TikTok
                      </span>
                    </div>
                  </div>
                  <div className="mx-4 mb-4 text-center">
                    <strong>Planificación: </strong>
                    <span className="underline underline-offset-4">
                      Pendiente
                    </span>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportOfertED;
