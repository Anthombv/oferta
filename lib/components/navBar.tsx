/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from "../hooks/use_auth";

const Navbar = () => {
  const { logout, auth } = useAuth();
  const [navbar, setNavbar] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };
  return (
    <>
      <nav className="menu w-full bg-gray-800">
        <div className="justify-between px-4 mx-auto lg:max-w-9xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3">
              <img
                className="logo"
                src="http://grupoancon.com/wp-content/uploads/2020/07/logo-empresa-slide-1-min.png"
                alt="logo"
              />
              <p className="user-title text-white">
                Bienvenido/a, {`${auth?.name}`}
              </p>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="options items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <div>
                  <ul>
                    <li className="text-white">
                      <Link href="/" onClick={handleClick}>
                        INICIO
                      </Link>
                    </li>
                  </ul>

                  {isLoading && (
                    <div className="overlay">
                      <div className="loading-container">
                        <img
                          className="loading-gif"
                          src="/loader-colors.gif"
                          alt="loading-gif"
                          width="580"
                          height="435"
                        />
                      </div>
                    </div>
                  )}

                  <style jsx>{`
                    .overlay {
                      position: fixed;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100%;
                      background-color: white;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      z-index: 9999;
                    }

                    .loading-container {
                      text-align: center;
                    }
                  `}</style>
                </div>
                <div>
                  <ul>
                    <li className="text-white">
                      <Link href="/jardin" onClick={handleClick}>
                        EL JARDÍN
                      </Link>
                    </li>
                  </ul>

                  {isLoading && (
                    <div className="overlay">
                      <div className="loading-container">
                        <img
                          className="loading-gif"
                          src="/loader-colors.gif"
                          alt="loading-gif"
                          width="580"
                          height="435"
                        />
                      </div>
                    </div>
                  )}

                  <style jsx>{`
                    .overlay {
                      position: fixed;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100%;
                      background-color: white;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      z-index: 9999;
                    }

                    .loading-container {
                      text-align: center;
                    }
                  `}</style>
                </div>
                <div>
                  <ul>
                    <li className="text-white">
                      <Link href="/eden" onClick={handleClick}>
                        EL EDÉN
                      </Link>
                    </li>
                  </ul>

                  {isLoading && (
                    <div className="overlay">
                      <div className="loading-container">
                        <img
                          className="loading-gif"
                          src="/loader-colors.gif"
                          alt="loading-gif"
                          width="580"
                          height="435"
                        />
                      </div>
                    </div>
                  )}

                  <style jsx>{`
                    .overlay {
                      position: fixed;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100%;
                      background-color: white;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      z-index: 9999;
                    }

                    .loading-container {
                      text-align: center;
                    }
                  `}</style>
                </div>
                <div>
                  <ul>
                    <li className="text-white">
                      <Link href="/mirador" onClick={handleClick}>
                        EL MIRADOR
                      </Link>
                    </li>
                  </ul>

                  {isLoading && (
                    <div className="overlay">
                      <div className="loading-container">
                        <img
                          className="loading-gif"
                          src="/loader-colors.gif"
                          alt="loading-gif"
                          width="580"
                          height="435"
                        />
                      </div>
                    </div>
                  )}

                  <style jsx>{`
                    .overlay {
                      position: fixed;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100%;
                      background-color: white;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      z-index: 9999;
                    }

                    .loading-container {
                      text-align: center;
                    }
                  `}</style>
                </div>
                <div>
                  <ul>
                    <li className="text-white">
                      <Link href="/manantial" onClick={handleClick}>
                        EL MANANTIAL
                      </Link>
                    </li>
                  </ul>

                  {isLoading && (
                    <div className="overlay">
                      <div className="loading-container">
                        <img
                          className="loading-gif"
                          src="/loader-colors.gif"
                          alt="loading-gif"
                          width="580"
                          height="435"
                        />
                      </div>
                    </div>
                  )}

                  <style jsx>{`
                    .overlay {
                      position: fixed;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100%;
                      background-color: white;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      z-index: 9999;
                    }

                    .loading-container {
                      text-align: center;
                    }
                  `}</style>
                </div>
                <li>
                  <button
                    className="close-session inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={logout}
                  >
                    Cerrar Sesión
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
