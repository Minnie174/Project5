import React, { FC } from 'react';
import avatar from '../../../assets/images/user/avatar-placeholder.png';
import classes from './UserAvatar.module.scss';

type UserAvatarProps = {
  width: number,
  height: number,
};

const UserAvatar: FC<UserAvatarProps> = ({ width, height }) => (
  <div style={{ width, height }} className={classes.UserAvatar}>
    <img src={avatar} alt="user avatar" />
  </div>
);

export default UserAvatar;
