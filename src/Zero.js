import { ACTIONS } from "./App"

export default function Zero({dispatch,digit}){
    return ( <button className="spanTwo" onClick = {()=>dispatch({type: ACTIONS.ADD_DIGIT, payload:{digit}})}> {digit} </button> )
}