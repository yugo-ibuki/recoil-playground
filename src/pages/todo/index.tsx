import type { ChangeEvent, FC } from 'react'
import { Box, Button, Input } from '@chakra-ui/react'
import { todoActions } from '@recoil/todo/todoActions'
import { todoSelectors } from '@recoil/todo/todoSelector'
import { useState } from 'react'

const Todo: FC = () => {
  const [input, setInput] = useState('')
  const addTodo = todoActions.useAddTodoItem()

  const onClick = () => {

    // setInput(inputRef.current)
    const result = addTodo(input)
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
        <Input onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} />
        <Button onClick={onClick}>ADD</Button>
      </Box>

      <div>
        {todoSelectors.useTodos().map((todo, i) => {
          return (
            <Box key={i} sx={{ margin: '0 0 10px 0', borderBottom: '1px solid #333' }}>
              <p>id: {todo.id}</p>
              <p>label: {todo.label}</p>
            </Box>
          )
        })}
      </div>
    </div>
  )
}

export default Todo
