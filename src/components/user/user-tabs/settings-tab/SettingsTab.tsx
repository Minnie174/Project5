import React from 'react';
import uniqid from 'uniqid';
import SettingsItem from './SettingsItem';

const data = [
  {
    id: uniqid(),
    title: 'Личные данные',
    table: [
      {
        id: uniqid(),
        title: 'Имя',
        descr: 'Александр Невский',
        isEdit: false,
      },
      {
        id: uniqid(),
        title: 'Электронная почта для оповещений',
        descr: '',
        isEdit: true,
      },
      {
        id: uniqid(),
        title: 'Телефон',
        descr: '',
        isEdit: true,
      },
      {
        id: uniqid(),
        title: 'Телефон для оповещений',
        descr: '',
        isEdit: true,
      },
      {
        id: uniqid(),
        title: 'ВКонтакте',
        descr: '',
        isEdit: true,
      },
    ],
  },
  {
    id: uniqid(),
    title: 'Данные продавца',
    table: [
      {
        id: uniqid(),
        title: 'Привязанная карта CloudPayments',
        descr: '',
        isEdit: true,
      },
      {
        id: uniqid(),
        title: 'Привязанная карта Moneta',
        descr: '',
        isEdit: true,
      },
    ],
  },
  {
    id: uniqid(),
    title: 'Данные покупателя',
    table: [
      {
        id: uniqid(),
        title: 'Адрес доставки',
        descr: '',
        isEdit: true,
      },

    ],
  },
];

const SettingsTab = () => (
  <>
    {
      data.map((item) => (
        <SettingsItem title={item.title} table={item.table} key={item.id} />
      ))
    }
  </>
);

export default SettingsTab;
