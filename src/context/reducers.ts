type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
      type: Key
    }
    : {
      type: Key
      payload: M[Key]
    }
}

export enum Types {
  Create = 'CREATE_TODO',
  Update = 'UPDATE_TODO',
  Finish = 'FINISH_TODO',
  Delete = 'DELETE_TODO',
  Relist = 'RELIST_TODO'
}

export type TodoType = {
  id: string
  title: string
  task: string
  state: 'todo' | 'doing' | 'finished'
  color: { red: number, green: number, blue: number }
}

type TodoPayload = {
  [Types.Create]: {
    id: string
    title: string
    task: string
    state: 'todo' | 'doing' | 'finished'
    color: { red: number, green: number, blue: number }
  }
  [Types.Finish]: {
    id: string
  }
  [Types.Delete]: {
    id: string
  }
  [Types.Update]: {
    id: string
    title: string
    task: string
    state: 'todo' | 'doing' | 'finished'
    color: { red: number, green: number, blue: number }
  }
  [Types.Relist]: TodoType[]
}

export type TodoActions = ActionMap<TodoPayload>[keyof ActionMap<
  TodoPayload
  >]

export const todoReducer = (
  state: TodoType[],
  action: TodoActions
) => {
  switch (action.type) {
    case Types.Create:
      // fetch('..//.')
      return [...state, { ... action.payload}];
    case Types.Update:
      const s = [...state]
      const index = s.findIndex(item => item.id === action.payload.id)
      // s[index].title = [...action.payload.title].reverse().join('')
      s[index].title = action.payload.title
      s[index].task = action.payload.task
      return [...s]
    case Types.Finish:
      return [...state.map(todo => {
        let currentState = todo.state
        if (todo.id === action.payload.id) {
          switch (todo.state) {
            case 'todo':
              currentState = 'doing'
              break
            case 'doing':
              currentState = 'finished'
              break
            case 'finished':
              currentState = 'todo'
              break
          }
        }
        return {
          ...todo,
          state: currentState
        }
      })]
    case Types.Delete:
      const id = action.payload.id;

      const arr = [1, 2, 3];
      const result = arr.reduce((a, b) => {
        return a + b;
      }, 'str');

      const tmpList = state.filter(item => {
        return item.id !== id;
      });
      // Your implementation
      return tmpList;
    case Types.Relist:
      return [...action.payload]
    default:
      return state
  }
}
