import PropTypes from 'prop-types';
import {ListOfFriends} from './FriendList.styled';

import FriendItem from '../FriendItem/FriendItem';

export const FriendList = ({ friends }) => {
    return (<ListOfFriends>
        {friends.map(
            ({id, avatar, name, isOnline}) => (
                <FriendItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    
                />))}
    </ListOfFriends>)
}

export default FriendList; 

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired
}