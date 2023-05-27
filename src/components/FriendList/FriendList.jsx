import PropTypes from "prop-types";
import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css';

export const FriendList =
  ({ friends }) => (

    <ul className={css["friend-list"]}> 
      {friends.map(friend => (
        <li key={friend.id} className={css.item}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired
};