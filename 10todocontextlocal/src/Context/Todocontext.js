import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Todo msgg",
            completed: false,
        },
    ],
    addtodo:(todo)=>{},
    updatedTodo:(id,todo)=>{},
    deletetodo:(id)=>{},
    toogleComplete:(id)=>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider