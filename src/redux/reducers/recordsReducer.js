import { GET_RECORDS, DELETE_RECORDS } from '../constants/constants';

const initialRecordsState = {
  records: []
}

export default function recordsReducer(state = initialRecordsState, action) {
    switch(action.type) {
      case GET_RECORDS:
        return {...state, records: [...state.records, ...action.payload]};
      case DELETE_RECORDS:
        const newRecords = [...state.records];
        newRecords.splice(action.payload, 1);
        return {...state, records: newRecords};
      default:
        return state;
    }
}
