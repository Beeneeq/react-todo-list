import React, { useReducer, createContext, useContext, useRef } from 'react';

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodosState = Todo[];

const todos: TodosState = [
    {
        id: 1,
        text: '디자인 하기',
        done: true
    },
    {
        id: 2,
        text: '컴포넌트 만들기',
        done: true
    },
    {
        id: 3,
        text: '기능 완성하기',
        done: false
    },
];

function todoReducer(state: Array<any>, action: any) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done} : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`); 
    }
}

const TodoStateContext: any = createContext('');
const TodoDispatchContext: any = createContext('');
const TodoNextIdContext: any = createContext('');

export function TodoProvider({ children }: any) {
    const [state, dispatch] = useReducer(todoReducer, todos);
    const nextId = useRef(4);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

export function useTodoState() {
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error('Cannao find TodoProvider');
    }
    return context;
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if (!context) {
      throw new Error('Cannot find TodoProvider');
    }
    return context;
  }
  
  export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if (!context) {
      throw new Error('Cannot find TodoProvider');
    }
    return context;
  }