import clsx from 'clsx';
import css from '../FriendListItem/FriendListItem.module.css';

export default function FriendListItem({ avatar, name, status }) {
  const statusItem = clsx(status ? css.online : css.offline);
  return (
    <div className={css.friendItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.nameItem}>{name}</p>
      <p className={statusItem}>{status ? 'Online' : 'Offline'}</p>
    </div>
  );
}
