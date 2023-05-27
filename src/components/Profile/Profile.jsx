import PropTypes from "prop-types";
import css from './Profile.module.css';

export const Profile =
  ({ user: { username, tag, location, avatar, stats } }) => (

    <div className={css.profile}>

      <div className={css.description}>
        <img
          src={avatar}
          alt={tag}
          className={css.avatar}
        />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        {Object.entries(stats).map(([label, value], index) =>
          <li key={index} className={css["stat-item"]}>
            <span className={css.label}>{label}</span>
            <span className={css.quantity}>{value}</span>
          </li>
        )}
      </ul>

    </div>
  );

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired
  }).isRequired
};