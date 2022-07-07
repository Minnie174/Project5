import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react/swiper-react.js';

import Feedback from '../../components/feedback/Feedback';
import ItemsList from '../../components/items-list/ItemsList';
import Slider from '../../components/slider/Slider';
import Modal from '../../components/modal/Modal';
import UserAvatar from '../../components/ui/user-avatar/UserAvatar';

import styles from './ItemPage.module.scss';

const ItemPage = () => {
  const itemData = {
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
        url: 'https://static-1.themarket.io/SkDlNvfJ9/670-image.jpg',
      },
      {
        id: 3,
        url: 'https://static-1.themarket.io/Hy5-utMJq/670-image.jpg',
      },
    ],
    price: 20000,
    likesCount: 6,
    created: '3 дня назад',
    description: 'Новые, 10/10',
    location: 'Уфа, Россия',
    delivery: { mail: 550, personal: 0 },
    condition: 'Новая с биркой',
  };

  const {
    id: itemId,
    itemName,
    itemModel,
    itemSize,
    photoUrl,
    price,
    likesCount,
    created,
    description,
    location,
    delivery: { mail, personal },
    condition,
  } = itemData;

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className={styles.itemContainer}>
      <div className={styles.breadcrumbs}>
        <Link to="/search?sex=men">Мужской</Link>
        {' / '}
        <Link to="/search?sex=men&concreteCategoryIds=3,4,5,6,7">Обувь</Link>
        {' / '}
        <Link to="/search?sex=men&concreteCategoryIds=3">Кроссовки</Link>
      </div>
      <div className={styles.item}>
        <div className={styles.flexContainer}>
          <div>
            <h1>
              {itemName}
              <br />
              <span>{itemModel}</span>
            </h1>
          </div>
          <div>
            <div className={styles.price}>
              <div>{`${price} руб.`}</div>
              <span>{itemSize}</span>
            </div>
          </div>
        </div>
        <div className={styles.created}>{created}</div>
        <div className={styles.flexContainer}>
          <div className={styles.photos}>
            <Slider>
              {photoUrl.map(({ id: key, url }) => (
                <SwiperSlide key={key} onClick={() => setModalVisible(true)}>
                  <img src={url} alt={`Product ${key}`} />
                </SwiperSlide>
              ))}
            </Slider>
            <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
              <Slider keyboard={{ enabled: true }}>
                {photoUrl.map(({ id: key, url }) => (
                  <SwiperSlide key={key}>
                    <img src={url} alt={`Product ${key}`} />
                  </SwiperSlide>
                ))}
              </Slider>
            </Modal>
          </div>
          <div>
            <div className={styles.buttons}>
              <Link to={`/items/buy/${itemId}`}>
                <button type="button" className={styles.buyButton}>Купить</button>
              </Link>
              <Link to="/how-secure-deal-works" className={styles.secureDeal}>
                <div className={styles.smallShield} />
                <div>Безопасная сделка</div>
              </Link>
              <Link to="/messages/{sellerId}">
                <button type="button">Связаться с продавцом</button>
              </Link>
              <div className={styles.checkbox}>
                <label>
                  <input type="checkbox" />
                  <div className={styles.checkboxCustom} />
                  Сохранить
                </label>
                <div className={styles.checkboxDetails}>{`${likesCount} человек хотят эту вещь`}</div>
              </div>
              <div className={styles.socials}>
                <span>Поделиться:</span>
                <div className={styles.iconVk} />
                <div className={styles.iconTwitter} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <ul className={styles.description}>
            <li>
              <strong>Описание вещи от продавца</strong>
              <br />
              {description}
            </li>
            <li>
              <strong>Откуда</strong>
              <br />
              {location}
            </li>
            <li>
              <strong>Доставка</strong>
              <div className={styles.delivery}>
                <div>
                  Почта:
                  <br />
                  Личная встреча:
                </div>
                <div>
                  <strong>
                    {`${mail} руб.`}
                    <br />
                    {personal ? `${personal} руб.` : 'Бесплатно'}
                  </strong>
                </div>
              </div>
            </li>
            <li>
              <strong>Состояние</strong>
              <br />
              {condition}
            </li>
          </ul>
          <div className={styles.contentBlock}>
            <div className={styles.sellerHeader}>
              <div className={styles.sellerName}>
                <h2>
                  <Link to="/users/{sellerId}">Продавец Дмитрий</Link>
                </h2>
                На themarket с окт. 2018
              </div>
              <Link to="/users/{sellerId}" className={styles.sellerImg}>
                <UserAvatar width={80} height={80} />
              </Link>
            </div>
            <ul className={styles.sellerStats}>
              <li>
                <h2>5.00</h2>
                рейтинг
              </li>
              <li>
                <div className={styles.phoneStat}>привязан телефон</div>
              </li>
              <li>
                <h2>28</h2>
                безопасные продажи
              </li>
              <li>
                <h2>28</h2>
                активные объявления
              </li>
            </ul>
          </div>
          <div className={styles.contentBlock}>
            <Feedback />
          </div>
        </div>
      </div>
      <div className={styles.recommended}>
        <ItemsList title="Вам может понравится" />
      </div>
    </div>
  );
};

export default ItemPage;
