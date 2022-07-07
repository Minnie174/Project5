import React from 'react';
import classes from './UserTabs.module.scss';

const Purchases = () => (
  <>
    <h2 className={classes.Title}>У вас пока нет покупок</h2>
    <a href="/" className={classes.Link}>Перейти к объявлениям</a>
  </>
);

export default Purchases;
