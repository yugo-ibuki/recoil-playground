import {useRecoilSnapshot, useGotoRecoilSnapshot} from "recoil";
import {useEffect, useState} from 'react';

function TimeTravelObserver() {
  const [snapshots, setSnapshots] = useState([]);

  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.log(snapshots)
    if (snapshots.every(s => s.getID() !== snapshot.getID())) {
      setSnapshots([...snapshots, snapshot]);
    }
  }, [snapshot]);

  const gotoSnapshot = useGotoRecoilSnapshot();

  return (
    <ol>
      {snapshots.map((snapshot, i) => (
        <li key={i}>
          Snapshot {i}
          <button onClick={() => gotoSnapshot(snapshot)}>
            Restore
          </button>
        </li>
      ))}
    </ol>
  );
}

export default TimeTravelObserver;