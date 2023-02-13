import axios from "axios";
import Navbar from "../../../lib/components/navBar";

export const getServerSideProps = async () => {
  try {
    const response = await axios.get(
      "https://oferta.grupoancon.com/api/histories/eden"
    );
    return {
      props: {
        lotesED: response.data ? response.data.data : [],
      },
    };
  } catch (e) {
    return {
      props: {
        lotesED: [],
      },
    };
  }
};

const LotesVendidosED = ({ lotesED }) => {
  return (
    <>
      <title>Lotes Vendidos | EL EDEN</title>
      <link
        rel="icon"
        href="https://www.grupoancon.com/wp-content/uploads/2020/07/logo.svg"
        sizes="32x32"
      />
      <Navbar />
      <div className="w-full min-h-screen m-auto absolute">
        <p className="text-center xl:text-4xl md:text-3xl text-2xl leading-normal font-semibold text-black my-4">
          Lotes Vendidos EL EDEN
        </p>
        <div className="relative overflow-x-auto sm:rounded-lg w-11/12 xl:w-1/2 mx-auto">
          <table className="w-full text-xs xl:text-sm md:text-sm text-center text-gray-500 dark:text-gray-400 [&>tbody>*:nth-child(odd)]:bg-white [&>tbody>*:nth-child(even)]:bg-gray-100">
            <thead className="text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-700 w-full">
              <tr className="text-center">
                <th className="xl:px-6 xl:py-3 px-3 py-1">Cliente</th>
                <th className="xl:px-6 xl:py-3 px-2 py-1">Lote</th>
                <th className="xl:px-6 xl:py-3 px-2 py-1">Precio</th>
                <th className="xl:px-6 xl:py-3 px-2 py-1">Estado</th>
              </tr>
            </thead>
            <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              {lotesED.map((ofertED, index) => {
                return (
                  <tr className="text-center" key={index}>
                    <td className="xl:px-6 xl:py-3 px-3 py-1">
                      {ofertED.cli_name}
                    </td>
                    <td className="xl:px-6 xl:py-3 px-2 py-1">{ofertED.mae_codinv}</td>
                    <td className="xl:px-6 xl:py-3 px-2 py-1">{ofertED.cli_totalOferta.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}</td>
                    <td className="xl:px-6 xl:py-3 px-2 py-1">{ofertED.cli_state}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LotesVendidosED;
