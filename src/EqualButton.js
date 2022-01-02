import {ACTIONS} from "./App"

export default function EqualButton({dispatch,operation}){
    return ( <button style={{backgroundColor: "#ff9500"}} onClick = {()=>dispatch({type: ACTIONS.EVALUATE , payload:{operation}})}> {operation} </button> )
}