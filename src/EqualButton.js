import {ACTIONS} from "./App"

export default function EqualButton({dispatch,operation}){
    return ( <button className="side" onClick = {()=>dispatch({type: ACTIONS.EVALUATE , payload:{operation}})}> {operation} </button> )
}