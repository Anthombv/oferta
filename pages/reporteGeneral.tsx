import { useEffect, useState } from "react";
import { useAuth } from "../lib/hooks/use_auth";
import RoleLayout from "../lib/layouts/role_layout";
import HttpClient from "../lib/utils/http_client";
import Navbar from "../lib/components/navBar";

const ReporteGeneral = () => {
  const { auth } = useAuth();
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedAsesor, setSelectedAsesor] = useState("");
  const [reporte, setReporte] = useState([]);
  const [filteredAsesores, setFilteredAsesores] = useState([]);

  const loadData = async () => {
    const response = await HttpClient(
      "/api/newOferts",
      "GET",
      auth.userName,
      auth.role
    );
    const datos = response.data ?? [];
    setReporte(datos);

    // Obtener lista de asesores sin duplicados
    const asesores = new Set(datos.map((item) => item.cli_asesor));
    setFilteredAsesores(Array.from(asesores));
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMonthFilterChange = (event) => {
    const selectedMonthValue = event.target.value;
    setSelectedMonth(selectedMonthValue);
  };

  const handleAsesorFilterChange = (event) => {
    const selectedAsesorValue = event.target.value;
    setSelectedAsesor(selectedAsesorValue);
  };

  const filteredInmuebles = reporte.filter((item) => {
    if (!selectedMonth) {
      return true;
    }

    const fechaParte = item.fechaCreacion.split(",")[0];
    const [dia, mes, anio] = fechaParte.split("/");
    const monthNumber = parseInt(mes, 10);
    const selectedMonthNumber = parseInt(selectedMonth, 10);
    return monthNumber === selectedMonthNumber;
  });

  const filteredByAsesor = filteredInmuebles.filter((item) => {
    if (!selectedAsesor) {
      return true;
    }

    return item.cli_asesor.toLowerCase().includes(selectedAsesor.toLowerCase());
  });

  // Inmuebles por tipo
  const inmueblesEJ = filteredByAsesor.filter((item) =>
    item.mae_codinv.startsWith("EJ")
  );
  const inmueblesED = filteredByAsesor.filter((item) =>
    item.mae_codinv.startsWith("ED")
  );
  const inmueblesML = filteredByAsesor.filter((item) =>
    item.mae_codinv.startsWith("ML")
  );
  const inmueblesEM = filteredByAsesor.filter((item) =>
    item.mae_codinv.startsWith("EM")
  );

  // Calcular totales para cada proyecto
  const totalEJ = inmueblesEJ.length;
  const totalED = inmueblesED.length;
  const totalML = inmueblesML.length;
  const totalEM = inmueblesEM.length;
  const totalGeneral = filteredByAsesor.length;

  return (
    <RoleLayout permissions={[0, 2]}>
      <title>Reporte General</title>
      <div className="main-side w-full mx-auto min-h-fit">
        <Navbar />
        <h2 className="title-main text-center text-4xl leading-normal">
          REPORTE GENERAL DE VENTAS
        </h2>

        <div className="w-11/12 mx-auto">
          <div className="mb-4 md:w-32">
            <label
              htmlFor="monthFilter"
              className="block font-medium text-gray-700"
            >
              Filtrar por mes:
            </label>
            <select
              id="monthFilter"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-opacity-50"
              value={selectedMonth}
              onChange={handleMonthFilterChange}
            >
              <option value="">Todos</option>
              <option value="1">Enero</option>
              <option value="2">Febrero</option>
              <option value="3">Marzo</option>
              <option value="4">Abril</option>
              <option value="5">Mayo</option>
              <option value="6">Junio</option>
              <option value="7">Julio</option>
              <option value="8">Agosto</option>
              <option value="9">Septiembre</option>
              <option value="10">Octubre</option>
              <option value="11">Noviembre</option>
              <option value="12">Diciembre</option>
            </select>
          </div>
          <div className="mb-4 md:w-1/5">
            <label
              htmlFor="asesorFilter"
              className="block font-medium text-gray-700"
            >
              Filtrar por asesor:
            </label>
            <input
              type="text"
              id="asesorFilter"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-opacity-50"
              value={selectedAsesor}
              onChange={handleAsesorFilterChange}
              placeholder="Nombre del asesor"
            />
          </div>
            <table className="bg-white mb-8 w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-2 py-2 text-left text-gray-700 font-semibold">
                    Fecha
                  </th>
                  <th className="px-2 py-2 text-left text-gray-700 font-semibold">
                    Cliente
                  </th>
                  <th className="px-2 py-2 text-left text-gray-700 font-semibold">
                    Asesor
                  </th>
                  <th className="px-2 py-2 text-left text-gray-700 font-semibold">
                    Inmueble
                  </th>
                  <th className="px-2 py-2 text-left text-gray-700 font-semibold">
                    Precio
                  </th>
                  <th className="px-2 py-2 text-left text-gray-700 font-semibold">
                    Tipo Venta
                  </th>
                  <th className="px-2 py-2 text-left text-gray-700 font-semibold">
                    Dato de Venta
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Datos de LOTES VENDIDOS EL JARDIN */}
                {inmueblesEJ.length > 0 && (
                  <>
                    <tr>
                      <td colSpan={7} className="font-bold text-xs py-2 text-center">
                        LOTES VENDIDOS EL JARDIN
                      </td>
                    </tr>
                    {inmueblesEJ.map((item, index) => {
                      const [fechaParte, horaParte] =
                        item.fechaCreacion.split(",");
                      const [dia, mes, anio] = fechaParte.split("/");
                      const fechaFormateada = `${dia}/${mes}/${anio}`;
                      return (
                        <tr
                          key={index}
                          className={index % 2 === 0 ? "bg-gray-50" : ""}
                        >
                          <td className="px-2 py-2 text-xs text-gray-800">
                            {fechaFormateada}
                          </td>
                          <td className="px-2 py-2 text-xs text-gray-800 uppercase">
                            {item.cli_name}
                          </td>
                          <td className="px-2 py-2 text-xs text-gray-800">
                            {item.cli_asesor}
                          </td>
                          <td className="px-2 py-2 text-xs text-gray-800">
                            {item.mae_codinv}
                          </td>
                          <td className="px-2 py-2 text-xs text-gray-800">
                            {item.cli_totalOferta.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </td>
                          <td className="px-2 py-2 text-xs text-gray-800">
                            {item.cli_tipoVenta}
                          </td>
                          <td className="px-2 py-2 text-xs text-gray-800">
                            {item.cli_contac}
                          </td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td colSpan={6} className="font-bold text-sm">
                        Total LOTES VENDIDOS EL JARDIN: {totalEJ}
                      </td>
                    </tr>
                  </>
                )}

                {/* Datos de LOTES VENDIDOS EL EDEN */}
                {inmueblesED.length > 0 && (
                  <>
                    <tr>
                      <td colSpan={7} className="font-bold text-xs py-2 text-center">
                        LOTES VENDIDOS EL EDEN
                      </td>
                    </tr>
                    {inmueblesED.map((item, index) => {
                      const [fechaParte, horaParte] =
                        item.fechaCreacion.split(",");
                      const [dia, mes, anio] = fechaParte.split("/");
                      const fechaFormateada = `${dia}/${mes}/${anio}`;
                      return (
                        <tr
                          key={index}
                          className={index % 2 === 0 ? "bg-gray-50" : ""}
                        >
                          <td className="px-2 py-2 text-xs text-gray-800">
                            {fechaFormateada}
                          </td>
                          <td className="px-2 py-2 text-xs text-gray-800 uppercase">
                            {item.cli_name}
                          </td>
                          <td className="px-2 py-2 text-xs text-gray-800">
                            {item.cli_asesor}
                          </td>
                          <td className="px-2 py-2 text-xs text-gray-800">
                            {item.mae_codinv}
                          </td>
                          <td className="px-2 py-2 text-xs text-gray-800">
                            {item.cli_totalOferta.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </td>
                          <td className="px-2 py-2 text-xs text-gray-800">
                            {item.cli_tipoVenta}
                          </td>
                          <td className="px-2 py-2 text-xs text-gray-800">
                            {item.cli_contac}
                          </td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td colSpan={6} className="font-bold text-sm">
                        Total LOTES VENDIDOS EL EDEN: {totalED}
                      </td>
                    </tr>
                  </>
                )}

                {/* Datos de LOTES VENDIDOS MIRADOR DEL LAGO */}
                {inmueblesML.length > 0 && (
                  <>
                    <tr>
                      <td colSpan={7} className="font-bold text-xs py-2 text-center">
                        LOTES VENDIDOS MIRADOR DEL LAGO
                      </td>
                    </tr>
                    {inmueblesML.map((item, index) => {
                      const [fechaParte, horaParte] =
                        item.fechaCreacion.split(",");
                      const [dia, mes, anio] = fechaParte.split("/");
                      const fechaFormateada = `${dia}/${mes}/${anio}`;
                      return (
                        <tr
                          key={index}
                          className={index % 2 === 0 ? "bg-gray-50" : ""}
                        >
                          <td className="px-2 py-2 text-xs text-gray-800">
                            {fechaFormateada}
                          </td>
                          <td className="px-2 py-2 text-xs text-gray-800 uppercase">
                            {item.cli_name}
                          </td>
                          <td className="px-2 py-2 text-xs text-gray-800">
                            {item.cli_asesor}
                          </td>
                          <td className="px-2 py-2 text-xs text-gray-800">
                            {item.mae_codinv}
                          </td>
                          <td className="px-2 py-2 text-xs text-gray-800">
                            {item.cli_totalOferta.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </td>
                          <td className="px-2 py-2 text-xs text-gray-800">
                            {item.cli_tipoVenta}
                          </td>
                          <td className="px-2 py-2 text-xs text-gray-800">
                            {item.cli_contac}
                          </td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td colSpan={7} className="font-bold text-sm">
                        Total LOTES VENDIDOS MIRADOR DEL LAGO: {totalML}
                      </td>
                    </tr>
                  </>
                )}

                {/* Datos de LOTES VENDIDOS EL MANANTIAL */}
                {inmueblesEM.length > 0 && (
                  <>
                    <tr>
                      <td colSpan={6} className="font-bold text-xs py-2 text-center">
                        LOTES VENDIDOS EL MANANTIAL
                      </td>
                    </tr>
                    {inmueblesEM.map((item, index) => {
                      const [fechaParte, horaParte] =
                        item.fechaCreacion.split(",");
                      const [dia, mes, anio] = fechaParte.split("/");
                      const fechaFormateada = `${dia}/${mes}/${anio}`;
                      return (
                        <tr
                          key={index}
                          className={index % 2 === 0 ? "bg-gray-50" : ""}
                        >
                          <td className="px-2 py-2 text-xs text-gray-800">
                            {fechaFormateada}
                          </td>
                          <td className="px-2 py-2 text-xs text-gray-800 uppercase">
                            {item.cli_name}
                          </td>
                          <td className="px-2 py-2 text-xs text-gray-800">
                            {item.cli_asesor}
                          </td>
                          <td className="px-2 py-2 text-xs text-gray-800">
                            {item.mae_codinv}
                          </td>
                          <td className="px-2 py-2 text-xs text-gray-800">
                            {item.cli_totalOferta.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </td>
                          <td className="px-2 py-2 text-xs text-gray-800">
                            {item.cli_tipoVenta}
                          </td>
                          <td className="px-2 py-2 text-xs text-gray-800">
                            {item.cli_contac}
                          </td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td colSpan={7} className="font-bold text-sm">
                        Total LOTES VENDIDOS EL MANANTIAL: {totalEM}
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
              {/* Total General */}
              <tfoot>
                <tr className="bg-gray-100">
                  <td colSpan={7} className="font-bold text-lg">
                    TOTAL LOTES VENDIDOS GENERALES: {totalGeneral}
                  </td>
                </tr>
              </tfoot>
            </table>
        </div>
      </div>
    </RoleLayout>
  );
};

export default ReporteGeneral;
