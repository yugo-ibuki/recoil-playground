import type { TodoItem} from './todoState'
import { todoState } from './todoState'
import { selector, selectorFamily, useRecoilValue } from 'recoil'
import { RecoilSelectorKeys } from './key'

type TodoSelectors = {
  useTodos: () => TodoItem[]
  useTodoItem: (id: string) => TodoItem | undefined
}

// すべてのTodoを読み出す
const todosSelector = selector<TodoItem[]>({
  key: RecoilSelectorKeys.TODO_TODOS,
  get: ({ get }) => get(todoState).todos
})

// IDで指定したTodoを読み出す
const todoItemSelector = selectorFamily<TodoItem | undefined, string>({
  key: RecoilSelectorKeys.TODO_TODO_ITEM,
  get: (id) => ({ get }) => {
    const todos = get(todoState).todos
    return todos.find((v) => v.id === id)
  }
})

export const todoSelectors: TodoSelectors = {
  useTodos: () => useRecoilValue(todosSelector),
  useTodoItem: (id: string) => useRecoilValue(todoItemSelector(id))
}