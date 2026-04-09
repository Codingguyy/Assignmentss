import {create} from 'zustand'
interface assign{
    id:number,
    avatar:string,
    name:string
}
interface cratedby{
    name:string,
    email:string,
    avatar:string
}
interface tickets{
    id:number,
    title:string,
    description:string,
    status:string,
    priority:string,
    type:string,
    createdBy:cratedby,
    messagesCount:number,
    attachmentsCount:number,
    assignees:assign[],
    createdAt:Date,
}
export type ticketlist={
    ticket:tickets[],
    settickets:(value:tickets[])=>void,
    setinditicket:(value:tickets)=>void
}
export type ticketindi={
    ticket:tickets,
    setticket:(value:tickets)=>void
}
export type value={
    valuee:string,
    setvlue:(value:string)=>void
}
export const Ticketss=create<ticketlist>((set)=>({
    ticket:[],
    settickets:(value)=>set((v)=>({ticket:[...v.ticket,...value]})),
    setinditicket:(value)=>set((v)=>({ticket:[...v.ticket,value]}))
}))
export const Ticketindi=create<ticketindi>((set)=>({
    ticket:{id:0,title:"",description:"",status:"",priority:"",type:"",messagesCount:0,attachmentsCount:0,assignees:[{id:0,avatar:"",name:""}],createdAt:new Date,createdBy:{name:"",email:"",avatar:""}},
    setticket:(value)=>set((v)=>({ticket:value}))
}))
export const Textareavalue=create<value>((set)=>({
    valuee:"",
    setvlue:(value)=>set(({valuee:value}))
}))