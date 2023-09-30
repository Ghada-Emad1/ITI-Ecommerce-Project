import { useEffect, useState } from "react"

export const useLocalStorage=(key,initalValue)=>{
    const [Value,setValue]=useState(()=>{
        const jsonValue=localStorage.getItem(key);
        if(jsonValue!==null)return JSON.parse(jsonValue);
        if(typeof initalValue ==='function'){
            return initalValue();
        }else{
            return initalValue;
        }
    })
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(Value))
    },[key,Value])
    return [Value,setValue];
}