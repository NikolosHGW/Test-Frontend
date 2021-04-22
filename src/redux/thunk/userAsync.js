import { getUserAction, getUserErrorAction, getUserLoadingAction } from '../actions/userAction';
import avatar from '../../images/avatar.svg';

export default function getUser() {
  return async function(dispatch) {
    try {
      dispatch(getUserLoadingAction());
      const res = await fetch('https://jsonplaceholder.typicode.com/photos?id=7');
      const user = await res.json();
      dispatch(getUserAction(user));
    }
    catch {
      dispatch(getUserErrorAction(avatar));
    }
  }
}
