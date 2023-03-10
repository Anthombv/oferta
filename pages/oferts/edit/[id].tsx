import axios from "axios";
import { useFormik } from "formik";
import router from "next/router";
import Router from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Pendiente } from "../../../lib/utils/constans";
import FormatedDate from "../../../lib/utils/date";

type Ofert = {
  mae_prevt4: string | number | readonly string[];
  mae_codinv: string | number | readonly string[];
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
};

const EditOfert = () => {
  const [initialValues, setInitialValues] = useState<Ofert>({
    mae_prevt4: "",
    mae_codinv: "",
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
  });
  const loadData = async () => {
    if (Router.asPath !== Router.route) {
      const ofertID = Router.query.id as string;
      const response = await axios.get("/api/newOferts/editOferts/" + ofertID);
      setInitialValues(response.data.data);
    } else {
      setTimeout(loadData, 1000);
    }
  };
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (formData: Ofert) => {
    if (Router.asPath !== Router.route) {
      const ofertID = Router.query.id as string;
      const requestData = {
        ...formData,
        id: ofertID,
      };
      const response = await axios.put(
        "/api/newOferts/editOferts/" + ofertID,
        requestData
      );
      if (response) {
        toast.success("Oferta Editada correctamente");
        await loadData();
      } else {
        toast.warning("Ocurrio un problema");
      }
      router.push("javascript:history.back()");
    } else {
      setTimeout(onSubmit, 1000);
    }
  };
  const formik = useFormik<Ofert>({
    enableReinitialize: true,
    validateOnMount: true,
    validateOnBlur: true,
    validateOnChange: true,
    initialValues,
    onSubmit,
  });

  return (
    <>
      <title>Editar Oferta</title>
      <link
        rel="icon"
        href="https://www.grupoancon.com/wp-content/uploads/2020/07/logo.svg"
        sizes="32x32"
      />
      <div className="w-full mx-auto min-h-screen">
        <div className="mx-auto w-4/5 border-black border bg-gray-200 mt-4">
          <div>
            <h1 className="my-4 text-center text-lg xl:text-2xl md:text-xl sm:text-xl lg:text-xl font-bold">
              Revisar/Editar Datos de la Oferta
            </h1>
          </div>
          <form className="mx-2">
            <h2 className="text-center text-lg font-bold mb-4">
              Datos Personales
            </h2>
            <div className="grid xl:grid-cols-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              <div className="flex flex-wrap">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nombre
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="cli_name"
                  id="cli_name"
                  value={formik.values.cli_name}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-wrap">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Cedula o RUC
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="cli_id"
                  id="cli_id"
                  value={formik.values.cli_id}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-wrap">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Estado Civil
                </label>
                <select
                  id="cli_estadoCivil"
                  name="cli_estadoCivil"
                  value={formik.values.cli_estadoCivil}
                  onChange={formik.handleChange}
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
              <div className="flex flex-wrap">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Sexo
                </label>
                <select
                  id="cli_sexo"
                  name="cli_sexo"
                  value={formik.values.cli_sexo}
                  onChange={formik.handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Seleccione el sexo del cliente</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                </select>
              </div>
              <div className="flex flex-wrap">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Fecha de Nacimiento
                </label>
                <input
                  type="text"
                  name="cli_fecNac"
                  id="cli_fecNac"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formik.values.cli_fecNac.substring(0, 10)}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-wrap">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Telefono
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="cli_telef"
                  id="cli_telef"
                  value={formik.values.cli_telef}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-wrap">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Celular
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="cli_cell"
                  id="cli_cell"
                  value={formik.values.cli_cell}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-wrap">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  E-mail
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="cli_mail"
                  id="cli_mail"
                  value={formik.values.cli_mail}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-wrap">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nombre del Trabajo
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="cli_trabajo"
                  id="cli_trabajo"
                  value={formik.values.cli_trabajo}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-wrap">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Cargo
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="cli_cargoT"
                  id="cli_cargoT"
                  value={formik.values.cli_cargoT}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-wrap">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Direcci??n Trabajo
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="cli_direccT"
                  id="cli_direccT"
                  value={formik.values.cli_direccT}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-wrap">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Telefono Trabajo
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="cli_telefT"
                  id="cli_telefT"
                  value={formik.values.cli_telefT}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <h2 className="text-center text-lg font-bold my-4">
              Datos Conyug??
            </h2>
            <div className="grid xl:grid-cols-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nombre Conyug??
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="cli_conyuName"
                  id="cli_conyuName"
                  value={formik.values.cli_conyuName}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-wrap">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Cedula o RUC Conyug??
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="cli_conyuID"
                  id="cli_conyuID"
                  value={formik.values.cli_conyuID}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-wrap">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Telefono Conyug??
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="cli_conyuCell"
                  id="cli_conyuCell"
                  value={formik.values.cli_conyuCell}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-wrap">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Trabajo Conyug??
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="cli_conyuTrab"
                  id="cli_conyuTrab"
                  value={formik.values.cli_conyuTrab}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-wrap">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Direcci??n Trabajo Conyug??
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="cli_conyuDireccT"
                  id="cli_conyuDireccT"
                  value={formik.values.cli_conyuDireccT}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-wrap">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Telefono Trabajo Conyug??
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="cli_conyuTelT"
                  id="cli_conyuTelT"
                  value={formik.values.cli_conyuTelT}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <h2 className="text-center text-lg font-bold my-4">Datos Lote</h2>
            <div className="grid xl:grid-cols-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              <div className="flex flex-wrap">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Codigo
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  value={initialValues.mae_codinv}
                  disabled
                />
              </div>
              <div className="flex flex-wrap">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Area
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  value={initialValues.mae_prevt4 + "m2"}
                  disabled
                />
              </div>
              <div className="flex flex-wrap">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Precio Lote
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="cli_totalOferta"
                  id="cli_totalOferta"
                  value={formik.values.cli_totalOferta}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-wrap">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Descuento
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="cli_descuento"
                  id="cli_descuento"
                  value={formik.values.cli_descuento}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <h2 className="text-center text-lg font-bold my-4">
              Estado de la Oferta
            </h2>
            <div className="mx-auto w-2/5">
              <select
                id="cli_state"
                name="cli_state"
                value={formik.values.cli_state}
                onChange={formik.handleChange}
                //required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Seleccione el sexo del cliente</option>
                <option value="Pendiente">Pendiente</option>
                <option value="Vendido">Vendido</option>
                <option value="Anulado">Anulado</option>
              </select>
            </div>
          </form>
          <div>
            <button
              className="mx-5 text-white my-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => formik.handleSubmit()}
            >
              Actualizar
            </button>
          </div>
          <div>
            <button
              className="mx-5 text-white mb-4 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              onClick={() =>
                Router.push({ pathname: "javascript:history.back()" })
              }
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditOfert;
