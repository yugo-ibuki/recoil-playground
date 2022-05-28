import { atom } from 'recoil'
import { RecoilAtomKeys } from './key'

export type TodoItem = {
  id: string
  label: string
}

type TodoState = {
  todos: TodoItem[]
}

export const todoState = atom<TodoState>({
  key: RecoilAtomKeys.TODO_STATE,
  default: {
    todos: []
  }
})
