/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";
import { Pendiente } from "../../utils/constans";
import FormatedDate from "../../utils/date";
import Select from "react-select";
import Router from "next/router";
import { Transition } from "@headlessui/react";

type Ofert = {
  cli_name: string;
  cli_sexo: string;
  cli_tipoInmueble: string;
  cli_estadoCivil: string;
  cli_motivoCompra: string;
  cli_id: string;
  fechaCreacion: string;
  cli_fecNac: string;
  cli_provin: string;
  cli_ciudad: string;
  cli_sector: string;
  cli_direcc: string;
  cli_telef: string;
  cli_cell: string;
  cli_mail: string;
  cli_ingresos: string;
  cli_gastos: string;
  cli_ahorroM: string;
  cli_ahorroA: string;
  cli_trabajo: string;
  cli_cargoT: string;
  cli_direccT: string;
  cli_telefT: string;
  cli_reFami1: string;
  cli_paren1: string;
  cli_telParen1: string;
  cli_cellParen1: string;
  cli_reFami2: string;
  cli_paren2: string;
  cli_telParen2: string;
  cli_cellParen2: string;
  cli_conyuName: string;
  cli_conyuID: string;
  cli_conyuTrab: string;
  cli_conyuDireccT: string;
  cli_conyuCell: string;
  cli_conyuTelT: string;
  cli_refName1: string;
  cli_refTel1: string;
  cli_refName2: string;
  cli_refTel2: string;
  cli_refName3: string;
  cli_refTel3: string;
  cli_asesor: string;
  cli_asesorTelf: string;
  cli_tipoVenta: string;
  cli_contac: string;
  cli_state: string;
  cli_observation: string;
  cli_ofrecimiento: string;
  encuesta_pr1: string;
  encuesta_pr2: string;
  encuesta_pr3: string;
  encuesta_pr4: string;
  cli_descuento: number;
  cli_totalOferta: number;
  mae_codinv: string;
};

type Option = {
  label: string;
  value: string;
};

let options: Array<Option> = [
  { label: "HUERTO", value: "HUERTO" },
  { label: "TANQUE BIODIGESTOR", value: "TANQUE BIODIGESTOR" },
  { label: "TRABAJO EN LOTE", value: "TRABAJO EN LOTE" },
];

type OptionEncuesta = {
  label: string;
  value: string;
};

let optionsEncuesta: Array<OptionEncuesta> = [
  { label: "FACEBOOK", value: "FACEBOOK" },
  { label: "INSTAGRAM", value: "INSTAGRAM" },
  { label: "TIKTOK", value: "TIKTOK" },
  { label: "PAGINA WEB", value: "PAGINA WEB" },
  { label: "TRUEQUE", value: "TRUEQUE" },
  { label: "CLIENTE ANTIGUO", value: "CLIENTE ANTIGUO" },
  { label: "OFICINA", value: "OFICINA" },
  { label: "ROTULO", value: "ROTULO" },
  { label: "FUNCIONARIO DE LA EMPRESA", value: "FUNCIONARIO DE LA EMPRESA" },
  { label: "CONTACTO PERSONAL", value: "CONTACTO PERSONAL" },
  { label: "CANJE", value: "CANJE" },
  { label: "REFERIDO EXTERNO", value: "REFERIDO EXTERNO" },
  { label: "REFERIDO CLIENTE", value: "REFERIDO CLIENTE" },
  { label: "REFERIDO FAMILIAR ASESOR", value: "REFERIDO FAMILIAR ASESOR" },
  { label: "STAND RECREO", value: "STAND RECREO" },
  { label: "STAND CONDADO", value: "STAND CONDADO" },
  { label: "STAND QUICENTRO SUR", value: "STAND QUICENTRO SUR" },
];

