import { useNavigate } from "react-router-dom";
import "./AbductionCard.css"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function AbductionCard({abduction}) {
    const navigate = useNavigate();
    const {name, date, email, abType, _id} = abduction
    const onClick = (evt) => {
        evt.preventDefault();
        navigate(`/abductions/${_id}`)
    }

    return (
        <Card style={{ width: '20rem' }} id="cardStyle">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>{email}</Card.Subtitle>
                <br />
                <Card.Text>{abType}</Card.Text>
                <Card.Subtitle>{date.split('T')[0]}</Card.Subtitle>
                <br />
                <Button variant="dark" onClick={onClick}>Update</Button>
            </Card.Body>
        </Card>
    ) 
}