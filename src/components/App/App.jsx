import Profile from "../Profile/Profile";
import { username, tag, location, avatar, stats } from "../../userData.json";

export default function App() {
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
    </>
  );
}
