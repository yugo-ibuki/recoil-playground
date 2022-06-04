import { atom } from 'recoil'
import { RecoilAtomKeys } from '@recoil/key'

export type WordState = {
  word: string
}

export const wordState = atom<WordState>({
  key: RecoilAtomKeys.WORD_STATE,
  default: {
    word: ''
  }
})
