import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useAuth } from "../../hooks/use_auth";
import { ModalProps, User } from "../../types";
import LoadingContainer from "../loading_container";

const initialUser: User = {
  id: null,
  userName: "",
  password: "",
  email: "",
  department: "",
  role: 1,
  name: "",
  identificationCard: "",
  dateBirth: "",
  age: 0,
  dateAdmission: "",
  position: "",
  cellphone: "",
  holidays: "",
  yearsWorked: "",
  bussines: "",
  discount: "",
  count: "",
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

  //Calcula la edad de una persona
  useEffect(() => {
    let fechaActual: Date = new Date();
    let fechaNacimiento: Date = new Date(formik.values?.dateBirth);
    let anios: number =
      fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    fechaNacimiento.setFullYear(fechaNacimiento.getFullYear());

    if (fechaActual < fechaNacimiento) {
      --anios;
    }
    formik.setFieldValue("age", anios);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values?.dateBirth, formik.values.age]);

  //Calcula los años del trabajador
  useEffect(() => {
    let fechaIngreso = new Date(formik.values?.dateAdmission);
    let fechaActual = new Date();
    let vacaciones = 0;
    let anios: number = fechaActual.getFullYear() - fechaIngreso.getFullYear();
    fechaIngreso.setFullYear(fechaIngreso.getFullYear());

    if (fechaActual < fechaIngreso) {
      --anios;
    }
    if (anios <= 5) {
      vacaciones = 15 - parseInt(formik.values.discount) + parseInt(formik.values.count);
    } else if (anios === 6) {
      vacaciones = 15 + 1 - parseInt(formik.values.discount) + parseInt(formik.values.count);
    } else if (anios === 7) {
      vacaciones = 15 + 2 - parseInt(formik.values.discount) + parseInt(formik.values.count);
    } else if (anios === 8) {
      vacaciones = 15 + 3 - parseInt(formik.values.discount) + parseInt(formik.values.count);
    } else if (anios === 9) {
      vacaciones = 15 + 4 - parseInt(formik.values.discount) + parseInt(formik.values.count);
    } else if (anios === 10) {
      vacaciones = 15 + 5 - parseInt(formik.values.discount) + parseInt(formik.values.count);
    } else if (anios === 11) {
      vacaciones = 15 + 6 - parseInt(formik.values.discount) + parseInt(formik.values.count);
    } else if (anios === 12) {
      vacaciones = 15 + 7 - parseInt(formik.values.discount) + parseInt(formik.values.count);
    } else if (anios === 13) {
      vacaciones = 15 + 8 - parseInt(formik.values.discount) + parseInt(formik.values.count);
    } else if (anios === 14) {
      vacaciones = 15 + 9 - parseInt(formik.values.discount) + parseInt(formik.values.count);
    } else if (anios === 15) {
      vacaciones = 15 + 10 - parseInt(formik.values.discount) + parseInt(formik.values.count);
    } else if (anios === 16) {
      vacaciones = 15 + 11 - parseInt(formik.values.discount) + parseInt(formik.values.count);
    } else if (anios === 17) {
      vacaciones = 15 + 12 - parseInt(formik.values.discount) + parseInt(formik.values.count);
    } else if (anios === 18) {
      vacaciones = 15 + 13 - parseInt(formik.values.discount) + parseInt(formik.values.count);
    } else if (anios === 19) {
      vacaciones = 15 + 14 - parseInt(formik.values.discount) + parseInt(formik.values.count);
    } else if (anios >= 20) {
      vacaciones = 15 + 15 - parseInt(formik.values.discount) + parseInt(formik.values.count);
    }

    formik.setFieldValue("yearsWorked", anios);
    formik.setFieldValue("holidays", vacaciones);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    formik.values.dateAdmission,
    formik.values.yearsWorked,
    formik.values.holidays,
    formik.values.discount,
    formik.values.count,
  ]);

  useEffect(() => {
    if (props.initialData) setInitialValues(props.initialData);
  }, [props.initialData]);

  return (
    <>
      <Modal show={props.visible} onHide={handleClose}>
        <Form onSubmit={formik.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>
              Crear Nuevo Usuario
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LoadingContainer visible={loading} miniVersion>
              <Form.Group>
                <Form.Label>Nombre del Trabajador</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Nombre del Trabajador"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />

                <Form.Label className="mt-3">Cedula o RUC</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="CI o RUC"
                  name="identificationCard"
                  onChange={formik.handleChange}
                  value={formik.values.identificationCard}
                />

                <Form.Label className="mt-3">Fecha de nacimiento</Form.Label>

                <Form.Control
                  type="date"
                  id="dateBirth"
                  name="dateBirth"
                  value={formik.values?.dateBirth}
                  onChange={formik.handleChange}
                />

                <Form.Label className="mt-3">Edad</Form.Label>

                <Form.Control
                  className="noscroll"
                  type="number"
                  name="age"
                  onChange={formik.handleChange}
                  value={formik.values.age}
                />

                <Form.Label className="mt-3">Nombre de Usuario</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Nombre de Usuario"
                  name="userName"
                  onChange={formik.handleChange}
                  value={formik.values.userName}
                />

                <Form.Label className="mt-3">Contraseña</Form.Label>

                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />

                <Form.Label className="mt-3">E-mail</Form.Label>

                <Form.Control
                  type="email"
                  placeholder="Correo electrónico"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />

                <Form.Label className="mt-3">Telefono celular</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Ingrese el numero del trabajador"
                  name="cellphone"
                  onChange={formik.handleChange}
                  value={formik.values.cellphone}
                />

                <Form.Label className="mt-3">Empresa</Form.Label>

                <Form.Select
                  aria-label="Default select bussines"
                  name="bussines"
                  onChange={formik.handleChange}
                  value={formik.values?.bussines ?? ""}
                >
                  <option>Seleccione una empresa</option>
                  <option value="IC">IC</option>
                  <option value="IG">IG</option>
                </Form.Select>

                <Form.Label className="mt-3">Departamento</Form.Label>

                <Form.Select
                  aria-label="Default select department"
                  name="department"
                  onChange={formik.handleChange}
                  value={formik.values?.department ?? ""}
                >
                  <option>Seleccione un Departamento</option>
                  <option value="CONTABILIDAD">CONTABILIDAD</option>
                  <option value="GERENCIA">GERENCÍA</option>
                  <option value="GESTION Y CREDITO">GESTIÓN Y CRÉDITO</option>
                  <option value="MARKETING">MARKETING</option>
                  <option value="MENSAJERIA">MENSAJERÍA</option>
                  <option value="PRODUCCION">PRODUCCIÓN</option>
                  <option value="RECEPCION">RECEPCIÓN</option>
                  <option value="SISTEMAS">SISTEMAS</option>
                  <option value="SOCIOS">SOCIOS</option>
                  <option value="VENTAS">VENTAS</option>
                </Form.Select>

                <Form.Label className="mt-3">Cargo ocupacional</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Cargo que ocupa"
                  name="position"
                  onChange={formik.handleChange}
                  value={formik.values.position}
                />

                <Form.Label className="mt-3">Fecha de ingreso</Form.Label>

                <Form.Control
                  type="date"
                  name="dateAdmission"
                  onChange={formik.handleChange}
                  value={formik.values.dateAdmission}
                />

                <Form.Label className="mt-3">Años trabajados</Form.Label>

                <Form.Control
                  type="text"
                  name="yearsWorked"
                  onChange={formik.handleChange}
                  value={formik.values.yearsWorked ?? ""}
                />

                <Form.Label className="mt-3">Dias de Vacaciones</Form.Label>

                <Form.Control
                  type="text"
                  name="holidays"
                  onChange={formik.handleChange}
                  value={formik.values.holidays}
                />

                <Form.Label className="mt-3">Dias descontados</Form.Label>

                <Form.Control
                  type="text"
                  name="discount"
                  onChange={formik.handleChange}
                  value={formik.values.discount}
                />

                <Form.Label className="mt-3">Dias aumentados</Form.Label>

                <Form.Control
                  type="text"
                  name="count"
                  onChange={formik.handleChange}
                  value={formik.values.count}
                />

                <Form.Label className="mt-3">Tipo de Rol</Form.Label>

                <Form.Select
                  aria-label="Default select role"
                  name="role"
                  onChange={formik.handleChange}
                  value={formik.values.role}
                  defaultValue={1}
                >
                  <option value={1}>Solicitante</option>
                  <option value={2}>Receptor</option>
                </Form.Select>
              </Form.Group>
            </LoadingContainer>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="outline-danger" type="submit">
              Guardar Usuario
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
export default UserModal;
