import { useRecoilCallback } from 'recoil'
import { userState } from './state'
import { userMock } from '../../mock/user'

type Actions = {
  useSetUser: () => (userid: string) => void
}

export const userActions: Actions = {
  // Userを変更
  useSetUser: () => {
    return useRecoilCallback(({ set }) => (userid: string) => {
      set(userState, (prev) => {
        return {
          user: {
            ...prev.user,
            ...userMock,
            id: userid,
          },
        }
      })
    }, [])
  }
}