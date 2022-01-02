import {ACTIONS} from "./App"

export default function TopOperationButton({dispatch,operation}){
    return ( <button className="top" onClick = {()=>dispatch({type: ACTIONS.PLUSMINUS, payload:{operation}})}> {operation} </button> )
}