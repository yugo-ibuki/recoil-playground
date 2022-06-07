import { atom } from 'recoil'
import { RecoilAtomKeys } from '@recoil/key'

export type TempFahrenheitState = number

export const tempFahrenheit = atom<TempFahrenheitState>({
  key: RecoilAtomKeys.TEMP_FAHRENHEIT,
  default: 32,
})
