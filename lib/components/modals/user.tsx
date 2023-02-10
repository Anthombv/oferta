import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useAuth } from "../../hooks/use_auth";
import { User, ModalProps, ResponseData } from "../../types";
import LoadingContainer from "../loading_container";

const initialUser: User = {
  id: null,
  userName: "",
  password: "",
  email: "",
  role: 1,
};

interface Props extends ModalProps<User> {
  initialData?: User;
}

const UserModal = (props: Props) => {
  const { auth } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<User>(initialUser);

  const handleClose = () => {
    formik.resetForm({ values: initialUser });
    props.close();
  };

  // maneja los datos y comportamiento del formulario
  const formik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    validateOnBlur: true,
    validateOnChange: true,
    initialValues,
    onSubmit: async (formData: User) => {
      setLoading(true);
      await props.onDone(formData);
      setLoading(false);
      handleClose();
    },
  });

  useEffect(() => {
    if (props.initialData) setInitialValues(props.initialData);
  }, [props.initialData]);

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <LoadingContainer visible={loading} miniVersion>
          <Form.Group>
            <Form.Label className="ml-5"> Nombre de Usuario </Form.Label>

            <Form.Control
              type="text"
              placeholder="Nombre de Usuario"
              name="userName"
              onChange={formik.handleChange}
              value={formik.values.userName}
            />

            <Form.Label className="ml-5 mt-3"> Contraseña </Form.Label>

            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />

            <Form.Label className="ml-5 mt-3">E-mail</Form.Label>

            <Form.Control
              type="email"
              placeholder="Correo electrónico"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            <Form.Label className="ml-5 mt-3"> Tipo de Rol </Form.Label>

            <Form.Select
              aria-label="Default select role"
              name="role"
              onChange={formik.handleChange}
              value={formik.values.role}
              defaultValue={1}
            >
              <option value={1}>Solicitante</option>
              <option value={2}>Contabilidad</option>
              <option value={3}>Tesoreria</option>
            </Form.Select>
          </Form.Group>
        </LoadingContainer>

        <Button variant="outline-secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="outline-danger" type="submit">
          Guardar Usuario
        </Button>
      </Form>
    </>
  );
};
export default UserModal;
