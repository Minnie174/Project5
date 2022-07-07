import React from 'react';
import classes from './UserTabs.module.scss';

const Favourites = () => (
  <>
    <h2 className={classes.Title}>У вас пока нет ничего в избранном</h2>
    <a href="/" className={classes.Link}>Перейти к объявлениям</a>
  </>
);

export default Favourites;
