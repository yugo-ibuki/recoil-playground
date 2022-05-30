import type { NextPage } from 'next'
import type { ChangeEvent} from 'react'
import { useState } from 'react'
import { todoActions } from '@recoil/todo/actions'
import { Box, Button, Input as CInput } from '@chakra-ui/react'
import { Input } from '@components/Input'
import { userActions } from '@recoil/user/actions'
import { User } from '@components/User'
import { TodoList } from '@components/TodoList'

const Home: NextPage = () => {
  const [input, setInput] = useState('')
  const [input2, setInput2] = useState('')
  const addTodo = todoActions.useAddTodoItem()
  const setUser = userActions.useSetUser()

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <Input setText={() => setInput} />
        <Button onClick={() => addTodo(input)}>ADD</Button>
      </Box>

      <div>
        <TodoList />
      </div>

      <Box sx={{ display: 'block', margin: '40px 0', border: '1px solid #333' }} />

      <Box>
        <div className="flex gap-x-5">
          <CInput placeholder="input user id" onChange={(e: ChangeEvent<HTMLInputElement>) => setInput2(e.target.value)} />
          <Button onClick={() => setUser(input2)}>ユーザセット</Button>
        </div>
        <User />
      </Box>
    </div>
  )
}

export default Home
