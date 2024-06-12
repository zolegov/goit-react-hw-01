export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className="friend-item">
      <img src={avatar} alt="Avatar" width="48" />
      <p>Friend {name}</p>
      <p className="status">
        {isOnline ? (
          <span className="isOnline">Online</span>
        ) : (
          <span className="isOffline">Offline</span>
        )}
      </p>
    </div>
  );
}
