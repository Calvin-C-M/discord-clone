import "../assets/styles/ProfileDisplay.scss"
import OfflineStatus from "../Statuses/Offline";
import OnlineStatus from "../Statuses/Online";
import IdleStatus from "../Statuses/Idle";
import BusyStatus from "../Statuses/Busy";

const ProfileDisplay = ({ photo, status, width, height }) => {

    return (
        <figure className="profile-display">
            <img 
                src={photo}
                width={width}
                height={height}
            />
            {
                (status === "online") ? <OnlineStatus /> :
                (status === "offline") ? <OfflineStatus /> :
                (status === "idle") ? <IdleStatus /> :
                <BusyStatus /> 
            }
        </figure>
    );
}
 
export default ProfileDisplay;