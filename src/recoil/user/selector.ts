import type { User } from './state'
import { userState } from './state'
import { selector, useRecoilValue } from 'recoil'
import { RecoilSelectorKeys } from '../key'
import { WordState, wordState } from '@recoil/word/state'

type UserWithWord = User & WordState

type UserSelectors = {
  useGetUser: () => UserWithWord
}

// Userを読み出す
const userSelector = selector<UserWithWord>({
  key: RecoilSelectorKeys.USER_INFO,
  get: ({ get }) => {
    const user = get(userState).user
    const word = get(wordState).word
    return {
      ...user,
      word
    }
  }
})

export const userSelectors: UserSelectors = {
  useGetUser: () => useRecoilValue(userSelector),
}