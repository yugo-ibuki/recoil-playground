import type { FC } from 'react'
import { userSelectors } from '@recoil/user/selector'

export const User: FC = () => {
  const user = userSelectors.useGetUser()
  return (
    <div>
      <p>現在のユーザ: </p>
      <ul>
        <li>id: {user.id}</li>
        <li>name: {user.name}</li>
        <li>age: {user.age}</li>
        <li>gender: {user.gender}</li>
        <li>word: {user.word}</li>
      </ul>
    </div>
  )
}