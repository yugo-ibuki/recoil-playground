import type { WordState } from './state'
import { wordState } from './state'
import { RecoilSelectorKeys } from '@recoil/key'
import { selector, useRecoilValue } from 'recoil'

type WordSelectors = {
  useGetWord: () => WordState
}

const wordSelector = selector<WordState>({
  key: RecoilSelectorKeys.WORD_INFO,
  get: ({ get }) => get(wordState)
})

export const wordSelectors: WordSelectors = {
  useGetWord: () => useRecoilValue(wordSelector),
}
