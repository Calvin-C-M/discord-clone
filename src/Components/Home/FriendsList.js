import "../../assets/styles/FriendsList.scss"
import { BsPersonFill } from "react-icons/bs"
import { GiCarWheel } from "react-icons/gi"
import { AiOutlinePlus } from "react-icons/ai"
import FriendBoxItem from "./FriendBoxItem"
import friendPhoto from "../../assets/img/discord-logo.png"
import { useState } from "react"

const FriendsList = () => {

    const friends = [
        { name: "shiro-", photo: friendPhoto },
        { name: "Dominuendo", photo: friendPhoto },
        { name: "Rheza", photo: friendPhoto }
    ]

    const icons = {
        color: "#8e9297"
    }
    
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
                        <AiOutlinePlus color="white" />
                    </section>
                    <section className="lists">
                        { friends.map(friend => (
                            <FriendBoxItem 
                                name={friend.name} 
                                photo={friend.photo} 
                            />
                        )) }
                    </section>
                </section>
            </section>
        </section>
    );
}
 
export default FriendsList;