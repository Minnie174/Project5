import React from 'react';
import classes from './UserTabs.module.scss';

const Sales = () => (
  <>
    <h2 className={classes.Title}>У вас пока нет продаж</h2>
    <a href="/" className={classes.Link}>Добавить объявление</a>
  </>
);

export default Sales;
