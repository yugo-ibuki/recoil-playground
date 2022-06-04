import { useRecoilCallback } from 'recoil'
import { wordState } from '@recoil/word/state'

type Actions = {
    useSetWord: () => (word: string) => void;
}

export const wordActions: Actions = {
  useSetWord: () =>
    useRecoilCallback(({ set }) => (word: string) => {
      set(wordState, () => {
        return {
          word: word,
        }
      });
    }, []),
}
