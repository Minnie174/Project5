import React from 'react';
import { Link } from 'react-router-dom';

import UserAvatar from '../ui/user-avatar/UserAvatar';

import styles from './Feedback.module.scss';

const Feedback = () => {
  const feedbackData = {
    reviewCount: 18,
    reviews: [
      {
        user: {
          id: '1',
          photoUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
          name: 'Sergey',
        },
        reviewDate: 'месяц назад',
        rating: 5,
        text: 'Быстрая доставка, всё отлично.',
        bought: {
          id: 1,
          name: 'Nike Dunk Low Goldenrod',
        },
      },
      {
        user: {
          id: '2',
          photoUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
          name: 'Alexey',
        },
        reviewDate: 'месяц назад',
        rating: 4,
        text: 'Всё ок.',
        bought: {
          id: 2,
          name: 'Adidas yeezy slide pure',
        },
      },
      {
        user: {
          id: '3',
          photoUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
          name: 'Сергей',
        },
        reviewDate: '2 месяца назад',
        rating: 3,
        text: 'Средний сервис.',
        bought: {
          id: 1,
          name: 'Nike Dunk Low Goldenrod',
        },
      },
    ],
  };

  return (
    <>
      <h2>
        {`${feedbackData.reviewCount} отзывов о продавце`}
      </h2>
      <ul className={styles.feedback}>
        {feedbackData.reviews.map((item) => {
          const {
            user: {
              id, name,
            }, reviewDate, rating, text, bought: {
              id: productId, name: productName,
            },
          } = item;

          return (
            <li key={id}>
              <div className={styles.feedbackHeader}>
                <UserAvatar width={40} height={40} />
                <div>
                  <Link to={`/users/${id}`}>{name}</Link>
                  {reviewDate}
                </div>
              </div>
              <div className={styles.stars}>
                {Array.from(
                  { length: 5 },
                  (arrItem, i) => <div className={rating > i ? styles.activeStar : styles.star} />,
                )}
              </div>
              <p>{text}</p>
              <div className={styles.feedbackFooter}>
                Купил
                {' '}
                <Link to={`/items/${productId}.${productName.replace(/ /g, '-')}`}>{productName}</Link>
              </div>
            </li>
          );
        })}
      </ul>
      <Link to="/users/{userId}?tab=2">Прочитать все отзывы</Link>
    </>
  );
};

export default Feedback;
