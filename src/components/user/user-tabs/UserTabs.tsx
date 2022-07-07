import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Announcements from './Announcements';
import Favourites from './Favourites';
import Purchases from './Purchases';
import Sales from './Sales';
import SettingsTab from './settings-tab/SettingsTab';
import classes from './UserTabs.module.scss';

const setActive = ({ isActive }: any): string => (isActive ? 'user-link-active' : '');

const UserTabs = () => (
  <>
    <ul className={classes.UserNav}>
      <li>
        <NavLink to="announcements" className={setActive}>
          Объявления (0)
        </NavLink>
      </li>
      <li>
        <NavLink to="favourites" className={setActive}>
          Избранное
        </NavLink>
      </li>
      <li>
        <NavLink to="purchases" className={setActive}>
          Покупки
        </NavLink>
      </li>
      <li>
        <NavLink to="sales" className={setActive}>
          Продажи
        </NavLink>
      </li>
      <li>
        <NavLink to="settings" className={setActive}>
          Настройки
        </NavLink>
      </li>
    </ul>
    <Routes>
      <Route path="announcements" element={<Announcements />} />
      <Route path="favourites" element={<Favourites />} />
      <Route path="purchases" element={<Purchases />} />
      <Route path="sales" element={<Sales />} />
      <Route path="settings" element={<SettingsTab />} />
    </Routes>
  </>
);

export default UserTabs;
