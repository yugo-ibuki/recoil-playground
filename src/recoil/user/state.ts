import { atom } from 'recoil'
import { RecoilAtomKeys } from '../key'

export type User = {
  id: string
  name: string
  age: number
  gender: string
}

type UsersState = {
  user: User
}

export const userState = atom<UsersState>({
  key: RecoilAtomKeys.USER_STATE,
  default: {
    user: {
      id: 'default',
      name: 'default',
      age: 0,
      gender: 'default'
    }
  }
})
