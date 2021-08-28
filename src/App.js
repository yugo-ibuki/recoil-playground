import React from 'react'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import Counter from "./components/Counter";
import SyncSelector from './components/SyncSelector';
import NameDisplay from "./components/UseRecoiValue";
import Form from './components/UseRecoilSetValue';
import DebugObserver from "./debug/Debounce";
import TimeTravelObserver from "./debug/snapshot";
import ElementListItem from "./components/atomFamily";
import SelectorFamilies from "./components/selecotorFamily";
import './index.css';

function App() {
  return (
    <RecoilRoot>
      <DebugObserver />
      <div className="App">
        <div className="block">
          <h2>単純なカウンター</h2>
          <Counter />
        </div>
        <div className="block">
          <h2>Selectorを用いたSyncSelector</h2>
          <SyncSelector />
        </div>
        <div className="block">
          <h2>useRecoilValueを用いたコンポーネント</h2>
          <p>atomやselectorの値を取得するhooks</p>
          <NameDisplay />
        </div>
        <div className="block">
          <h2>useRecoilSetValueを用いたコンポーネント</h2>
          <Form />
        </div>
        <div className="block">
          <h2>atomFamilyを用いたコンポーネント</h2>
          <ElementListItem />
        </div>
        <div className="block">
          <h2>selectorFamilyを用いたコンポーネント</h2>
          <SelectorFamilies />
        </div>
      </div>
      {/*<TimeTravelObserver />*/}
    </RecoilRoot>
  );
}

export default App;
