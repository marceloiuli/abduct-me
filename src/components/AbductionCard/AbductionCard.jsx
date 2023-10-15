import { useNavigate } from "react-router-dom";

export default function AbductionCard({abduction}) {
    const navigate = useNavigate();
    const {name, date, email, abType, _id} = abduction
    const onClick = (evt) => {
        evt.preventDefault();
        navigate(`/abductions/${_id}`)
    }

    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{abType}</p>
            <p>{date.split('T')[0]}</p>
            <button onClick={onClick}>Update</button>
        </div>
    ) 
} 