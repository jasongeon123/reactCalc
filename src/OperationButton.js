import {ACTIONS} from "./App"

export default function OperationButton({dispatch,operation}){
    return ( <button style={{backgroundColor: "#FF9500"}} onClick = {()=>dispatch({type: ACTIONS.CHOOSE_OPERATION, payload:{operation}})}> {operation} </button> )
}