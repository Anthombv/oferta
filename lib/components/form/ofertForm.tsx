/* eslint-disable react/jsx-key */
import axios from "axios";
import { useState } from "react";
import { Pendiente } from "../../utils/constans";
import FormatedDate from "../../utils/date";
import Select from "react-select";

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
    mae_codinv: loteID,
  });

  const handleChange = ({ target: { name, value } }) => {
    setOfert({ ...ofert, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await axios.post("/api/newOferts", ofert);
  };

  return (
    <>
      <div>
        <h2 className="text-center text-3xl font-extrabold dark:text-black md:text-5xl lg:text-6xl text-transparent bg-clip-text text-red-800 p-4">
          FORMULARIO DE OFERTA DE COMPRA
        </h2>
        <form onSubmit={handleSubmit} className="m-2">
          {/* <div className="bg-green-50 border border-green-100 pb-5 px-5 rounded-lg">
            <h2 className="text-center text-2xl  font-normal leading-normal mt-4 mb-4 text-red-800">
              DATOS INMUEBLE
            </h2>
            {lotes.map((oferta, index) => (
              <div
                key={index}
                className="grid grid-cols sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2"
              >
                <div className="relative z-0 mb-2 w-full group">
                  <p>codigo {oferta.mae_prevt4}</p>
                </div>
                <div className="relative z-0 mb-2 w-full group"></div>
                <div className="relative z-0 mb-2 w-full group"></div>
                <div className="relative z-0 mb-2 w-full group"></div>
              </div>
            ))}
          </div> */}
          <div className="bg-green-50 border border-green-100 pb-5 px-5 rounded-lg mt-4">
            <h2 className="text-center text-2xl  font-normal leading-normal mt-4 mb-4 text-red-800">
              DATOS PERSONALES - CLIENTE
            </h2>
            <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2">
              <div className="relative z-0 mb-2 w-full group">
                <input
                  type="text"
                  name="cli_name"
                  value={ofert.cli_name ?? ""}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  //required
                />
                <label
                  htmlFor="cli_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  //required
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  //required
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Seleccione el sexo del cliente</option>
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
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  //required
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  //required
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  //required
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  //required
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  //required
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  //required
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  //required
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  //required
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Capacidad de ahorro mensual
                </label>
              </div>
              <div className="relative z-0 mb-2 w-full group">
                <input
                  type="number"
                  name="cli_ahorroA"
                  id="cli_ahorroA"
                  value={ofert.cli_ahorroA}
                  onChange={handleChange}
                  className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  //required
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Seleccione el Tipo de Inmueble</option>
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Seleccione el Estado civil del Cliente</option>
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
                    const word = items.map((item) => item.value).join(",");
                    setOfert((prev) => ({ ...prev, cli_ofrecimiento: word }));
                  }}
                  placeholder={"Seleccione los ofrecimientos"}
                  styles={{
                    placeholder: (base) => ({
                      ...base,
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "black",
                    }),
                    option: (base1) => ({
                      ...base1,
                      fontSize: "14px",
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
          </div>
          <div className="bg-teal-50 border border-teal-100 pb-5 px-5 rounded-lg mt-4">
            <h2 className="text-center text-2xl  font-normal leading-normal mt-4 mb-4 text-red-800">
              DATOS LABORALES - CLIENTE
            </h2>
            <div className="grid grip-cols sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-2 md:gap-2 xl:gap-2">
              <div className="relative z-0 mb-2 w-full group">
                <input
                  type="text"
                  name="cli_trabajo"
                  id="cli_trabajo"
                  value={ofert.cli_trabajo}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  //required
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  //required
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  //required
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Direción Trabajo
                </label>
              </div>
              <div className="relative z-0 mb-2 w-full group">
                <input
                  type="number"
                  name="cli_telefT"
                  id="cli_telefT"
                  value={ofert.cli_telefT}
                  onChange={handleChange}
                  className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  //required
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Telf. Trabajo
                </label>
              </div>
            </div>
          </div>
          <div className="bg-cyan-50 border border-cyan-100 pb-5 px-5 rounded-lg mt-4">
            <h2 className="text-center text-2xl  font-normal leading-normal mt-4 mb-4 text-red-800">
              REFERENCIAS FAMILIARES - CLIENTE
            </h2>
            <div className="grid grid-cols sm-grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2 mb-2">
              <div className="relative z-0 mb-2 w-full group">
                <input
                  type="text"
                  name="cli_reFami1"
                  id="cli_reFami1"
                  value={ofert.cli_reFami1}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  //required
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  1{")"} Referencia familiar
                </label>
              </div>
              <div className="relative z-0 mb-2 w-full group">
                <input
                  type="text"
                  name="cli_paren1"
                  id="cli_paren1"
                  value={ofert.cli_paren1}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  //required
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  //required
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  //required
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  2{")"} Referencia familiar
                </label>
              </div>
              <div className="relative z-0 mb-2 w-full group">
                <input
                  type="text"
                  name="cli_paren2"
                  id="cli_paren2"
                  value={ofert.cli_paren2}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Telf. Celular
                </label>
              </div>
            </div>
            <div className="relative z-0 mb-2 w-full group text-center mt-4">
              <label className="text-sm text-gray-500 text-center">
                Motivo de la compra
              </label>
              <textarea
                value={ofert.cli_motivoCompra}
                name="cli_motivoCompra"
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-4"
                placeholder="Escriba aqui el motivo de la compra..."
              ></textarea>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-100 pb-5 px-5 rounded-lg mt-4">
            <h2 className="text-center text-2xl  font-normal leading-normal mt-4 mb-4 text-red-800">
              DATOS PERSONALES - CÓNYUGE
            </h2>
            <div className="grid grid-cols sm-grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2">
              <div className="relative z-0 mb-2 w-full group">
                <input
                  type="text"
                  name="cli_conyuName"
                  id="cli_conyuName"
                  value={ofert.cli_conyuName}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Apellidos y Nombres
                </label>
              </div>
              <div className="relative z-0 mb-2 w-full group">
                <input
                  type="text"
                  name="cli_conyuID"
                  id="cli_conyuID"
                  value={ofert.cli_conyuID}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Dirección Trabajo Cónyuge
                </label>
              </div>
              <div className="relative z-0 mb-2 w-full group">
                <input
                  type="number"
                  name="cli_conyuTelT"
                  id="cli_conyuTelT"
                  value={ofert.cli_conyuTelT}
                  onChange={handleChange}
                  className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Telf. Trabajo Cónyuge
                </label>
              </div>
            </div>
          </div>
          <div className="bg-violet-50 border border-violet-100 pb-5 px-5 rounded-lg mt-4">
            <h2 className="text-center text-2xl  font-normal leading-normal mt-4 mb-4 text-red-800">
              DATOS REFERIDOS
            </h2>
            <div className="grid grid-cols sm-grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2">
              <div className="relative z-0 mb-2 w-full group">
                <input
                  type="text"
                  name="cli_refName1"
                  id="cli_refName1"
                  value={ofert.cli_refName1}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  1{")"} Apellidos y Nombres
                </label>
              </div>
              <div className="relative z-0 mb-2 w-full group">
                <input
                  type="number"
                  name="cli_refTel1"
                  id="cli_refTel1"
                  value={ofert.cli_refTel1}
                  onChange={handleChange}
                  className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  2{")"} Apellidos y Nombres
                </label>
              </div>
              <div className="relative z-0 mb-2 w-full group">
                <input
                  type="number"
                  name="cli_refTel2"
                  id="cli_refTel2"
                  value={ofert.cli_refTel2}
                  onChange={handleChange}
                  className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  3{")"} Apellidos y Nombres
                </label>
              </div>
              <div className="relative z-0 mb-2 w-full group">
                <input
                  type="number"
                  name="cli_refTel3"
                  id="cli_refTel3"
                  value={ofert.cli_refTel3}
                  onChange={handleChange}
                  className="noscroll block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Teléfono
                </label>
              </div>
            </div>
          </div>
          <div className="bg-pink-50 border border-pink-100 pb-5 px-5 rounded-lg mt-4">
            <h2 className="text-center text-2xl  font-normal leading-normal mt-4 mb-4 text-red-800">
              DATOS ASESOR INMOBILIARIO
            </h2>
            <div className="grid grid-cols sm-grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2">
              <div className="relative z-0 mb-2 w-full group">
                <input
                  type="text"
                  name="cli_asesor"
                  id="cli_asesor"
                  value={ofert.cli_asesor}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  //required
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  //required
                />
                <label
                  htmlFor=""
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
            <div className="relative z-0 mb-2 w-full group text-center mt-4">
              <label className="text-sm text-gray-500 text-center">
                Observaciones
              </label>
              <textarea
                id="cli_observation"
                value={ofert.cli_observation}
                name="cli_observation"
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-4"
                placeholder="Escriba aqui las observaciones presentadas durante la compra..."
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
          >
            Crear Oferta
          </button>
        </form>
      </div>
    </>
  );
};

export default OfertForm;
