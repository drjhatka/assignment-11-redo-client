import { useEffect } from "react"


export const ChangeTitle=(title)=>{
    useEffect(()=>{
        document.title=title
    },[title])
}