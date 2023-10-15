import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import * as abductionsAPI from "../../utilities/abductions-api"
import AbductionFormInput from "../AbductionFormInput/AbductionFormInput";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
        <Form>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <legend>Your Contact Information:</legend>
                <label htmlFor="name">Your Name</label>
                <input onChange={handleChange} type="text" id="name" name="name" placeholder="First Name & Last Name" defaultValue={abductions.name} />
                <label htmlFor="phone">Phone Number</label>
                <input onChange={handleChange} type="tel" id="phone" name="phone" placeholder="Dont forget your area code!" defaultValue={abductions.phone} />
                <label htmlFor="email">Email</label>
                <input onChange={handleChange} type="email" id="email" name="email" placeholder="example123@email.com" defaultValue={abductions.email} />

                <legend>About Your Abduction:</legend>
                <label htmlFor="date">Requested Date</label>
                <input onChange={handleChange} type="date" id="date" name="date" defaultValue={abductions.date ? abductions.date.split('T')[0] : ''} />
                <label htmlFor="qty">Would you like to bring friends?</label>
                <input onChange={handleChange} type="number" id="qty" name="qty" min="1" max="5" defaultValue="1" placeholder="5 humans maximum" />
                <label>Please choose your preferred ufo type</label>
                <label>
                    <input onChange={handleChange} type="radio" name="ufoChoice" value="classic" checked={abductions.ufoChoice === 'classic'} />Classic Oval UFO
                </label>
                <label>
                    <input onChange={handleChange} type="radio" name="ufoChoice" value="star" checked={abductions.ufoChoice === 'star'} />Star Wars-style Imperial Cruiser
                </label>
                <label>
                    <input onChange={handleChange} type="radio" name="ufoChoice" value="battle" checked={abductions.ufoChoice === 'battle'} />Battlestar Galactica-style Viper
                </label>
                <label>
                    <input onChange={handleChange} type="radio" name="ufoChoice" value="borg" checked={abductions.ufoChoice === 'borg'} />Borg-style Cube
                </label>
                <label htmlFor="abType">What type of abduction experience do you want?</label>
                <select onChange={handleChange} name="abType" id="abtype">
                    <option defaultValue>Choose Wisely...</option>
                    <option value="tour" selected={abductions.abType === 'tour'}>Tour of the Solar System</option>
                    <option value="dinner" selected={abductions.abType === 'dinner'}>Alien dinner and dicussion</option>
                    <option value="dance" selected={abductions.abType === 'dance'}>Alien dance lessons</option>
                    <option value="whale" selected={abductions.abType === 'whale'}>Whale watching</option>
                </select>

                <label htmlFor="specialRequests">Special Requests:</label>
                <textarea onChange={handleChange} name="specialRequests" id="specialRequests" cols="30" rows="10" placeholder="Tell us everything..." maxLength="180" defaultValue={abductions.specialRequest}></textarea>
                <Button type="submit">Submit</Button>
                <Button onClick={onDelete} >{abductions._id ? "DELETE" : "CANCEL"}</Button>
            </form>
            
        </Form>
    )
}