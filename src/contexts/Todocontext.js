import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {},
    updateTodo: (id,todo) => {}
})


export const useTodo = () => useContext(TodoContext)

export const Todoprovider = TodoContext.Provider 