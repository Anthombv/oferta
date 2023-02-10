import { useState } from "react";
import { useFormik } from "formik";
import { Button, Container, Form, Col, Row } from "react-bootstrap";
import { useAuth } from "../../hooks/use_auth";
import { LoginData, ResponseData } from "../../types";
import HttpClient from "../../utils/http_client";
import { toast } from "react-toastify";

// login de la app
const Login = () => {
  // llama la funcion para iniciar sesion
  const { login } = useAuth();

  // valores del formulario
  const [initialValues, _setInitialValues] = useState<LoginData>({
    userName: "",
    password: "",
  });

  // envia los datos del formulario
  const onSubmit = async (formData: LoginData) => {
    const response = await HttpClient("/api/login", "POST", formData);
    if (response.success) {
      const data = response.data;
      login(data);
    } else {
      toast.warning(response.message);
    }
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
      <Container style={{ padding: "50px 0" }}>
        <Row className="justify-content-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            style={{ width: "120px", height: "120px" }}
            src="/logo.jpeg"
            alt=""
          />

          <h1 className="shadow-sm text-center" style={{ padding: "40px 0" }}>
            <a
              style={{
                fontSize: "40px",
                textDecoration: "none",
                color: "red",
              }}
              href="https://grupoancon.com/"
            >
              Solicitudes de Pago y Anticipos
            </a>
          </h1>
          <Col
            lg={6}
            md={6}
            sm={12}
            className="mt-5"
            style={{ padding: "0 40px" }}
          >
            <Form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={formik.handleSubmit}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-center">
                  Nombre de Usuario
                </Form.Label>
                <Form.Control
                  type="text"
                  name="userName"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  placeholder="Ingrese su usuario"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  placeholder="Ingrese su contraseña"
                />
              </Form.Group>

              <Button type="submit" className="border rounded hover:bg-red-400">
                Iniciar sesion
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <h6 className="mt-5 text-center text-secondary">
        Copyright © 2022 - Grupo ANCON
      </h6>
    </>
  );
};

export default Login;
