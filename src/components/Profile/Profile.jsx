import PropTypes from 'prop-types';
import {Container, Avatar, UserName, Stats, Label, Quantity, StatItem }from './Profile.styled';


export const Profile = ({ username, tag, location, avatar, stats: {followers, views, likes} }) =>
{
    return (<Container>
        <Avatar src={avatar} alt={username}  />
        <UserName>{username}</UserName>
        <p>@{tag}</p>
        <p className="location">{location}</p>
         <Stats>
    <StatItem>
      <Label>Followers </Label>
      <Quantity>{followers}</Quantity>
    </StatItem>
    <StatItem>
      <Label>Views </Label>
      <Quantity>{views}</Quantity>
    </StatItem>
    <StatItem>
      <Label>Likes </Label>
      <Quantity>{likes}</Quantity>
    </StatItem>
  </Stats>
    </Container>
        )
}

export default Profile;

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
    
}

