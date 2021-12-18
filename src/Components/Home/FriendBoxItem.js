import { useState } from "react";
import { IoMdClose } from "react-icons/io"
import ProfileDisplay from "../ProfileDisplay";

const FriendBoxItem = ({ name, photo, status }) => {
    const [hover, setHover] = useState(false);
    const photoProp = {
        width: 25,
        height: 25
    }
    return (
        <section 
            className="friend-items"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <section className="detail">
                <ProfileDisplay 
                    photo={photo}
                    status={status}
                    width={photoProp.width}
                    height={photoProp.height}
                />
                <span>{name}</span>
            </section>
            { hover && <IoMdClose className="delete-friend" color="#8e9297" /> }
        </section>
    );
}
 
export default FriendBoxItem;