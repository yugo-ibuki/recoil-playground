import {atom, selector, useRecoilTransactionObserver_UNSTABLE} from 'recoil'

function DebugObserver() {
  const namesState = atom({
    key: 'namesState',
    default: ['', 'Ella', 'Chris', '', 'Paul'],
  });

  const filteredNamesState = selector({
    key: 'filteredNamesState',
    get: ({get}) => get(namesState).filter((str) => str !== ''),
  });

  useRecoilTransactionObserver_UNSTABLE(({snapshot}) => {
    window.myDebugState = {
      a: snapshot.getLoadable(namesState).contents,
      b: snapshot.getLoadable(filteredNamesState).contents,
    };
  });
  return null;
}

export default DebugObserver;