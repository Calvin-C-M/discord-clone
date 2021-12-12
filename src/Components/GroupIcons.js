const GroupIcons = ({ photo }) => {
    const width=30
    const height=30

    return (
        <button className="channel-icons">
            <img src={ photo } width={ width } height={ height } alt="Channel Logo" />
        </button>
    );
}
 
export default GroupIcons;