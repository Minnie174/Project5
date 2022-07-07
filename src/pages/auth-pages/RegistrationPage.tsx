import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Spin, message } from 'antd';
import { animateScroll as scroll } from 'react-scroll';
import RegistrationForm from '../../components/auth-forms/RegistrationForm';
import { mockAuthRequest } from '../../mock/auth-service';
import { RegistrationFields } from '../../types/auth-types';
import classes from './auth-pages.module.scss';

const RegistrationPage = () => {
  type FetchStatus = {
    sending: boolean;
    networkError: boolean;
    serverError: null | string;
  };

  const initialStatus: FetchStatus = { sending: false, networkError: false, serverError: null };
  const [fetchStatus, setFetchStatus] = useState(initialStatus);
  const navigate = useNavigate();

  const onSubmit = (user: RegistrationFields): void => {
    setFetchStatus({ ...initialStatus, sending: true });
    scroll.scrollToTop();
    // TODO: заменить mock на реальный метод api, когда будет доступен бэк
    mockAuthRequest(user, 'signup')
      .then((response) => {
        if (!response.success && response.error) setFetchStatus({ ...initialStatus, serverError: response.error.text });
        if (response.success) {
          message.success({ content: 'Регистрация успешна', duration: 2, style: { marginTop: '80px' } });
          navigate('/', { replace: true });
        }
      })
      .catch(() => {
        setFetchStatus({ ...initialStatus, networkError: true });
      });
  };

  if (fetchStatus.networkError) {
    return (
      <div className={classes.container}>
        <h2 className={classes.errorTitle}>Непредвиденная ошибка</h2>
        <p>Мы уже начали выяснять причину. Попробуйте перезагрузить страницу и попробовать снова</p>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <Spin spinning={fetchStatus.sending} tip="Отправка данных..." size="large">
        <h2 className={classes.title}>Регистрация аккаунта</h2>
        <RegistrationForm
          onSubmit={onSubmit}
          clearServerErrors={() => setFetchStatus({ ...initialStatus, serverError: null })}
          serverErrors={fetchStatus.serverError}
        />
        <div className={classes.checkRegistration}>
          <span>Уже зарегистрированы?</span>
          <Link to="/sign-in">Перейдите на страницу входа.</Link>
        </div>
      </Spin>
    </div>
  );
};

export default RegistrationPage;
