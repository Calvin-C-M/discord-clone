import { useState } from "react";
import { IoMdClose } from "react-icons/io"

const FriendBoxItem = ({ name, photo }) => {
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
                <section className="icons">
                    <img 
                        src={photo} 
                        width={photoProp.width} 
                        height={photoProp.height} 
                    />
                </section>
                <span>{name}</span>
            </section>
            { hover && <IoMdClose className="delete-friend" color="#8e9297" /> }
        </section>
    );
}
 
export default FriendBoxItem;