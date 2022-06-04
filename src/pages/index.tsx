import type { NextPage } from 'next'
import type { ChangeEvent} from 'react'
import { useState } from 'react'
import { todoActions } from '@recoil/todo/actions'
import { Box, Button, Input as CInput } from '@chakra-ui/react'
import { Input } from '@components/Input'
import { userActions } from '@recoil/user/actions'
import { wordActions } from '@recoil/word/actions'
import { User } from '@components/User'
import { TodoList } from '@components/TodoList'
import { wordSelectors } from '@recoil/word/selector'

const Home: NextPage = () => {
  const [input, setInput] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')
  const addTodo = todoActions.useAddTodoItem()
  const setUser = userActions.useSetUser()
  const setWord = wordActions.useSetWord()

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

      <Box sx={{
        margin: '40px 0',
      }}>
        <div className="flex gap-x-5">
          <CInput placeholder="input user id" onChange={(e: ChangeEvent<HTMLInputElement>) => setInput2(e.target.value)} />
          <Button onClick={() => setUser(input2)}>ユーザセット</Button>
        </div>
        <User />
      </Box>

      <hr/>

      <Box sx={{
        margin: '40px 0',
      }}>
        <div className="flex gap-x-5">
          <CInput onChange={(e: ChangeEvent<HTMLInputElement>) => setInput3(e.target.value)} />
          <Button onClick={() => setWord(input3)}>ワードセット</Button>
        </div>
        <div>
          現在のワードは以下です:
          <p>{wordSelectors.useGetWord().word}</p>
        </div>
      </Box>
    </div>
  )
}

export default Home
