const initialState = {
  guests: ['Tony Stark', 'Steve Rodgers', ' Nick Fury', 'Natasha Romanova', 'Clint Barton', 'Bruce Banner', 'Wanda Maximoff'],
};

const ADD_GUEST = "ADD_GUEST";
const REMOVE_GUEST = "REMOVE_GUEST";


export function addGuest(guest) {
  return {
    type: ADD_GUEST,
    payload: guest
  }
}

export function removeGuest(i) {
  return {
    type: REMOVE_GUEST,
    payload: i
  }
}

export default function reducer(state = initialState, action) {
  console.log(action);
  switch(action.type){
    case ADD_GUEST:
      var newList= [...state.guests, action.payload ];
      console.log(newList)
      return {
        guests: newList,
      };
    case REMOVE_GUEST:
      var newList= state.guests.filter((guests, i) => i !== action.payload);
      console.log(newList)
      return {
        guests: newList
      };
    default:
      return state;
  }
    
}
