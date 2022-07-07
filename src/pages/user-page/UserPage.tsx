import React from 'react';
import UserCard from '../../components/user/user-card/UserCard';
import UserTabs from '../../components/user/user-tabs/UserTabs';
import classes from './userPage.module.scss';

const UserPage = () => (
  <div className={classes.userPageContainer}>
    <UserCard />
    <UserTabs />
  </div>
);

export default UserPage;
