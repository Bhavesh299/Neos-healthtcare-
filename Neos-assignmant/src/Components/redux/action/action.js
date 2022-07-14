import { actionType } from "../actiontype/actiontype"

export const addNote=(payload)=>{
    // console.log(payload)
    return {
        type:actionType.ADD_NOTES,
        payload,
    }
}
export const deleteNote=(payload)=>{
    return {
        type:actionType.DELETE_NOTES,
        payload,
    }
}
export const adddeletenotes=(payload)=>{
    // console.log(payload)
    return {
        type:actionType.ADD_DELETE_NOTES,
        payload,
    }
}