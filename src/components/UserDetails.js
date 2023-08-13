import { useParams} from 'react-router-dom';
export const UserDetails = () => {
    const {userID }=useParams();
    return (
        <>
            <p>User {userID} details</p>

        </>
    );
    
};