import { useEffect, useState } from "react";
import { useAuth } from "../lib/hooks/use_auth";
import RoleLayout from "../lib/layouts/role_layout";
import HttpClient from "../lib/utils/http_client";
import Navbar from "../lib/components/navBar";

const ReporteGeneral = () => {
  const { auth } = useAuth();
  const [selectedMonth, setSelectedMonth] = useState("");
  const [reporte, setReporte] = useState([]);

  const loadData = async () => {
    const response = await HttpClient(
      "/api/newOferts",
      "GET",
      auth.userName,
      auth.role
    );
    const datos = response.data ?? [];
    setReporte(datos);
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMonthFilterChange = (event) => {
    const selectedMonthValue = event.target.value;
    console.log("Mes seleccionado:", selectedMonthValue);
    setSelectedMonth(selectedMonthValue);
  };

  const filteredInmuebles = reporte.filter((item) => {
    if (!selectedMonth) {
      return true; // Mostrar todos los datos si no se ha seleccionado un mes
    }

    const fechaParte = item.fechaCreacion.split(",")[0];
    const [dia, mes, anio] = fechaParte.split("/");
    const monthNumber = parseInt(mes, 10);
    const selectedMonthNumber = parseInt(selectedMonth, 10);
    return monthNumber === selectedMonthNumber;
  });

  // Inmuebles por tipo
  const inmueblesEJ = filteredInmuebles.filter((item) =>
    item.mae_codinv.startsWith("EJ")
  );
  const inmueblesED = filteredInmuebles.filter((item) =>
    item.mae_codinv.startsWith("ED")
  );
  const inmueblesML = filteredInmuebles.filter((item) =>
    item.mae_codinv.startsWith("ML")
  );
  const inmueblesEM = filteredInmuebles.filter((item) =>
    item.mae_codinv.startsWith("EM")
  );

  // Calcular totales para cada proyecto
  const totalEJ = inmueblesEJ.length;
  const totalED = inmueblesED.length;
  const totalML = inmueblesML.length;
  const totalEM = inmueblesEM.length;
  const totalGeneral = filteredInmuebles.length;

  return (
    <RoleLayout permissions={[0, 2]}>
      <title>Reporte General</title>
      <div className="main-side w-full mx-auto min-h-fit">
        <Navbar />
        <h2 className="title-main text-center text-4xl leading-normal">
          REPORTE GENERAL DE VENTAS
        </h2>

        <div className="w-11/12 mx-auto">
          <div className="mb-4">
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
          <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-gray-700 font-semibold">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-gray-700 font-semibold">
                  Cliente
                </th>
                <th className="px-6 py-3 text-left text-gray-700 font-semibold">
                  Asesor
                </th>
                <th className="px-6 py-3 text-left text-gray-700 font-semibold">
                  Inmueble
                </th>
                <th className="px-6 py-3 text-left text-gray-700 font-semibold">
                  Precio
                </th>
                <th className="px-6 py-3 text-left text-gray-700 font-semibold">
                  Terreno
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Datos de LOTES VENDIDOS EL JARDIN */}
              {inmueblesEJ.length > 0 && (
                <>
                  <tr>
                    <td colSpan={6} className="font-bold text-lg py-2">
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {fechaFormateada}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {item.cli_name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {item.cli_asesor}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {item.mae_codinv}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {item.cli_totalOferta.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {item.mae_prevt2} m2
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td colSpan={6} className="font-bold">
                      Total LOTES VENDIDOS EL JARDIN: {totalEJ}
                    </td>
                  </tr>
                </>
              )}

              {/* Datos de LOTES VENDIDOS EL EDEN */}
              {inmueblesED.length > 0 && (
                <>
                  <tr>
                    <td colSpan={6} className="font-bold text-lg py-2">
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {fechaFormateada}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {item.cli_name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {item.cli_asesor}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {item.mae_codinv}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {item.cli_totalOferta.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {item.mae_prevt2} m2
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td colSpan={6} className="font-bold">
                      Total LOTES VENDIDOS EL EDEN: {totalED}
                    </td>
                  </tr>
                </>
              )}

              {/* Datos de LOTES VENDIDOS MIRADOR DEL LAGO */}
              {inmueblesML.length > 0 && (
                <>
                  <tr>
                    <td colSpan={6} className="font-bold text-lg py-2">
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {fechaFormateada}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {item.cli_name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {item.cli_asesor}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {item.mae_codinv}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {item.cli_totalOferta.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {item.mae_prevt2} m2
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td colSpan={6} className="font-bold">
                      Total LOTES VENDIDOS MIRADOR DEL LAGO: {totalML}
                    </td>
                  </tr>
                </>
              )}

              {/* Datos de LOTES VENDIDOS EL MANANTIAL */}
              {inmueblesEM.length > 0 && (
                <>
                  <tr>
                    <td colSpan={6} className="font-bold text-lg py-2">
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {fechaFormateada}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {item.cli_name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {item.cli_asesor}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {item.mae_codinv}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {item.cli_totalOferta.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {item.mae_prevt2} m2
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td colSpan={6} className="font-bold">
                      Total LOTES VENDIDOS EL MANANTIAL: {totalEM}
                    </td>
                  </tr>
                </>
              )}
            </tbody>
            {/* Total General */}
            <tfoot>
              <tr className="bg-gray-100">
                <td colSpan={6} className="font-bold">
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
