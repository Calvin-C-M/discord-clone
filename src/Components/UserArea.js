import "../assets/styles/UserArea.scss"
import { useState } from "react";
import { MdMic, MdMicOff } from "react-icons/md"
import { RiHeadphoneFill } from "react-icons/ri"
import { BsGearFill } from "react-icons/bs"
import ProfileDisplay from "./ProfileDisplay";
import photo from "../assets/img/discord-logo.png"

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
    const [showLabelMic, setShowLabelMic]=useState(false);
    const [showLabelDeafen, setShowLabelDeafen]=useState(false);
    const [showLabelSetting, setShowLabelSetting]=useState(false);

    return (
        <section className="user-area">
            <section className="profile-detail">
                <ProfileDisplay 
                    photo={user.profile.src}
                    status={user.status}
                    width={user.profile.width}
                    height={user.profile.height}
                />
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
                    { showLabelMic && 
                        <span>
                            Unmute
                            <div className="triangle"></div>
                        </span>
                    }
                    <MdMic size={icon.size} />
                </section>
                <section
                    className="icons"
                    onMouseEnter={() => setShowLabelDeafen(true)}
                    onMouseLeave={() => setShowLabelDeafen(false)}
                >
                    { showLabelDeafen && 
                        <span>
                            Deafen
                            <div className="triangle"></div>
                        </span>
                    }
                    <RiHeadphoneFill size={icon.size} />
                </section>
                <section 
                    className="icons"
                    onMouseEnter={() => setShowLabelSetting(true)}
                    onMouseLeave={() => setShowLabelSetting(false)}
                >
                    { showLabelSetting && 
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