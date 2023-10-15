import sendRequest from "./send-request";

const BASE_URL = "/api/abductions";
export function getAll () {
    return sendRequest(BASE_URL)
}
export function getAbduction (id) {
    return sendRequest(`${BASE_URL}/${id}`)
}
export function createAbductions (abduction) {
    return sendRequest(BASE_URL, "POST", abduction)
}
export function deleteAbduction(abductionId) {
    return sendRequest(`${BASE_URL}/${abductionId}`, "DELETE")
}
export function editAbductions(abduction, id) {
    return sendRequest(`${BASE_URL}/${id}`, "POST", abduction)
}