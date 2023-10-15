import { useNavigate } from "react-router-dom";

export default function AbductionCard({abduction}) {
    const navigate = useNavigate();
    const {name, _id} = abduction
    const onClick = (evt) => {
        evt.preventDefault();
        navigate(`/abductions/${_id}`)
    }

    return (
        <div>
            <p>{name}</p>
            <button onClick={onClick}>Update</button>
            {/* <button>Delete</button> */}
        </div>  
    ) 
}