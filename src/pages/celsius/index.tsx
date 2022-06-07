import { useRecoilState } from 'recoil'
import { tempFahrenheit } from '@recoil/celsius/atom'
import { tempCelsius } from '@recoil/celsius/selector'
import { Button } from '@chakra-ui/react'

const Celsius = () => {
  const [tempF, setTempF] = useRecoilState(tempFahrenheit)
  const [tempC, setTempC] = useRecoilState(tempCelsius)

  const addTenCelsius = () => setTempC(tempC + 10)
  const addTenFahrenheit = () => setTempF(tempF + 10)

  return (
    <div>
      Temp (Celsius): {tempC}
      <br />
      Temp (Fahrenheit): {tempF}
      <br />
      <Button onClick={addTenCelsius}>Add 10 Celsius</Button>
      <br />
      <Button onClick={addTenFahrenheit}>Add 10 Fahrenheit</Button>
    </div>
  )
}

export default Celsius
