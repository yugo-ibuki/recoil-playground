import type {FC} from 'react'
import { Box, Button } from '@chakra-ui/react'
import { todoActions } from '@recoil/todo/todoActions'
import { todoSelectors } from '@recoil/todo/todoSelector'

const Todo: FC = () => {
  const addTodo = todoActions.useAddTodoItem()

  const onClick = () => {
    const result = addTodo('aa')
    console.log(result)
  }

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <Button onClick={onClick}>ADD</Button>
      </Box>

      <div>
        {todoSelectors.useTodos().map((todo, i) => {
          return (
            <div key={i}>
              id: {todo.id}
              label: {todo.label}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Todo
