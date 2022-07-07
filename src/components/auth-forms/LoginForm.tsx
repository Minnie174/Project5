import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { Form, Input } from 'antd';
import * as Yup from 'yup';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { LoginFields } from '../../types/auth-types';
import classes from './auth-forms.module.scss';

type Props = {
  onSubmit: (user: LoginFields) => void;
  clearServerErrors: () => void;
  serverErrors: string | null;
};

type StatusField = '' | 'success' | 'warning' | 'error' | 'validating' | undefined;

const RegSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Минимум 6 символов')
    .max(20, 'Максимум 20 символов')
    .required('Обязательное поле'),
  email: Yup.string().email('Введите корректный e-mail').required('Обязательное поле'),
});

const LoginForm = ({ onSubmit, serverErrors, clearServerErrors }: Props) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: RegSchema,
    onSubmit,
  });
  const {
    values, errors, touched, setFieldTouched, handleSubmit, handleChange, setErrors, isValid,
  } = formik;
  useEffect(() => {
    if (serverErrors) setErrors({ email: serverErrors, password: serverErrors });
  }, [serverErrors, setErrors]);
  const checkStatus = (field: 'email' | 'password'): StatusField => {
    if (errors[field] && touched[field]) return 'error';

    return touched[field] ? 'success' : '';
  };

  return (
    <Form
      onFinish={handleSubmit}
      layout="vertical"
      hideRequiredMark
    >
      <Form.Item
        label="Электронная почта"
        name="email"
        validateStatus={serverErrors ? 'error' : checkStatus('email')}
        hasFeedback
        help={touched.email && errors.email}
        tooltip={{ title: 'Введите адрес электронной почты, указанный при регистрации', icon: <ExclamationCircleOutlined /> }}
      >
        <Input
          onBlur={() => setFieldTouched('email')}
          placeholder="exapmle@email.com"
          value={values.email}
          onChange={(evt) => {
            handleChange(evt);
            clearServerErrors();
          }}
        />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        validateStatus={serverErrors ? 'error' : checkStatus('password')}
        hasFeedback
        help={touched.password && errors.password}
        tooltip={{ title: 'Введите пароль, указанный при регистрации', icon: <ExclamationCircleOutlined /> }}
      >
        <Input.Password
          onBlur={() => setFieldTouched('password')}
          placeholder="12345678abc"
          value={values.password}
          onChange={(evt) => {
            handleChange(evt);
            clearServerErrors();
          }}
        />
      </Form.Item>
      <Form.Item>
        <button className={classes.submitButton} type="submit" disabled={!isValid}>
          Вход
        </button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
