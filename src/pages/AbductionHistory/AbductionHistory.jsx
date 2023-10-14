import {useEffect, useState} from "react";
import AbductionCard from "../../components/AbductionCard/AbductionCard";
import * as abductionsAPI from "../../utilities/abductions-api"

export default function AbductionHistory() {
    const [abductions, setAbductions] = useState([])

    useEffect(function () {
        (async function () {
            const allAbductions = await abductionsAPI.getAll()
            setAbductions(allAbductions)
        })()
    }, [])
    
    const abductionsList = abductions.map((abduction, idx) => <AbductionCard key={idx} abduction={abduction} />)

    return (
        <>
            <div>{abductionsList}</div>
        </>
    )
}