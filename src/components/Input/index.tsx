import type { FC } from 'react'
import type { ChangeEvent } from 'react'
import { Input as CInput } from '@chakra-ui/react'

type InputProps = {
  setText: (e: string) => void
}

export const Input: FC<InputProps> = ({ setText }) => {
  return (
    <CInput
      placeholder="input user id"
      onChange={
        (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)
      }
    />
  )
}