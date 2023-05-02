/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useFormik } from "formik";
import { useAuth } from "../../hooks/use_auth";
import { LoginData } from "../../types";
import HttpClient from "../../utils/http_client";
import { toast } from "react-toastify";
import LoadingContainer from "../../components/loading_container";

// login de la app
function Login() {
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
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="move-side flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

            <div className="login-box w-full rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="box p-6 space-y-4 md:space-y-6 sm:p-12">
                <img className="icon-login" src="http://grupoancon.com/wp-content/uploads/2023/05/icon-app-oferta-1.svg" alt="logo" />
                <h1 className="text-xl leading-tight tracking-tight md:text-2xl">
                  ¡Empecemos!<br/>Ingrese sus datos
                </h1>
                <form onSubmit={formik.handleSubmit} className="form-login space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-white">
                      Nombre de Usuario
                    </label>
                    <input className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                      name="userName"
                      value={formik.values.userName}
                      onChange={formik.handleChange}
                      placeholder="Ingrese su usuario o correo..." />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium dark:text-white">
                      Contraseña
                    </label>
                    <input type="password" name="password"
                      className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      placeholder="Ingrese su contraseña..." />
                  </div>
                  <button type="submit"
                    className="boton-enviar w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Inicia sesión
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div className="footer">
          <div className="linkcompany">
            <p>Una Aplicación de: <a href="https://grupoancon.com/" target="_blank" rel="noreferrer"><img src="http://grupoancon.com/wp-content/uploads/2020/07/logo-empresa-slide-1-min.png" alt="logo" /></a></p>
          </div>
        </div>
        <div className="banner">
            <div className="logo-title flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              <img className="logo-login" src="http://grupoancon.com/wp-content/uploads/2020/07/logo-empresa-slide-1-min.png" alt="logo" />
              <h2 className="text-login">Sistema de Gestión de <strong>Ofertas</strong></h2>
            </div>
            <div className="copyright">
              <span>© 2023 <a href="https://grupoancon.com/" target="_blank" rel="noreferrer"><strong>Grupo ANCON Inmobiliario</strong></a>. Todos los derechos reservados. Diseñador por <a href="https://dex-studio.com/" target="_blank" rel="noreferrer"><strong>DEX STUDIOS</strong></a></span>
            </div>
        </div>
      </LoadingContainer>
    </>
  );
}

export default Login;
