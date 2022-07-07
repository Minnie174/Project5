import React from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react/swiper-react.js';

import Slider from '../slider/Slider';
import ProductCard from '../../types/ProductCard';

import styles from './ItemsList.module.scss';

type ItemsListProps = {
  title: string
};

const ItemsList = ({ title }: ItemsListProps) => {
  const itemsData: ProductCard[] = [
    {
      id: 1,
      itemName: 'Nike',
      itemModel: 'Jordan 4 Red Thunder',
      itemSize: '7 US',
      photoUrl: [
        {
          id: 1,
          url: 'https://static-1.themarket.io/rk21XVaAF/670-image.jpg',
        },
        {
          id: 2,
          url: 'https://static-1.themarket.io/H1liymVaCK/670-image.jpg',
        },
      ],
      price: 20000,
      likesCount: 6,
      created: '3 дня назад',
    },
    {
      id: 2,
      itemName: 'Nike x Supreme',
      itemModel: 'Air Force 1 low',
      itemSize: '8 US',
      photoUrl: [
        {
          id: 1,
          url: 'https://static-1.themarket.io/B1lIN75fut/670-image.jpg',
        },
        {
          id: 2,
          url: 'https://static-1.themarket.io/S1IEXcMuY/670-image.jpg',
        },
      ],
      price: 18182,
      likesCount: 24,
      created: '3 месяца назад',
    },
    {
      id: 3,
      itemName: 'Nike',
      itemModel: 'Air Jordan 1 High Hand Crafted',
      itemSize: '9 US',
      photoUrl: [
        {
          id: 1,
          url: 'https://static-1.themarket.io/rJkSSzbJ9/670-image.jpg',
        },
        {
          id: 2,
          url: 'https://static-1.themarket.io/BJ8BBzZkq/670-image.jpg',
        },
      ],
      price: 20997,
      likesCount: 2,
      created: '7 часов назад',
    },
  ];

  const renderItems = (data: ProductCard[]) => (data.map((item) => {
    const {
      id,
      itemName,
      itemModel,
      itemSize,
      photoUrl,
      price,
      likesCount,
      created,
    } = item;

    const itemUrl = `/items/${itemName} ${itemModel}`.replace(/ /g, '-');

    return (
      <li key={String(id)} className={styles.item}>
        <Link to={itemUrl}>
          <div className={styles.photos}>
            <Slider>
              {photoUrl.map(({ id: key, url }) => (
                <SwiperSlide key={key}>
                  <img src={url} alt={`Product ${key}`} />
                </SwiperSlide>
              ))}
            </Slider>
          </div>
        </Link>
        <div className={styles.checkbox}>
          <label>
            <input type="checkbox" />
            <div className={styles.checkboxCustom} />
            {likesCount}
          </label>
        </div>
        <div className={styles.created}>
          <div className={styles.smallShield} />
          <div className={styles.boostIcon} />
          <div>{created}</div>
        </div>
        <div className={styles.text}>
          <Link to={itemUrl}>
            <strong>{itemName}</strong>
          </Link>

          {itemModel}

          {itemSize}

          <strong>{`${price} руб.`}</strong>
        </div>
      </li>
    );
  }));

  return (
    <div className={styles.itemListContainer}>
      <h1 className={styles.itemListHeader}>
        <Link to="/search?sex=men">{title}</Link>
      </h1>
      <ul className={styles.itemsList}>
        {renderItems([...itemsData, ...itemsData])}
      </ul>
    </div>
  );
};

export default ItemsList;
