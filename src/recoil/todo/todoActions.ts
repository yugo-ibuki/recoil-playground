import { useCallback } from 'react'
import { useRecoilCallback, useSetRecoilState } from 'recoil'
import { todoState } from './todoState'
import type { TodoItem } from './todoState'

type TodoActions = {
  useAddTodoItem: () => (label: string) => void
  // 同じ名前でエラーが出るので、2を付与しています。
  useAddTodoItem2: () => (label: string) => void
}

export const todoActions: TodoActions = {
  // Todoを追加する
  useAddTodoItem: () =>
    useRecoilCallback(({ set }) => (label: string) => {
      set(todoState, (prev) => {
        const newItem: TodoItem = {
          id: '1',
          label
        }
        return {
          ...prev,
          todos: [...prev.todos, newItem]
        }
      })
    }, []),

  // useSetRecoilStateを用いる場合
  // 同じ名前でエラーが出るので、2を付与しています。
  useAddTodoItem2: () => {
    const setState = useSetRecoilState(todoState)

    return useCallback(
      (label: string) =>
        setState((prev) => {
          const newItem: TodoItem = {
            id: '1',
            label
          }
          return {
            ...prev,
            todos: [...prev.todos, newItem]
          }
        }),
      []
    )
  }
}