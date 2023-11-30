import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import * as abductionsAPI from "../../utilities/abductions-api"
import "./AbductionForm.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AbductionForm({abduction}) {
    const [abductions, setAbductions] = useState({name : '', phone: '', email: '', date: '', ufoChoice: '', abType: '', specialRequest: ''})
    const navigate = useNavigate()

    async function handleSubmit (evt) {
        evt.preventDefault();
        try {
            
            if (abductions._id) {
                console.log(abductions)
                abductionsAPI.editAbductions(abductions, abductions._id) 
            } else {
                abductionsAPI.createAbductions(abductions)
            }
            setAbductions({name : '', phone: '', email: '', date: '', ufoChoice: '', abType: '', specialRequest: ''})
            navigate('/abductions')
        } catch(err) {
            console.log(err)
        }
        
    }

    useEffect(() => {
        if (abduction) {
            setAbductions({...abduction})
        }
    }, [abduction])

    function handleChange (evt) {
        const updateAbduction = {...abductions, [evt.target.name]:evt.target.value}
        setAbductions((oldState) => {
            return {...oldState, [evt.target.name]:evt.target.value}
            
        });
    }

    function onDelete (evt) {
        evt.preventDefault();
        if (abductions._id) {
            abductionsAPI.deleteAbduction(abduction._id)
        }
        setAbductions({name : '', phone: '', email: '', date: '', ufoChoice: '', abType: '', specialRequest: ''})
        navigate('/abductions')
    }

    return (
        <body class="formBody">
            <Form class="formInfo" autoComplete="off" onSubmit={handleSubmit}>
                <legend>Your Contact Information:</legend>
                <br />
                <Row className="mb-3">
                    <br></br>
                    <Form.Group as={Col}>
                        <Form.Label htmlFor="name">Your Name</Form.Label>
                        <Form.Control onChange={handleChange} type="text" id="name" name="name" placeholder="First Name & Last Name" defaultValue={abductions.name} />
                    </Form.Group>
                    <br></br>
                    <Form.Group as={Col}>
                        <Form.Label htmlFor="phone">Phone Number</Form.Label>
                        <Form.Control onChange={handleChange} type="tel" id="phone" name="phone" placeholder="Dont forget your area code!" defaultValue={abductions.phone} />
                    </Form.Group>
                    <br></br>
                    <Form.Group as={Col}>
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <br></br>
                        <Form.Control onChange={handleChange} type="email" id="email" name="email" placeholder="example123@email.com" defaultValue={abductions.email} />
                    </Form.Group>
                </Row>

                <legend>About Your Abduction:</legend>
                <br />
                <Row className="mb-3">
                    <Form.Group as={Col}>

                        <Form.Label htmlFor="date">Requested Date</Form.Label>
                        <Form.Control onChange={handleChange} type="date" id="date" name="date" defaultValue={abductions.date ? abductions.date.split('T')[0] : ''} />

                    </Form.Group>

                    <Form.Group as={Col}>

                        <Form.Label htmlFor="qty">Would you like to bring friends?</Form.Label>
                        <Form.Control onChange={handleChange} type="number" id="qty" name="qty" min="0" max="5" defaultValue="0" placeholder="5 humans maximum" />

                    </Form.Group>
                </Row>

                <Form.Group>

                    <legend>Please choose your preferred ufo type</legend>
                    <Form.Label>
                        <Form.Check onChange={handleChange} type="radio" name="ufoChoice" value="classic" checked={abductions.ufoChoice === 'classic'} />Classic Oval UFO
                    </Form.Label>
                    <br />
                    <Form.Label>
                        <Form.Check onChange={handleChange} type="radio" name="ufoChoice" value="star" checked={abductions.ufoChoice === 'star'} />Star Wars-style Imperial Cruiser
                    </Form.Label>
                    <br />
                    <Form.Label>
                        <Form.Check onChange={handleChange} type="radio" name="ufoChoice" value="battle" checked={abductions.ufoChoice === 'battle'} />Battlestar Galactica-style Viper
                    </Form.Label>
                    <br />
                    <Form.Label>
                        <Form.Check onChange={handleChange} type="radio" name="ufoChoice" value="borg" checked={abductions.ufoChoice === 'borg'} />Borg-style Cube
                    </Form.Label>
                    <br />

                </Form.Group>

                <Form.Group>

                    <Form.Label htmlFor="abType">What type of abduction experience do you want?</Form.Label>
                    <Form.Select size="lg" onChange={handleChange} name="abType" id="abtype">
                        <option defaultValue>Choose Wisely...</option>
                        <option value="tour" selected={abductions.abType === 'tour'}>Tour of the Solar System</option>
                        <option value="dinner" selected={abductions.abType === 'dinner'}>Alien dinner and dicussion</option>
                        <option value="dance" selected={abductions.abType === 'dance'}>Alien dance lessons</option>
                        <option value="whale" selected={abductions.abType === 'whale'}>Whale watching</option>
                    </Form.Select>

                </Form.Group>
        
                <Form.Group>

                    <Form.Label htmlFor="specialRequests">Special Requests:</Form.Label>
                    <textarea onChange={handleChange} name="specialRequests" id="specialRequests" cols="30" rows="10" placeholder="Tell us everything..." maxLength="180" defaultValue={abductions.specialRequest}></textarea>
                    &nbsp; &nbsp;
                    <Button variant="dark" type="submit">SUBMIT</Button>
                    &nbsp; &nbsp;
                    <Button variant="dark" onClick={onDelete} >{abductions._id ? "DELETE" : "CANCEL"}</Button>

                </Form.Group>

            </Form>
        </body>
    )
}