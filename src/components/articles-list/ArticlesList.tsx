import React from 'react';
import uniqid from 'uniqid';
import ShowMoreLink from '../ui/show-more-link/ShowMoreLink';
import classes from './articlesList.module.scss';

const data = [
  {
    id: uniqid(),
    preview: 'https://cdn.100sp.ru/cache_pictures/175243863/thumb300',
    title: 'Название статьи название статьи',
    date: 'дата 1',
  },
  {
    id: uniqid(),
    preview: 'https://08.img.avito.st/432x324/4336502108.jpg',
    title: 'Название статьи название статьи 2',
    date: 'дата 2',
  },
  {
    id: uniqid(),
    preview: 'https://sun9-25.userapi.com/impf/c844720/v844720186/1eae96/bHuUbroQSnU.jpg?size=320x240&quality=96&sign=ad4ee1ed374624e3f8a963b75eb97599&c_uniq_tag=wxlwi3GOtD2Tp-JNOXb9kqrMz3V9aNDVEda2_5CQYuk&type=video_thumb',
    title: 'Название статьи название статьи 3',
    date: 'дата 3',
  },
];

const ArticlesList = () => (
  <div className={classes.articles}>
    <div className={classes.articlesTitle}>
      Блог
    </div>
    <ul className={classes.articlesList}>
      {
        data.map((item) => (
          <li className={classes.articlesItem} key={item.id}>
            <div className={classes.articlesItemPreview}>
              <img src={item.preview} alt=" " />
            </div>
            <div className={classes.articlesItemTitle}>
              {item.title}
            </div>
            <div className={classes.articlesItemDate}>
              {item.date}
            </div>
          </li>
        ))
      }
    </ul>
    <ShowMoreLink text="Показать все" />
  </div>
);

export default ArticlesList;
