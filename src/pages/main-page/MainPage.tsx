import React from 'react';
import ArticlesList from '../../components/articles-list/ArticlesList';
import ItemsList from '../../components/items-list/ItemsList';
import ShowMoreLink from '../../components/ui/show-more-link/ShowMoreLink';
import classes from './mainPage.module.scss';

const MainPage = () => (
  <div className={classes.mainPage}>
    <div className={`${classes.mainPageContainer} container`}>
      <div className={classes.mainPageBlock}>
        <div className={classes.mainPageBlockItem}>
          <ItemsList title="Новое в мужском" />
          <ShowMoreLink text="Показать все" />
        </div>
        <div className={classes.mainPageBlockItem}>
          <ItemsList title="Новое в женском" />
          <ShowMoreLink text="Показать все" />
        </div>
      </div>
      <div className={classes.sidebar}>
        <ArticlesList />
      </div>
    </div>
  </div>
);

export default MainPage;
