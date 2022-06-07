import { selector } from 'recoil'
import { tempFahrenheit, TempFahrenheitState } from '@recoil/celsius/atom'
import { RecoilSelectorKeys } from '@recoil/key'

export const tempCelsius = selector<TempFahrenheitState>({
  key: RecoilSelectorKeys.TEMP_CELSIUS,
  get: ({get}) => ((get(tempFahrenheit) - 32) * 5) / 9,
  set: ({set, get}, newValue) => set(tempFahrenheit, () => {
    if (typeof newValue != 'number') return get(tempFahrenheit)
    return (newValue * 9) / 5 + 32
  }),
})