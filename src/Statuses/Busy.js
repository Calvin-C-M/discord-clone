import "../assets/styles/Statuses.scss"
import { FaMinusCircle } from "react-icons/fa"

const BusyStatus = () => {
    const size=12

    return (
        <div className="stasuses busy">
            <FaMinusCircle 
                color="#ed4245" 
                size={size}
            />
        </div>
    );
}
 
export default BusyStatus;