const OfertForm = ({ loteID }: { loteID: string }) => {
  const [ofert, setOfert] = useState<Ofert>({
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
    cli_descuento: 0,
    cli_totalOferta: 0,
    mae_codinv: loteID,
  });

  const [lote, setLote] = useState([]);
  const [porcentaje, setPorcentaje] = useState("");
  const [mostrarFormularioInmueble, setMostrarFormularioInmueble] =
    useState(false);
  const [mostrarFormularioPersonales, setMostrarFormularioPersonales] =
    useState(false);
  const [mostrarFormularioLaborales, setMostrarFormularioLaborales] =
    useState(false);
  const [mostrarFormularioReferenciasF, setMostrarFormularioReferenciasF] =
    useState(false);
  const [mostrarFormularioConyuge, setMostrarFormularioConyuge] =
    useState(false);
  const [mostrarFormularioReferidos, setMostrarFormularioReferidos] =
    useState(false);
  const [mostrarFormularioAsesor, setMostrarFormularioAsesor] = useState(false);
  const [mostrarFormularioEncuesta, setMostrarFormularioEncuesta] =
    useState(false);
  const [selectedValuesEncuesta, setSelectedValuesEncuesta] = useState([]);
  const [selectedValuesOfercimiento, setSelectedValuesOfrecimiento] = useState(
    []
  );

  const mostrarFormularioHandlerInmueble = () => {
    setMostrarFormularioInmueble(!mostrarFormularioInmueble);
  };
  const mostrarFormularioHandlerPersonales = () => {
    setMostrarFormularioPersonales(!mostrarFormularioPersonales);
  };
  const mostrarFormularioHandlerLaborales = () => {
    setMostrarFormularioLaborales(!mostrarFormularioLaborales);
  };
  const mostrarFormularioHandlerReferenciasF = () => {
    setMostrarFormularioReferenciasF(!mostrarFormularioReferenciasF);
  };
  const mostrarFormularioHandleroConyuge = () => {
    setMostrarFormularioConyuge(!mostrarFormularioConyuge);
  };
  const mostrarFormularioHandleroReferidos = () => {
    setMostrarFormularioReferidos(!mostrarFormularioReferidos);
  };
  const mostrarFormularioHandleroAsesor = () => {
    setMostrarFormularioAsesor(!mostrarFormularioAsesor);
  };
  const mostrarFormularioHandlerEncuesta = () => {
    setMostrarFormularioEncuesta(!mostrarFormularioEncuesta);
  };

  const loadData = async () => {
    if (Router.asPath !== Router.route) {
      const ofertID = Router.query.id as string;
      const response = await axios.get("/api/lotes/" + ofertID);
      setLote(response.data.data ?? []);
    } else {
      setTimeout(loadData, 1000);
    }
  };
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setOfert({ ...ofert, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios.post("/api/newOferts", ofert);
    Router.push({ pathname: "javascript:history.back()" });
  };

  return (
    <>
      <div className="tabla-oferta">
        <img className="icon-login" src="http://grupoancon.com/wp-content/uploads/2023/05/icon-app-oferta-1.svg" alt="logo" />
        <h2 className="title text-center text-lg font-extrabold dark:text-black sm:text-xl md:text-2xl lg:text-3xl text-transparent bg-clip-text p-4">
          Formulario de oferta de compra
        </h2>
        <label className="block text-center mb-6 text-sm font-medium dark:text-white">Despliegue las pestañas para ingresar sus datos:</label>
        <form onSubmit={handleSubmit} className="m-2">
          <div className="bg-gray-50 hover:bg-green-50 px-5 rounded-lg py-1 mt-4">
            <div className="text-center text-xl font-normal leading-normal mt-4 mb-4">
              <button
                type="button"
                className="px-4 py-2 color-blu transition"
                onClick={mostrarFormularioHandlerEncuesta}
              >
                {mostrarFormularioEncuesta
                  ? "Datos de la encuesta"
                  : "Datos de la encuesta"}
              </button>
            </div>
            <Transition
              show={mostrarFormularioEncuesta}
              enter="-transition-all duration-500"
              enterFrom="opacity-0 -translate-y-full"
              enterTo="opacity-100 -translate-y-0"
              leave="-transition-all duration-500"
              leaveFrom="opacity-100 -translate-y-0"
              leaveTo="opacity-0 -translate-y-6"
            >
              <div className="opciones grid grid-cols sm:grid-cols md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2">
                <div className="relative z-0 mb-2 w-full group">
                  <Select
                    isMulti
                    options={optionsEncuesta}
                    onChange={(items) => {
                      const word = items.map((item) => item.value);
                      setSelectedValuesEncuesta(word);
                      setOfert((prev) => ({
                        ...prev,
                        encuesta_pr1: word.join(", "),
                      }));
                    }}
                    value={selectedValuesEncuesta.map((value) => ({
                      label: value,
                      value: value,
                    }))}
                    placeholder={"¿Por qué medio se enteró de nosotros?"}
                    styles={{ 
                      placeholder: (base) => ({
                        ...base,
                        fontWeight: 400,
                        color: "black",
                        fontSize: "13px",
                      }),
                      option: (base1) => ({
                        ...base1,
                        fontSize: "13px",
                      }),
                    }}
                    isClearable={true}
                    isSearchable={true}
                    isDisabled={false}
                    isLoading={false}
                    isRtl={false}
                    closeMenuOnSelect={false}
                  />
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <select
                    name="encuesta_pr2"
                    id="encuesta_pr2"
                    value={ofert.encuesta_pr2}
                    onChange={handleChange}
                    style={{ fontSize: "13px" }}
                    className="px-2 bg-white border border-gray-300 text-gray-900 text-sm h-10 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option>
                      Antes de tomar la desicion de compra usted nos visito en
                      nuestra/o:
                    </option>
                    <option value="Pagina Web">Página Web</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="TikTok">TikTok</option>
                  </select>
                </div>
              </div>
            </Transition>
          </div>
          {lote.map((item) => {
            const descuentosPorcentaje = {
              "1%": 0.01,
              "2%": 0.02,
              "3%": 0.03,
              "4%": 0.04,
              "5%": 0.05,
              "6%": 0.06,
              "7%": 0.07,
              "8%": 0.08,
              "9%": 0.09,
              "10%": 0.1,
            };
            if (descuentosPorcentaje.hasOwnProperty(porcentaje)) {
              ofert.cli_descuento =
                item.mae_preact * descuentosPorcentaje[porcentaje];
            }
            ofert.cli_totalOferta = item.mae_preact - ofert.cli_descuento;
            return (
              <div className="bg-gray-50 hover:bg-green-50 px-5 rounded-lg py-1 mt-4">
                <div className="text-center text-xl font-normal leading-normal mt-4 mb-4">
                  <button
                    type="button"
                    className="px-4 py-2 color-blu transition"
                    onClick={mostrarFormularioHandlerInmueble}
                  >
                    {mostrarFormularioInmueble
                      ? "Datos del inmueble"
                      : "Datos del inmueble"}
                  </button>
                </div>
                <div>
                  <Transition
                    show={mostrarFormularioInmueble}
                    enter="-transition-all duration-500"
                    enterFrom="opacity-0 -translate-y-full"
                    enterTo="opacity-100 -translate-y-0"
                    leave="-transition-all duration-500"
                    leaveFrom="opacity-100 -translate-y-0"
                    leaveTo="opacity-0 -translate-y-6"
                  >
                    <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-2 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2">
                      <div className="relative z-0 mb-2 w-full group">
                        <input
                          type="text"
                          value={item.mae_codinv}
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          disabled
                          //required
                        />
                        <label
                          htmlFor="cli_totalOferta"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Codigo
                        </label>
                      </div>
                      <div className="relative z-0 mb-2 w-full group">
                        <input
                          type="text"
                          value={item.mae_prevt4 + " m2"}
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          disabled
                          //required
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                          Area
                        </label>
                      </div>
                      <div className="relative z-0 mb-2 w-full group">
                        <input
                          type="text"
                          name="cli_totalOferta"
                          id="cli_totalOferta"
                          value={item.mae_preact.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                          onChange={handleChange}
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          //required
                        />
                        <label
                          htmlFor="cli_totalOferta"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Precio Lote
                        </label>
                      </div>
                      <div className="relative z-0 mb-2 w-full group">
                        <select
                          id="porcentaje"
                          name="porcentaje"
                          value={porcentaje}
                          onChange={(e) => setPorcentaje(e.target.value)}
                          //required
                          style={{ fontSize: "13px" }}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option>Porcentaje de descuento</option>
                          <option value="1%">1%</option>
                          <option value="2%">2%</option>
                          <option value="3%">3%</option>
                          <option value="4%">4%</option>
                          <option value="5%">5%</option>
                          <option value="6%">6%</option>
                          <option value="7%">7%</option>
                          <option value="8%">8%</option>
                          <option value="9%">9%</option>
                          <option value="10%">10%</option>
                        </select>
                      </div>
                      <div className="relative z-0 mb-2 w-full group">
                        <input
                          type="text"
                          name="ofert.cli_descuento"
                          id="ofert.cli_descuento"
                          value={ofert.cli_descuento.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          //required
                        />
                        <label
                          htmlFor="cli_descuento"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Descuento
                        </label>
                      </div>
                      <div className="relative z-0 mb-2 w-full group">
                        <input
                          type="text"
                          name="cli_totalOferta"
                          id="cli_totalOferta"
                          value={ofert.cli_totalOferta.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          //required
                        />
                        <label
                          htmlFor="cli_descuento"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Total Lote
                        </label>
                      </div>
                    </div>
                  </Transition>
                </div>
              </div>
            );
          })}
          <div className="bg-gray-50 hover:bg-green-50 px-5 rounded-lg py-1 mt-4">
            <div className="text-center text-xl  font-normal leading-normal mt-4 mb-4 text-red-800">
              <button
                type="button"
                className="px-4 py-2 color-blu transition"
                onClick={mostrarFormularioHandlerPersonales}
              >
                {mostrarFormularioPersonales
                  ? "Datos personales - Cliente"
                  : "Datos personales - Cliente"}
              </button>
            </div>
            <Transition
              show={mostrarFormularioPersonales}
              enter="-transition-all duration-500"
              enterFrom="opacity-0 -translate-y-full"
              enterTo="opacity-100 -translate-y-0"
              leave="-transition-all duration-500"
              leaveFrom="opacity-100 -translate-y-0"
              leaveTo="opacity-0 -translate-y-6"
            >
              <div className="opciones grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2 slide-down">
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="text"
                    name="cli_name"
                    id="cli_name"
                    value={ofert.cli_name}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    //required
                  />
                  <label
                    htmlFor="cli_name"
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Apellidos y Nombres
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="text"
                    name="cli_id"
                    id="cli_id"
                    maxLength={13}
                    size={13}
                    value={ofert.cli_id}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    //required
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    C.I o Pasaporte
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="date"
                    name="cli_fecNac"
                    id="cli_fecNac"
                    value={ofert.cli_fecNac}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    //required
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Fecha de Nacimiento
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <select
                    id="cli_sexo"
                    name="cli_sexo"
                    value={ofert.cli_sexo}
                    onChange={handleChange}
                    //required
                    style={{ fontSize: "13px" }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option>Sexo</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                  </select>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="text"
                    name="cli_provin"
                    id="cli_provin"
                    value={ofert.cli_provin}
                    onChange={handleChange}
                    //required
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Provincia o Pais
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="text"
                    name="cli_ciudad"
                    id="cli_ciudad"
                    value={ofert.cli_ciudad}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    //required
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Ciudad
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="text"
                    name="cli_sector"
                    id="cli_sector"
                    value={ofert.cli_sector}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    //required
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Sector
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="text"
                    name="cli_direcc"
                    id="cli_direcc"
                    value={ofert.cli_direcc}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    //required
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Dirección del Hogar
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="number"
                    name="cli_telef"
                    id="cli_telef"
                    value={ofert.cli_telef}
                    onChange={handleChange}
                    className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    //required
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Teléfono Hogar
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="number"
                    name="cli_cell"
                    id="cli_cell"
                    value={ofert.cli_cell}
                    onChange={handleChange}
                    className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    //required
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Telf. Celular
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="email"
                    name="cli_mail"
                    id="cli_mail"
                    value={ofert.cli_mail}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    //required
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Correo Electronico
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="number"
                    name="cli_ingresos"
                    id="cli_ingresos"
                    value={ofert.cli_ingresos}
                    onChange={handleChange}
                    className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    //required
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Ingresos mensuales
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="number"
                    name="cli_gastos"
                    id="cli_gastos"
                    value={ofert.cli_gastos}
                    onChange={handleChange}
                    className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Gastos Mensuales
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="text"
                    name="cli_ahorroM"
                    id="cli_ahorroM"
                    value={ofert.cli_ahorroM}
                    onChange={handleChange}
                    className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    //required
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Cap. ahorro mensual
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="number"
                    name="cli_ahorroA"
                    id="cli_ahorroA"
                    value={ofert.cli_ahorroA}
                    onChange={handleChange}
                    className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    //required
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Ahorro actual
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <select
                    id="cli_tipoInmueble"
                    name="cli_tipoInmueble"
                    value={ofert.cli_tipoInmueble}
                    onChange={handleChange}
                    //required
                    style={{ fontSize: "13px" }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option>Tipo de Inmueble</option>
                    <option value="LOCAL">LOCAL</option>
                    <option value="CASA">CASA</option>
                    <option value="DEPARTAMENTO">DEPARTAMENTO</option>
                    <option value="SUITE">SUITE</option>
                    <option value="TERRENO">TERRENO</option>
                  </select>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <select
                    id="cli_estadoCivil"
                    name="cli_estadoCivil"
                    value={ofert.cli_estadoCivil}
                    onChange={handleChange}
                    //required
                    style={{ fontSize: "13px" }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option>Estado civil</option>
                    <option value="SOLTERO">SOLTERO</option>
                    <option value="DIVORCIADO">DIVORCIADO</option>
                    <option value="CASADO">CASADO</option>
                    <option value="U.LIBRE">U.LIBRE</option>
                    <option value="SEPARADO">SEPARADO</option>
                    <option value="VIUDO">VIUDO</option>
                  </select>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <Select
                    isMulti
                    options={options}
                    onChange={(items) => {
                      const word = items.map((item) => item.value);
                      setSelectedValuesOfrecimiento(word);
                      setOfert((prev) => ({
                        ...prev,
                        cli_ofrecimiento: word.join(", "),
                      }));
                    }}
                    value={selectedValuesOfercimiento.map((value) => ({
                      label: value,
                      value: value,
                    }))}
                    placeholder={"Seleccione los ofrecimientos"}
                    styles={{
                      placeholder: (base) => ({
                        ...base,
                        fontSize: "13px",
                        fontWeight: 400,
                        color: "black",
                      }),
                      option: (base1) => ({
                        ...base1,
                        fontSize: "13px",
                      }),
                    }}
                    isClearable={true}
                    isSearchable={true}
                    isDisabled={false}
                    isLoading={false}
                    isRtl={false}
                    closeMenuOnSelect={false}
                  />
                </div>
              </div>
            </Transition>
          </div>
          <div className="bg-gray-50 hover:bg-green-50 px-5 rounded-lg py-1 mt-4">
            <div className="text-center text-xl  font-normal leading-normal mt-4 mb-4 text-red-800">
              <button
                type="button"
                className="px-4 py-2 color-blu transition"
                onClick={mostrarFormularioHandlerLaborales}
              >
                {mostrarFormularioLaborales
                  ? "Datos laborales - Cliente"
                  : "Datos laborales - Cliente"}
              </button>
            </div>
            <Transition
              show={mostrarFormularioLaborales}
              enter="-transition-all duration-500"
              enterFrom="opacity-0 -translate-y-full"
              enterTo="opacity-100 -translate-y-0"
              leave="-transition-all duration-500"
              leaveFrom="opacity-100 -translate-y-0"
              leaveTo="opacity-0 -translate-y-6"
            >
              <div className="grid grip-cols sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2 sm:gap-2 md:gap-2 xl:gap-2">
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="text"
                    name="cli_trabajo"
                    id="cli_trabajo"
                    value={ofert.cli_trabajo}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    //required
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Empresa donde trabaja
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="text"
                    name="cli_cargoT"
                    id="cli_cargoT"
                    value={ofert.cli_cargoT}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    //required
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Cargo que ocupa
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="text"
                    name="cli_direccT"
                    id="cli_direccT"
                    value={ofert.cli_direccT}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    //required
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Dirección Trabajo
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="number"
                    name="cli_telefT"
                    id="cli_telefT"
                    value={ofert.cli_telefT}
                    onChange={handleChange}
                    className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    //required
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Telf. Trabajo
                  </label>
                </div>
              </div>
            </Transition>
          </div>
          <div className="bg-gray-50 hover:bg-green-50 px-5 rounded-lg py-1 mt-4">
            <div className="text-center text-xl  font-normal leading-normal mt-4 mb-4 text-red-800">
              <button
                type="button"
                className="px-4 py-2 color-blu transition"
                onClick={mostrarFormularioHandlerReferenciasF}
              >
                {mostrarFormularioReferenciasF
                  ? "Referencias familiares - Cliente"
                  : "Referencias familiares - Cliente"}
              </button>
            </div>
            <Transition
              show={mostrarFormularioReferenciasF}
              enter="-transition-all duration-500"
              enterFrom="opacity-0 -translate-y-full"
              enterTo="opacity-100 -translate-y-0"
              leave="-transition-all duration-500"
              leaveFrom="opacity-100 -translate-y-0"
              leaveTo="opacity-0 -translate-y-6"
            >
              <div className="grid grid-cols sm-grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-2 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2 mb-2">
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="text"
                    name="cli_reFami1"
                    id="cli_reFami1"
                    value={ofert.cli_reFami1}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    //required
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    <strong>1</strong>{")"} Ref. familiar
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="text"
                    name="cli_paren1"
                    id="cli_paren1"
                    value={ofert.cli_paren1}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    //required
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Parentezco
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="number"
                    name="cli_telParen1"
                    id="cli_telParen1"
                    value={ofert.cli_telParen1}
                    onChange={handleChange}
                    className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    //required
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Telf. Fijo
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="number"
                    name="cli_cellParen1"
                    id="cli_cellParen1"
                    value={ofert.cli_cellParen1}
                    onChange={handleChange}
                    className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    //required
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Telf. Celular
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="text"
                    name="cli_reFami2"
                    id="cli_reFami2"
                    value={ofert.cli_reFami2}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    <strong>2</strong>{")"} Ref. familiar
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="text"
                    name="cli_paren2"
                    id="cli_paren2"
                    value={ofert.cli_paren2}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Parentezco
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="number"
                    name="cli_telParen2"
                    id="cli_telParen2"
                    value={ofert.cli_telParen2}
                    onChange={handleChange}
                    className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Telf. Fijo
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="number"
                    name="cli_cellParen2"
                    id="cli_cellParen2"
                    value={ofert.cli_cellParen2}
                    onChange={handleChange}
                    className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Telf. Celular
                  </label>
                </div>
              </div>
              <div className="relative z-0 mb-2 w-full group text-left mt-4">
                <label className="text-sm text-gray-500 text-left">
                  Motivo de la compra:
                </label>
                <textarea
                  value={ofert.cli_motivoCompra}
                  name="cli_motivoCompra"
                  onChange={handleChange}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-4"
                  placeholder="Escriba aqui el motivo de la compra..."
                ></textarea>
              </div>
            </Transition>
          </div>
          <div className="bg-gray-50 hover:bg-green-50 px-5 rounded-lg py-1 mt-4">
            <div className="text-center text-xl font-normal leading-normal mt-4 mb-4">
              <button
                type="button"
                className="px-4 py-2 color-blu transition"
                onClick={mostrarFormularioHandleroConyuge}
              >
                {mostrarFormularioConyuge
                  ? "Datos personales - Cónyuge"
                  : "Datos personales - Cónyuge"}
              </button>
            </div>
            <Transition
              show={mostrarFormularioConyuge}
              enter="-transition-all duration-500"
              enterFrom="opacity-0 -translate-y-full"
              enterTo="opacity-100 -translate-y-0"
              leave="-transition-all duration-500"
              leaveFrom="opacity-100 -translate-y-0"
              leaveTo="opacity-0 -translate-y-6"
            >
              <div className="grid grid-cols sm-grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-2 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2">
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="text"
                    name="cli_conyuName"
                    id="cli_conyuName"
                    value={ofert.cli_conyuName}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Apellidos y Nombres
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="text"
                    name="cli_conyuID"
                    id="cli_conyuID"
                    maxLength={13}
                    size={13}
                    value={ofert.cli_conyuID}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    C.I o Pasaporte
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="number"
                    name="cli_conyuCell"
                    id="cli_conyuCell"
                    value={ofert.cli_conyuCell}
                    onChange={handleChange}
                    className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Telf. Celular
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="text"
                    name="cli_conyuTrab"
                    id="cli_conyuTrab"
                    value={ofert.cli_conyuTrab}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Empresa donde trabaja
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="text"
                    name="cli_conyuDireccT"
                    id="cli_conyuDireccT"
                    value={ofert.cli_conyuDireccT}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Dir. Trabajo Cónyuge
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="number"
                    name="cli_conyuTelT"
                    id="cli_conyuTelT"
                    value={ofert.cli_conyuTelT}
                    onChange={handleChange}
                    className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Telf. Trabajo Cónyuge
                  </label>
                </div>
              </div>
            </Transition>
          </div>
          <div className="bg-gray-50 hover:bg-green-50 px-5 rounded-lg py-1 mt-4">
            <div className="text-center text-xl font-normal leading-normal mt-4 mb-4">
              <button
                type="button"
                className="px-4 py-2 color-blu transition"
                onClick={mostrarFormularioHandleroReferidos}
              >
                {mostrarFormularioReferidos
                  ? "Datos referidos"
                  : "Datos referidos"}
              </button>
            </div>
            <Transition
              show={mostrarFormularioReferidos}
              enter="-transition-all duration-500"
              enterFrom="opacity-0 -translate-y-full"
              enterTo="opacity-100 -translate-y-0"
              leave="-transition-all duration-500"
              leaveFrom="opacity-100 -translate-y-0"
              leaveTo="opacity-0 -translate-y-6"
            >
              <div className="grid grid-cols sm-grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-6 gap-2 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2">
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="text"
                    name="cli_refName1"
                    id="cli_refName1"
                    value={ofert.cli_refName1}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    <strong>1</strong>{")"} Apellidos y Nombres
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="number"
                    name="cli_refTel1"
                    id="cli_refTel1"
                    value={ofert.cli_refTel1}
                    onChange={handleChange}
                    className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Teléfono
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="text"
                    name="cli_refName2"
                    id="cli_refName2"
                    value={ofert.cli_refName2}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    <strong>2</strong>{")"} Apellidos y Nombres
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="number"
                    name="cli_refTel2"
                    id="cli_refTel2"
                    value={ofert.cli_refTel2}
                    onChange={handleChange}
                    className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Teléfono
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="text"
                    name="cli_refName3"
                    id="cli_refName3"
                    value={ofert.cli_refName3}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    <strong>3</strong>{")"} Apellidos y Nombres
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="number"
                    name="cli_refTel3"
                    id="cli_refTel3"
                    value={ofert.cli_refTel3}
                    onChange={handleChange}
                    className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Teléfono
                  </label>
                </div>
              </div>
            </Transition>
          </div>
          <div className="bg-gray-50 hover:bg-green-50 px-5 rounded-lg py-1 mt-4">
            <div className="text-center text-xl font-normal leading-normal mt-4 mb-4">
              <button
                type="button"
                className="px-4 py-2 color-blu transition"
                onClick={mostrarFormularioHandleroAsesor}
              >
                {mostrarFormularioAsesor
                  ? "Datos asesor inmobiliario"
                  : "Datos asesor inmobiliario"}
              </button>
            </div>
            <Transition
              show={mostrarFormularioAsesor}
              enter="-transition-all duration-500"
              enterFrom="opacity-0 -translate-y-full"
              enterTo="opacity-100 -translate-y-0"
              leave="-transition-all duration-500"
              leaveFrom="opacity-100 -translate-y-0"
              leaveTo="opacity-0 -translate-y-6"
            >
              <div className="grid grid-cols sm-grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2">
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="text"
                    name="cli_asesor"
                    id="cli_asesor"
                    value={ofert.cli_asesor}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    //required
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Apellidos y Nombres del asesor
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <input
                    type="number"
                    name="cli_asesorTelf"
                    id="cli_asesorTelf"
                    value={ofert.cli_asesorTelf}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    //required
                  />
                  <label
                    htmlFor=""
                    className="label-size peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Teléfono
                  </label>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <select
                    id="cli_tipoVenta"
                    name="cli_tipoVenta"
                    value={ofert.cli_tipoVenta}
                    onChange={handleChange}
                    //required
                    style={{ fontSize: "13px" }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option>Seleccione Tipo de Venta</option>
                    <option value="CONTADO">CONTADO</option>
                    <option value="CREDITO DIRECTO">CREDITO DIRECTO</option>
                    <option value="BIES">BIES</option>
                    <option value="MIXTO">MIXTO</option>
                    <option value="TRUEQUE">TRUEQUE</option>
                  </select>
                </div>
                <div className="relative z-0 mb-2 w-full group">
                  <select
                    id="cli_contac"
                    name="cli_contac"
                    value={ofert.cli_contac}
                    //required
                    style={{ fontSize: "13px" }}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                      <option value="STAND QUICENTRO SUR">
                        STAND QUICENTRO SUR
                      </option>
                    </optgroup>
                    <optgroup label="FACEBOOK">
                      <option value="FACEBOOK PERSONAL">FACEBOOK PERSONAL</option>
                      <option value="FACEBOOK EMPRESA">FACEBOOK EMPRESA</option>
                    </optgroup>
                  </select>
                </div>
              </div>
              <div className="relative z-0 mb-2 w-full group text-left mt-4">
                <label className="text-sm text-gray-500 text-left">
                  Observaciones:
                </label>
                <textarea
                  id="cli_observation"
                  value={ofert.cli_observation}
                  name="cli_observation"
                  onChange={handleChange}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-4"
                  placeholder="Escriba aqui las observaciones presentadas durante la compra..."
                  required
                ></textarea>
              </div>
            </Transition>
          </div>
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 w-full xl:w-auto py-10">
            <div className="text-center w-full group">
              <button
                className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm w-full sm:w-auto px-12 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 mt-3"
                onClick={() =>
                  Router.push({ pathname: "javascript:history.back()" })
                }
              >
                Menu principal
              </button>
            </div>
            <div className="form-login text-center w-full group">
              <button
                type="submit"
                className="boton-enviar text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-20 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3"
              >
                Crear Oferta
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default OfertForm;
