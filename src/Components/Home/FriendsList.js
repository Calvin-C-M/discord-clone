import "../../assets/styles/FriendsList.scss"
import { BsPersonFill } from "react-icons/bs"
import { GiCarWheel } from "react-icons/gi"
import { AiOutlinePlus } from "react-icons/ai"
import FriendBoxItem from "./FriendBoxItem"
import friendPhoto from "../../assets/img/discord-logo.png"
import { useState } from "react"
import CreateGroupDm from "./CreateGroupDm"
import OfflineStatus from "../../Statuses/Offline"
import OnlineStatus from "../../Statuses/Online"
import IdleStatus from "../../Statuses/Idle"
import BusyStatus from "../../Statuses/Busy"

const FriendsList = () => {
    const [showCreateGroup, setShowCreateGroup] = useState(false);
    const [showCreateDmLabel, setShowCreateDmLabel] = useState(false);

    const friends = [
        { name: "shiro-", photo: friendPhoto, status: "busy" },
        { name: "Dominuendo", photo: friendPhoto, status: "online" },
        { name: "Rheza", photo: friendPhoto, status: "offline" }
    ]

    const icons = {
        color: "#8e9297"
    }

    const addDmEvent = () => (showCreateGroup) ? setShowCreateGroup(false) : setShowCreateGroup(true);
    
    return (
        <section className="friends-list">
            <header>
                <button>Find or start a conversation</button>
            </header>
            <section className="main">
                <section className="menus">
                    <section className="lists">
                        <section id="friends" className="items">
                            <BsPersonFill className="icons" color={icons.color} />
                            <span>Friends</span>
                        </section>
                        <section id="nitro" className="items">
                            <GiCarWheel className="icons" color={icons.color} />
                            <span>Nitro</span>
                        </section>
                    </section>
                </section>
                <section className="direct-messages">
                    <section className="add-dm">
                        <span>DIRECT MESSAGES</span>
                        { showCreateDmLabel 
                            && 
                            <span className="label-create-dm">
                                Create DM
                                <div id="triangle"></div>
                            </span>
                        }
                        <AiOutlinePlus 
                            onMouseEnter={() => setShowCreateDmLabel(true)}
                            onMouseLeave={() => setShowCreateDmLabel(false)}
                            onClick={addDmEvent} 
                            className="create-dm" 
                            color={icons.color} 
                        />
                    </section>
                    { showCreateGroup && <CreateGroupDm /> }
                    <section className="lists">
                        { friends.map(friend => (
                            <FriendBoxItem 
                                name={friend.name} 
                                photo={friend.photo} 
                                status={friend.status}
                            />
                        )) }
                    </section>
                </section>
            </section>
        </section>
    );
}
 
export default FriendsList;