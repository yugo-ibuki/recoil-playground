import type { User } from './state'
import { userState } from './state'
import { selector, useRecoilValue } from 'recoil'
import { RecoilSelectorKeys } from '../key'

type UserSelectors = {
  useGetUser: () => User
}

// Userを読み出す
const userSelector = selector<User>({
  key: RecoilSelectorKeys.USER_INFO,
  get: ({ get }) => get(userState).user
})

export const userSelectors: UserSelectors = {
  useGetUser: () => useRecoilValue(userSelector),
}