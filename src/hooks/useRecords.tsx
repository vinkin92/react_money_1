import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';



type RecordItem = {
    tagIds:number[]
    note:string
    category:'+' | '-'
    amount:number
    createdAt:string // ISO 8601 時間格式
}
type newRecordItem = Omit<RecordItem, 'createdAt'>
// Omit 表示不要某個屬性，如果多個屬性，則使用 | 分離，如 'q' | 'a'
// type RecordItem = {
//     tagIds:number[]
//     note:string
//     category:'+' | '-'
//     amount:number
// }



export const useRecords = () =>{
    const [records,setRecords] = useState<RecordItem[]>([])
    const addRecord = (newRecord:newRecordItem) =>{
        const record = {...newRecord,createdAt:(new Date()).toISOString()}
        setRecords([...records,record])
    }
    useEffect(()=>{
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
    },[])
    useUpdate(()=>{
        window.localStorage.setItem('records',JSON.stringify(records))
    },[records])
    return {records,addRecord}
}