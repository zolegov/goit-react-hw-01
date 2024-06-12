import Profile from "../Profile/Profile";
import { username, tag, location, avatar, stats } from "../../userData.json";
import FriendList from "../FriendList/FriendList";
import friends from "../../friends.json";
import transactions from "../../transactions.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <div className="container">
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}
