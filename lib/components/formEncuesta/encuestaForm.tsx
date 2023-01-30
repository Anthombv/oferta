/* eslint-disable react/jsx-key */
import axios from "axios";
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
    mae_codinv: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setOfert({ ...ofert, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put("/api/newOferts/" + ofertID, ofert);
    router.push("javascript:history.back()");
  };

  useEffect(() => {
    const getOfert = async () => {
      const { data } = await axios.get("/api/newOferts/" + ofertID);
      setOfert(data);
    };
    //@ts-ignore
    //getOfert(ofertID)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div>
        <h2 className="text-center text-base font-bold text-gray-900 dark:text-black md:text-4xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r to-blue-900 from-purple-600">
          FORMULARIO DE ENCUESTA
        </h2>
        <form onSubmit={handleSubmit} className="m-2">
          <label>
            Antes de tomar la desicion de compra usted nos visito en nuestra/o:
          </label>
          <select
            name="encuesta_pr1"
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
          </select>
          <label>
            Si nos visito en nuestra página web o en redes sociales, ¿Cuál fue
            el motivo?
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
            <option value="Tener más información de los proyectos">
              Tener más información de los proyectos
            </option>
            <option value="Tener más información de la empresa">
              Tener más información de la empresa
            </option>
            <option value="Tener mas seguridad de la empresa">
              Tener mas seguridad de la empresa
            </option>
            <option value="Verificar algo en especial">
              Verificar algo en especial
            </option>
            <option value="Otro">Otro</option>
          </select>
          <textarea
            id="encuesta_pr3"
            name="encuesta_pr3"
            value={ofert.encuesta_pr3}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3"
            placeholder="Escriba aqui el motivo de verificar algo en especial u Otro..."
            //required
          ></textarea>
          <label>¿Qué recomendación nos haría para implementarla</label>
          <textarea
            id="encuesta_pr4"
            name="encuesta_pr4"
            value={ofert.encuesta_pr4}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3"
            placeholder="Escriba aqui el motivo de verificar algo en especial u Otro..."
          ></textarea>
          <label>Estado de la Oferta</label>
          <select
            name="cli_state"
            id="cli_state"
            value={ofert.cli_state}
            onChange={handleChange}
            //required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3"
          >
            <option value="Pendiente">Pendiente</option>
            <option value="Vendido">Vendido</option>
            <option value="Anulado">Anulado</option>
          </select>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
          >
            Crear Encuesta
          </button>
        </form>
      </div>
    </>
  );
};
export default EncuestaForm;
