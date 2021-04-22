import fakeData from '../../data/records.json';
import { getRecordsAction } from '../actions/recordsAction';

export default function getRecords() {
  return function(dispatch) {
    dispatch(getRecordsAction(fakeData));
  }
}
