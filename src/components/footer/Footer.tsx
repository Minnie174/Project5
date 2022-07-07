import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SoundCloudLogo } from '../../assets/icons/social/souncloud.svg';
import { ReactComponent as TgLogo } from '../../assets/icons/social/tg.svg';
import { ReactComponent as InstLogo } from '../../assets/icons/social/inst.svg';
import { ReactComponent as VKLogo } from '../../assets/icons/social/vk.svg';
import classes from './footer.module.scss';

const Footer: React.FC = () => (
  <footer className={classes.footer}>
    <div className="container">
      <ul className={classes.linkList}>
        <li><Link to="/user-agreement" className={classes.link}>Пользовательское соглашение</Link></li>
        <li><Link to="/privacy" className={classes.link}>Политика конфиденциальности</Link></li>
        <li><Link to="/services" className={classes.link}>Услуги</Link></li>
        <li><Link to="/faq" className={classes.link}>FAQ</Link></li>
        <li><Link to="/rules" className={classes.link}>Правила оказания услуг</Link></li>
        <li><Link to="/contacts" className={classes.link}>Контакты</Link></li>
        <li><Link to="/blog" className={classes.link}>Блог</Link></li>
        <li><Link to="/secure-transaction" className={classes.link}>Безопасная сделка</Link></li>
        <li><Link to="/safe-transaction-rules" className={classes.link}>Правила безопасной сделки</Link></li>
      </ul>
      <div className={classes.bottomBlock}>
        <div className={classes.socialBlock}>
          <a href="/" aria-label="soundcloud"><SoundCloudLogo className={classes.socialIcon} /></a>
          <a href="/" aria-label="telegram"><TgLogo className={classes.socialIcon} /></a>
          <a href="/" aria-label="instagram"><InstLogo className={classes.socialIcon} /></a>
          <a href="/" aria-label="vkontakte"><VKLogo className={classes.socialIcon} /></a>
        </div>
        <span className={classes.info}>{`soledout, ${(new Date()).getFullYear()}`}</span>
      </div>
    </div>
  </footer>
);

export default Footer;
