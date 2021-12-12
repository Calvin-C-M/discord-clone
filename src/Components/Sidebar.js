import '../assets/styles/Sidebar.scss'
import '../assets/styles/GroupIcons.scss'
import GroupIcons from './GroupIcons'
import DiscordLogo from "../assets/img/discord-logo.png"

const Sidebar = () => {
    const channels=[
        { name: "Discord", photo: DiscordLogo },
        { name: "Discord", photo: DiscordLogo },
        { name: "Discord", photo: DiscordLogo },
        { name: "Discord", photo: DiscordLogo },
        { name: "Discord", photo: DiscordLogo },
        { name: "Discord", photo: DiscordLogo },
        { name: "Discord", photo: DiscordLogo },
        { name: "Discord", photo: DiscordLogo },
        { name: "Discord", photo: DiscordLogo },
        { name: "Discord", photo: DiscordLogo },
        { name: "Discord", photo: DiscordLogo },
        { name: "Discord", photo: DiscordLogo },
        { name: "Discord", photo: DiscordLogo },
    ]

    return (
        <nav>
            <header>
                <section className="icons">
                    <GroupIcons photo={ DiscordLogo } />
                    <div className="line"></div>
                </section>
            </header>
            <section className="channels">
                { channels.map(channel => (
                    <section className="icons">
                        <GroupIcons photo={channel.photo} />
                    </section>
                )) }
            </section>
        </nav>
    );
}
 
export default Sidebar;