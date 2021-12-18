import "../assets/styles/Statuses.scss"
import { BsMoonFill } from "react-icons/bs"

const IdleStatus = () => {
    const size=12

    return (
        <div className="stasuses idle">
            <BsMoonFill 
                color="#faa81a" 
                size={size}
            />
        </div>
    );
}
 
export default IdleStatus;