import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../jsone/user.json';
import stats from '../jsone/stats.json';
import friends from '../jsone/friends.json'
import transactions from '../jsone/transactions.json';

export const App = () => {
  return (
    <div className='container'>
        <Profile user={user} />
        <Statistics stats={stats} title="Upload stats" />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />


    </div>
  );
};