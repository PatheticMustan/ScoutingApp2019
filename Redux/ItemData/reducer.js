import { SET_VALUE } from "./action.js";

function itemDataReducer(state={users: []}, action){
    switch(action.type) {
        case ADD_USER:
          return Object.assign({}, state, 
              {
                users: [...state.users, action.user]
               }); 
         default: 
           return state;
     }
}

export default userDataReducer;