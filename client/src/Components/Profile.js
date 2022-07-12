import { useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import CircularProgress from '@material-ui/core/CircularProgress';

const Profile = () => {
    const {status, currentUser, tweets} = useContext(CurrentUserContext);


    return(
        <div>
        {!status ? <div><CircularProgress /></div> :
        <div>
        <div>{tweets}</div>
        </div>
        }
        </div>
    )
}

export default Profile