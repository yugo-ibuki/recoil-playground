import type { FC } from 'react'
import { Input as CInput } from '@chakra-ui/react'

type InputProps = {
  label: string
  onChange: () => void
}

export const Input: FC<InputProps> = ({
  label
}) => {
  return (
    <CInput value={label} />
  )
}