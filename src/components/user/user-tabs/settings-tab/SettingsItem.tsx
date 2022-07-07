import React, { FC } from 'react';
import classes from './SettingsItem.module.scss';

type Table = {
  id: string,
  title: string,
  descr: string,
  isEdit: boolean
};

type SettingsItemProps = {
  title: string,
  table: Table[],
};

const SettingsItem: FC<SettingsItemProps> = ({ title, table }) => (
  <div className={classes.SettingsItem}>
    <h2 className={classes.Title}>
      {title}
    </h2>
    <div className={classes.Table}>
      {
        table.map((item) => (
          <div className={classes.TableItem} key={item.id}>
            <div className={classes.TableTitle}>
              {item.title}
            </div>
            <div className={classes.TableDescr}>
              {item.descr ? item.descr : 'Не указано'}
            </div>
            {
              item.isEdit && <button className={classes.TableBtn} type="button">Добавить</button>
            }
          </div>
        ))
      }
    </div>
  </div>
);

export default SettingsItem;
