import React from 'react';
import classes from './UserTabs.module.scss';

const Announcements = () => (
  <>
    <h2 className={classes.Title}>У вас пока нет объявлений</h2>
    <a href="/" className={classes.Link}>Добавить объявление</a>
  </>
);

export default Announcements;
