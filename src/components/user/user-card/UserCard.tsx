import React from 'react';
import SvgSprite from '../../ui/svg-sprite/SvgSprite';
import UserAvatar from '../../ui/user-avatar/UserAvatar';
import classes from './UserCard.module.scss';

const UserCard = () => (
  <div className={classes.UserCard}>
    <div className={classes.UserCardTop}>
      <div className={classes.UserCardInfo}>
        <div className={classes.UserCardName}>
          Namenamenamenamename
        </div>
        <div className={classes.UserCardRegDate}>
          на themarket с февр. 2022
        </div>
        <div className={classes.UserCardUpload}>
          <input id="upload-photo" className="visually-hidden" type="file" name="avatar" />
          <label htmlFor="upload-photo">Сменить фото</label>
        </div>
      </div>
      <UserAvatar width={80} height={80} />
    </div>
    <div className={classes.UserCardBottom}>
      <div className={classes.Confirmed}>
        <div className={classes.ConfirmedTitle}>
          Подтвержденная информация
        </div>
        <div className={classes.ConfirmedDescr}>
          <div className={classes.ConfirmedStatus}>
            <SvgSprite id="status-ok" width={20} height={20} />
          </div>
          Номер телефона
        </div>
      </div>
    </div>
  </div>
);

export default UserCard;
