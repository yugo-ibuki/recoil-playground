import {atom, useSetRecoilState} from 'recoil';
import {useState} from 'react';

const namesState = atom({
  key: 'namesState',
  default: ['Ella', 'Chris', 'Paul']
});

function FormContent({setNamesState}) {
  const [name, setName] = useState('');

  return (
    <>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setNamesState(names => [...names, name])}>Add Name</button>
    </>
  )}

// このコンポーネントはマウント時に1回レンダリングされます
function Form() {
  const setNamesState = useSetRecoilState(namesState);

  return <FormContent setNamesState={setNamesState} />;
}

export default Form;