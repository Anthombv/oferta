/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import { useFormik } from "formik";
import { useAuth } from "../../hooks/use_auth";
import { LoginData } from "../../types";
import HttpClient from "../../utils/http_client";
import { toast } from "react-toastify";
import LoadingContainer from "../../components/loading_container";
import "../styles/Home.module.css";

// login de la app
const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  // llama la funcion para iniciar sesion
  const { login } = useAuth();

  // valores del formulario
  const [initialValues, _setInitialValues] = useState<LoginData>({
    userName: "",
    password: "",
  });

  // envia los datos del formulario
  const onSubmit = async (formData: LoginData) => {
    setLoading(true);
    const response = await HttpClient("/api/login", "POST", "", -1, formData);
    if (response.success) {
      const data = response.data;
      login(data);
    } else {
      toast.warning(response.message);
    }
    setLoading(false);
  };

  // maneja los datos y comportamiento del formulario
  const formik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    validateOnBlur: true,
    validateOnChange: true,
    initialValues,
    onSubmit,
  });

  return (
    <>
      <title>Inicio de sesión</title>
      <LoadingContainer visible={loading} miniVersion>
        <section className="login bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              <img className="w-20 h-20 mr-2" src="/logoAncon.png" alt="logo" /> <h2>ANCON Grupo Inmobiliario</h2>
            </div>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="box p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Iniciar Sesión
                </h1>
                <form
                  onSubmit={formik.handleSubmit}
                  className="space-y-4 md:space-y-6"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Nombre de Usuario
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                      name="userName"
                      value={formik.values.userName}
                      onChange={formik.handleChange}
                      placeholder="Ingrese su usuario"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      placeholder="Ingrese su contraseña"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </LoadingContainer>
    </>
  );
};

export default Login;
