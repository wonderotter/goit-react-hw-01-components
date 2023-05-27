import { MainWrapper } from './MainWrapper/MainWrapper';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import {user, stats, friends, transactions} from '../json';

export const App = () => {
  return (
    <div className='container'>
      
      <MainWrapper task="1">
        <Profile user={user} />
      </MainWrapper>

      <MainWrapper task="2">
        <Statistics stats={stats} title="Upload stats" />
      </MainWrapper>

      <MainWrapper task="3">
        <FriendList friends={friends} />
      </MainWrapper>

      <MainWrapper task="4">
        <TransactionHistory items={transactions} />
      </MainWrapper>

    </div>
  );
};