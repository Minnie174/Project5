import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Form, Input, DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import * as Yup from 'yup';
import { sub, parse, isDate } from 'date-fns';
import { RegistrationFields } from '../../types/auth-types';
import classes from './auth-forms.module.scss';

type Props = {
  onSubmit: (user: RegistrationFields) => void;
  clearServerErrors: () => void;
  serverErrors: string | null;
};

type StatusField = '' | 'success' | 'warning' | 'error' | 'validating' | undefined;

const dateFormat = 'dd.MM.yyyy';

const parseStringToDate = (value: any, originValue: any): any => {
  if (isDate(originValue)) return originValue;

  return parse(originValue, dateFormat, new Date());
};

const RegSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Минимум 2 символа')
    .max(12, 'Максимум 12 символов')
    .required('Обязательное поле'),
  lastName: Yup.string()
    .min(2, 'Минимум 2 символа')
    .max(12, 'Максимум 12 символов')
    .required('Обязательное поле'),
  password: Yup.string()
    .min(6, 'Минимум 6 символов')
    .max(20, 'Максимум 20 символов')
    .required('Обязательное поле'),
  dateOfBirth: Yup.date()
    .transform(parseStringToDate)
    .min(sub(new Date(), { years: 120 }), 'Извините, мы не нашли информацию о Вас в списке долгожителей планеты Земля')
    .max(sub(new Date(), { years: 16 }), 'Возможна регистрация с 16ти лет')
    .required('Обязательное поле'),
  email: Yup.string().email('Введите корректный e-mail').required('Обязательное поле'),
});

const RegistrationForm = ({ onSubmit, clearServerErrors, serverErrors }: Props) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
    },
    validationSchema: RegSchema,
    onSubmit,
  });
  const {
    values, errors, touched, setFieldTouched, setFieldValue, handleSubmit, handleChange, setErrors, isValid,
  } = formik;
  useEffect(() => {
    if (serverErrors) setErrors({ email: serverErrors });
  }, [serverErrors, setErrors]);
  const checkStatus = (field: 'email' | 'password' | 'firstName' | 'lastName' | 'dateOfBirth'): StatusField => {
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
        label="Имя"
        name="firstName"
        validateStatus={checkStatus('firstName')}
        hasFeedback
        help={touched.firstName && errors.firstName}
        tooltip={{ title: 'Укажите Ваше имя. Максимальная длина - 12 символов', icon: <ExclamationCircleOutlined /> }}
      >
        <Input
          onBlur={() => setFieldTouched('firstName')}
          placeholder="Иван"
          value={values.firstName}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        label="Фамилия"
        name="lastName"
        validateStatus={checkStatus('lastName')}
        hasFeedback
        help={touched.lastName && errors.lastName}
        tooltip={{ title: 'Укажите Вашу фамилию. Максимальная длина - 12 символов', icon: <ExclamationCircleOutlined /> }}
      >
        <Input
          onBlur={() => setFieldTouched('lastName')}
          placeholder="Иванов"
          value={values.lastName}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        label="Электронная почта"
        name="email"
        validateStatus={serverErrors ? 'error' : checkStatus('email')}
        hasFeedback
        help={touched.email && errors.email}
        tooltip={{ title: 'Укажите Ваш адрес электронной почты', icon: <ExclamationCircleOutlined /> }}
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
        validateStatus={checkStatus('password')}
        hasFeedback
        help={touched.password && errors.password}
        tooltip={{ title: 'Укажите пароль для аккаунта. Длина - от 6 до 20 символов', icon: <ExclamationCircleOutlined /> }}
      >
        <Input.Password
          onBlur={() => setFieldTouched('password')}
          placeholder="12345678abc"
          value={values.password}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        label="Дата рождения"
        name="dateOfBirth"
        validateStatus={checkStatus('dateOfBirth')}
        help={touched.dateOfBirth && errors.dateOfBirth}
        tooltip={{ title: 'Укажите Вашу дату рождения. Регистрация возможна с 16 лет!', icon: <ExclamationCircleOutlined /> }}
      >
        <DatePicker
          onBlur={() => setFieldTouched('dateOfBirth')}
          format={dateFormat.toUpperCase()}
          placeholder="01.01.2000"
          locale={locale}
          allowClear={false}
          onChange={(moment, string) => setFieldValue('dateOfBirth', string)}
        />
      </Form.Item>
      <Form.Item>
        <button className={classes.submitButton} type="submit" disabled={!isValid}>
          Регистрация
        </button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
