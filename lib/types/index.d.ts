import { FormikProps, FormikErrors, FormikTouched } from "formik";

export type AuthContextProps = {
  auth: User | null;
  login: (userData: User) => void;
  logout: () => void;
};

export type ResponseData = {
  message?: string;
  data?: any;
  success: boolean;
};

export type LoginData = {
  userName: string;
  password: string;
};

export type UserRole = 0 | 1 | 2 | 3;

export type User = {
  id?: string;
  userName: string;
  password?: string;
  name: string;
  email: string;
  department: string;
  identificationCard: string;
  dateBirth: string;
  age: number;
  dateAdmission: string;
  position: string;
  bussines: string;
  role: UserRole;
  cellphone: string;
  yearsWorked: string;
  holidays: string;
  discount: string;
  count: string;
};

export type Auditory = {
  id?: string;
  date: string;
  user: string;
  action: string;
};

export interface ModalProps<T> {
  visible: boolean;
  close: () => void;
  onDone?: (data?: T) => void | Promise<void>;
}

export interface FormikComponentProps<T = Element> extends FormikProps<T> {
  formik: {
    values: T;
    handleChange: {
      (e: ChangeEvent<any>): void;
      <T_1 = string | ChangeEvent<T>>(field: T_1): T_1 extends ChangeEvent<T>
        ? void
        : (e: string | ChangeEvent<T>) => void;
    };
    touched: FormikTouched<T>;
    errors: FormikErrors<T>;
    setFieldValue: (
      field: string,
      value: T,
      shouldValidate?: boolean
    ) => Promise<void> | Promise<FormikErrors<T>>;
    setFieldError: (field: string, value: string) => void;
  };
}
