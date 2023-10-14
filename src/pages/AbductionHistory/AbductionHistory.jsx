import {useEffect, useState} from "react";
import * as abductionsAPI from "../../utilities/abductions-api"
import AbductionForm from "../../components/AbductionForm/AbductionForm";

export default function AbductionHistory() {
    const [abductions, setAbductions] = useState([])

    useEffect(function () {
        (async function () {
            const allAbductions = await abductionsAPI.getAll()
            setAbductions(allAbductions)
        })()
    }, [])
    
    const abductionsList = abductions.map((abduction, idx) => )

    return (
        <>
            <div>{abductionsList}</div>
        </>
    )
}