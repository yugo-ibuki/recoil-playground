import type { FC } from 'react'
import { todoSelectors } from '@recoil/todo/selector'
import { Box } from '@chakra-ui/react'

export const TodoList: FC = () => {
  const todos = todoSelectors.useTodos()
  return (
    <div>
      {
        todos.map((todo, i) =>
          <Box key={i} sx={{ margin: '0 0 10px 0', borderBottom: '1px solid #333' }}>
            <p>id: {todo.id}</p>
            <p>label: {todo.label}</p>
          </Box>
        )
      }
    </div>
  )
}