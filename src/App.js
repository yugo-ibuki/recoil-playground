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
import './index.css';

function App() {
  return (
    <RecoilRoot>
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
      </div>
    </RecoilRoot>
  );
}

export default App;
