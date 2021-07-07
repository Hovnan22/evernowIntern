import { LOGIN } from "./types";

const initalState = {
    isLogedIn: false,
    ddd: 'llll',
    aaaa: 'pppp'
};

export default  (state = initalState,action) => {
    switch(action.type){
        case LOGIN: 
            return {...state,isLogedIn: action.type }
        default: {
            console.log(initalState,'initalState')
            return state;
        }
        }
    
}