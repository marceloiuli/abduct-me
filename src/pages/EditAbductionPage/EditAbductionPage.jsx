import AbductionForm from "../../components/AbductionForm/AbductionForm";
import * as abductionsAPI from "../../utilities/abductions-api";
import {useParams} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function EditAbductionPage() {
    const [abduction, setAbduction] = useState({})
    const {id} = useParams();

    useEffect(function () {
        (async function () {
            const abduction = await abductionsAPI.getAbduction(id)
            setAbduction(abduction)
        })()
    }, [])
    
    return (
        <>
            <h1>Edit my abduction!</h1>
            <AbductionForm abduction={abduction}/>
            
        </>
    )
}