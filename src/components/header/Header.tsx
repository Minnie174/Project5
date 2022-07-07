/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  const submenuData = [
    ['Обувь', 'Кроссовки', 'Ботинки', 'Кеды', 'Сандалии', 'Сланцы'],
    [
      'Верхняя одежда',
      'Бомберы',
      'Джинсовые куртки',
      'Анораки',
      'Парки',
      'Ветровки',
      'Пиджаки',
      'Кожаные куртки',
      'Плащи',
      'Жилеты',
      'Куртки',
    ],
    ['Верх', 'Cвитера', 'Кардиганы', 'Свитшоты', 'Олимпийки', 'Рубашки', 'Лонгсливы', 'Поло', 'Футболки', 'Худи'],
    ['Низ', 'Джинсы', 'Брюки', 'Шорты', 'Спортивные штаны', 'Плавки'],
    [
      'Аксессуары',
      'Наручные часы',
      'Шапки',
      'Шарфы',
      'Панамы',
      'Кепки',
      'Ремни',
      'Нижнее белье',
      'Носки',
      'Солнцезащитные очки',
      'Сумки',
      'Рюкзаки',
      'Кошельки',
      'Другое',
    ],
  ];

  const submenuDataSecondary = [
    ['Обувь', 'Кроссовки', 'Ботинки', 'Кеды', 'Сандалии', 'Сланцы'],
    [
      'Верхняя одежда',
      'Бомберы',
      'Джинсовые куртки',
      'Анораки',
      'Парки',
      'Ветровки',
      'Пиджаки',
      'Кожаные куртки',
      'Плащи',
      'Жилеты',
      'Куртки',
    ],
    ['Верх', 'Cвитера', 'Кардиганы', 'Свитшоты', 'Олимпийки', 'Рубашки', 'Лонгсливы', 'Поло', 'Футболки', 'Худи', 'Платья'],
    ['Низ', 'Джинсы', 'Брюки', 'Шорты', 'Спортивные штаны', 'Плавки', 'Юбки'],
    [
      'Аксессуары',
      'Наручные часы',
      'Шапки',
      'Шарфы',
      'Панамы',
      'Кепки',
      'Ремни',
      'Нижнее белье',
      'Носки',
      'Солнцезащитные очки',
      'Сумки',
      'Рюкзаки',
      'Кошельки',
      'Другое',
    ],
  ];

  const getSubmenu = (data: string[][]) => (
    <>
      <div className={styles.submenu}>
        <div className={styles.columnWrapper}>
          {data.map((list, i) => (
            <ul key={i} className={styles.column}>
              {list.map((listItem, j) => (
                <li key={j}>
                  <Link to="/search">
                    {listItem}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className={styles.blackScreen} />
    </>
  );

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.content}>
          <Link to="/">
            <div className={styles.logo} />
          </Link>
          <div className={styles.search}>
            <form>
              <input placeholder="Поиск" />
            </form>
          </div>
          <div className={styles.links}>
            <div className={styles.linkWithSubmenu}>
              <Link to="/search?sex=men">Мужское</Link>
              {getSubmenu(submenuData)}
            </div>
            <div className={styles.linkWithSubmenu}>
              <Link to="/search?sex=women">Женское</Link>
              {getSubmenu(submenuDataSecondary)}
            </div>
            <Link to="/compilations/black-label">black label</Link>
            <Link to="/how-secure-deal-works">Безопасная сделка</Link>
          </div>
          <div className={styles.buttons}>
            <Link to="/add-item">Продать</Link>
            <Link to="/sign-in">Войти</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
