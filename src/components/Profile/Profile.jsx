import PropTypes from "prop-types";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className="container profile-container">
      <div className="profile-photo">
        <img src={image} alt="User avatar" />
        <p className="profile-name">{name}</p>
        <p className="profile-tag">@{tag}</p>
        <p className="profile-location">{location}</p>
      </div>

      <ul className="profile-list">
        <li className="profile-list-item">
          <span className="stats-title">Followers</span>
          <span className="stats-bold">{followers}</span>
        </li>
        <li className="profile-list-item">
          <span className="stats-title">Views</span>
          <span className="stats-bold">{views}</span>
        </li>
        <li className="profile-list-item">
          <span className="stats-title">Likes</span>
          <span className="stats-bold">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
