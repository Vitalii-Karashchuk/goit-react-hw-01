// import clsx from "clsx";
import css from '../Profile/Profile.module.css';
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileCard}>
      <div className={css.profile}>
        <img className={css.img} src={image} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.rating}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
