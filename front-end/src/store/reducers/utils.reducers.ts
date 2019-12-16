import { SET_CONNEXION_ERROR } from '../constants/actionTypes.constants';


export const connexionError = (state : boolean = false, action : any) => {
    switch (action.type) {
        case SET_CONNEXION_ERROR:
            return true;
        default:
            return state;
    }
}