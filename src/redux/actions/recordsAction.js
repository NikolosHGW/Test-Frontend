import { GET_RECORDS, DELETE_RECORDS } from "../constants/constants";

export function getRecordsAction(payload) {
    return {type: GET_RECORDS, payload};
}
export function deleteRecordsAction(payload) {
    return {type: DELETE_RECORDS, payload};
}
