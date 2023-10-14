import { useState } from "react"
import { useNavigate } from "react-router-dom"
import * as abductionsAPI from "../../utilities/abductions-api"
import './EditForm.css';
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function EditForm () {
    const [newAbduction, setNewAbduction] =useState({})
    const navigate=useNavigate()
    const params=useParams()
    useEffect(function(){
        async function getAbduction(){
            const abduction = await abductionsAPI.getAbduction(params.id)
            abduction.date=abduction.date.split('A')[0];
            setNewAbduction(abduction)
        }
        getAbduction()
    },[])
    async function handleSubmit (evt) {
        evt.preventDefault()
        try {
            console.log(newAbduction, params.id)
            abductionsAPI.editAbductions(newAbduction, params.id)
            navigate("/abductions")
        }catch(err){
            console.log(err);
        }
    }
    function handleChange (evt) {
        const updateAbduction={...newAbduction,[evt.target.name]:evt.target.value}
        setNewAbduction(updateAbduction)
    }
    return (
        <div>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>
                        Name:
                    </label>
                    <input type="text" name="name" value={newAbduction.name} onChange={handleChange} required />
                    <label>
                        Phone:
                    </label>
                    <input type="Number" name="phone" value={newAbduction.Phone} onChange={handleChange} required />
                    <label>
                        Email:
                    </label>
                    <input type="text" name="email" value={newAbduction.email} onChange={handleChange} required />
                    <label>
                        Date:
                    </label>
                    <input type="date" name="date" value={newAbduction.date} onChange={handleChange} required />
                    <label>
                        Ufo Choice:
                    </label>
                    <input type="text" name="UfoChoice" value={newAbduction.UfoChoice} onChange={handleChange} required />
                    <label>
                        Abduction Experience:
                    </label>
                    <input type="text" name="AbductionExp" value={newAbduction.AbductionExp} />
                    <button type="submit">Edit Order</button>
                </form>
        </div>
    )
}