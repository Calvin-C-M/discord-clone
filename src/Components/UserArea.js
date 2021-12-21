import "../assets/styles/UserArea.scss"
import { useState } from "react";
import { MdMic } from "react-icons/md"
import { RiHeadphoneFill } from "react-icons/ri"
import { BsGearFill, BsEmojiLaughingFill } from "react-icons/bs"
import ProfileDisplay from "./ProfileDisplay";
import photo from "../assets/img/discord-logo.png"
import OnlineStatus from "../Statuses/Online";
import IdleStatus from "../Statuses/Idle";
import BusyStatus from "../Statuses/Busy";
import OfflineStatus from "../Statuses/Offline";

const UserArea = () => {
    const user = {
        name: "CaCaMo",
        id: "1996",
        status: "online",
        profile: {
            src: photo,
            width: 25,
            height: 25,
        }
    }

    const icon = {
        size: 20
    }

    const [micOn, setMicOn] = useState(false);
    const [deafenOn, setDeafenOn]=useState(false);
    const [showChangeStatus, setShowChangeStatus]=useState(false);
    const [showLabelMic, setShowLabelMic]=useState(false);
    const [showLabelDeafen, setShowLabelDeafen]=useState(false);
    const [showLabelSetting, setShowLabelSetting]=useState(false);

    const changeMicStatus = () => (micOn) ? setMicOn(false) : setMicOn(true)
    const changeDeafenStatus = () => (deafenOn) ? setDeafenOn(false) : setDeafenOn(true)
    const changeChangeStatus = () => (showChangeStatus) ? setShowChangeStatus(false) : setShowChangeStatus(true)

    return (
        <section className="user-area">
            <section className="profile-detail">
                {
                    showChangeStatus
                    &&
                    <section className="change-status">
                        <section id="online">
                            <section className="status">
                                <OnlineStatus />
                                <span>
                                    Online
                                </span>
                            </section>
                        </section>
                        <section id="others">
                            <section className="status">
                                <IdleStatus />
                                <span>
                                    Idle
                                </span>
                            </section>
                            <section className="status">
                                <BusyStatus />
                                <span>
                                    Do Not Disturb
                                </span>
                            </section>
                            <section className="status">
                                <OfflineStatus />
                                <span>
                                    Invisible
                                </span>
                            </section>
                        </section>
                        <section id="custom">
                            <section className="status">
                                <BsEmojiLaughingFill />
                                <span>
                                    Set a Custom Status
                                </span>
                            </section>
                        </section>
                    </section>
                }
                <section 
                    className="display"
                    onClick={changeChangeStatus}
                >
                    <ProfileDisplay 
                        photo={user.profile.src}
                        status={user.status}
                        width={user.profile.width}
                        height={user.profile.height}
                    />
                </section>
                <section className="user-detail">
                    <p>{user.name}</p>
                    <span>#{user.id}</span>
                </section>
            </section>
            <section className="options">
                <section 
                    className="icons"
                    onMouseEnter={() => setShowLabelMic(true)}
                    onMouseLeave={() => setShowLabelMic(false)}
                >
                    { 
                        showLabelMic 
                        && 
                        <span>
                            { (micOn) ? "Unmute" : "Mute" }
                            <div className="triangle"></div>
                        </span>
                    }
                    <MdMic onClick={changeMicStatus} size={icon.size} />
                    {
                        micOn
                        &&
                        <div className="line"></div>
                    }
                </section>
                <section
                    className="icons"
                    onMouseEnter={() => setShowLabelDeafen(true)}
                    onMouseLeave={() => setShowLabelDeafen(false)}
                >
                    { 
                        showLabelDeafen 
                        && 
                        <span>
                            { (deafenOn) ? "Undeafen" : "Deafen" }
                            <div className="triangle"></div>
                        </span>
                    }
                    <RiHeadphoneFill onClick={changeDeafenStatus} size={icon.size} />
                    {
                        deafenOn
                        &&
                        <div className="line"></div>
                    }
                </section>
                <section 
                    className="icons"
                    onMouseEnter={() => setShowLabelSetting(true)}
                    onMouseLeave={() => setShowLabelSetting(false)}
                >
                    { 
                        showLabelSetting 
                        && 
                        <span id="user-setting">
                            User Settings
                            <div className="triangle"></div>
                        </span>
                    }
                    <BsGearFill size={icon.size} />
                </section>
            </section>
        </section>
    );
}
 
export default UserArea;