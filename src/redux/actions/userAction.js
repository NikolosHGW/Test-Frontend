import { GET_USER, GET_USER_ERROR, GET_USER_LOADING } from "../constants/constants";

export function getUserLoadingAction() {
  return {type: GET_USER_LOADING};
}
export function getUserAction(payload) {
  return {type: GET_USER, payload};
}
export function getUserErrorAction(payload) {
  return {type: GET_USER_ERROR, payload};
}
