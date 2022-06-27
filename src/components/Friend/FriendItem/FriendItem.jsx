
import { Friend, Status, Avatar, Name} from './FriendItem.styled';

const FriendItem = ({ avatar, name, isOnline }) => {
    return (<Friend>
        <Status isOnline={isOnline}></Status>
        <Avatar src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
    </Friend>)
};

export default FriendItem;

