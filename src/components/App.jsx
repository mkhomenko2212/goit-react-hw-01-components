import user from '../data/user.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import stats from '../data/stats.json'
import friends from '../data/friends.json';
import FriendList from './Friend/FriendList/FriendList';
import TransactionsHistory from './TransactionsHistory/TransactionsHistory';
import transactions from '../data/transactions.json'
// import GlobalStyles from 'global';




export const App = () => {
  return ( 
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <Statistics stats={stats} />
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />
      </div>
  
  );
};
