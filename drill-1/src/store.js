import { createStore } from 'redux';

import guestList_reducer from './redux/guestList';

export default createStore(guestList_reducer);