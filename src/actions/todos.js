const initialState = [];
/*
 * action types
 */

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

/*
 * action creators
 */
let nextTodoId = 0;

export function addTodo(text) {
  return { type: ADD_TODO, id: nextTodoId++, text };
}

export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
      );
    default:
      return state;
  }
}
