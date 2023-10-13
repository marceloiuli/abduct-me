import { useState } from "react"

export default function AbductionForm() {
    const [abductions, setNewAbductions] = useState([])
    
    async function handleSubmit(evt) {
        evt.preventDefault();
    }

    return (
        <form action="">
            <legend>Your Contact Information:</legend>
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="First Name & Last Name" />
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Dont forget your area code!" />
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="example123@email.com" />
            <legend>About Your Abduction:</legend>
            <label for="date">Requested Date</label>
            <input type="date" id="date" name="date" />
            <label for="qty">Would you like to bring friends?</label>
            <input type="number" id="qty" name="qty" min="1" max="5" placeholder="5 humans maximum" />
            <label>Please choose your preferred ufo type</label>
            <label>
                <input type="radio" name="ufotype" value="classic" />Classic Oval UFO
            </label>
            <label>
                <input type="radio" name="ufotype" value="star" />Star Wars-style Imperial Cruiser
            </label>
            <label>
                <input type="radio" name="ufotype" value="battle" />Battlestar Galactica-style Viper
            </label>
            <label>
                <input type="radio" name="ufotype" value="borg" />Borg-style Cube
            </label>
            <label for="abtype">What type of abduction experience do you want?</label>
            <select name="abtype" id="abtype">
                <option selected>Choose Wisely...</option>
                <option value="tour">Tour of the Solar System</option>
                <option value="dinner">Alien dinner and dicussion</option>
                <option value="dance">Alien dance lessons</option>
                <option value="whale">Whale watching</option>
            </select>
            <label for="comments">Special Requests:</label>
            <textarea name="comments" id="comments" cols="30" rows="10" placeholder="Tell us everything..." maxlength="180"></textarea>
            <button type="submit">Submit</button>
        </form>
    )
}